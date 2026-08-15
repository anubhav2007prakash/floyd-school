import { motion } from 'framer-motion';
import { BookOpen, Calendar, Cpu, Award } from 'lucide-react';

const MODELS = [
  {
    icon: BookOpen,
    title: 'Curriculum Partner',
    tagline: 'Timetable Integration',
    description: 'Timetable-integrated future-skills modules with certified syllabus.',
    color: '#6C63FF',
    glow: 'rgba(108,99,255,0.22)',
    gradient: 'linear-gradient(135deg, #6C63FF, #818cf8)',
    bg: 'rgba(108,99,255,0.08)',
    features: ['Weekly timetable classes', 'Full curriculum mapping', 'Progress evaluations', 'Admin dashboard'],
  },
  {
    icon: Calendar,
    title: 'After-School Partner',
    tagline: 'Extracurricular Bootcamps',
    description: 'Deep-dive extracurricular bootcamps held post school hours.',
    color: '#0ea5e9',
    glow: 'rgba(14,165,233,0.22)',
    gradient: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
    bg: 'rgba(14,165,233,0.08)',
    features: ['Advanced AI & Robotics', 'Project showcases', 'Community forums', 'Hackathon entry'],
  },
  {
    icon: Cpu,
    title: 'Innovation Lab Partner',
    tagline: 'Campus Infrastructure',
    description: 'Turnkey physical campus lab setup with AI & robotics hardware.',
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.22)',
    gradient: 'linear-gradient(135deg, #f43f5e, #fb7185)',
    bg: 'rgba(244,63,94,0.08)',
    features: ['Hardware & lab setup', 'Dedicated lab branding', 'On-site instructor', 'Annual hardware updates'],
  },
  {
    icon: Award,
    title: 'Teacher Upskilling',
    tagline: 'Empowering Educators',
    description: 'Upskill your staff in Python, AI tools & IoT fundamentals.',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.22)',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    bg: 'rgba(16,185,129,0.08)',
    features: ['Live mentor workshops', 'Teacher certifications', 'Teaching resource guides', 'Ongoing tech support'],
  },
];

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const NationalHackathon = () => {
  return (
    <section id="models" className="py-24 px-6 lg:px-12 relative overflow-hidden" style={{ background: '#f8fafc' }}>
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      {/* Wavy top divider */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 20 Q360 40 720 20 Q1080 0 1440 20 L1440 0 L0 0 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full setu-body text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.12), rgba(14,165,233,0.12))', border: '1px solid rgba(108,99,255,0.25)', color: '#6C63FF' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            COLLABORATION TIERS
          </span>
          <h2 className="setu-heading font-extrabold text-slate-900 mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.15 }}>
            Flexible Partnership{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6C63FF, #0ea5e9)' }}>
              Models
            </span>
          </h2>
          <p className="setu-body text-slate-500 max-w-2xl mx-auto" style={{ fontSize: '1.05rem' }}>
            Choose the model that fits your school's vision and calendar.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {MODELS.map((model) => (
            <motion.div key={model.title} variants={cardVariants}
              whileHover={{ y: -7, boxShadow: `0 0 0 1px ${model.color}30, 0 20px 50px ${model.glow}` }}
              className="group relative rounded-3xl overflow-hidden cursor-default flex flex-col"
              style={{ background: '#ffffff', border: '1px solid rgba(148,163,184,0.18)', transition: 'box-shadow 0.3s, transform 0.3s' }}
            >
              {/* Top colour bar */}
              <div className="h-1" style={{ background: model.gradient }} />

              <div className="p-6 flex flex-col flex-1 space-y-5">
                {/* Icon */}
                <motion.div whileHover={{ scale: 1.12, rotate: -5 }} transition={{ duration: 0.3 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: model.bg, border: `1px solid ${model.color}20` }}>
                  <model.icon size={22} style={{ color: model.color }} />
                </motion.div>

                <div>
                  <h3 className="setu-heading font-bold text-slate-900 text-lg">{model.title}</h3>
                  <div className="setu-body text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ color: model.color }}>
                    {model.tagline}
                  </div>
                </div>

                <p className="setu-body text-slate-500 text-xs leading-relaxed flex-1">{model.description}</p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {model.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 setu-body text-slate-600 text-xs">
                      <span className="font-bold" style={{ color: model.color }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-2.5 rounded-full setu-body text-xs font-bold transition-all duration-300 cursor-pointer text-white mt-auto"
                  style={{ background: model.gradient, boxShadow: `0 4px 14px ${model.glow}` }}>
                  Inquire Model →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 40" fill="none" className="w-full">
          <path d="M0 20 Q360 0 720 20 Q1080 40 1440 20 L1440 40 L0 40 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default NationalHackathon;
