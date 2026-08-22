import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Settings, TrendingUp, Sparkles, Check } from 'lucide-react';

const SCHOOL_BENEFITS = [
  {
    icon: Sparkles,
    title: 'STUDENT ENGAGEMENT',
    description: 'High interest technology domains that keep students curious and actively involved.',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.25)',
    gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    bg: 'rgba(167,139,250,0.12)',
  },
  {
    icon: BookOpen,
    title: 'ACADEMIC ENRICHMENT',
    description: 'Practical learning that complements and enhances existing computer science education.',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.25)',
    gradient: 'linear-gradient(135deg, #0284c7, #38bdf8)',
    bg: 'rgba(56,189,248,0.12)',
  },
  {
    icon: Users,
    title: 'EXPERT MENTORSHIP',
    description: 'Trained mentors who deliver sessions directly, reducing school recruitment challenges.',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.25)',
    gradient: 'linear-gradient(135deg, #059669, #10b981)',
    bg: 'rgba(16,185,129,0.12)',
  },
  {
    icon: Settings,
    title: 'MINIMAL FACULTY BURDEN',
    description: 'End to end program management so your staff can focus on school operations.',
    color: '#fb7185',
    glow: 'rgba(251,113,133,0.25)',
    gradient: 'linear-gradient(135deg, #e11d48, #fb7185)',
    bg: 'rgba(251,113,133,0.12)',
  },
  {
    icon: TrendingUp,
    title: 'STUDENT PROGRESS',
    description: 'Regular updates and visibility into student learning and project outcomes.',
    color: '#fb923c',
    glow: 'rgba(251,146,60,0.25)',
    gradient: 'linear-gradient(135deg, #ea580c, #fb923c)',
    bg: 'rgba(251,146,60,0.12)',
  },
  {
    icon: Award,
    title: 'SCHOOL INNOVATION',
    description: 'Positions your school as a leader in forward looking technology education.',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.25)',
    gradient: 'linear-gradient(135deg, #be185d, #ec4899)',
    bg: 'rgba(236,72,153,0.12)',
  },
];

const COMPLIANCE_ITEMS = [
  'Classes 6 to 12 experiential learning',
  'Managed on-campus delivery model',
  'Regular student progress insights',
];

const SchoolBenefits = () => {
  return (
    <section
      id="school-benefits"
      className="py-28 px-6 lg:px-12 relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, #0d0f2b 0%, #0f172a 40%, #0d1d2e 70%, #0a0f1d 100%)',
      }}
    >
      {/* Ambient glow orbs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 65%)', filter: 'blur(80px)' }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, #38bdf8, #10b981, transparent)' }}
      />

      <div className="max-w-[1240px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* ── Left Panel ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Eyebrow pill */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em]"
            style={{
              background: 'rgba(16,185,129,0.12)',
              border: '1px solid rgba(16,185,129,0.35)',
              color: '#34d399',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            FOR SCHOOL LEADERS
          </span>

          {/* Highlighted heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-tight uppercase text-white"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
          >
            TECHNOLOGY LEARNING THAT WORKS{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 50%, #34d399 100%)',
              }}
            >
              FOR THE WHOLE SCHOOL.
            </span>
          </motion.h2>

          {/* Body text */}
          <p className="text-slate-300 leading-relaxed text-sm md:text-base font-medium">
            Floyd School partners with educational institutions to provide structured, mentor led technology education that aligns with academic goals and minimizes operational overhead.
          </p>

          {/* Compliance checklist */}
          <div className="space-y-3 pt-2">
            {COMPLIANCE_ITEMS.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 text-slate-200 text-sm font-semibold"
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}
                >
                  <Check size={11} strokeWidth={3} />
                </div>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Right Panel — 6 Benefit Cards ── */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SCHOOL_BENEFITS.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="group p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: pt.bg, border: `1px solid ${pt.color}30` }}
                  >
                    <Icon size={18} style={{ color: pt.color }} />
                  </div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide">{pt.title}</h3>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-normal">{pt.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Bottom border glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #10b981, #38bdf8, #7c3aed, transparent)' }}
      />
    </section>
  );
};

export default SchoolBenefits;
