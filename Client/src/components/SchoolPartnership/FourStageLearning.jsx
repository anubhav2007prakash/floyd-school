import { motion } from 'framer-motion';
import { Search, BookOpen, Wrench, Rocket, Sparkles, ArrowRight } from 'lucide-react';

const STAGES = [
  {
    step: '01',
    title: 'Discover',
    icon: Search,
    color: '#38BDF8',
    glow: 'rgba(56,189,248,0.25)',
    gradient: 'linear-gradient(135deg, #38BDF8 0%, #2563EB 100%)',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.3)',
    description: 'Understand the big picture. How do these technologies work and why do they matter?',
    goal: 'Build curiosity & context',
  },
  {
    step: '02',
    title: 'Learn',
    icon: BookOpen,
    color: '#A78BFA',
    glow: 'rgba(167,139,250,0.25)',
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.3)',
    description: 'Go deep into core skills, tools and logic through exercises students actually do.',
    goal: 'Master core skills',
  },
  {
    step: '03',
    title: 'Build',
    icon: Wrench,
    color: '#EC4899',
    glow: 'rgba(236,72,153,0.25)',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #E11D48 100%)',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.3)',
    description: 'Build a complete working project from start to finish with mentor guidance.',
    goal: 'Ship a real project',
  },
  {
    step: '04',
    title: 'Launch',
    icon: Rocket,
    color: '#10B981',
    glow: 'rgba(16,185,129,0.25)',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.3)',
    description: 'Present work, earn certification, leave with something real and portfolio-worthy.',
    goal: 'Graduate as a builder',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const FourStageLearning = () => {
  return (
    <section
      id="four-stage-learning"
      className="py-24 px-6 lg:px-12 relative overflow-hidden text-slate-100"
      style={{
        background: 'linear-gradient(180deg, #070926 0%, #0c0e38 50%, #070926 100%)',
      }}
    >
      {/* Background Orbs */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)', filter: 'blur(90px)' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)', filter: 'blur(90px)' }}
      />

      {/* Background Dot Matrix Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Eyebrow Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-5 shadow-lg"
            style={{
              background: 'rgba(167,139,250,0.12)',
              border: '1px solid rgba(167,139,250,0.3)',
              color: '#A78BFA',
            }}
          >
            <Sparkles size={14} className="text-purple-400" />
            FOUR STAGE LEARNING MODEL
          </span>

          {/* Headline */}
          <h2
            className="font-black text-white mb-5 leading-tight tracking-tight"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            From Curiosity to{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(90deg, #A78BFA 0%, #EC4899 50%, #38BDF8 100%)',
              }}
            >
              Confidence in Four Steps.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
            Every Floyd School program follows the same proven framework, moving from curiosity to creation.
          </p>
        </motion.div>

        {/* ── 4-Card Process Track ── */}
        <div className="relative">
          
          {/* Connecting Glow Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[2px] z-0 pointer-events-none opacity-40"
            style={{
              background: 'linear-gradient(90deg, #38BDF8 0%, #A78BFA 33%, #EC4899 66%, #10B981 100%)',
            }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {STAGES.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative rounded-3xl p-7 flex flex-col justify-between overflow-hidden group transition-all duration-300 bg-slate-900/80 backdrop-blur-xl border"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* Subtle hover gradient background wash */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${s.glow} 0%, transparent 70%)` }}
                  />

                  {/* Top bar accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                    style={{ background: s.gradient }}
                  />

                  <div>
                    {/* Top Row: Step Number Pill & Icon */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      {/* Step Badge */}
                      <span
                        className="w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black tracking-widest text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: s.gradient,
                          boxShadow: `0 8px 20px ${s.glow}`,
                        }}
                      >
                        {s.step}
                      </span>

                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-6"
                        style={{
                          background: s.bg,
                          border: `1px solid ${s.border}`,
                        }}
                      >
                        <Icon size={22} style={{ color: s.color }} />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3
                      className="text-2xl font-black text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-300"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {s.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {s.description}
                    </p>
                  </div>

                  {/* Bottom Goal Tag */}
                  <div className="pt-4 border-t border-white/10 relative z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
                      GOAL
                    </span>
                    <p
                      className="text-xs font-black tracking-wide leading-snug transition-colors duration-300"
                      style={{ color: s.color }}
                    >
                      {s.goal}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white transition-all duration-300 hover:scale-105 cursor-pointer shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #A78BFA, #38BDF8)',
              boxShadow: '0 8px 24px rgba(167,139,250,0.3)',
            }}
          >
            Explore Curriculum Framework
            <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FourStageLearning;
