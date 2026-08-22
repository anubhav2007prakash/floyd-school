import { motion } from 'framer-motion';
import { Sparkles, Calendar, Settings, PlayCircle, Hammer, Award, Compass, Search } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    step: '01',
    badge: '01 DISCOVER',
    title: 'DISCOVERY & ALIGNMENT',
    description: "We understand your school's goals, existing computer lab facilities and student profile.",
    icon: Search,
    color: '#6C63FF',
    glow: 'rgba(108,99,255,0.22)',
    gradient: 'linear-gradient(135deg, #6C63FF, #818cf8)',
    bg: 'rgba(108,99,255,0.08)',
  },
  {
    step: '02',
    badge: '02 EXPERIENCE',
    title: 'COMPLIMENTARY 1 DAY IMMERSION',
    description: "Students and faculty experience Floyd School's hands on approach on campus.",
    icon: Calendar,
    color: '#0ea5e9',
    glow: 'rgba(14,165,233,0.22)',
    gradient: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
    bg: 'rgba(14,165,233,0.08)',
  },
  {
    step: '03',
    badge: '03 DESIGN',
    title: 'PROGRAM SELECTION & PLANNING',
    description: 'Choose the right technology domains, schedule and batch structure for your students.',
    icon: Settings,
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.22)',
    gradient: 'linear-gradient(135deg, #a855f7, #c084fc)',
    bg: 'rgba(168,85,247,0.08)',
  },
  {
    step: '04',
    badge: '04 LEARN',
    title: 'MENTOR LED PROGRAM',
    description: 'Trained Floyd mentors conduct regular hands on technology sessions in your school.',
    icon: PlayCircle,
    color: '#10b981',
    glow: 'rgba(16,185,129,0.22)',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    bg: 'rgba(16,185,129,0.08)',
  },
  {
    step: '05',
    badge: '05 BUILD',
    title: 'PROJECT DEVELOPMENT',
    description: 'Students apply their learning to create, refine and document real world projects.',
    icon: Hammer,
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.22)',
    gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    bg: 'rgba(245,158,11,0.08)',
  },
  {
    step: '06',
    badge: '06 SHOWCASE',
    title: 'SHOWCASE & CERTIFICATION',
    description: 'Students present their work, participate in hackathons and receive Floyd certificates.',
    icon: Award,
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.22)',
    gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
    bg: 'rgba(236,72,153,0.08)',
  },
];

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const GroupProjects = () => {
  return (
    <section id="timeline" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white">
      {/* Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full setu-body text-xs font-bold uppercase tracking-widest mb-4 bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-sm">
            <Sparkles size={14} className="text-amber-500" />
            PARTNERSHIP JOURNEY
          </span>
          <h2 className="setu-heading font-black text-slate-900 mb-4 uppercase tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.15 }}>
            FROM FIRST CONVERSATION{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6C63FF, #0ea5e9)' }}>
              TO FIRST CLASS.
            </span>
          </h2>
          <p className="setu-body text-slate-600 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            A simple, structured process that helps your school introduce practical technology education without operational complexity.
          </p>
        </motion.div>

        {/* 6 Step Cards Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">

          {TIMELINE_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.step} variants={cardVariants}
                whileHover={{ y: -6, boxShadow: `0 0 0 1px ${step.color}25, 0 16px 40px ${step.glow}` }}
                className="group relative z-10 p-7 rounded-3xl flex flex-col bg-slate-50 border border-slate-200/80 overflow-hidden hover:bg-white transition-all duration-300"
              >
                {/* Hover wash */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ background: step.bg }} />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm">
                      {step.badge}
                    </span>
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-md"
                      style={{ background: step.gradient }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-900 mb-2 uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default GroupProjects;
