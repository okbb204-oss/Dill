import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, User, Chrome, ArrowRight, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const { signInWithGoogle, signUpWithUsername, signInWithUsername, sendPasswordReset } = useAuth();
  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  // Form states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (pass: string) => {
    return pass.length >= 8 && /[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (mode === 'register') {
        if (!validatePassword(password)) {
          setError(isRtl 
            ? '⚠️ كلمة المرور يجب أن تكون 8 أحرف على الأقل، وتحتوي على حرف كبير وصغير ورقم.' 
            : '⚠️ Password must be at least 8 characters, and include uppercase, lowercase, and a number.');
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setError(isRtl ? '⚠️ كلمتا المرور غير متطابقتين.' : '⚠️ Passwords do not match.');
          setLoading(false);
          return;
        }
        await signUpWithUsername(username, password, confirmPassword);
        onClose();
      } else if (mode === 'login') {
        await signInWithUsername(username, password);
        onClose();
      } else if (mode === 'forgot') {
        setError(isRtl ? 'هذه الخاصية غير متوفرة حالياً' : 'This feature is currently unavailable');
        setLoading(false);
        return;
      }
    } catch (err: any) {
      console.error('Auth Error Details:', err);
      // Backend returns string error messages
      const errorMsg = err.message || '';
      
      if (errorMsg.includes('exists')) {
        setError(isRtl ? '⚠️ اسم المستخدم هذا مستخدم بالفعل.' : '⚠️ This username is already taken.');
      } else if (errorMsg.includes('Invalid username or password')) {
        setError(isRtl ? '⚠️ اسم المستخدم أو كلمة المرور غير صحيحة.' : '⚠️ Incorrect username or password.');
      } else if (errorMsg.includes('Too many attempts')) {
         setError(isRtl ? '⚠️ محاولات كثيرة جداً، تم قفل الحساب مؤقتاً للأمان.' : '⚠️ Too many attempts. Account temporarily locked for security.');
      } else {
        setError(isRtl 
          ? `⚠️ حدث خطأ غير متوقع. حاول لاحقاً. (${errorMsg})` 
          : `⚠️ An unexpected error occurred. Try again later. (${errorMsg})`);
      }
    } finally {
      setLoading(false);
    }
  };
  
  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithGoogle();
      onClose();
    } catch (err: any) {
      setError(isRtl ? 'تعذر تسجيل الدخول عبر جوجل حالياً.' : 'Google sign-in failed.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div
        layout
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-md bg-white dark:bg-[#2A2724] rounded-3xl shadow-2xl overflow-hidden border border-[#E5DDD3] dark:border-[#3D3935]"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 left-6 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="p-8 pt-16">
          <div className="space-y-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-[#C67B4B] mx-auto rounded-2xl flex items-center justify-center text-white mb-4 shadow-xl shadow-[#C67B4B]/20" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                 <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold font-heading text-[#1E1C1A] dark:text-white">
                {mode === 'login' && (isRtl ? 'مرحباً بعودتك! 👋' : 'Welcome Back! 👋')}
                {mode === 'register' && (isRtl ? 'بداية رحلتك ✨' : 'Start Your Journey ✨')}
                {mode === 'forgot' && (isRtl ? 'استعادة الوصول 🔑' : 'Recover Access 🔑')}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                {mode === 'login' && (isRtl ? 'سجل دخولك لمتابعة حرفتك' : 'Sign in to continue your craft')}
                {mode === 'register' && (isRtl ? 'أنشئ حساباً سريعاً وابدأ التعلم الآن' : 'Create an account and start learning now')}
                {mode === 'forgot' && (isRtl ? 'أدخل اسم المستخدم لاستعادة الحساب' : 'Enter your username to recover your account')}
              </p>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 rounded-2xl text-sm font-bold flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                {error}
              </motion.div>
            )}

            {success && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900/30 text-green-600 dark:text-green-400 rounded-2xl text-sm font-bold"
              >
                {success}
              </motion.div>
            )}

            <div className="space-y-4">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  
                  <div className="space-y-2">
                    <div className="relative group">
                      <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#3A7B85] transition-colors" />
                      <input 
                        required
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder={isRtl ? "اسم المستخدم" : "Username"}
                        className="w-full pr-12 pl-4 py-4 bg-[#F9F6F0] dark:bg-[#1E1C1A] border-2 border-transparent focus:border-[#3A7B85] rounded-2xl outline-none transition-all dark:text-white font-medium"
                      />
                    </div>
                    {mode === 'register' && (
                      <p className="text-[10px] text-gray-400 px-4 italic">
                        {isRtl ? '* اختر اسماً فريداً (لا يُستخدم بريد إلكتروني)' : '* Choose a unique name (no email suffix)'}
                      </p>
                    )}
                  </div>

                  {mode !== 'forgot' && (
                    <>
                      <div className="relative group">
                        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#3A7B85] transition-colors" />
                        <input 
                          required
                          type={showPassword ? "text" : "password"} 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder={isRtl ? "كلمة المرور" : "Password"}
                          className="w-full pr-12 pl-12 py-4 bg-[#F9F6F0] dark:bg-[#1E1C1A] border-2 border-transparent focus:border-[#3A7B85] rounded-2xl outline-none transition-all dark:text-white font-medium"
                        />
                        <button 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>

                      {mode === 'register' && (
                        <div className="relative group">
                          <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#3A7B85] transition-colors" />
                          <input 
                            required
                            type={showConfirmPassword ? "text" : "password"} 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder={isRtl ? "تأكيد كلمة المرور" : "Confirm Password"}
                            className="w-full pr-12 pl-12 py-4 bg-[#F9F6F0] dark:bg-[#1E1C1A] border-2 border-transparent focus:border-[#3A7B85] rounded-2xl outline-none transition-all dark:text-white font-medium"
                          />
                          <button 
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {mode === 'login' && (
                  <div className="flex justify-start px-2">
                    <button 
                      type="button"
                      onClick={() => {
                        setMode('forgot');
                        setError(null);
                        setSuccess(null);
                      }}
                      className="text-xs font-bold text-[#3A7B85] hover:underline transition-colors"
                    >
                      {isRtl ? 'نسيت كلمة المرور؟' : 'Forgot Password?'}
                    </button>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-[#C67B4B] hover:bg-[#A3592F] text-white font-bold rounded-2xl shadow-xl shadow-[#C67B4B]/20 transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{isRtl ? 'جاري التحقق...' : 'Verifying...'}</span>
                    </div>
                  ) : (
                    <>
                      <span>
                        {mode === 'login' && (isRtl ? 'دخول' : 'Sign In')}
                        {mode === 'register' && (isRtl ? 'أنشئ حساباً' : 'Create My Account')}
                        {mode === 'forgot' && (isRtl ? 'إرسال طلب الاستعادة' : 'Send Reset Link')}
                      </span>
                      <ArrowRight className={`w-5 h-5 transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="text-center pt-4">
              <button 
                onClick={() => {
                  setMode(mode === 'login' ? 'register' : 'login');
                  setError(null);
                  setSuccess(null);
                  setConfirmPassword('');
                }}
                className="text-sm font-bold text-[#3A7B85] hover:underline px-4 py-2"
              >
                {mode === 'login' 
                  ? (isRtl ? 'ليس لديك حساب؟ سجل الآن' : 'No account? Create one') 
                  : (isRtl ? 'لديك حساب بالفعل؟ سجل دخولك' : 'Already have an account? Sign in')}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
