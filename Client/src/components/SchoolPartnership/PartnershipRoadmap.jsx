import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'Does Floyd School require any existing infrastructure from our school?',
    a: 'No. We provide mentors, teaching materials, and hardware kits. Your school only needs to provide classroom space.',
  },
  {
    q: 'Will our existing teachers need to be involved?',
    a: 'No. Floyd School mentors independently manage and run all sessions.',
  },
  {
    q: 'How does the free trial work?',
    a: 'We conduct a 7-day free campus bootcamp with zero commitment. You decide whether to continue after testing.',
  },
  {
    q: 'Which classes and age groups do your programs support?',
    a: 'Classes 7 to 12. Modules are customized by grade level (Robotics for middle school, Career Lab for senior school).',
  },
  {
    q: 'How many students can be in a batch?',
    a: 'Typically 25–40 students per batch. Multiple batches can run simultaneously for larger cohorts.',
  },
  {
    q: 'What certifications do students receive?',
    a: 'Verified digital certificates (e.g., Floyd School AI Practitioner) for LinkedIn and college portfolios.',
  },
  {
    q: 'How do we track student progress?',
    a: 'Via our real-time admin dashboard tracking attendance, assessment scores, and project deliverables.',
  },
  {
    q: 'What is the pricing for a full program?',
    a: 'Customized based on cohort size and duration. We offer per-student, per-batch, or annual partnership models.',
  },
  {
    q: 'Is there a national hackathon for students?',
    a: "Yes! Enrolled students compete in Floyd School's bi-annual National Hackathon.",
  },
  {
    q: 'How soon can Floyd School start at our school?',
    a: 'Free trial starts within 2–4 weeks. Full program onboarding takes 1–2 weeks post-trial.',
  },
];

const ACCENT_COLORS = ['#6C63FF', '#0ea5e9', '#f43f5e', '#10b981', '#f59e0b', '#8b5cf6'];

const FAQItem = ({ faq, idx, isOpen, onToggle }) => {
  const color = ACCENT_COLORS[idx % ACCENT_COLORS.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (idx % 5) * 0.05 }}
      className="rounded-2xl overflow-hidden"
      style={{
        border: isOpen ? `1px solid ${color}30` : '1px solid rgba(148,163,184,0.2)',
        background: '#ffffff',
        boxShadow: isOpen ? `0 4px 20px ${color}15` : 'none',
        transition: 'border 0.3s, box-shadow 0.3s',
      }}
    >
      <button onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-6 text-left group hover:bg-slate-50 transition-colors duration-200">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
            style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
            <HelpCircle size={12} style={{ color }} />
          </div>
          <span className="setu-heading font-bold text-slate-800 text-sm md:text-base leading-snug">{faq.q}</span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
          style={{
            background: isOpen ? `${color}12` : 'rgba(148,163,184,0.08)',
            border: isOpen ? `1px solid ${color}25` : '1px solid rgba(148,163,184,0.18)',
          }}>
          <ChevronDown size={14} style={{ color: isOpen ? color : '#64748b' }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden">
            <div className="flex gap-3 px-6 pb-6">
              <div className="w-0.5 flex-shrink-0 rounded-full self-stretch" style={{ background: `${color}30` }} />
              <p className="setu-body text-slate-600 leading-relaxed text-sm">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PartnershipRoadmap = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = FAQS.filter(
    (faq) => !search || faq.q.toLowerCase().includes(search.toLowerCase()) || faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 px-6 lg:px-12 relative overflow-hidden" style={{ background: '#f8fafc' }}>
      {/* Wavy top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 40" fill="none" className="w-full">
          <path d="M0 20 Q360 40 720 20 Q1080 0 1440 20 L1440 0 L0 0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 65%)', filter: 'blur(60px)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full setu-body text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(14,165,233,0.1))', border: '1px solid rgba(79,70,229,0.2)', color: 'var(--accent-setu2)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            SUPPORT DESK
          </span>
          <h2 className="setu-heading font-extrabold text-slate-900 mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.15 }}>
            Questions?{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6C63FF, #0ea5e9)' }}>
              We've got answers.
            </span>
          </h2>
          <p className="setu-body text-slate-500 max-w-2xl mx-auto" style={{ fontSize: '1.05rem' }}>
            Quick answers to common partnership questions.
          </p>

          {/* Animated search */}
          <div className="relative max-w-md mx-auto mt-8">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-10 pr-4 py-3.5 rounded-full setu-body text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-400/30"
              style={{ background: '#ffffff', border: '1.5px solid rgba(148,163,184,0.3)' }} />
          </div>
        </motion.div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filtered.length === 0 && (
            <p className="text-center setu-body text-slate-400 py-10">No matching questions found. Try a different search term.</p>
          )}
          {filtered.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} idx={idx}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)} />
          ))}
        </div>
      </div>

      {/* Wavy bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 40" fill="none" className="w-full">
          <path d="M0 20 Q360 0 720 20 Q1080 40 1440 20 L1440 40 L0 40 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default PartnershipRoadmap;
