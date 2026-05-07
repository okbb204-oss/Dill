import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from './src/server/db'; 

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-123';

const failedAttempts = new Map<string, { count: number, resetAt: number }>();

function rateLimit(req: express.Request, res: express.Response, next: express.NextFunction) {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const record = failedAttempts.get(ip);
  if (record && now < record.resetAt) {
    if (record.count >= 5) {
      res.status(429).json({ error: 'Too many attempts, please try again in 10 minutes.' });
      return;
    }
  }
  next();
}

function recordFailure(ip: string) {
  const now = Date.now();
  const record = failedAttempts.get(ip) || { count: 0, resetAt: now + 10 * 60 * 1000 };
  if (now > record.resetAt) {
    record.count = 1;
    record.resetAt = now + 10 * 60 * 1000;
  } else {
    record.count++;
  }
  failedAttempts.set(ip, record);
}

function clearFailures(ip: string) {
  failedAttempts.delete(ip);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/auth/register', rateLimit, async (req, res) => {
    try {
      const { username, password, confirmPassword } = req.body;
      const ip = req.ip || req.socket.remoteAddress || 'unknown';

      if (!username || !password || !confirmPassword) {
        res.status(400).json({ error: 'All fields are required' });
        return;
      }
      if (username.length < 3) {
        res.status(400).json({ error: 'Username must be at least 3 characters' });
        return;
      }
      if (password !== confirmPassword) {
        res.status(400).json({ error: 'Passwords do not match' });
        return;
      }
      
      const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      if (!pwdRegex.test(password)) {
        res.status(400).json({ error: 'Password does not meet requirements' });
        return;
      }

      // Check if user exists
      const stmtCheck = db.prepare('SELECT id FROM users WHERE username = ?');
      const existingUser = stmtCheck.get(username);
      if (existingUser) {
        res.status(400).json({ error: 'Username already exists' });
        return;
      }

      const password_hash = await bcrypt.hash(password, 10);
      const stmtInsert = db.prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)');
      const info = stmtInsert.run(username, password_hash);

      const userId = info.lastInsertRowid;
      
      const token = jwt.sign({ userId, username }, JWT_SECRET, { expiresIn: '7d' });
      clearFailures(ip); // Success clears failures

      res.json({ token, user: { id: userId, username } });
    } catch (error) {
      console.error('Registration Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/api/auth/login', rateLimit, async (req, res) => {
    try {
      const { username, password } = req.body;
      const ip = req.ip || req.socket.remoteAddress || 'unknown';

      if (!username || !password) {
        res.status(400).json({ error: 'Username and password are required' });
        return;
      }

      const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
      const user = stmt.get(username) as any;

      if (!user) {
        recordFailure(ip);
        res.status(401).json({ error: 'Invalid username or password' });
        return;
      }

      const match = await bcrypt.compare(password, user.password_hash);
      if (!match) {
        recordFailure(ip);
        res.status(401).json({ error: 'Invalid username or password' });
        return;
      }

      const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
      clearFailures(ip);

      res.json({ token, user: { id: user.id, username: user.username } });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/api/auth/me', (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader?.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Missing token' });
        return;
      }

      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      
      res.json({ user: { id: decoded.userId, username: decoded.username } });
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
