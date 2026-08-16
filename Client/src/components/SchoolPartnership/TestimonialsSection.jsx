import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    role: 'Principal',
    name: 'School Leadership',
    initial: 'P',
    designation: 'Partner School Principal',
    quote: "Floyd School's programs give our students hands on technology experience directly in our computer labs. A valuable addition to our academic offerings.",
    achievement: 'AI Lab Program',
    color: '#6C63FF',
    glow: 'rgba(108,99,255,0.15)',
    gradient: 'linear-gradient(135deg, #6C63FF, #818cf8)',
  },
  {
    role: 'Teacher',
    name: 'Faculty Member',
    initial: 'T',
    designation: 'Computer Science HOD',
    quote: "Floyd School handles everything, including mentors, scheduling, and project evaluation. Our teachers focus on core syllabus while students get specialized training.",
    achievement: 'Fully Managed Operations',
    color: '#0ea5e9',
    glow: 'rgba(14,165,233,0.15)',
    gradient: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
  },
  {
    role: 'Student',
    name: 'Student Builder',
    initial: 'S',
    designation: 'Student',
    quote: "Floyd School labs are an exciting part of our week. We do not just learn theory, we build real projects.",
    achievement: 'Project Showcase',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.15)',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
  },
];

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full setu-body text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(16,185,129,0.1))', border: '1px solid rgba(108,99,255,0.2)', color: 'var(--accent-setu2)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            FEEDBACK &amp; REVIEWS
          </span>
          <h2 className="setu-heading font-extrabold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.15 }}>
            Hear from Our{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6C63FF, #0ea5e9)' }}>
              Partners
            </span>
          </h2>
          <p className="setu-body text-slate-400 max-w-2xl mx-auto" style={{ fontSize: '1.05rem' }}>
            Real feedback from principals, teachers, and students.
          </p>
        </motion.div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {TESTIMONIALS.map((t, idx) => (
            <motion.button key={t.role} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(idx)}
              className="flex items-center gap-2 px-6 py-3 rounded-full setu-body text-sm font-bold transition-all duration-300 cursor-pointer"
              style={{
                background: activeTab === idx ? t.gradient : 'rgba(255,255,255,0.08)',
                border: activeTab === idx ? 'none' : `1px solid rgba(255,255,255,0.18)`,
                color: activeTab === idx ? '#ffffff' : '#cbd5e1',
                boxShadow: activeTab === idx ? `0 6px 20px ${t.glow}` : 'none',
              }}>

              {t.role}
            </motion.button>
          ))}
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab}
              initial={{ opacity: 0, scale: 0.95, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -18 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 md:p-12 rounded-3xl bg-slate-900 overflow-hidden"
              style={{
                border: `1px solid ${TESTIMONIALS[activeTab].color}40`,
                boxShadow: `0 0 0 1px ${TESTIMONIALS[activeTab].color}20, 0 20px 50px ${TESTIMONIALS[activeTab].glow}`,
              }}
            >
              {/* Gradient top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: TESTIMONIALS[activeTab].gradient }} />

              {/* Background quote icon */}
              <Quote className="absolute top-10 right-10 w-20 h-20 pointer-events-none opacity-[0.06]" style={{ color: TESTIMONIALS[activeTab].color }} />

              <div className="space-y-6 relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.07 }}>
                      <Star size={18} fill="#fbbf24" className="text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                <p className="setu-body text-slate-200 text-lg md:text-xl font-medium leading-relaxed italic">
                  "{TESTIMONIALS[activeTab].quote}"
                </p>

                <div className="pt-5 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white"
                      style={{ background: TESTIMONIALS[activeTab].gradient }}>
                      {TESTIMONIALS[activeTab].initial}
                    </div>
                    <div>
                      <h4 className="setu-heading font-black text-white text-base">{TESTIMONIALS[activeTab].name}</h4>
                      <p className="setu-body text-slate-400 text-xs mt-0.5">{TESTIMONIALS[activeTab].designation}</p>
                    </div>
                  </div>
                  <span className="setu-body text-xs font-bold px-4 py-2 rounded-full text-white flex-shrink-0"
                    style={{ background: TESTIMONIALS[activeTab].gradient, boxShadow: `0 4px 14px ${TESTIMONIALS[activeTab].glow}` }}>
                    {TESTIMONIALS[activeTab].achievement}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
