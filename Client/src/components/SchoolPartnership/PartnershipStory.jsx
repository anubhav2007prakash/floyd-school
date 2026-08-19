import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Volume2, VolumeX } from 'lucide-react';

const STORY_STEPS = [
  {
    id: 'launch',
    title: 'Launch in weeks, not months',
    hero: 'Turnkey deployment for school labs, mentors, curriculum, and reporting.',
    detail: 'We handle the entire launch so your school is ready for live sessions without burdening teachers or IT staff.',
    note: 'Zero hardware sourcing, zero tech coordination, zero scheduling friction.',
    accent: '#6C63FF',
    video: '/videos/startup/v1.mp4',
  },
  {
    id: 'mentor-led',
    title: 'Live mentor-led school sessions',
    hero: 'Our trained mentors teach inside your existing computer lab or STEM room.',
    detail: 'Classroom-ready delivery built for school timetables, student groups, and easy parent communication.',
    note: 'Campus-ready mentors replace the need for faculty training or new hires.',
    accent: '#0ea5e9',
    video: '/videos/startup/v2.mp4',
  },
  {
    id: 'schedule',
    title: 'Real-time schedule & attendance',
    hero: 'Administrators see session plans, attendance, and engagement in one dashboard.',
    detail: 'Every lab period is tracked automatically, so school leaders can measure delivery without extra paperwork.',
    note: 'Live transparency for principals, coordinators, and lab managers.',
    accent: '#10b981',
    video: '/videos/startup/v3.mp4',
  },
  {
    id: 'parent-visibility',
    title: 'Parent progress visibility',
    hero: 'Families receive curated session highlights and student achievements.',
    detail: 'Parents stay connected to the learning journey with concise updates, not noise.',
    note: 'Stronger home-school partnership without extra messaging work.',
    accent: '#f59e0b',
    video: '/videos/startup/v4.mp4',
  },
  {
    id: 'assignments',
    title: 'Assignments, quizzes & projects',
    hero: 'Work is organized in a single place so every student knows what to submit next.',
    detail: 'Automatic submission tracking and score summaries help mentors keep every student on track.',
    note: 'Structured academic progress built into lab delivery.',
    accent: '#f43f5e',
    video: '/videos/startup/v5.mp4',
  },
  {
    id: 'recordings',
    title: 'Session recordings for revision',
    hero: 'Missed classes and revision are covered with searchable recorded sessions.',
    detail: 'Lessons are saved and indexed so students can revisit key topics anytime.',
    note: 'Reduces catch-up gaps and supports self-paced learning.',
    accent: '#8b5cf6',
    video: '/videos/startup/v6.mp4',
  },
  {
    id: 'insights',
    title: 'Progress insights that matter',
    hero: 'Skill reports, scorecards, and checkpoint summaries show learning momentum.',
    detail: 'Coaches and school leaders see what is working, what needs support, and where to invest next.',
    note: 'Data that respects schools, not bulky spreadsheets.',
    accent: '#22c55e',
    video: '/videos/startup/v7.mp4',
  },
  {
    id: 'growth',
    title: 'A continuous school improvement loop',
    hero: 'This partnership becomes a strategic advantage for reputation, admissions, and outcomes.',
    detail: 'Mentors, students, parents, and leaders align around measurable learning gains.',
    note: 'Growth feels intentional, repeatable and easy to share.',
    accent: '#0ea5e9',
    video: '/videos/startup/v8.mp4',
  },
];

const PartnershipStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  const current = STORY_STEPS[activeIndex];

  const handleStepClick = (i) => {
    setActiveIndex(i);
    // Reset & play video when step changes
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section
      id="lms-story"
      className="py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
      style={{ background: '#f7f8fc' }}
    >
      {/* Subtle bg orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.28em] mb-5"
            style={{
              background: 'rgba(108,99,255,0.08)',
              border: '1px solid rgba(108,99,255,0.18)',
              color: '#6C63FF',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            OUR FOUR MONTH JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
            How The Four Month Program
            <br className="hidden sm:block" /> Unfolds On Your Campus
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-500 leading-relaxed">
            From your zero cost trial week to student project delivery, here is what happens month by month.
          </p>
        </motion.div>

        {/* ── Main Layout ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden lg:grid lg:grid-cols-[0.95fr_1.15fr_0.95fr] gap-3 rounded-[28px] border border-slate-200 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.14)] bg-transparent items-stretch"
        >
          {/* ── Left Panel: Steps 1-4 ── */}
          <div className="h-full self-stretch rounded-[24px] border border-slate-200 bg-white overflow-hidden flex flex-col">
            {STORY_STEPS.slice(0, 4).map((step, i) => {
              const itemIndex = i;
              const isActive = itemIndex === activeIndex;
              const isPast = itemIndex < activeIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => handleStepClick(itemIndex)}
                  className="w-full text-left flex items-center justify-between gap-4 px-5 py-4 transition-all duration-200 focus:outline-none"
                  style={{
                    background: isActive ? `${step.accent}0d` : 'transparent',
                    borderLeft: isActive ? `4px solid ${step.accent}` : '4px solid transparent',
                    borderBottom: i < 3 ? '1px solid #f1f5f9' : 'none',
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-[10px] font-black transition-all duration-200"
                      style={{
                        background: isActive ? step.accent : isPast ? '#0f172a' : '#f1f5f9',
                        color: isActive || isPast ? '#fff' : '#64748b',
                      }}
                    >
                      {String(itemIndex + 1).padStart(2, '0')}
                    </div>
                    <h3
                      className="text-sm font-bold leading-snug truncate"
                      style={{ color: isActive ? step.accent : '#1e293b' }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  {isActive && (
                    <ChevronRight size={16} className="flex-shrink-0" style={{ color: step.accent }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Center Panel: Video Player ── */}
          <div className="w-full max-w-[560px] justify-self-center bg-slate-950 relative overflow-hidden min-h-[360px] aspect-[16/10] h-full rounded-[24px] border border-slate-200 flex flex-col">
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-700"
              style={{ background: `radial-gradient(circle at 60% 20%, ${current.accent}18 0%, transparent 55%)` }}
            />

            <button
              type="button"
              onClick={() => {
                setMuted((m) => !m);
                if (videoRef.current) videoRef.current.muted = !muted;
              }}
              className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
            >
              {muted
                ? <VolumeX size={16} className="text-white" />
                : <Volume2 size={16} className="text-white" />}
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex-1 flex items-center justify-center relative z-10"
              >
                <video
                  ref={videoRef}
                  key={current.video}
                  src={current.video}
                  autoPlay
                  muted={muted}
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {STORY_STEPS.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleStepClick(i)}
                  className="h-1.5 rounded-full transition-all duration-300 focus:outline-none"
                  style={{
                    width: i === activeIndex ? '28px' : '8px',
                    background: i === activeIndex ? current.accent : 'rgba(255,255,255,0.3)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── Right Panel: Steps 5-8 ── */}
          <div className="h-full self-stretch rounded-[24px] border border-slate-200 bg-white overflow-hidden flex flex-col">
            {STORY_STEPS.slice(4, 8).map((step, i) => {
              const itemIndex = i + 4;
              const isActive = itemIndex === activeIndex;
              const isPast = itemIndex < activeIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => handleStepClick(itemIndex)}
                  className="w-full text-left flex items-center justify-between gap-4 px-5 py-4 transition-all duration-200 focus:outline-none"
                  style={{
                    background: isActive ? `${step.accent}0d` : 'transparent',
                    borderLeft: isActive ? `4px solid ${step.accent}` : '4px solid transparent',
                    borderBottom: i < 3 ? '1px solid #f1f5f9' : 'none',
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-[10px] font-black transition-all duration-200"
                      style={{
                        background: isActive ? step.accent : isPast ? '#0f172a' : '#f1f5f9',
                        color: isActive || isPast ? '#fff' : '#64748b',
                      }}
                    >
                      {String(itemIndex + 1).padStart(2, '0')}
                    </div>
                    <h3
                      className="text-sm font-bold leading-snug truncate"
                      style={{ color: isActive ? step.accent : '#1e293b' }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  {isActive && (
                    <ChevronRight size={16} className="flex-shrink-0" style={{ color: step.accent }} />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Mobile card scroll (small screens) ── */}
        <div className="lg:hidden mt-6 overflow-x-auto flex gap-3 pb-3 scroll-smooth snap-x snap-mandatory">
          {STORY_STEPS.map((step, i) => (
            <button
              key={step.id}
              type="button"
              onClick={() => handleStepClick(i)}
              className="snap-start flex-shrink-0 w-56 rounded-2xl border p-5 text-left transition-all duration-200"
              style={{
                borderColor: i === activeIndex ? step.accent : '#e2e8f0',
                background: i === activeIndex ? `${step.accent}0d` : '#fff',
                borderLeftWidth: i === activeIndex ? '3px' : '1px',
              }}
            >
              <div className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-1.5" style={{ color: step.accent }}>
                Step {String(i + 1).padStart(2, '0')}
              </div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">{step.title}</h4>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipStory;
