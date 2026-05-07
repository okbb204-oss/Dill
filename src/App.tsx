import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TestPlatform from './pages/Test';
import CraftsDir from './pages/Crafts';
import CraftSingle from './pages/CraftDetail';
import CompareCrafts from './pages/CompareCrafts';
import UserPortfolio from './pages/UserPortfolio';
import LearnHome from './pages/LearnHome';
import CourseOverview from './pages/CourseOverview';
import LessonDetail from './pages/LessonDetail';
import Profile from './pages/Profile';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import CourseCompletion from './pages/CourseCompletion';
import TrainingCenters from './pages/TrainingCenters';
import TrainingModes from './pages/TrainingModes';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { AuthProvider } from './contexts/AuthContext';
import HirfaChatbot from './components/chat/HirfaChatbot';

function AppContent() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) {
      localStorage.setItem('referral_ref', ref);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-400">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<TestPlatform />} />
          <Route path="/crafts" element={<CraftsDir />} />
          <Route path="/crafts/compare" element={<CompareCrafts />} />
          <Route path="/craft/:id" element={<CraftSingle />} />
          <Route path="/portfolio/:userId" element={<UserPortfolio />} />
          <Route path="/centers" element={<TrainingCenters />} />
          <Route path="/training-modes" element={<TrainingModes />} />
          <Route path="/learn" element={<LearnHome />} />
          <Route path="/learn/:craftId" element={<CourseOverview />} />
          <Route path="/learn/:craftId/lesson/:lessonId" element={<LessonDetail />} />
          <Route path="/learn/:craftId/finished" element={<CourseCompletion />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
      <HirfaChatbot />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProgressProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </ProgressProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

