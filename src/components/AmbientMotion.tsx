import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export const AmbientMotion: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDisabled = () => {
      setDisabled(localStorage.getItem('disable-animations') === 'true');
    };
    const observeTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDisabled();
    observeTheme();
    window.addEventListener('storage', checkDisabled);
    // Simple mutation observer to watch for class changes on html
    const observer = new MutationObserver(observeTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    // Generate particles
    const particleCount = 20;
    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
        newParticles.push({
            id: i,
            x: Math.random() * 100, // percentage
            y: Math.random() * 100, // percentage
            size: Math.random() * 3 + 1, // px
            duration: Math.random() * 20 + 10, // seconds
            delay: Math.random() * 10, // seconds
        })
    }
    setParticles(newParticles);
    return () => {
       window.removeEventListener('storage', checkDisabled);
       observer.disconnect();
    };
  }, []);

  if (disabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-transparent">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full opacity-60 dark:opacity-40"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        backgroundColor: isDark ? '#C9A96E' : '#E5C687',
                        boxShadow: `0 0 ${p.size * 2}px ${isDark ? '#C9A96E' : '#E5C687'}`
                    }}
                    animate={{
                        y: ["0%", "-500%"],
                        x: ["0%", `${Math.random() * 10 - 5}%`],
                        opacity: [0, 0.4, 0]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                    }}
                />
            ))}
        </div>
        <svg width="0" height="0" className="absolute">
           <filter id="zellige-filter">
             <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.03 0" />
           </filter>
        </svg>
        <div 
          className="absolute right-0 bottom-0 w-64 h-64 opacity-5 dark:opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"
          style={{ 
             backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, var(--color-primary) 10px, var(--color-primary) 12px)',
             maskImage: 'radial-gradient(ellipse at bottom right, black 10%, transparent 70%)',
             WebkitMaskImage: 'radial-gradient(ellipse at bottom right, black 10%, transparent 70%)'
          }}
        />
    </div>
  );
};
