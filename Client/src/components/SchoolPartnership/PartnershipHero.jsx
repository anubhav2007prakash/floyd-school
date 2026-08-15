import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Users, User, ChevronLeft, ChevronRight, Calendar, Sparkles, Zap, Brain, Rocket, Award } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Programs', id: 'programs' },
  { name: 'Roadmap', id: 'timeline' },
  { name: 'Domains', id: 'impact' },
  { name: 'Why Us', id: 'why-us' },
  { name: 'Host Hackathon', id: 'partner-form' },
];

const useScrolledPast = (threshold = 60) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
};

/* ── Dynamic Design Variations — morphs colors, typography accents, layouts, and taglines ── */
const DYNAMIC_DESIGNS = [
  {
    id: 'design-blue',
    bgGradient: 'linear-gradient(135deg, #07092b 0%, #0f154d 50%, #080a33 100%)',
    accentColor: '#facc15', // Yellow badge
    accentTextColor: '#07092b',
    taglineGradient: 'linear-gradient(90deg, #38BDF8, #FACC15, #ff7d1a)',
    tagline: 'EVERY STUDENT HAS A DESTINATION. WE FIND THE SHORTEST PATH.',
    eyebrow: 'COMPOSITE SKILL LABS FOR CBSE SCHOOLS',
    eyebrowBorder: '#38BDF8',
    pills: [
      { text: 'Artificial Intelligence', bg: '#ff7d1a' },
      { text: 'Coding', bg: '#10cb6a' },
      { text: 'Robotics', bg: '#ff4b93' },
    ],
    btnGradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    btnGlow: 'rgba(139,92,246,0.4)',
    photos: [
      { src: '/startup_media/photo_3.jpg', title: 'Hands-on Robotics Lab' },
      { src: '/startup_media/photo_12.jpg', title: 'National Hackathons' },
      { src: '/startup_media/photo_1.jpg', title: 'AI & GenAI Modules' },
      { src: '/startup_media/photo_7.jpg', title: 'Future Innovators' },
    ],
    frameStyle: 'flower',
    doodleColor: '#6C63FF',
  },
  {
    id: 'design-purple',
    bgGradient: 'linear-gradient(135deg, #160829 0%, #2b0b4a 50%, #110521 100%)',
    accentColor: '#00D4FF', // Cyan badge
    accentTextColor: '#0c041a',
    taglineGradient: 'linear-gradient(90deg, #f472b6, #a78bfa, #38bdf8)',
    tagline: 'TRANSFORMING CLASSROOMS INTO HIGH-TECH INNOVATION HUBS.',
    eyebrow: 'NEP 2020 & CBSE EXPERIENTIAL LEARNING',
    eyebrowBorder: '#f472b6',
    pills: [
      { text: 'GenAI Chatbots', bg: '#a78bfa' },
      { text: 'IoT & Sensors', bg: '#38bdf8' },
      { text: 'Web App Dev', bg: '#f472b6' },
    ],
    btnGradient: 'linear-gradient(135deg, #ec4899, #d946ef)',
    btnGlow: 'rgba(236,72,153,0.4)',
    photos: [
      { src: '/startup_media/photo_1.jpg', title: 'AI & GenAI Modules' },
      { src: '/startup_media/photo_4.jpg', title: '3D Modeling & Design' },
      { src: '/startup_media/photo_8.jpg', title: 'App Dev Training' },
      { src: '/startup_media/photo_2.jpg', title: 'Mentored Coding' },
    ],
    frameStyle: 'arch',
    doodleColor: '#ec4899',
  },
  {
    id: 'design-emerald',
    bgGradient: 'linear-gradient(135deg, #031c18 0%, #083830 50%, #021411 100%)',
    accentColor: '#fb923c', // Orange badge
    accentTextColor: '#031c18',
    taglineGradient: 'linear-gradient(90deg, #34d399, #fb923c, #facc15)',
    tagline: 'POWERING THE NEXT GENERATION OF YOUNG FOUNDERS.',
    eyebrow: 'TURNKEY DEPLOYMENT WITH ZERO SCHOOL EFFORT',
    eyebrowBorder: '#34d399',
    pills: [
      { text: 'Incubation & Pitching', bg: '#fb923c' },
      { text: 'Python & Data', bg: '#34d399' },
      { text: 'STEM Hardware', bg: '#facc15' },
    ],
    btnGradient: 'linear-gradient(135deg, #10b981, #059669)',
    btnGlow: 'rgba(16,185,129,0.4)',
    photos: [
      { src: '/startup_media/photo_12.jpg', title: 'Student Certificates' },
      { src: '/startup_media/photo_7.jpg', title: 'Hackathon Pitching' },
      { src: '/startup_media/photo_5.jpg', title: 'Hardware Labs' },
      { src: '/startup_media/photo_9.jpg', title: 'Mentored Sessions' },
    ],
    frameStyle: 'quad',
    doodleColor: '#10b981',
  },
  {
    id: 'design-crimson',
    bgGradient: 'linear-gradient(135deg, #240615 0%, #420b27 50%, #1a040f 100%)',
    accentColor: '#38bdf8', // Blue badge
    accentTextColor: '#1a040f',
    taglineGradient: 'linear-gradient(90deg, #f43f5e, #fb923c, #a855f7)',
    tagline: 'ON-CAMPUS LABS MANAGED 100% BY FLOYD SCHOOL MENTORS.',
    eyebrow: 'FUTURE-READY SKILL CERTIFICATIONS FOR STUDENTS',
    eyebrowBorder: '#f43f5e',
    pills: [
      { text: 'Robotics Competitions', bg: '#f43f5e' },
      { text: 'AI Agents', bg: '#a855f7' },
      { text: 'Career Readiness', bg: '#38bdf8' },
    ],
    btnGradient: 'linear-gradient(135deg, #f43f5e, #e11d48)',
    btnGlow: 'rgba(244,63,94,0.4)',
    photos: [
      { src: '/startup_media/photo_6.jpg', title: 'Team Collaboration' },
      { src: '/startup_media/photo_10.jpg', title: 'On-site Mentors' },
      { src: '/startup_media/photo_11.jpg', title: 'Campus Setup' },
      { src: '/startup_media/photo_3.jpg', title: 'Robotics Testing' },
    ],
    frameStyle: 'matrix',
    doodleColor: '#f43f5e',
  },
];

const PartnershipHero = () => {
  const scrolled = useScrolledPast(60);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [designIndex, setDesignIndex] = useState(0);

  const currentDesign = DYNAMIC_DESIGNS[designIndex];

  // Auto morph design every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDesignIndex((prev) => (prev + 1) % DYNAMIC_DESIGNS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextDesign = () => setDesignIndex((prev) => (prev + 1) % DYNAMIC_DESIGNS.length);
  const prevDesign = () => setDesignIndex((prev) => (prev - 1 + DYNAMIC_DESIGNS.length) % DYNAMIC_DESIGNS.length);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@600;700;800;900&display=swap');
      `}</style>

      {/* ── Sticky Navbar ─────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(7, 9, 43, 0.95)' : 'rgba(7, 9, 43, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: scrolled ? '0 8px 30px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div className="max-w-[1350px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left Brand */}
          <div
            className="flex flex-col items-start leading-none cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-black text-white text-xl tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Floyd School
            </span>
            <span className="text-[8px] text-sky-300/80 font-bold tracking-widest mt-0.5 border-t border-white/20 pt-0.5">
              N · S · D · C PARTNER
            </span>
          </div>

          {/* Center Links Capsule */}
          <div
            className="hidden md:flex items-center rounded-full py-1.5 px-3 shadow-lg border border-white/20"
            style={{ background: 'linear-gradient(90deg, #B854A2 0%, #38BDF8 100%)' }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-xs font-bold text-white px-3.5 py-1.5 rounded-full hover:bg-white/15 transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => alert('Brochure download started!')}
              className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer text-sky-300 hover:bg-white/10"
            >
              <Download size={14} /> Download Brochure
            </button>

            <button
              onClick={() => scrollTo('partner-form')}
              className="text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer text-slate-300 hover:bg-white/10"
            >
              Contact Us
            </button>

            <button
              onClick={() => (window.location.href = '/student/login?mode=login')}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer text-pink-300 border border-pink-400/50 hover:bg-pink-500/10"
            >
              <User size={13} />
              Login
            </button>

            <button
              onClick={() => (window.location.href = '/student/login?mode=signup')}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white cursor-pointer hover:scale-[1.03] transition-all"
              style={{
                background: '#B854A2',
                boxShadow: '0 4px 14px rgba(184, 84, 162, 0.4)',
              }}
            >
              <Users size={14} />
              Sign Up
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#07092b] border-b border-white/10 px-6 py-4 space-y-3"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left text-sm font-semibold text-slate-200 py-2 border-b border-white/5"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => alert('Brochure download started!')}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 text-xs font-bold text-white"
                >
                  <Download size={14} /> Download Brochure
                </button>
                <button
                  onClick={() => scrollTo('partner-form')}
                  className="py-2.5 rounded-xl bg-pink-600 text-xs font-bold text-white text-center"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Dynamic Hero Banner Section (Morphs theme, colors & layouts every slide) ────── */}
      <motion.section
        key={currentDesign.id}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[90vh] pt-28 pb-16 flex items-center justify-center overflow-hidden transition-all duration-1000"
        style={{
          background: currentDesign.bgGradient,
        }}
      >
        {/* Background Doodle Vectors */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
            <path
              d="M -100 200 C 300 100, 400 500, 800 300 C 1100 150, 1300 600, 1600 400"
              stroke={currentDesign.doodleColor}
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <path
              d="M 100 600 C 400 400, 600 750, 1100 500 C 1300 350, 1500 700, 1700 550"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            <g opacity="0.4" stroke="#ffffff" strokeWidth="1.5" fill="none">
              <path d="M 40 280 L 25 295 L 40 310 M 70 280 L 85 295 L 70 310 M 60 275 L 50 315" />
              <rect x="20" y="240" width="80" height="22" rx="4" />
              <rect x="1360" y="320" width="50" height="40" rx="8" />
              <circle cx="1375" cy="336" r="4" fill="#fff" />
              <circle cx="1395" cy="336" r="4" fill="#fff" />
            </g>
          </svg>
        </div>

        {/* Outer container */}
        <div className="max-w-[1340px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* ── Left Content (Morphing text & badges) ──────────────────────── */}
          <motion.div
            key={`left-${designIndex}`}
            className="lg:col-span-7 space-y-6 text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow badge */}
            <div>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-white shadow-sm"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: `1px solid ${currentDesign.eyebrowBorder}`,
                }}
              >
                <Sparkles size={12} style={{ color: currentDesign.accentColor }} />
                {currentDesign.eyebrow}
              </span>
            </div>

            {/* Headline matching Photo 2 & 3 layout */}
            <h1
              className="font-black text-white leading-[1.05] tracking-tight uppercase"
              style={{
                fontSize: 'clamp(2.7rem, 5vw, 4.2rem)',
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Transform{' '}
              <motion.span
                key={currentDesign.accentColor}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="inline-block px-3 py-1 text-sm md:text-base font-black rounded-md tracking-wider align-middle ml-2 shadow-lg"
                style={{
                  background: currentDesign.accentColor,
                  color: currentDesign.accentTextColor,
                  transform: 'translateY(-6px)',
                }}
              >
                YOUR SCHOOL
              </motion.span>
              <br />
              Into The Future
            </h1>

            {/* Subtitle / User Tagline */}
            <div className="space-y-2">
              <motion.p
                key={currentDesign.tagline}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-black text-transparent bg-clip-text uppercase tracking-widest text-xs md:text-sm"
                style={{
                  backgroundImage: currentDesign.taglineGradient,
                }}
              >
                {currentDesign.tagline}
              </motion.p>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
                Turnkey AI, Coding & Robotics labs — fully installed and managed on your campus. NEP 2020 compliant.
              </p>
            </div>

            {/* Dynamic Domain Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {currentDesign.pills.map((pill) => (
                <motion.span
                  key={pill.text}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-white shadow-md transition-transform"
                  style={{ background: pill.bg }}
                >
                  {pill.text}
                </motion.span>
              ))}
            </div>

            {/* Dynamic CTA Button & Style controls */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('partner-form')}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105 cursor-pointer shadow-xl"
                style={{
                  background: currentDesign.btnGradient,
                  boxShadow: `0 10px 30px ${currentDesign.btnGlow}`,
                }}
              >
                <Calendar size={17} />
                Schedule Meeting
              </button>

              {/* Design indicator dots */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/15">
                {DYNAMIC_DESIGNS.map((d, i) => (
                  <button
                    key={d.id}
                    onClick={() => setDesignIndex(i)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: i === designIndex ? '20px' : '8px',
                      background: i === designIndex ? currentDesign.accentColor : 'rgba(255,255,255,0.3)',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right Content: Morphing Photo Frame Layout ──────────────── */}
          <motion.div
            key={`right-${designIndex}`}
            className="lg:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Left Nav Arrow */}
            <button
              type="button"
              onClick={prevDesign}
              className="absolute -left-5 z-30 w-11 h-11 rounded-full flex items-center justify-center bg-black/70 text-white border border-white/20 hover:bg-black/90 transition-all shadow-2xl cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Dynamic Frame Photo Container */}
            <div className="relative w-full max-w-[460px] aspect-square p-2">
              
              {/* Outer glow aura */}
              <div
                className="absolute inset-0 rounded-full blur-3xl pointer-events-none opacity-40 transition-all duration-700"
                style={{
                  background: `radial-gradient(circle, ${currentDesign.accentColor} 0%, ${currentDesign.doodleColor} 60%, transparent 80%)`,
                }}
              />

              {/* Photo grid frame morphing based on design */}
              <div className="relative w-full h-full overflow-hidden rounded-3xl p-1">
                
                {currentDesign.frameStyle === 'flower' && (
                  <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-3.5">
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl border border-white/20">
                      <img src={currentDesign.photos[0].src} alt="Lab" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative row-span-2 overflow-hidden rounded-[3rem] shadow-xl border border-white/20">
                      <img src={currentDesign.photos[1].src} alt="Robotics" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative overflow-hidden rounded-full shadow-xl border border-white/20">
                      <img src={currentDesign.photos[2].src} alt="Classroom" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}

                {currentDesign.frameStyle === 'arch' && (
                  <div className="w-full h-full grid grid-cols-12 gap-3">
                    <div className="col-span-7 relative overflow-hidden rounded-t-[5rem] rounded-b-[2.5rem] shadow-xl border border-white/20">
                      <img src={currentDesign.photos[0].src} alt="AI" className="w-full h-full object-cover" />
                    </div>
                    <div className="col-span-5 space-y-3 flex flex-col justify-between">
                      <div className="h-1/2 relative overflow-hidden rounded-[2rem] shadow-xl border border-white/20">
                        <img src={currentDesign.photos[1].src} alt="Design" className="w-full h-full object-cover" />
                      </div>
                      <div className="h-1/2 relative overflow-hidden rounded-full shadow-xl border border-white/20">
                        <img src={currentDesign.photos[2].src} alt="App" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                )}

                {currentDesign.frameStyle === 'quad' && (
                  <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-3">
                    {currentDesign.photos.map((p, idx) => (
                      <div key={idx} className="relative overflow-hidden rounded-[2rem] shadow-xl border border-white/20">
                        <img src={p.src} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                {currentDesign.frameStyle === 'matrix' && (
                  <div className="w-full h-full relative overflow-hidden rounded-[3.5rem] shadow-2xl border-2 border-white/25">
                    <img src={currentDesign.photos[0].src} alt="Main" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white">
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-400">{currentDesign.photos[0].title}</p>
                      <p className="text-[11px] text-slate-300 mt-0.5">On-campus labs installed & operated 100% by Floyd School</p>
                    </div>
                  </div>
                )}

                {/* Floating badge */}
                <div className="absolute bottom-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white flex items-center gap-1.5 shadow-lg">
                  <Sparkles size={12} style={{ color: currentDesign.accentColor }} />
                  <span>Design Variation #{designIndex + 1}</span>
                </div>
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button
              type="button"
              onClick={nextDesign}
              className="absolute -right-5 z-30 w-11 h-11 rounded-full flex items-center justify-center bg-black/70 text-white border border-white/20 hover:bg-black/90 transition-all shadow-2xl cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>

        </div>
      </motion.section>
    </>
  );
};

export default PartnershipHero;
