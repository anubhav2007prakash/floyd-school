import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import {
  Layers, Users, BookOpen, Settings, CheckCircle, BarChart3,
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Award, Zap
} from 'lucide-react';

const REASONS = [
  {
    icon: Layers,
    title: 'Runs In Your Existing Lab',
    tagline: 'NO SETUP REQUIRED',
    description: "The program runs on your school's existing computer lab. There is nothing to install and nothing to source.",
    badge: '01 / No Setup Required',
    outcomes: ['Zero Hardware Purchase', 'Instant Computer Lab Sync', 'Zero IT Setup Required'],
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.24)',
    gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
  },
  {
    icon: Users,
    title: 'Expert On Campus Mentors',
    tagline: 'TRAINED BY FLOYD SCHOOL',
    description: 'Every class is led by a working technology professional. Floyd handles recruitment, training and continuity.',
    badge: '02 / Mentors',
    outcomes: ['Industry Working Professionals', 'Hiring and Training Managed', 'Zero Substitution Hassle'],
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.24)',
    gradient: 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
  },
  {
    icon: BookOpen,
    title: 'Industry Aligned Syllabus',
    tagline: 'FOUR MONTH PROGRAM',
    description: 'Four months of project based learning, moving from Python foundations to a finished Artificial Intelligence application.',
    badge: '03 / Curriculum',
    outcomes: ['Python to AI Project Path', 'Hands On Coding Exercises', 'Student Project Portfolios'],
    color: '#fb7185',
    glow: 'rgba(251,113,133,0.24)',
    gradient: 'linear-gradient(135deg, #fb7185, #f43f5e)',
  },
  {
    icon: Settings,
    title: 'Zero Burden Operations',
    tagline: 'MANAGED OPERATIONS',
    description: 'Scheduling, assessments and parent updates are handled entirely by the Floyd School team.',
    badge: '04 / Managed Operations',
    outcomes: ['Timetable Integration', 'Weekly Student Reports', 'Parent Update System'],
    color: '#10b981',
    glow: 'rgba(16,185,129,0.24)',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
  },
  {
    icon: CheckCircle,
    title: 'Built For The NEP 2020 Mandate',
    tagline: 'NEP AND CBSE ALIGNED',
    description: 'Supports the Computational Thinking and Artificial Intelligence mandate introduced under NEP 2020.',
    badge: '05 / NEP Alignment',
    outcomes: ['CBSE Skill Subject Ready', 'Experiential Learning Directives', 'Complete Board Compliance'],
    color: '#f97316',
    glow: 'rgba(249,115,22,0.24)',
    gradient: 'linear-gradient(135deg, #f97316, #f59e0b)',
  },
  {
    icon: BarChart3,
    title: 'Real Time Skill Analytics',
    tagline: 'LIVE DASHBOARDS',
    description: 'Parents and school leadership receive regular updates on attendance, assessments and project progress.',
    badge: '06 / Live Analytics',
    outcomes: ['Admin Progress Dashboard', 'Automated Attendance Logs', 'Skill Growth Benchmark'],
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.24)',
    gradient: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
  },
];

const STATS = [
  { value: 100, suffix: '%', label: 'Zero School Setup' },
  { value: 4, suffix: ' Mos', label: 'Structured Program' },
  { value: 0, suffix: '', label: 'Faculty Burden' },
  { value: 100, suffix: '%', label: 'NEP 2020 Aligned' },
];

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const ProgramCounter = ({ value, suffix }) => {
  const motionValue = useMotionValue(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsubscribe = motionValue.on('change', (latest) => setCount(Math.round(latest)));

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [motionValue, value]);

  return (
    <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
      {count}
      {suffix}
    </span>
  );
};

const TheProblem = () => {
  const [active, setActive] = useState('Runs In Your Existing Lab');
  const activeReason = useMemo(() => REASONS.find((item) => item.title === active) || REASONS[0], [active]);

  return (
    <section
      id="why-us"
      className="relative overflow-x-hidden px-4 py-20 sm:px-8 sm:py-24 lg:px-20 lg:py-28 bg-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(255,255,255,1),transparent_40%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,rgba(236,72,153,0.08),transparent_35%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Header */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={heroVariants} className="space-y-8 text-center">
          <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-slate-950/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 shadow-[0_15px_70px_rgba(15,23,42,0.05)]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 shadow-[0_0_20px_rgba(56,189,248,0.4)]" />
            INSTITUTIONAL ADVANTAGES
          </div>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-extrabold text-slate-950 sm:text-5xl lg:text-6xl tracking-tight" style={{ lineHeight: 1.02 }}>
              Why Schools Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500">Floyd School</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-xl sm:leading-9">
              Real AI and Machine Learning education, delivered on your campus, without adding to your faculty's workload.
            </p>
          </div>
        </motion.div>

        {/* Top Highlight Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/50 bg-white/80 p-6 backdrop-blur-xl shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="flex items-end gap-3">
                <ProgramCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Orbit Grid Display */}
        <div className="mt-16 grid gap-12 overflow-hidden lg:gap-10">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-slate-950/10 shadow-[0_45px_120px_rgba(15,23,42,0.16)] backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(167,139,250,0.16),transparent_28%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_50%,rgba(15,23,42,0.18))]" />
            <OrbitDisplay active={active} setActive={setActive} activeReason={activeReason} />
          </div>
        </div>
      </div>
    </section>
  );
};

const HUB_SIZE = 380;
const CARD_WIDTH = 320;
const CARD_HEIGHT = 180;

const CARD_POSITIONS = [
  { title: 'Runs In Your Existing Lab', x: 0, y: -300 },
  { title: 'Expert On Campus Mentors', x: 380, y: -110 },
  { title: 'Industry Aligned Syllabus', x: 380, y: 110 },
  { title: 'Zero Burden Operations', x: 0, y: 300 },
  { title: 'Built For The NEP 2020 Mandate', x: -380, y: 110 },
  { title: 'Real Time Skill Analytics', x: -380, y: -110 },
];

const DRAW_ORDER = [
  'Runs In Your Existing Lab',
  'Expert On Campus Mentors',
  'Industry Aligned Syllabus',
  'Zero Burden Operations',
  'Built For The NEP 2020 Mandate',
  'Real Time Skill Analytics',
];

const OrbitDisplay = ({ active, setActive, activeReason }) => {
  const pathRefs = useRef({});
  const particleRef = useRef(null);
  const rafRef = useRef(null);
  const [particle, setParticle] = useState(null);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  const orbitData = useMemo(() => {
    return REASONS.map((item) => {
      const position = CARD_POSITIONS.find((pos) => pos.title === item.title) || CARD_POSITIONS[0];
      const { x, y } = position;

      const theta = Math.atan2(y, x);

      const startInsetX = Math.cos(theta) * (CARD_WIDTH / 2 - 12);
      const startInsetY = Math.sin(theta) * (CARD_HEIGHT / 2 - 12);
      const startX = x - startInsetX;
      const startY = y - startInsetY;

      const hubRadius = HUB_SIZE / 2 + 6;
      const endX = Math.cos(theta) * hubRadius;
      const endY = Math.sin(theta) * hubRadius;

      const control1 = { x: startX * 0.6, y: startY * 0.55 };
      const control2 = { x: endX * 0.35 + startX * 0.15, y: endY * 0.35 + startY * 0.15 };

      const path = `M ${startX.toFixed(1)} ${startY.toFixed(1)} C ${control1.x.toFixed(1)} ${control1.y.toFixed(1)}, ${control2.x.toFixed(1)} ${control2.y.toFixed(1)}, ${endX.toFixed(1)} ${endY.toFixed(1)}`;

      return { ...item, x, y, startX, startY, endX, endY, path, theta };
    });
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let cancelled = false;

    const runPulse = () => {
      if (cancelled) return;
      const idx = Math.floor(Math.random() * orbitData.length);
      const title = orbitData[idx].title;
      const duration = 2200 + Math.random() * 800;
      const start = performance.now();

      const pathEl = pathRefs.current[title];
      if (!pathEl) {
        setTimeout(runPulse, 5200 + Math.random() * 3000);
        return;
      }
      const length = pathEl.getTotalLength();

      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 2);
        const point = pathEl.getPointAtLength(eased * length);
        setParticle({ pathTitle: title, cx: point.x, cy: point.y, opacity: 1 - t });
        if (t < 1 && !cancelled) rafRef.current = requestAnimationFrame(step);
        else {
          setTimeout(() => {
            setParticle(null);
            if (!cancelled) setTimeout(runPulse, 5200 + Math.random() * 3000);
          }, 120);
        }
      };

      rafRef.current = requestAnimationFrame(step);
    };

    const initialTimer = setTimeout(runPulse, 1600 + Math.random() * 900);

    return () => {
      cancelled = true;
      clearTimeout(initialTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [orbitData, prefersReducedMotion]);

  const getDelayFor = useCallback((title) => {
    const idx = DRAW_ORDER.indexOf(title);
    return idx === -1 ? 0 : idx * 0.16;
  }, []);

  return (
    <>
      <div className="relative mx-auto hidden w-full max-w-[1600px] justify-center overflow-hidden px-6 py-8 lg:block lg:px-12">
        <div className="relative h-[880px] w-full overflow-hidden">
          {/* SVG connections */}
          <svg className="pointer-events-none absolute inset-0 z-5 hidden md:block" viewBox="-600 -450 1200 900" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="glow-why" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {orbitData.map((item, i) => (
                <linearGradient id={`grad-why-${i}`} key={`grad-why-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={item.color} stopOpacity="0.98" />
                  <stop offset="60%" stopColor={item.color} stopOpacity="0.32" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.12)" stopOpacity="0.12" />
                </linearGradient>
              ))}
            </defs>

            {orbitData.map((item, i) => {
              const id = `path-why-${i}`;
              const delay = getDelayFor(item.title);
              return (
                <g key={item.title}>
                  <motion.path
                    id={id}
                    ref={(el) => (pathRefs.current[item.title] = el)}
                    d={item.path}
                    stroke={`url(#grad-why-${i})`}
                    strokeWidth={active === item.title ? 3 : 2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: active === item.title ? 'url(#glow-why)' : undefined, opacity: active === item.title ? 1 : 0.18 }}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: active === item.title ? 1 : 0.28 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, delay }}
                  />
                </g>
              );
            })}

            {particle && (
              <circle cx={particle.cx} cy={particle.cy} r="6" fill="white" opacity={particle.opacity} filter="url(#glow-why)" />
            )}
          </svg>

          {/* Central Hub Card */}
          <div className="absolute inset-0 flex items-center justify-center overflow-visible">
            <div className="relative z-20 h-[380px] w-[380px] max-w-full overflow-visible rounded-[3rem] border border-white/15 bg-slate-950/95 p-8 shadow-[0_60px_150px_rgba(15,23,42,0.26)] backdrop-blur-xl">
              <div
                className="absolute inset-0 rounded-[3rem]"
                style={{
                  background: activeReason.color
                    ? `radial-gradient(circle at 50% 30%, ${activeReason.color}15, transparent 48%)`
                    : 'transparent',
                }}
              />
              <div className="absolute inset-10 rounded-full border border-white/10" />
              <div className="absolute inset-16 rounded-full border border-white/15" />
              <div className="absolute inset-24 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/5 h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 via-transparent to-transparent blur-3xl" />
              <div className="absolute right-16 top-1/2 h-20 w-20 rounded-full bg-gradient-to-br from-cyan-400/15 via-transparent to-transparent blur-3xl" />
              <div className="absolute left-12 bottom-16 h-16 w-16 rounded-full bg-gradient-to-br from-fuchsia-500/15 via-transparent to-transparent blur-3xl" />
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center px-6">
                <h3 className="text-3xl font-semibold uppercase tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                  Why Schools Choose Floyd School
                </h3>
              </div>
            </div>
          </div>

          {/* 6 Orbiting Cards */}
          {orbitData.map((item) => (
            <div
              key={item.title}
              className="absolute z-30 hidden h-[180px] w-[320px] lg:block"
              style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)`, transform: 'translate(-50%, -50%)' }}
            >
              <button
                type="button"
                onMouseEnter={() => setActive(item.title)}
                onMouseLeave={() => setActive('Runs In Your Existing Lab')}
                className="w-full h-full flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/85 p-5 text-left text-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: item.gradient, boxShadow: `0 18px 50px ${item.glow}` }}>
                    <item.icon size={20} className="text-white" />
                  </div>
                  <span className="rounded-full bg-slate-950/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-100 shadow-sm" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-lg font-semibold text-white leading-tight">{item.title}</h4>
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: item.color }}>
                    {item.tagline}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden px-4 py-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-slate-950/90 px-4 py-6 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl">
          <div className="flex items-center justify-between px-2 text-xs uppercase tracking-[0.28em] text-slate-300 sm:text-sm">
            <span>Institutional Advantages</span>
            <span className="text-slate-400">Swipe →</span>
          </div>
          <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pl-2 pr-4 scrollbar-none">
            {REASONS.map((item) => (
              <motion.button
                key={item.title}
                type="button"
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setActive(item.title)}
                onHoverEnd={() => setActive('Runs In Your Existing Lab')}
                onFocus={() => setActive(item.title)}
                className="min-w-[260px] max-w-[85vw] flex-shrink-0 snap-center rounded-[1.75rem] border border-white/15 bg-slate-950/80 p-5 text-left shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl" style={{ background: item.gradient, boxShadow: `0 10px 30px ${item.glow}` }}>
                    <item.icon size={22} className="text-white" />
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-200">
                    {item.badge}
                  </span>
                </div>
                <h4 className="mt-5 text-lg font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-400">{item.tagline}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TheProblem;
