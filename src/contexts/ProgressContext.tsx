import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs, serverTimestamp, arrayUnion, increment } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from './AuthContext';

export interface ProgressState {
  xp: number;
  completedLessons: string[];
  badges: string[];
  streak: number;
}

interface ProgressContextType {
  progress: ProgressState;
  loading: boolean;
  addXP: (amount: number, source: string, sourceId: string) => Promise<void>;
  markLessonComplete: (lessonId: string, levelId: string, craftId: string) => Promise<void>;
  hasBadge: (badgeId: string) => boolean;
  isLessonCompleted: (lessonId: string) => boolean;
  awardBadge: (badgeId: string, craftId: string) => Promise<void>;
  syncLocalProgress: () => Promise<void>;
}

const defaultState: ProgressState = {
  xp: 0,
  completedLessons: [],
  badges: [],
  streak: 1,
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, profile } = useAuth();
  const [progress, setProgress] = useState<ProgressState>(defaultState);
  const [loading, setLoading] = useState(true);

  // Load initial progress
  useEffect(() => {
    const loadProgress = async () => {
      // Instead of failing with Firebase permission errors (since we use custom Auth now),
      // we'll just fall back to localStorage for progress if it fails.
      if (user) {
        try {
          // Load from Firestore
          const userDocRef = doc(db, 'users', String(user.id));
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            
            // Get completed lessons from subcollection
            const progressRef = collection(db, 'users', String(user.id), 'progress');
            const progressSnap = await getDocs(query(progressRef, where('status', '==', 'completed')));
            const completedLessons = progressSnap.docs.map(doc => doc.data().lessonId);
            
            // Get badges from subcollection
            const badgesRef = collection(db, 'users', String(user.id), 'achievements');
            const badgesSnap = await getDocs(badgesRef);
            const badges = badgesSnap.docs.map(doc => doc.data().badgeId);

            setProgress({
              xp: userData.xp || 0,
              streak: userData.streak || 1,
              completedLessons,
              badges,
            });
            setLoading(false);
            return;
          }
        } catch (e) {
          console.warn('Firebase error, falling back to local progress:', e);
        }
      }
      
      // Fallback: Load from localStorage
      const saved = localStorage.getItem('hirfati_progress');
      if (saved) {
        try {
          setProgress(JSON.parse(saved));
        } catch (e) {
          setProgress(defaultState);
        }
      }
      setLoading(false);
    };

    loadProgress();
  }, [user]);

  // Sync state to localStorage for guests
  useEffect(() => {
    if (!user) {
      localStorage.setItem('hirfati_progress', JSON.stringify(progress));
    } else {
      // User just logged in, try syncing local if any
      const local = localStorage.getItem('hirfati_progress');
      if (local) {
        syncLocalProgress();
      }
    }
  }, [progress, user]);

  const addXP = async (amount: number, source: string, sourceId: string) => {
    if (user) {
      try {
        const userRef = doc(db, 'users', String(user.id));
        const logRef = doc(collection(db, 'users', String(user.id), 'xp_logs'));
        
        await updateDoc(userRef, {
          xp: increment(amount)
        });
        
        await setDoc(logRef, {
          userId: String(user.id),
          amount,
          source,
          sourceId,
          earnedAt: serverTimestamp()
        });
      } catch (e) {
        console.warn('Firebase error ignoring:', e);
      }
    }
    
    setProgress(p => {
      const newProgress = { ...p, xp: p.xp + amount };
      localStorage.setItem('hirfati_progress', JSON.stringify(newProgress));
      return newProgress;
    });
  };

  const awardBadge = async (badgeId: string, craftId: string) => {
    if (progress.badges.includes(badgeId)) return;

    if (user) {
      try {
        const badgeRef = doc(collection(db, 'users', String(user.id), 'achievements'));
        await setDoc(badgeRef, {
          userId: String(user.id),
          badgeId,
          craftId,
          earnedAt: serverTimestamp()
        });
      } catch (e) {}
    }

    setProgress(p => {
      const newProgress = { ...p, badges: [...p.badges, badgeId] };
      localStorage.setItem('hirfati_progress', JSON.stringify(newProgress));
      return newProgress;
    });
  };

  const markLessonComplete = async (lessonId: string, levelId: string, craftId: string) => {
    if (progress.completedLessons.includes(lessonId)) return;

    if (user) {
      try {
        const progressId = `${craftId}_${lessonId}`;
        const progressRef = doc(db, 'users', String(user.id), 'progress', progressId);
        
        await setDoc(progressRef, {
          userId: String(user.id),
          craftId,
          levelId,
          lessonId,
          status: 'completed',
          xpEarned: 20,
          completedAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      } catch (e) {}
      await addXP(20, 'lesson', lessonId);
    } else {
      setProgress(p => {
        const n = { ...p, xp: p.xp + 20 };
        localStorage.setItem('hirfati_progress', JSON.stringify(n));
        return n;
      });
    }

    setProgress(p => {
      const newProgress = {
        ...p,
        completedLessons: [...p.completedLessons, lessonId]
      };
      localStorage.setItem('hirfati_progress', JSON.stringify(newProgress));
      return newProgress;
    });
  };

  const syncLocalProgress = useCallback(async () => {
    if (!user) return;
    
    const local = localStorage.getItem('hirfati_progress');
    if (!local) return;
    
    try {
      const localProgress: ProgressState = JSON.parse(local);
      if (localProgress.xp === 0 && localProgress.completedLessons.length === 0) return;
      
      // Sync XP
      const userRef = doc(db, 'users', String(user.id));
      await updateDoc(userRef, {
        xp: increment(localProgress.xp)
      });
      
      // Sync lessons
      for (const lessonId of localProgress.completedLessons) {
        // Note: In real app we might need craftId/levelId here, 
        // for simplicity we assume we can find them or use placeholders
        const progressId = `synced_${lessonId}`;
        const progressRef = doc(db, 'users', String(user.id), 'progress', progressId);
        await setDoc(progressRef, {
          userId: String(user.id),
          lessonId,
          status: 'completed',
          syncedFromLocal: true,
          completedAt: serverTimestamp()
        }, { merge: true });
      }
      
      // Sync badges
      for (const badgeId of localProgress.badges) {
        const badgeRef = doc(collection(db, 'users', String(user.id), 'achievements'));
        await setDoc(badgeRef, {
          userId: String(user.id),
          badgeId,
          earnedAt: serverTimestamp()
        });
      }
      
      localStorage.removeItem('hirfati_progress');
      
      // Update local state
      setProgress(p => {
         const mergedLessons = Array.from(new Set([...p.completedLessons, ...localProgress.completedLessons]));
         const mergedBadges = Array.from(new Set([...p.badges, ...localProgress.badges]));
         return {
           ...p,
           xp: p.xp + localProgress.xp,
           completedLessons: mergedLessons,
           badges: mergedBadges
         };
      });
      
    } catch (e) {
      console.error('Failed to sync local progress (likely due to missing fallback backend setup)', e);
    }
  }, [user]);

  const hasBadge = (badgeId: string) => progress.badges.includes(badgeId);
  const isLessonCompleted = (lessonId: string) => progress.completedLessons.includes(lessonId);

  return (
    <ProgressContext.Provider value={{ progress, loading, addXP, markLessonComplete, hasBadge, isLessonCompleted, awardBadge, syncLocalProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
