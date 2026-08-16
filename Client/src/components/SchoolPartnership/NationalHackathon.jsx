import { motion } from 'framer-motion';
import { ArrowRight, Award, BookOpen, Calendar, CheckCircle2, Cpu } from 'lucide-react';

const MODELS = [
  {
    icon: BookOpen,
    tier: '01',
    title: 'Curriculum Partner',
    description: 'Future-skills modules inside the school timetable.',
    color: '#6C63FF',
    glow: 'rgba(108,99,255,0.25)',
    gradient: 'linear-gradient(135deg, #6C63FF 0%, #818cf8 100%)',
    bg: 'linear-gradient(145deg, rgba(108,99,255,0.14) 0%, rgba(108,99,255,0.04) 100%)',
    features: ['Weekly classes', 'Curriculum mapping'],
  },
  {
    icon: Calendar,
    tier: '02',
    title: 'After-School Partner',
    description: 'Deep-dive bootcamps after school hours.',
    color: '#0ea5e9',
    glow: 'rgba(14,165,233,0.25)',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
    bg: 'linear-gradient(145deg, rgba(14,165,233,0.14) 0%, rgba(14,165,233,0.04) 100%)',
    features: ['AI & Robotics', 'Hackathon entry'],
  },
  {
    icon: Cpu,
    tier: '03',
    title: 'Innovation Lab Partner',
    description: 'Turnkey AI and robotics lab on campus.',
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.25)',
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
    bg: 'linear-gradient(145deg, rgba(244,63,94,0.14) 0%, rgba(244,63,94,0.04) 100%)',
    features: ['Lab setup', 'Campus mentor'],
  },
  {
    icon: Award,
    tier: '04',
    title: 'Teacher Upskilling',
    description: 'Python, AI and IoT training for faculty.',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.25)',
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    bg: 'linear-gradient(145deg, rgba(16,185,129,0.14) 0%, rgba(16,185,129,0.04) 100%)',
    features: ['Live workshops', 'Certifications'],
  },
];

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const NationalHackathon = () => {
  return (
    <section
      id="models"
      className="relative overflow-hidden px-6 py-24 lg:px-12"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 45%, #f1f5f9 100%)' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-[380px] w-[380px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center md:mb-16"
        >
          <span
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{
              background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(14,165,233,0.08))',
              borderColor: 'rgba(108,99,255,0.2)',
              color: '#5b54e8',
            }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
            Collaboration Tiers
          </span>
          <h2
            className="mb-4 font-black leading-tight tracking-tight text-slate-900"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Flexible Partnership{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #6C63FF 0%, #0ea5e9 100%)' }}
            >
              Models
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-slate-500">
            Pick the model that fits your school.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {MODELS.map((model) => {
            const Icon = model.icon;

            return (
              <motion.article
                key={model.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
              >
                <div className="h-1.5" style={{ background: model.gradient }} />

                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                      style={{ background: model.bg, border: `1px solid ${model.color}22` }}
                    >
                      <Icon size={24} style={{ color: model.color }} strokeWidth={2.2} />
                    </div>
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-black tracking-[0.18em]"
                      style={{ background: `${model.color}12`, color: model.color }}
                    >
                      TIER {model.tier}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3
                      className="text-xl font-black text-slate-900"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {model.title}
                    </h3>
                  </div>

                  <p className="mb-5 text-sm text-slate-500">{model.description}</p>

                  <ul className="mb-6 space-y-2">
                    {model.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: model.color }}
                          strokeWidth={2.5}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold text-white transition-all duration-300 hover:gap-3"
                    style={{
                      background: model.gradient,
                      boxShadow: `0 10px 28px ${model.glow}`,
                    }}
                  >
                    Inquire
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default NationalHackathon;
