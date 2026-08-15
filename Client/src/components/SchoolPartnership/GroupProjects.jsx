import { motion } from 'framer-motion';
import { Sparkles, Calendar, Settings, PlayCircle } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    step: '01',
    title: 'Partnership Inquiry',
    description: 'Submit the form or call us. We schedule a briefing with your administration.',
    icon: Sparkles,
    color: '#6C63FF',
    glow: 'rgba(108,99,255,0.22)',
    gradient: 'linear-gradient(135deg, #6C63FF, #818cf8)',
    bg: 'rgba(108,99,255,0.08)',
  },
  {
    step: '02',
    title: 'On-Campus Free Trial',
    description: '7-day free bootcamp at your campus. Experience our pedagogy and mentor quality firsthand.',
    icon: Calendar,
    color: '#0ea5e9',
    glow: 'rgba(14,165,233,0.22)',
    gradient: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
    bg: 'rgba(14,165,233,0.08)',
  },
  {
    step: '03',
    title: 'Lab Design & Deployment',
    description: 'Sign agreement, select modules. We install customized lab infrastructure.',
    icon: Settings,
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.22)',
    gradient: 'linear-gradient(135deg, #f43f5e, #fb7185)',
    bg: 'rgba(244,63,94,0.08)',
  },
  {
    step: '04',
    title: 'Live Lab Delivery',
    description: 'Mentors commence weekly classes mapped to your timetable. Track via admin dashboard.',
    icon: PlayCircle,
    color: '#10b981',
    glow: 'rgba(16,185,129,0.22)',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    bg: 'rgba(16,185,129,0.08)',
  },
];

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const GroupProjects = () => {
  return (
    <section id="timeline" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white">
      {/* Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full setu-body text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(14,165,233,0.1))', border: '1px solid rgba(79,70,229,0.2)', color: 'var(--accent-setu2)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            PROCESS FLOW
          </span>
          <h2 className="setu-heading font-extrabold text-slate-900 mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.15 }}>
            Simple Onboarding{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6C63FF, #0ea5e9)' }}>
              Timeline
            </span>
          </h2>
          <p className="setu-body text-slate-500 max-w-2xl mx-auto" style={{ fontSize: '1.05rem' }}>
            We handle 100% of logistics so your school starts without friction.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">

          {/* Connector line (desktop) */}
          <div className="absolute top-10 left-10 right-10 h-px hidden lg:block pointer-events-none"
            style={{ background: 'linear-gradient(90deg, #6C63FF, #0ea5e9, #f43f5e, #10b981)' }} />

          {TIMELINE_STEPS.map((step, idx) => (
            <motion.div key={step.step} variants={cardVariants}
              whileHover={{ y: -6, boxShadow: `0 0 0 1px ${step.color}25, 0 16px 40px ${step.glow}` }}
              className="group relative z-10 p-6 rounded-3xl flex flex-col bg-white overflow-hidden"
              style={{ border: '1px solid rgba(148,163,184,0.18)', transition: 'box-shadow 0.3s, transform 0.3s' }}
            >
              {/* Hover wash */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: step.bg }} />

              <div className="relative z-10 space-y-4">
                {/* Step number + Icon */}
                <div className="flex items-center justify-between">
                  <motion.div whileHover={{ scale: 1.12, rotate: -8 }} transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: step.gradient, boxShadow: `0 6px 18px ${step.glow}` }}>
                    <step.icon size={22} className="text-white" />
                  </motion.div>
                  <span className="setu-heading font-black text-3xl" style={{ color: `${step.color}15` }}>
                    {step.step}
                  </span>
                </div>

                <h3 className="setu-heading font-bold text-slate-900 text-lg">{step.title}</h3>
                <p className="setu-body text-slate-500 text-xs leading-relaxed">{step.description}</p>
              </div>

              {/* Bottom accent bar (grows on hover) */}
              <div className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: step.gradient }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GroupProjects;
