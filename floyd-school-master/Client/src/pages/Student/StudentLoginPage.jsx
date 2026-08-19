import { LogOutIcon, CheckCircle, UserPlus, Sparkles, Zap, Brain, Code2, Shield, Star, ArrowRight, Users, Cpu } from 'lucide-react';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../api/axios';
import { PortalContext } from '../../contexts/PortalProvider';
import { useFirebaseAuth } from '../../contexts/FirebaseAuthContext';
import toast from 'react-hot-toast';
import GuestLoginModal from '../../components/auth/GuestLoginModal';

/* ── Floating animated orb ──────────────────────────────── */
const Orb = ({ color, size, x, y, blur, delay }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ width: size, height: size, left: x, top: y,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: `blur(${blur})`, opacity: 0.6 }}
    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
    transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

/* ── Floating feature badge ─────────────────────────────── */
const FloatBadge = ({ icon: Icon, label, color, style, delay }) => (
  <motion.div
    className="absolute flex items-center gap-2 px-3 py-2 rounded-2xl backdrop-blur-sm border shadow-lg"
    style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.2)', ...style }}
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3.5 + delay * 0.5, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    <Icon size={14} style={{ color }} />
    <span className="text-xs font-bold text-white whitespace-nowrap">{label}</span>
  </motion.div>
);

/* ── Stats pill ─────────────────────────────────────────── */
const StatPill = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center px-4 py-2"
  >
    <span className="text-2xl font-black text-white">{value}</span>
    <span className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">{label}</span>
  </motion.div>
);

/* ── Google SVG ─────────────────────────────────────────── */
const GoogleIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

/* ════════════════════════════════════════════════════════ */
const StudentLoginPage = () => {
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';
  const [mode, setMode] = useState(initialMode);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const [showMobileForm, setShowMobileForm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [firebaseUserData, setFirebaseUserData] = useState(null);
  const [showGuestModal, setShowGuestModal] = useState(false);

  const navigate = useNavigate();
  const { updateUser } = useContext(PortalContext);
  const { loginWithGoogle } = useFirebaseAuth();

  useEffect(() => {
    setShowMobileForm(false);
    setError(null);
    setMobileNumber('');
  }, [mode]);

  const handleFirebaseLogin = async () => {
    try {
      setIsSubmitting(true);
      setError(null);
      const firebaseUser = await loginWithGoogle();
      setFirebaseUserData({ uid: firebaseUser.uid, email: firebaseUser.email, name: firebaseUser.displayName, photoURL: firebaseUser.photoURL });
      setShowMobileForm(true);
      toast.success('Please verify your mobile number');
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Authentication failed.';
      setError(msg);
      toast.error(msg);
    } finally { setIsSubmitting(false); }
  };

  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      setError(null);
      if (!mobileNumber || mobileNumber.length < 10) {
        setError('Please enter a valid mobile number');
        toast.error('Please enter a valid mobile number');
        return;
      }
      const res = await api.post('/auth/firebase/callback', { ...firebaseUserData, mobileNumber });
      updateUser(res.data);
      setShowSuccessPopup(true);
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed. Please try again.';
      setError(msg);
      toast.error(msg);
    } finally { setIsSubmitting(false); }
  };

  return (
    <div className="min-h-screen flex overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@700;800;900&display=swap');
        @keyframes shimmer {
          from { background-position: -200% center; }
          to   { background-position:  200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #fff 0%, #f0abfc 40%, #38bdf8 60%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      {/* ── LEFT PANEL ─────────────────────────────────────── */}
      <div
        className="hidden lg:flex lg:w-[52%] relative flex-col justify-between p-12 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 35%, #B854A2 100%)' }}
      >
        <Orb color="#818cf8" size="500px" x="-15%" y="-15%" blur="80px" delay={0} />
        <Orb color="#38bdf8" size="350px" x="55%"  y="50%"  blur="70px" delay={2} />
        <Orb color="#f472b6" size="250px" x="60%"  y="-10%" blur="60px" delay={1} />

        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <FloatBadge icon={Brain}    label="AI & Machine Learning" color="#a78bfa" style={{ top: '22%', left: '6%'  }} delay={0}   />
        <FloatBadge icon={Code2}    label="Web Development"        color="#38bdf8" style={{ top: '38%', left: '55%' }} delay={0.8} />
        <FloatBadge icon={Cpu}      label="IoT & Robotics"         color="#f472b6" style={{ top: '58%', left: '8%'  }} delay={1.5} />
        <FloatBadge icon={Shield}   label="Cybersecurity"          color="#4ade80" style={{ top: '72%', left: '52%' }} delay={2}   />
        <FloatBadge icon={Sparkles} label="NEP 2020 Aligned"       color="#fbbf24" style={{ top: '82%', left: '15%' }} delay={1}   />

        <motion.div className="absolute right-12 top-[30%]"
          animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
          <Star size={22} className="text-yellow-300 opacity-60" />
        </motion.div>

        {/* Top logo */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-xl"
              style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)' }}>F</div>
            <span className="font-black text-white text-xl tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>Floyd School</span>
          </div>
          <div className="text-white/40 text-xs font-bold tracking-widest uppercase">Future-Ready Tech Education</div>
        </div>

        {/* Centre headline */}
        <div className="relative z-10 my-auto py-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Zap size={12} className="text-yellow-300" />
              <span className="text-xs font-bold text-white/80">India's #1 School Tech Partner</span>
            </div>
            <h1 className="text-4xl xl:text-5xl font-black leading-tight mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span className="shimmer-text">Unlock Your</span><br />
              <span className="text-white">Future Today</span>
            </h1>
            <p className="text-white/60 text-base font-medium leading-relaxed max-w-xs">
              Join 1,000+ students building real-world skills in AI, Robotics, Web Dev & more.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex items-center divide-x divide-white/20"
            style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}>
            <StatPill value="1K+"  label="Students"    delay={0.5} />
            <StatPill value="5+"   label="Domains"     delay={0.6} />
            <StatPill value="50+"  label="Schools"     delay={0.7} />
            <StatPill value="100%" label="NEP Aligned" delay={0.8} />
          </motion.div>
        </div>

        {/* Bottom testimonial */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="relative z-10 p-5 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
          <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
          </div>
          <p className="text-white/80 text-sm font-medium leading-relaxed">
            "Floyd School transformed how I think about technology. The AI project I built got me noticed by colleges!"
          </p>
          <div className="mt-3 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs font-black">A</div>
            <div>
              <div className="text-white text-xs font-bold">Aditya Kumar</div>
              <div className="text-white/40 text-[10px]">Class 11, DPS Vasant Kunj</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT PANEL ────────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative bg-white overflow-y-auto">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(184,84,162,0.04) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(56,189,248,0.04) 0%, transparent 60%)' }} />

        <button onClick={() => navigate('/')}
          className="absolute top-6 right-6 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all">
          <LogOutIcon size={12} className="rotate-180" /> Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-[400px]"
        >
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-black text-sm"
              style={{ background: 'linear-gradient(135deg, #312e81, #B854A2)' }}>F</div>
            <span className="font-black text-slate-900 text-lg">Floyd School</span>
          </div>

          {/* Mode toggle */}
          <div className="flex mb-8 p-1 rounded-2xl bg-slate-100 gap-1">
            {['login', 'signup'].map((m) => (
              <button key={m} onClick={() => setMode(m)}
                className="flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
                style={mode === m
                  ? { background: 'linear-gradient(135deg, #312e81, #B854A2)', color: '#fff', boxShadow: '0 4px 12px rgba(184,84,162,0.25)' }
                  : { color: '#64748b', background: 'transparent' }
                }>
                {m === 'login' ? 'Log In' : 'Sign Up'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!showMobileForm ? (
              <motion.div key={`form-${mode}`}
                initial={{ opacity: 0, x: mode === 'signup' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: mode === 'signup' ? -20 : 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-7">
                  <h2 className="text-3xl font-black text-slate-900 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {mode === 'login' ? 'Welcome back' : 'Get started'}
                  </h2>
                  <span className="block text-2xl font-black mb-2"
                    style={{ background: 'linear-gradient(90deg, #312e81, #B854A2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {mode === 'login' ? 'to Floyd School' : 'for free today'}
                  </span>
                  <p className="text-slate-400 text-sm font-medium">
                    {mode === 'login'
                      ? 'Sign in with Google to access your dashboard'
                      : 'Create your account — it only takes 30 seconds'}
                  </p>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />{error}
                  </div>
                )}

                <button onClick={handleFirebaseLogin} disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 disabled:opacity-50 mb-4"
                  style={{ fontSize: '14px' }}>
                  <GoogleIcon />
                  {isSubmitting ? 'Connecting...' : `${mode === 'login' ? 'Sign in' : 'Sign up'} with Google`}
                </button>

                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-slate-100" />
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">or</span>
                  <div className="flex-1 h-px bg-slate-100" />
                </div>

                <button onClick={() => setShowGuestModal(true)}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl text-sm font-semibold border-2 border-dashed border-slate-200 text-slate-500 hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200">
                  <UserPlus size={16} />
                  Continue as Guest
                </button>

                <div className="mt-7 space-y-2.5">
                  {[
                    { text: 'Access all recorded lectures anytime',  color: '#B854A2' },
                    { text: 'Live coding lab & project workspace',   color: '#6366f1' },
                    { text: 'Direct mentor chat & support',          color: '#0ea5e9' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2.5 text-sm text-slate-500">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.color}20` }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                      </div>
                      {item.text}
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-center text-sm text-slate-400">
                  {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
                  <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                    className="font-bold transition-colors" style={{ color: '#B854A2' }}>
                    {mode === 'login' ? 'Sign up free' : 'Log in'}
                  </button>
                </p>
              </motion.div>
            ) : !showSuccessPopup ? (
              <motion.div key="mobile-step"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-slate-900 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>One last step 👋</h2>
                  <p className="text-slate-400 text-sm">Enter your mobile number to complete setup</p>
                </div>

                {firebaseUserData && (
                  <div className="mb-5 flex items-center gap-3 p-3 rounded-2xl"
                    style={{ background: 'rgba(184,84,162,0.06)', border: '1px solid rgba(184,84,162,0.15)' }}>
                    {firebaseUserData.photoURL && <img src={firebaseUserData.photoURL} alt="" className="w-9 h-9 rounded-full" />}
                    <div>
                      <p className="text-sm font-bold text-slate-800">{firebaseUserData.name}</p>
                      <p className="text-xs text-slate-400">{firebaseUserData.email}</p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />{error}
                  </div>
                )}

                <form onSubmit={handleMobileSubmit} className="space-y-4">
                  <div className="flex items-center border rounded-2xl overflow-hidden"
                    style={{ borderColor: 'rgba(148,163,184,0.3)', background: 'rgba(248,250,252,0.8)' }}>
                    <span className="pl-4 pr-2 text-sm font-bold text-slate-400">+91</span>
                    <input type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="flex-1 py-4 pr-4 text-sm font-medium text-slate-800 outline-none bg-transparent placeholder-slate-300"
                      required maxLength={10} />
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-bold text-white transition-all hover:scale-[1.02] disabled:opacity-50"
                    style={{ background: 'linear-gradient(135deg, #312e81, #B854A2)', boxShadow: '0 8px 24px rgba(184,84,162,0.3)' }}>
                    {isSubmitting ? 'Verifying...' : <><span>Continue</span><ArrowRight size={16} /></>}
                  </button>
                </form>
                <button onClick={() => setShowMobileForm(false)}
                  className="mt-4 w-full text-center text-sm text-slate-400 hover:text-slate-600 transition-colors">
                  ← Go back
                </button>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Success overlay ─────────────────────────────────── */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-3xl p-10 flex flex-col items-center max-w-sm w-full shadow-2xl text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)' }}>
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-black text-slate-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>You're in! 🎉</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">Your account is ready. Welcome to Floyd School — your learning journey starts now.</p>
              <button onClick={() => navigate('/')}
                className="w-full py-3.5 rounded-2xl text-sm font-bold text-white transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #312e81, #B854A2)', boxShadow: '0 8px 24px rgba(184,84,162,0.3)' }}>
                Go to Dashboard
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <GuestLoginModal isOpen={showGuestModal} onClose={() => setShowGuestModal(false)} />
    </div>
  );
};

export default StudentLoginPage;
