import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import {
  Layers, Users, BookOpen, Settings, CheckCircle, BarChart3,
  Sparkles, ArrowRight
} from 'lucide-react';

const REASONS = [
  {
    id: '01',
    icon: Layers,
    title: 'Runs In Your Existing Lab',
    tagline: 'NO SETUP REQUIRED',
    badge: '01 / NO SETUP REQUIRED',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.3)',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    x: 0,
    y: -300,
  },
  {
    id: '02',
    icon: Users,
    title: 'Expert On Campus Mentors',
    tagline: 'TRAINED BY FLOYD SCHOOL',
    badge: '02 / MENTORS',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.3)',
    gradient: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
    x: 380,
    y: -110,
  },
  {
    id: '03',
    icon: BookOpen,
    title: 'Industry Aligned Syllabus',
    tagline: 'FOUR MONTH PROGRAM',
    badge: '03 / CURRICULUM',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.3)',
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    x: 380,
    y: 110,
  },
  {
    id: '04',
    icon: Settings,
    title: 'Zero Burden Operations',
    tagline: 'MANAGED OPERATIONS',
    badge: '04 / MANAGED OPERATIONS',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.3)',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    x: 0,
    y: 300,
  },
  {
    id: '05',
    icon: CheckCircle,
    title: 'Built For The NEP 2020 Mandate',
    tagline: 'NEP AND CBSE ALIGNED',
    badge: '05 / NEP ALIGNMENT',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    x: -380,
    y: 110,
  },
  {
    id: '06',
    icon: BarChart3,
    title: 'Real Time Skill Analytics',
    tagline: 'LIVE DASHBOARDS',
    badge: '06 / LIVE ANALYTICS',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.3)',
    gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    x: -380,
    y: -110,
  },
];

const STATS = [
  { value: 100, suffix: '%', label: 'ZERO SCHOOL SETUP' },
  { value: 4, suffix: ' Mos', label: 'STRUCTURED PROGRAM' },
  { value: 0, suffix: '', label: 'FACULTY BURDEN' },
  { value: 100, suffix: '%', label: 'NEP 2020 ALIGNED' },
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
    <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
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
      className="relative overflow-x-hidden px-4 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28 bg-white"
    >
      <div className="relative mx-auto max-w-[1400px]">
        {/* Header */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={heroVariants} className="space-y-6 text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600 shadow-sm">
            <Sparkles size={13} className="text-amber-500" />
            WHY SCHOOLS CHOOSE FLOYD
          </div>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-black text-slate-950 text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase" style={{ lineHeight: 1.08 }}>
              BUILT FOR STUDENTS.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500">
                DESIGNED FOR SCHOOLS.
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg font-medium">
              Floyd combines engaging technology education for students with structured delivery that fits naturally into the school&apos;s environment.
            </p>
          </div>
        </motion.div>

        {/* Top Highlight Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-12 grid gap-5 grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-end gap-2">
                <ProgramCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Orbit Grid Display Container */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-[3rem] border border-slate-200/80 bg-slate-100/60 p-6 md:p-12 shadow-sm backdrop-blur-xl">
            <OrbitDisplay active={active} setActive={setActive} activeReason={activeReason} />
          </div>
        </div>
      </div>
    </section>
  );
};

const HUB_SIZE = 340;
const CARD_WIDTH = 310;
const CARD_HEIGHT = 160;

const OrbitDisplay = ({ active, setActive, activeReason }) => {
  const pathRefs = useRef({});
  const rafRef = useRef(null);
  const [particle, setParticle] = useState(null);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  const orbitData = useMemo(() => {
    return REASONS.map((item) => {
      const { x, y } = item;
      const theta = Math.atan2(y, x);

      const startInsetX = Math.cos(theta) * (CARD_WIDTH / 2 - 12);
      const startInsetY = Math.sin(theta) * (CARD_HEIGHT / 2 - 12);
      const startX = x - startInsetX;
      const startY = y - startInsetY;

      const hubRadius = HUB_SIZE / 2 + 8;
      const endX = Math.cos(theta) * hubRadius;
      const endY = Math.sin(theta) * hubRadius;

      const control1 = { x: startX * 0.6, y: startY * 0.55 };
      const control2 = { x: endX * 0.35 + startX * 0.15, y: endY * 0.35 + startY * 0.15 };

      const path = `M ${startX.toFixed(1)} ${startY.toFixed(1)} C ${control1.x.toFixed(1)} ${control1.y.toFixed(1)}, ${control2.x.toFixed(1)} ${control2.y.toFixed(1)}, ${endX.toFixed(1)} ${endY.toFixed(1)}`;

      return { ...item, startX, startY, endX, endY, path, theta };
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
        setTimeout(runPulse, 3000 + Math.random() * 2000);
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
            if (!cancelled) setTimeout(runPulse, 3000 + Math.random() * 2000);
          }, 120);
        }
      };

      rafRef.current = requestAnimationFrame(step);
    };

    const initialTimer = setTimeout(runPulse, 1200 + Math.random() * 800);

    return () => {
      cancelled = true;
      clearTimeout(initialTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [orbitData, prefersReducedMotion]);

  return (
    <>
      {/* Desktop Orbit View */}
      <div className="relative mx-auto hidden w-full justify-center overflow-hidden lg:block">
        <div className="relative h-[840px] w-full overflow-hidden">
          {/* SVG connections */}
          <svg className="pointer-events-none absolute inset-0 z-10 w-full h-full" viewBox="-600 -430 1200 860" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="glow-why" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {orbitData.map((item, i) => (
                <linearGradient id={`grad-why-${i}`} key={`grad-why-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={item.color} stopOpacity="0.95" />
                  <stop offset="60%" stopColor={item.color} stopOpacity="0.3" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.05)" stopOpacity="0.05" />
                </linearGradient>
              ))}
            </defs>

            {orbitData.map((item, i) => {
              const id = `path-why-${i}`;
              return (
                <g key={item.title}>
                  <motion.path
                    id={id}
                    ref={(el) => (pathRefs.current[item.title] = el)}
                    d={item.path}
                    stroke={`url(#grad-why-${i})`}
                    strokeWidth={active === item.title ? 3.5 : 2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      filter: active === item.title ? 'url(#glow-why)' : undefined,
                      opacity: active === item.title ? 1 : 0.25
                    }}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: active === item.title ? 1 : 0.25 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, delay: i * 0.1 }}
                  />
                </g>
              );
            })}

            {particle && (
              <circle cx={particle.cx} cy={particle.cy} r="5" fill="white" opacity={particle.opacity} filter="url(#glow-why)" />
            )}
          </svg>

          {/* Central Hub Card */}
          <div className="absolute inset-0 flex items-center justify-center overflow-visible pointer-events-none">
            <div className="relative z-20 h-[340px] w-[340px] max-w-full rounded-[2.5rem] border border-white/15 bg-slate-950 p-8 shadow-[0_50px_140px_rgba(15,23,42,0.35)] backdrop-blur-xl flex flex-col items-center justify-center text-center select-none pointer-events-auto">
              <div
                className="absolute inset-0 rounded-[2.5rem] transition-all duration-700 pointer-events-none"
                style={{
                  background: activeReason.color
                    ? `radial-gradient(circle at 50% 30%, ${activeReason.color}20, transparent 60%)`
                    : 'transparent',
                }}
              />
              {/* Concentric Subtle Rings */}
              <div className="absolute inset-8 rounded-full border border-white/10 pointer-events-none" />
              <div className="absolute inset-16 rounded-full border border-white/15 pointer-events-none" />
              <div className="absolute inset-24 rounded-full border border-white/10 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center justify-center space-y-0.5">
                {['WHY', 'SCHOOLS', 'CHOOSE', 'FLOYD', 'SCHOOL'].map((word, idx) => (
                  <div
                    key={idx}
                    className="text-3xl sm:text-4xl lg:text-[40px] font-black uppercase text-white tracking-tight leading-tight font-sans"
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6 Orbiting Cards */}
          {orbitData.map((item) => (
            <div
              key={item.title}
              className="absolute z-30 h-[160px] w-[310px]"
              style={{
                left: `calc(50% + ${item.x}px)`,
                top: `calc(50% + ${item.y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div
                onMouseEnter={() => setActive(item.title)}
                className={`w-full h-full flex flex-col justify-between overflow-hidden rounded-[2rem] border p-5 text-left text-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] cursor-pointer ${
                  active === item.title
                    ? 'border-white/40 bg-slate-950/95 ring-2 ring-white/10 shadow-2xl'
                    : 'border-white/15 bg-slate-950/85 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl shrink-0"
                    style={{ background: item.gradient, boxShadow: `0 10px 25px ${item.glow}` }}
                  >
                    <item.icon size={20} className="text-white" />
                  </div>
                  <span
                    className="rounded-full bg-slate-900/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-200 shadow-sm border border-white/10"
                  >
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white leading-snug">{item.title}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: item.color }}>
                    {item.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Grid / Carousel view */}
      <div className="lg:hidden">
        {/* Mobile Center Banner */}
        <div className="mb-6 rounded-3xl border border-white/15 bg-slate-950 p-6 text-center shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-0.5">
            {['WHY', 'SCHOOLS', 'CHOOSE', 'FLOYD', 'SCHOOL'].map((word, idx) => (
              <span
                key={idx}
                className="text-2xl font-black uppercase text-white tracking-tight leading-tight"
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile 6 Cards Stack / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {REASONS.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/15 bg-slate-950/90 p-5 text-left shadow-lg"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl shrink-0"
                  style={{ background: item.gradient, boxShadow: `0 10px 25px ${item.glow}` }}
                >
                  <item.icon size={20} className="text-white" />
                </div>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300 border border-white/10">
                  {item.badge}
                </span>
              </div>
              <h4 className="text-base font-bold text-white leading-snug">{item.title}</h4>
              <p className="text-[11px] font-bold uppercase tracking-widest mt-1" style={{ color: item.color }}>
                {item.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TheProblem;
