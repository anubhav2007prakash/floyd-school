import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'What is Floyd School?',
    a: 'Floyd School provides hands on technology education for students from Classes 6 to 12. We partner with schools to deliver mentor led learning in Artificial Intelligence, Coding, Cybersecurity, Robotics and modern technology domains.',
  },
  {
    q: 'Which classes is the program suitable for?',
    a: 'Our programs are specifically designed for students in Classes 6 to 12, with curricula and project complexity tailored to each age group.',
  },
  {
    q: 'What is the complimentary 1 day technology immersion?',
    a: 'The 1 day technology immersion is an introductory, on campus experience where students explore a technology domain through hands on activities and discover what excites them before beginning a full program.',
  },
  {
    q: 'How is the 4 month program structured?',
    a: 'The four month program consists of regular mentor led sessions, practical exercises, interactive assignments and a capstone project where students build and showcase a working technology solution.',
  },
  {
    q: 'What infrastructure does the school need to provide?',
    a: 'The school only needs to provide access to its existing computer lab with standard internet connectivity. Floyd mentors bring the curriculum, software environments and project resources.',
  },
  {
    q: 'Who conducts the classes?',
    a: 'All sessions are led directly by trained Floyd mentors who specialize in technology domains and practical instruction.',
  },
  {
    q: 'Do students get certificates?',
    a: 'Yes. Students who successfully complete the program and build their required projects receive a certificate from Floyd School recognizing their skills and practical accomplishments.',
  },
  {
    q: 'Can students participate in hackathons?',
    a: 'Yes. Students have opportunities to participate in hackathons and project showcases where they can present their work and learn collaboratively.',
  },
  {
    q: 'How can schools track student progress?',
    a: 'Through our learning platform, mentors and school teams maintain visibility into attendance, activity submissions, assessment scores and project milestones.',
  },
  {
    q: 'How does a school get started?',
    a: 'Schools can begin by requesting a discovery session through our partnership form. Our team connects with school leadership to plan the complimentary 1 day immersion and recommend appropriate programs.',
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
              <p className="setu-body text-slate-600 leading-relaxed text-sm font-medium">{faq.a}</p>
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full setu-body text-xs font-bold uppercase tracking-widest mb-4 bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-sm">
            <HelpCircle size={14} className="text-indigo-600" />
            PARTNERSHIP FAQ
          </span>
          <h2 className="setu-heading font-black text-slate-900 mb-4 uppercase tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.15 }}>
            EVERYTHING SCHOOL LEADERS, PARENTS{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6C63FF, #0ea5e9)' }}>
              AND STUDENTS NEED TO KNOW.
            </span>
          </h2>
          <p className="setu-body text-slate-600 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            Find clear answers about programs, campus requirements, mentors, student projects and getting started with Floyd School.
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
