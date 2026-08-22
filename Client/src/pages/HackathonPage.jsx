import { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { 
  Sparkles, Award, Trophy, Users, School, ArrowRight, CheckCircle2, 
  Calendar, Clock, MapPin, Building, Phone, Mail, HelpCircle, Flame, 
  Lightbulb, Rocket, ShieldCheck, Zap, Laptop, Video, ChevronRight
} from 'lucide-react';
import api from '../api/axios';
import SEO from '../components/common/SEO';

/* ─── Vibrant Gradients & Themes ─────────────────────────────── */
const THEMES = {
  school: {
    name: 'School Host',
    gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    accent: '#8b5cf6',
    accentGlow: 'rgba(139, 92, 246, 0.35)',
    badgeBg: 'bg-purple-500/15 border-purple-500/30 text-purple-300',
    btnGradient: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500',
    btnShadow: 'shadow-purple-600/30',
    cardBorder: 'border-purple-500/20 hover:border-purple-500/50',
    cardGlow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',
    bgTint: 'from-[#07091e] via-[#0d102d] to-[#060818]'
  },
  participant: {
    name: 'Participant',
    gradient: 'from-amber-500 via-orange-600 to-rose-600',
    accent: '#f97316',
    accentGlow: 'rgba(249, 115, 22, 0.35)',
    badgeBg: 'bg-orange-500/15 border-orange-500/30 text-orange-300',
    btnGradient: 'bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 hover:from-amber-400 hover:to-rose-500',
    btnShadow: 'shadow-orange-600/30',
    cardBorder: 'border-orange-500/20 hover:border-orange-500/50',
    cardGlow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]',
    bgTint: 'from-[#140808] via-[#1a0c0c] to-[#0d0505]'
  }
};

/* ─── Animated Floating Ambient Orbs ──────────────────────────── */
const AmbientGlowBackground = ({ theme = 'school' }) => {
  const isSchool = theme === 'school';
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[140px] opacity-45 pointer-events-none"
        style={{
          background: isSchool 
            ? 'radial-gradient(circle, #6366f1 0%, #a855f7 50%, transparent 70%)'
            : 'radial-gradient(circle, #f97316 0%, #ef4444 50%, transparent 70%)'
        }}
      />
      <motion.div
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.2, 1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -left-32 w-[550px] h-[550px] rounded-full blur-[130px] opacity-40 pointer-events-none"
        style={{
          background: isSchool 
            ? 'radial-gradient(circle, #ec4899 0%, #8b5cf6 50%, transparent 70%)'
            : 'radial-gradient(circle, #fbbf24 0%, #f43f5e 50%, transparent 70%)'
        }}
      />
      <motion.div
        animate={{
          x: [0, 25, -35, 0],
          y: [0, -25, 35, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full blur-[160px] opacity-25 pointer-events-none"
        style={{
          background: isSchool 
            ? 'radial-gradient(circle, #38bdf8 0%, transparent 70%)'
            : 'radial-gradient(circle, #fb923c 0%, transparent 70%)'
        }}
      />
      {/* Subtle futuristic cyber grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />
    </div>
  );
};

/* ─── Ultra-Sleek Top Navbar ──────────────────────────────────── */
const HackNav = ({ activeView, selectView }) => {
  return (
    <motion.nav 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-6 md:px-12 backdrop-blur-2xl border-b border-white/10"
      style={{ background: 'rgba(6, 8, 24, 0.82)' }}
    >
      <Link to="/school-partnerships" className="flex items-center gap-3 group">
        <img 
          src="/logo-white.png" 
          alt="Floyd School" 
          className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
        />
        <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm">
          Hackathons
        </span>
      </Link>

      {activeView && (
        <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/15 backdrop-blur-md shadow-lg">
          <button
            onClick={() => selectView('school')}
            className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              activeView === 'school'
                ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md shadow-purple-600/40 scale-105'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <School className="w-3.5 h-3.5" />
            <span>School</span>
          </button>
          <button
            onClick={() => selectView('participant')}
            className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              activeView === 'participant'
                ? 'bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 text-white shadow-md shadow-orange-600/40 scale-105'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Participant</span>
          </button>
        </div>
      )}

      <div className="flex items-center gap-3">
        <Link 
          to="/school-partnerships"
          className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all border border-white/10 flex items-center gap-1.5"
        >
          <span>← Back to Campus</span>
        </Link>
      </div>
    </motion.nav>
  );
};

/* ─── Form Input Styles ───────────────────────────────────────── */
const inputClasses = 
  'w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-400 focus:border-purple-400 focus:bg-white/10 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-sm font-medium';

const selectClasses = 
  'w-full px-4 py-3.5 rounded-xl border border-white/15 bg-[#0e1124] text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-sm font-medium cursor-pointer';

const labelClasses = 'block text-xs font-bold uppercase tracking-widest text-slate-300 mb-2';

/* ─── Success Component ───────────────────────────────────────── */
const SubmissionSuccess = ({ title, message, onReset }) => (
  <motion.div 
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="p-10 rounded-3xl text-center border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-500/15 to-emerald-950/20 shadow-2xl backdrop-blur-xl"
  >
    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
      <CheckCircle2 className="w-10 h-10 text-white animate-pulse" />
    </div>
    <h3 className="text-3xl font-black text-white mb-3 tracking-tight">{title}</h3>
    <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8 font-medium">
      {message}
    </p>
    {onReset && (
      <button 
        onClick={onReset}
        className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/15 transition-all cursor-pointer"
      >
        Submit Another Response
      </button>
    )}
  </motion.div>
);

/* ═══════════════════════════════════════════════════════════════
   MAIN HACKATHON PAGE COMPONENT
═══════════════════════════════════════════════════════════════ */
const HackathonPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const viewParam = searchParams.get('view'); // 'school' | 'participant' | null
  const [activeView, setActiveView] = useState(viewParam || null);

  useEffect(() => {
    setActiveView(viewParam || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [viewParam]);

  const selectView = (view) => {
    navigate(`/hackathon?view=${view}`, { replace: true });
  };

  /* ── Form States ── */
  const [hostFormData, setHostFormData] = useState({
    schoolName: '', schoolAddress: '', city: '', state: '', principalName: '',
    yourName: '', designation: '', email: '', phone: '', whatsappSame: true,
    whatsappNumber: '', preferredMonth: '', expectedStudents: '', hallAvailable: '',
    projectorAvailable: '', additionalInfo: ''
  });

  const [studentFormData, setStudentFormData] = useState({
    teamName: '', schoolName: '', city: '', classGroup: '', teamMembers: '2',
    teamLeaderName: '', teamLeaderClass: '', teamLeaderWhatsapp: '', teamLeaderEmail: '',
    teammate2Name: '', teammate2Class: '', teammate3Name: '', teammate3Class: '',
    teammate4Name: '', teammate4Class: '', parentName: '', parentRelationship: '',
    parentWhatsapp: '', parentEmail: '', previousHackathon: '', additionalInfo: ''
  });

  const [hostSubmitted, setHostSubmitted] = useState(false);
  const [studentSubmitted, setStudentSubmitted] = useState(false);
  const [submittingHost, setSubmittingHost] = useState(false);
  const [submittingStudent, setSubmittingStudent] = useState(false);

  const handleHostChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHostFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (name === 'whatsappSame' && checked) {
      setHostFormData(prev => ({ ...prev, whatsappNumber: prev.phone }));
    }
  };

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudentFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleHostSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmittingHost(true);
      const payload = {
        ...hostFormData,
        whatsappNumber: hostFormData.whatsappSame ? hostFormData.phone : hostFormData.whatsappNumber
      };
      const response = await api.post('/hackathon/school-lead', payload);
      if (response.data.success) {
        toast.success('Host request submitted successfully!');
        setHostSubmitted(true);
      } else {
        toast.error(response.data.message || 'Failed to submit request');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error submitting request. Please try again.');
    } finally {
      setSubmittingHost(false);
    }
  };

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmittingStudent(true);
      const response = await api.post('/hackathon/participant-lead', studentFormData);
      if (response.data.success) {
        toast.success('Team registered successfully!');
        setStudentSubmitted(true);
      } else {
        toast.error(response.data.message || 'Registration failed');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error registering team. Please try again.');
    } finally {
      setSubmittingStudent(false);
    }
  };

  /* ─────────────────────────────────────────────────────────────
     1. SELECTION SCREEN (Choose School vs Participant)
  ───────────────────────────────────────────────────────────── */
  if (!activeView) {
    return (
      <div className="bg-[#050716] text-white min-h-screen relative overflow-x-hidden font-sans selection:bg-purple-500 selection:text-white">
        <SEO 
          title="Student Idea Hackathon — Floyd School" 
          description="Where school students stop consuming technology and start building with it." 
        />
        <HackNav activeView={null} selectView={selectView} />
        <AmbientGlowBackground theme="school" />

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20">
          <div className="max-w-5xl mx-auto w-full text-center">
            
            {/* Top Glowing Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-lg shadow-purple-500/20"
            >
              <Sparkles className="w-4 h-4 text-pink-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Floyd School Student Idea Hackathon</span>
            </motion.div>

            {/* Giant Colorful Title */}
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6"
            >
              Where students stop<br />
              consuming technology<br />
              <span className="bg-gradient-to-r from-amber-400 via-pink-500 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                and start building with it.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed mb-16 font-medium"
            >
              A high-energy, 1-day innovation challenge delivered on school campuses. Fully managed by Floyd School with zero preparation burden or cost for schools.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-8"
            >
              Select your role to proceed
            </motion.p>

            {/* Two Super-Vibrant Interactive Option Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Card 1: School Host */}
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => selectView('school')}
                className="relative rounded-3xl p-8 sm:p-10 text-left cursor-pointer overflow-hidden border-2 border-purple-500/30 bg-gradient-to-b from-purple-950/40 via-[#0d102e] to-[#07091e] shadow-2xl hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all group"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-600/40 group-hover:rotate-6 transition-transform duration-300">
                    <School className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-purple-400 mb-2">Host Campus</span>
                  <h3 className="text-3xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors">School Leaders</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-1 font-medium">
                    Host the hackathon directly at your school campus. Floyd School manages everything — judges, prizes, materials, and coordination.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-purple-300 group-hover:text-white transition-colors">
                    <span>Host the Hackathon</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Student Participant */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => selectView('participant')}
                className="relative rounded-3xl p-8 sm:p-10 text-left cursor-pointer overflow-hidden border-2 border-orange-500/30 bg-gradient-to-b from-orange-950/40 via-[#1a0e0e] to-[#0f0707] shadow-2xl hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] transition-all group"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-600 to-rose-500 flex items-center justify-center mb-6 shadow-lg shadow-orange-600/40 group-hover:rotate-6 transition-transform duration-300">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-orange-400 mb-2">Student Innovators</span>
                  <h3 className="text-3xl font-black text-white mb-3 group-hover:text-orange-300 transition-colors">Participants</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-1 font-medium">
                    Register your team of 2–4 students (Classes 6 to 12). No coding required. Build real solutions, compete for prizes, and get mentorship.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-300 group-hover:text-white transition-colors">
                    <span>Register to Participate</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─────────────────────────────────────────────────────────────
     2. SCHOOL VIEW (?view=school)
  ───────────────────────────────────────────────────────────── */
  if (activeView === 'school') {
    return (
      <div className="bg-[#060818] text-white min-h-screen relative overflow-x-hidden font-sans selection:bg-purple-500 selection:text-white">
        <SEO 
          title="Host the Hackathon — Floyd School" 
          description="Put your school at the centre of something real. Host the Floyd School Student Idea Hackathon." 
        />
        <HackNav activeView={activeView} selectView={selectView} />
        <AmbientGlowBackground theme="school" />

        {/* Hero Section */}
        <section className="relative z-10 pt-36 pb-20 px-6 md:px-12 border-b border-white/10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-black uppercase tracking-widest mb-6"
            >
              <School className="w-3.5 h-3.5" />
              <span>Campus Host Partnership</span>
            </motion.div>

            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mb-6"
            >
              Put your school at the<br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                centre of something real.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-lg sm:text-xl max-w-3xl leading-relaxed mb-10 font-medium"
            >
              The Floyd School Student Idea Hackathon is a structured, high-energy, one-day innovation event for students of Classes 6 to 12. Runs entirely on your school premises. Floyd School manages everything from coordination to judging to prizes to certificates. Your school provides the space and the students. That is it.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {[
                'Zero Cost to School', 'Classes 6 to 12', 'Fully Managed by Floyd', 'Mentors & Industry Judges', 'Certificates & Prizes'
              ].map((pill, i) => (
                <span key={i} className="px-4 py-2 rounded-full text-xs font-bold bg-white/5 border border-purple-500/25 text-purple-200">
                  {pill}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What Happens On The Day (Timeline) */}
        <section className="relative z-10 py-24 px-6 md:px-12 border-b border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-400 block mb-2">Event Flow</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                What Happens on the Day
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { time: '9:00 AM', event: 'Event kickoff and problem statement briefing', icon: Zap },
                { time: '9:30 AM', event: 'Teams begin working on their solutions with mentor support', icon: Lightbulb },
                { time: '1:00 PM', event: 'Midday check-in with Floyd mentors', icon: Users },
                { time: '2:00 PM', event: 'Final presentations begin before the judging panel', icon: Award },
                { time: '4:00 PM', event: 'Judging deliberation and scoring', icon: ShieldCheck },
                { time: '5:00 PM', event: 'Prize ceremony, certificates and closing celebration', icon: Trophy }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-purple-500/40 hover:bg-purple-950/20 transition-all flex items-start gap-4"
                  >
                    <div className="px-3 py-2 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 font-black text-xs shrink-0">
                      {item.time}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-pink-400" />
                        <span className="font-bold text-white text-sm">{item.event}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <p className="mt-8 text-slate-400 text-sm leading-relaxed max-w-3xl">
              Every team gets personalized feedback from industry judges. The best ideas do not stop at the event — outstanding teams are mentored further and given a clear path to state, national and international competitions.
            </p>
          </div>
        </section>

        {/* What Your School Receives */}
        <section className="relative z-10 py-24 px-6 md:px-12 border-b border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-400 block mb-2">Host Benefits</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                What Your School Receives
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: School,
                  title: 'Brand Visibility',
                  desc: 'Your school is featured as the official host institution across all Floyd platforms and partner networks. Your name appears on every certificate, banner and communication.'
                },
                {
                  icon: Lightbulb,
                  title: 'Student Excellence',
                  desc: 'Witness your students solve real problems, present with confidence, and compete at a level most schools never give them access to.'
                },
                {
                  icon: Trophy,
                  title: 'National Recognition',
                  desc: 'Top teams from your school are supported to represent you at regional and national competitions. Every achievement carries your school’s name forward.'
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6 }}
                    className="p-8 rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-950/20 to-transparent hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all flex flex-col"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mb-6 text-purple-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Requirements: What We Need */}
        <section className="relative z-10 py-24 px-6 md:px-12 border-b border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-400 block mb-2">Simple Setup</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                What We Need From You
              </h2>
              <p className="text-slate-300 text-base">Everything else is managed end-to-end by Floyd School.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Calendar, title: 'One School Day', desc: 'A regular working or Saturday session to run the innovation event.' },
                { icon: Building, title: 'Space / Hall', desc: 'A school auditorium, lab, or hall for teams to collaborate and present.' },
                { icon: Video, title: 'Display Screen', desc: 'A projector or digital screen for presentations and kickoff briefing.' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] text-center flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-xs">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* School Host Registration Form */}
        <section className="relative z-10 py-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-400 block mb-2">Host Application</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
                Bring the Hackathon to Your School
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Fill in your details and our team will reach out within 24 hours to schedule the event date.
              </p>
            </div>

            {hostSubmitted ? (
              <SubmissionSuccess 
                title="Thank You for Your Application"
                message={`We have received your request and our team will reach out to you within 24 hours on the contact details you provided. We look forward to partnering with ${hostFormData.schoolName || 'your school'}.`}
                onReset={() => setHostSubmitted(false)}
              />
            ) : (
              <motion.form 
                onSubmit={handleHostSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 sm:p-10 rounded-3xl border border-purple-500/30 bg-gradient-to-b from-[#0d102e] to-[#07091e] shadow-2xl backdrop-blur-xl space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>School Name *</label>
                    <input type="text" name="schoolName" required value={hostFormData.schoolName} onChange={handleHostChange} className={inputClasses} placeholder="e.g. Delhi Public School" />
                  </div>
                  <div>
                    <label className={labelClasses}>City / District *</label>
                    <input type="text" name="city" required value={hostFormData.city} onChange={handleHostChange} className={inputClasses} placeholder="e.g. Gurugram" />
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>School Address *</label>
                  <input type="text" name="schoolAddress" required value={hostFormData.schoolAddress} onChange={handleHostChange} className={inputClasses} placeholder="Full address" />
                </div>

                <div>
                  <label className={labelClasses}>State *</label>
                  <input type="text" name="state" required value={hostFormData.state} onChange={handleHostChange} className={inputClasses} placeholder="e.g. Haryana" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>Principal Name *</label>
                    <input type="text" name="principalName" required value={hostFormData.principalName} onChange={handleHostChange} className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Your Name (if different) *</label>
                    <input type="text" name="yourName" required value={hostFormData.yourName} onChange={handleHostChange} className={inputClasses} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>Your Designation *</label>
                    <input type="text" name="designation" required value={hostFormData.designation} onChange={handleHostChange} className={inputClasses} placeholder="e.g. Computer Science HOD" />
                  </div>
                  <div>
                    <label className={labelClasses}>Official School Email *</label>
                    <input type="email" name="email" required value={hostFormData.email} onChange={handleHostChange} className={inputClasses} placeholder="info@school.edu.in" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>Phone Number *</label>
                    <input type="tel" name="phone" required value={hostFormData.phone} onChange={handleHostChange} className={inputClasses} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className={labelClasses}>WhatsApp Number *</label>
                    <input type="tel" name="whatsappNumber" required value={hostFormData.whatsappSame ? hostFormData.phone : hostFormData.whatsappNumber} onChange={handleHostChange} disabled={hostFormData.whatsappSame} className={`${inputClasses} disabled:opacity-50`} />
                    <label className="flex items-center gap-2 mt-2 cursor-pointer">
                      <input type="checkbox" name="whatsappSame" checked={hostFormData.whatsappSame} onChange={handleHostChange} className="w-4 h-4 accent-purple-500" />
                      <span className="text-xs text-slate-400">Same as phone number</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>Preferred Month to Host *</label>
                    <select name="preferredMonth" required value={hostFormData.preferredMonth} onChange={handleHostChange} className={selectClasses}>
                      <option value="">Select month</option>
                      {['May','June','July','August','September','October','November','December','January'].map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>Expected Number of Students *</label>
                    <select name="expectedStudents" required value={hostFormData.expectedStudents} onChange={handleHostChange} className={selectClasses}>
                      <option value="">Select range</option>
                      {['Under 50','50 to 100','100 to 200','200 and above'].map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>Hall or open space available? *</label>
                    <select name="hallAvailable" required value={hostFormData.hallAvailable} onChange={handleHostChange} className={selectClasses}>
                      <option value="">Select option</option>
                      {['Yes','We can arrange one','Not sure'].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>Projector or screen available? *</label>
                    <select name="projectorAvailable" required value={hostFormData.projectorAvailable} onChange={handleHostChange} className={selectClasses}>
                      <option value="">Select option</option>
                      {['Yes','No','Not sure'].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Anything you want to tell us (optional)</label>
                  <textarea name="additionalInfo" rows={3} value={hostFormData.additionalInfo} onChange={handleHostChange} className={`${inputClasses} resize-none`} placeholder="Specific dates, questions, or requirements..." />
                </div>

                <button
                  type="submit"
                  disabled={submittingHost}
                  className="w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-xl shadow-purple-600/30 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01]"
                >
                  {submittingHost ? 'Submitting Application...' : 'Submit Host Application'}
                </button>
              </motion.form>
            )}
          </div>
        </section>
      </div>
    );
  }

  /* ─────────────────────────────────────────────────────────────
     3. PARTICIPANT VIEW (?view=participant)
  ───────────────────────────────────────────────────────────── */
  return (
    <div className="bg-[#0c0506] text-white min-h-screen relative overflow-x-hidden font-sans selection:bg-orange-500 selection:text-white">
      <SEO 
        title="Participate in the Hackathon — Floyd School" 
        description="You have ideas. This is where they get tested. Register your team for the Floyd School Student Idea Hackathon." 
      />
      <HackNav activeView={activeView} selectView={selectView} />
      <AmbientGlowBackground theme="participant" />

      {/* Hero Section */}
      <section className="relative z-10 pt-36 pb-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-xs font-black uppercase tracking-widest mb-6"
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>Student Registration</span>
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mb-6"
          >
            You have ideas.<br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              This is where they get tested.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg sm:text-xl max-w-3xl leading-relaxed mb-10 font-medium"
          >
            The Floyd School Student Idea Hackathon is open to students of Classes 6 to 12. You do not need to know how to code. You do not need a tech background. You need a real problem you care about and a team willing to work on it.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {[
              'Open to Classes 6 to 12', 'No Coding Needed', 'Teams of 2 to 4', 'Free to Enter', 'Cash Prizes & Trophies'
            ].map((pill, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-xs font-bold bg-white/5 border border-orange-500/25 text-orange-200">
                {pill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section className="relative z-10 py-24 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-orange-400 block mb-2">Participant Rewards</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              What You Will Walk Away With
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Award, title: 'Official Certificate', desc: 'Every participant receives a verified Floyd School Certificate of Participation.' },
              { icon: Lightbulb, title: 'Honest Industry Feedback', desc: 'Direct, unfiltered feedback from working engineers, founders and national hackathon winners.' },
              { icon: Trophy, title: 'Cash Prizes & Goodies', desc: 'Cash awards, medals, and exclusive Floyd tech goodies for top 3 podium teams.' },
              { icon: Rocket, title: 'National Championship Pathway', desc: 'Outstanding ideas are directly mentored and supported for state and national innovation showcases.' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-3xl border border-orange-500/20 bg-gradient-to-b from-orange-950/20 to-transparent hover:border-orange-500/50 transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-300 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prizes and Recognition Grid */}
      <section className="relative z-10 py-24 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-orange-400 block mb-2">Podium</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Prizes and Recognition
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { rank: '🥇 First Place', desc: 'Cash Prize + Gold Medal + Certificate of Excellence + Floyd Goodies + Entry to Next Level', border: 'border-yellow-500/40 bg-yellow-500/10' },
              { rank: '🥈 Second Place', desc: 'Cash Prize + Silver Medal + Certificate of Excellence + Floyd Goodies + Entry to Next Level', border: 'border-slate-300/40 bg-slate-300/10' },
              { rank: '🥉 Third Place', desc: 'Cash Prize + Bronze Medal + Certificate of Excellence + Floyd Goodies + Entry to Next Level', border: 'border-orange-500/40 bg-orange-500/10' },
              { rank: '📜 All Participants', desc: 'Official Certificate of Participation + Judge Review', border: 'border-white/15 bg-white/5' }
            ].map((prize, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border ${prize.border} flex flex-col sm:flex-row sm:items-center justify-between gap-2`}>
                <span className="font-black text-white text-lg sm:text-xl">{prize.rank}</span>
                <span className="text-slate-300 text-sm font-medium">{prize.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-orange-400 block mb-2">Clarifications</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: 'Do I need coding experience?', a: 'No! This is an idea and problem-solving hackathon. If you can think clearly and present your solution, you can compete.' },
              { q: 'How big can a team be?', a: 'Teams must consist of 2 to 4 students. Solo participation is not permitted.' },
              { q: 'Is there any registration fee?', a: 'No. The Floyd School Student Idea Hackathon is 100% free for all students.' },
              { q: 'What should we bring on the day?', a: 'Your school ID card, notebook/pen, a laptop if you have one, and your creative mindset.' }
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <h4 className="font-bold text-white text-base mb-2">{faq.q}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Registration Form */}
      <section className="relative z-10 py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-orange-400 block mb-2">Team Registration</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Register Your Team
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              One student registers on behalf of the whole team. Double-check your contact details.
            </p>
          </div>

          {studentSubmitted ? (
            <SubmissionSuccess 
              title="Team Registered Successfully!"
              message="We have received your team's registration. We will send event updates, schedule, and venue details to your WhatsApp number at least 48 hours before the event."
              onReset={() => setStudentSubmitted(false)}
            />
          ) : (
            <motion.form 
              onSubmit={handleStudentSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 sm:p-10 rounded-3xl border border-orange-500/30 bg-gradient-to-b from-[#1a0e0e] to-[#0c0506] shadow-2xl backdrop-blur-xl space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>Team Name *</label>
                  <input type="text" name="teamName" required value={studentFormData.teamName} onChange={handleStudentChange} className={inputClasses} placeholder="e.g. CyberBuilders" />
                </div>
                <div>
                  <label className={labelClasses}>School Name *</label>
                  <input type="text" name="schoolName" required value={studentFormData.schoolName} onChange={handleStudentChange} className={inputClasses} placeholder="Your school name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>City *</label>
                  <input type="text" name="city" required value={studentFormData.city} onChange={handleStudentChange} className={inputClasses} placeholder="Your city" />
                </div>
                <div>
                  <label className={labelClasses}>Class Group *</label>
                  <select name="classGroup" required value={studentFormData.classGroup} onChange={handleStudentChange} className={selectClasses}>
                    <option value="">Select class group</option>
                    {['Class 6-7', 'Class 8-9', 'Class 10-12'].map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClasses}>Number of Team Members *</label>
                <select name="teamMembers" required value={studentFormData.teamMembers} onChange={handleStudentChange} className={selectClasses}>
                  <option value="2">2 Members</option>
                  <option value="3">3 Members</option>
                  <option value="4">4 Members</option>
                </select>
              </div>

              {/* Team Leader */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-black uppercase tracking-widest text-orange-400 block mb-4">Team Leader Details</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses}>Full Name *</label>
                    <input type="text" name="teamLeaderName" required value={studentFormData.teamLeaderName} onChange={handleStudentChange} className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Class and Section *</label>
                    <input type="text" name="teamLeaderClass" required placeholder="e.g. 10-B" value={studentFormData.teamLeaderClass} onChange={handleStudentChange} className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>WhatsApp Number *</label>
                    <input type="tel" name="teamLeaderWhatsapp" required value={studentFormData.teamLeaderWhatsapp} onChange={handleStudentChange} className={inputClasses} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className={labelClasses}>Email Address *</label>
                    <input type="email" name="teamLeaderEmail" required value={studentFormData.teamLeaderEmail} onChange={handleStudentChange} className={inputClasses} />
                  </div>
                </div>
              </div>

              {/* Teammate 2 */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-black uppercase tracking-widest text-orange-400 block mb-4">Teammate 2 Details</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses}>Full Name *</label>
                    <input type="text" name="teammate2Name" required value={studentFormData.teammate2Name} onChange={handleStudentChange} className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Class *</label>
                    <input type="text" name="teammate2Class" required placeholder="e.g. 10-A" value={studentFormData.teammate2Class} onChange={handleStudentChange} className={inputClasses} />
                  </div>
                </div>
              </div>

              {/* Teammate 3 */}
              {(studentFormData.teamMembers === '3' || studentFormData.teamMembers === '4') && (
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-black uppercase tracking-widest text-orange-400 block mb-4">Teammate 3 Details</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Full Name *</label>
                      <input type="text" name="teammate3Name" required value={studentFormData.teammate3Name} onChange={handleStudentChange} className={inputClasses} />
                    </div>
                    <div>
                      <label className={labelClasses}>Class *</label>
                      <input type="text" name="teammate3Class" required placeholder="e.g. 10-C" value={studentFormData.teammate3Class} onChange={handleStudentChange} className={inputClasses} />
                    </div>
                  </div>
                </div>
              )}

              {/* Teammate 4 */}
              {studentFormData.teamMembers === '4' && (
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-black uppercase tracking-widest text-orange-400 block mb-4">Teammate 4 Details</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Full Name *</label>
                      <input type="text" name="teammate4Name" required value={studentFormData.teammate4Name} onChange={handleStudentChange} className={inputClasses} />
                    </div>
                    <div>
                      <label className={labelClasses}>Class *</label>
                      <input type="text" name="teammate4Class" required placeholder="e.g. 10-D" value={studentFormData.teammate4Class} onChange={handleStudentChange} className={inputClasses} />
                    </div>
                  </div>
                </div>
              )}

              {/* Parent Details */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-black uppercase tracking-widest text-orange-400 block mb-4">Parent Details (Team Leader)</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses}>Parent Name *</label>
                    <input type="text" name="parentName" required value={studentFormData.parentName} onChange={handleStudentChange} className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Relationship *</label>
                    <select name="parentRelationship" required value={studentFormData.parentRelationship} onChange={handleStudentChange} className={selectClasses}>
                      <option value="">Select relationship</option>
                      {['Father', 'Mother', 'Guardian'].map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>Parent WhatsApp Number *</label>
                    <input type="tel" name="parentWhatsapp" required value={studentFormData.parentWhatsapp} onChange={handleStudentChange} className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Parent Email (optional)</label>
                    <input type="email" name="parentEmail" value={studentFormData.parentEmail} onChange={handleStudentChange} className={inputClasses} />
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClasses}>Have you participated in a hackathon before? *</label>
                <select name="previousHackathon" required value={studentFormData.previousHackathon} onChange={handleStudentChange} className={selectClasses}>
                  <option value="">Select option</option>
                  {['Yes', 'No', 'This is our first time'].map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClasses}>Anything you want to tell us (optional)</label>
                <textarea name="additionalInfo" rows={3} value={studentFormData.additionalInfo} onChange={handleStudentChange} className={`${inputClasses} resize-none`} placeholder="Your project ideas, queries..." />
              </div>

              <button
                type="submit"
                disabled={submittingStudent}
                className="w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest text-white bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 hover:from-amber-400 hover:to-rose-500 shadow-xl shadow-orange-600/30 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01]"
              >
                {submittingStudent ? 'Registering Team...' : 'Register My Team'}
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
};

export default HackathonPage;
