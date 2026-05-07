import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface UserProfile {
  id: string;
  name: string;
  username: string;
  email?: string;
  avatarUrl?: string;
  xp: number;
  streak: number;
  referred_by?: string;
  friends_invited?: number;
  referral_processed?: boolean;
  createdAt: Date;
  lastLogin: Date;
}

interface AuthContextType {
  user: UserProfile | null;
  profile: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signUpWithUsername: (username: string, password: string, confirmPassword: string) => Promise<void>;
  signInWithUsername: (username: string, password: string) => Promise<void>;
  sendVerificationEmail: () => Promise<void>;
  sendPasswordReset: (username: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Invalid token');
      })
      .then(data => {
         const profileData: UserProfile = {
           id: String(data.user.id),
           name: data.user.username,
           username: data.user.username,
           xp: 0,
           streak: 1,
           createdAt: new Date(),
           lastLogin: new Date()
         };
         setUser(profileData);
      })
      .catch(() => {
         localStorage.removeItem('token');
      })
      .finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const loginOrRegister = async (url: string, body: any) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Request failed');
    }
    localStorage.setItem('token', data.token);
    const profileData: UserProfile = {
      id: String(data.user.id),
      name: data.user.username,
      username: data.user.username,
      xp: 0,
      streak: 1,
      createdAt: new Date(),
      lastLogin: new Date()
    };
    setUser(profileData);
  };

  const signUpWithUsername = async (username: string, password: string, confirmPassword: string) => {
    await loginOrRegister('/api/auth/register', { username, password, confirmPassword });
  };

  const signInWithUsername = async (username: string, password: string) => {
    await loginOrRegister('/api/auth/login', { username, password });
  };

  const logout = async () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // Stubs for compatibility
  const signInWithGoogle = async () => { console.warn('Google sign-in disabled'); };
  const sendPasswordReset = async (_username: string) => { throw new Error('Not implemented'); };
  const sendVerificationEmail = async () => {};

  return (
    <AuthContext.Provider value={{ 
      user, 
      profile: user, 
      loading, 
      signInWithGoogle, 
      signUpWithUsername,
      signInWithUsername,
      sendVerificationEmail,
      sendPasswordReset,
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
