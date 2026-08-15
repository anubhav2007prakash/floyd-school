import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import { Brain, Code2, Cpu, Lightbulb, Rocket, Briefcase } from 'lucide-react';

const PROGRAMS = [
  {
    icon: Brain,
    title: 'AI & GenAI Lab',
    tagline: 'Coding Intelligent Agents',
    description: 'Neural networks, NLP & prompt engineering. Students build live AI chatbot projects.',
    grades: 'Grades 8 – 12',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.24)',
    gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
  },
  {
    icon: Lightbulb,
    title: 'Design & Innovation Lab',
    tagline: 'Solving Real-world Problems',
    description: 'User research, wireframing, CAD modeling & 3D printing. Design thinking at core.',
    grades: 'Grades 7 – 12',
    color: '#f97316',
    glow: 'rgba(249,115,22,0.24)',
    gradient: 'linear-gradient(135deg, #f97316, #f59e0b)',
  },
  {
    icon: Cpu,
    title: 'Robotics & IoT Lab',
    tagline: 'Programming Physical World',
    description: 'Build microcontroller circuits, automated cars & intelligent climate monitors.',
    grades: 'Grades 6 – 11',
    color: '#fb7185',
    glow: 'rgba(251,113,133,0.24)',
    gradient: 'linear-gradient(135deg, #fb7185, #f43f5e)',
  },
  {
    icon: Rocket,
    title: 'Startup & Incubation Lab',
    tagline: 'Thinking Like Founders',
    description: 'Pitch ideas, validate markets, build business plans & investor presentations.',
    grades: 'Grades 9 – 12',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.24)',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
  },
  {
    icon: Code2,
    title: 'Coding & App Dev Lab',
    tagline: 'Building Fullstack Platforms',
    description: 'Python, HTML/CSS & JavaScript fundamentals. Students ship fully functional web apps.',
    grades: 'Grades 6 – 12',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.24)',
    gradient: 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
  },
  {
    icon: Briefcase,
    title: 'Career Readiness Lab',
    tagline: 'Onboarding into Industry',
    description: 'Resume crafting, LinkedIn optimization, interview prep & teamwork tools.',
    grades: 'Grades 10 – 12',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.24)',
    gradient: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
  },
];

const STATS = [
  { value: 6, suffix: '', label: 'Career Pathways' },
  { value: 50, suffix: '+', label: 'Real Projects' },
  { value: 20, suffix: '+', label: 'Industry Mentors' },
  { value: 1, suffix: 'x', label: 'NSDC Certification' },
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

const WhyPartnerWithUs = () => {
  const [active, setActive] = useState('AI & GenAI Lab');
  const activeProgram = useMemo(() => PROGRAMS.find((prog) => prog.title === active) || PROGRAMS[0], [active]);

  return (
    <section
      id="programs"
      className="relative overflow-visible px-8 py-24 sm:px-12 lg:px-20 lg:py-28"
      style={{
        background:
          'radial-gradient(circle at 8% 10%, rgba(59,130,246,0.14), transparent 22%), radial-gradient(circle at 92% 18%, rgba(167,139,250,0.12), transparent 24%), linear-gradient(180deg, #f8f9ff 0%, #ffffff 50%, #f7f9ff 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_40%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,rgba(236,72,153,0.08),transparent_35%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-[1600px]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={heroVariants} className="space-y-8 text-center">
          <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-slate-950/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 shadow-[0_15px_70px_rgba(15,23,42,0.05)]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 shadow-[0_0_20px_rgba(56,189,248,0.4)]" />
            ACADEMIC CATALOG
          </div>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-extrabold text-slate-950 sm:text-5xl lg:text-6xl tracking-tight" style={{ lineHeight: 1.02 }}>
              Future-Skill Programs <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500">Offered</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-xl sm:leading-9">
              Custom skill programs with structured student output focus. Combine multiple tracks.
            </p>
          </div>
        </motion.div>

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

        <div className="mt-16 grid gap-12 lg:gap-10 overflow-visible">
          <div className="relative overflow-visible rounded-[2.5rem] border border-white/40 bg-slate-950/10 shadow-[0_45px_120px_rgba(15,23,42,0.16)] backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(167,139,250,0.16),transparent_28%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_50%,rgba(15,23,42,0.18))]" />
            <OrbitDisplay active={active} setActive={setActive} activeProgram={activeProgram} />
          </div>
        </div>
      </div>
    </section>
  );
};

const HUB_SIZE = 380;
const CARD_WIDTH = 320;
const CARD_HEIGHT = 180;

// explicit positions (centered coordinate system) — perfectly symmetrical orbit grid
const CARD_POSITIONS = [
  { title: 'AI & GenAI Lab', x: 0, y: -300 },
  { title: 'Robotics & IoT Lab', x: 380, y: -110 },
  { title: 'Coding & App Dev Lab', x: 380, y: 110 },
  { title: 'Career Readiness Lab', x: 0, y: 300 },
  { title: 'Design & Innovation Lab', x: -380, y: 110 },
  { title: 'Startup & Incubation Lab', x: -380, y: -110 },
];

// animation order requested by user
const DRAW_ORDER = ['AI & GenAI Lab', 'Robotics & IoT Lab', 'Coding & App Dev Lab', 'Career Readiness Lab', 'Design & Innovation Lab', 'Startup & Incubation Lab'];

const OrbitDisplay = ({ active, setActive, activeProgram }) => {
  const pathRefs = useRef({});
  const particleRef = useRef(null);
  const rafRef = useRef(null);
  const [particle, setParticle] = useState(null); // { pathTitle, progress }
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  const orbitData = useMemo(() => {
    return PROGRAMS.map((prog) => {
      const position = CARD_POSITIONS.find((item) => item.title === prog.title) || CARD_POSITIONS[0];
      const { x, y } = position; // coordinates relative to center (0,0)

      // angle from center to card
      const theta = Math.atan2(y, x);

      // start point on card edge (approximate using width/height extents)
      const startInsetX = Math.cos(theta) * (CARD_WIDTH / 2 - 12);
      const startInsetY = Math.sin(theta) * (CARD_HEIGHT / 2 - 12);
      const startX = x - startInsetX;
      const startY = y - startInsetY;

      // end point on hub border (on the same radial angle)
      const hubRadius = HUB_SIZE / 2 + 6; // slightly outside to meet border visually
      const endX = Math.cos(theta) * hubRadius;
      const endY = Math.sin(theta) * hubRadius;

      // control points to create smooth organic bezier
      const control1 = { x: startX * 0.6, y: startY * 0.55 };
      const control2 = { x: endX * 0.35 + startX * 0.15, y: endY * 0.35 + startY * 0.15 };

      const path = `M ${startX.toFixed(1)} ${startY.toFixed(1)} C ${control1.x.toFixed(1)} ${control1.y.toFixed(1)}, ${control2.x.toFixed(1)} ${control2.y.toFixed(1)}, ${endX.toFixed(1)} ${endY.toFixed(1)}`;

      return { ...prog, x, y, startX, startY, endX, endY, path, theta };
    });
  }, []);

  // pulse particle animation — chooses a random path every 5-8s and animates a dot along it
  useEffect(() => {
    if (prefersReducedMotion) return;
    let cancelled = false;

    const runPulse = () => {
      if (cancelled) return;
      const idx = Math.floor(Math.random() * orbitData.length);
      const title = orbitData[idx].title;
      const duration = 2200 + Math.random() * 800; // 2.2 - 3s
      const start = performance.now();

      const pathEl = pathRefs.current[title];
      if (!pathEl) {
        // schedule next
        setTimeout(runPulse, 5200 + Math.random() * 3000);
        return;
      }
      const length = pathEl.getTotalLength();

      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 2); // ease-out
        const point = pathEl.getPointAtLength(eased * length);
        setParticle({ pathTitle: title, cx: point.x, cy: point.y, opacity: 1 - t });
        if (t < 1 && !cancelled) rafRef.current = requestAnimationFrame(step);
        else {
          // fade out then schedule next
          setTimeout(() => {
            setParticle(null);
            if (!cancelled) setTimeout(runPulse, 5200 + Math.random() * 3000);
          }, 120);
        }
      };

      rafRef.current = requestAnimationFrame(step);
    };

    // kick off initial after small delay
    const initialTimer = setTimeout(runPulse, 1600 + Math.random() * 900);

    return () => {
      cancelled = true;
      clearTimeout(initialTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [orbitData, prefersReducedMotion]);

  // helper to map title -> draw delay index
  const getDelayFor = useCallback((title) => {
    const idx = DRAW_ORDER.indexOf(title);
    return idx === -1 ? 0 : idx * 0.16;
  }, []);

  return (
    <div className="relative mx-auto flex w-full max-w-[1600px] justify-center overflow-visible px-6 py-8 lg:px-12">
      <div className="relative h-[880px] w-full overflow-visible">
        {/* SVG connections: hidden on small screens for performance */}
        <svg className="pointer-events-none absolute inset-0 z-5 hidden md:block" viewBox="-600 -450 1200 900" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {orbitData.map((prog, i) => (
              <linearGradient id={`grad-${i}`} key={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={prog.color} stopOpacity="0.98" />
                <stop offset="60%" stopColor={prog.color} stopOpacity="0.32" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.12)" stopOpacity="0.12" />
              </linearGradient>
            ))}
          </defs>

          {orbitData.map((prog, i) => {
            const id = `path-${i}`;
            const delay = getDelayFor(prog.title);
            return (
              <g key={prog.title}>
                <motion.path
                  id={id}
                  ref={(el) => (pathRefs.current[prog.title] = el)}
                  d={prog.path}
                  stroke={`url(#grad-${i})`}
                  strokeWidth={active === prog.title ? 3 : 2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ filter: active === prog.title ? 'url(#glow)' : undefined, opacity: active === prog.title ? 1 : 0.18 }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: active === prog.title ? 1 : 0.28 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, delay }}
                />
              </g>
            );
          })}

          {/* particle */}
          {particle && (
            <circle cx={particle.cx} cy={particle.cy} r="6" fill="white" opacity={particle.opacity} filter="url(#glow)" />
          )}
        </svg>

        <div className="absolute inset-0 flex items-center justify-center overflow-visible">
          <div className="relative z-20 h-[380px] w-[380px] max-w-full overflow-visible rounded-[3rem] border border-white/15 bg-slate-950/95 p-8 shadow-[0_60px_150px_rgba(15,23,42,0.26)] backdrop-blur-xl">
            <div
              className="absolute inset-0 rounded-[3rem]"
              style={{
                background: activeProgram.color
                  ? `radial-gradient(circle at 50% 30%, ${activeProgram.color}15, transparent 48%)`
                  : 'transparent',
              }}
            />
            <div
              className="absolute inset-10 rounded-full border border-white/10"
            />
            <div
              className="absolute inset-16 rounded-full border border-white/15"
            />
            <div
              className="absolute inset-24 rounded-full border border-white/10"
            />
            <div className="absolute left-1/2 top-1/5 h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 via-transparent to-transparent blur-3xl" />
            <div className="absolute right-16 top-1/2 h-20 w-20 rounded-full bg-gradient-to-br from-cyan-400/15 via-transparent to-transparent blur-3xl" />
            <div className="absolute left-12 bottom-16 h-16 w-16 rounded-full bg-gradient-to-br from-fuchsia-500/15 via-transparent to-transparent blur-3xl" />
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center px-6">
              <h3 className="text-3xl font-semibold uppercase tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                One Partnership. Six Career Pathways.
              </h3>
            </div>
          </div>
        </div>

        {orbitData.map((prog, i) => (
          <div
            key={prog.title}
            className="absolute z-30 w-[320px] h-[180px]"
            style={{ left: `calc(50% + ${prog.x}px)`, top: `calc(50% + ${prog.y}px)`, transform: 'translate(-50%, -50%)' }}
          >
          <button
            type="button"
            onMouseEnter={() => setActive(prog.title)}
            onMouseLeave={() => setActive('AI & GenAI Lab')}
            className="w-full h-full flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/85 p-5 text-left text-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: prog.gradient, boxShadow: `0 18px 50px ${prog.glow}` }}>
                <prog.icon size={20} className="text-white" />
              </div>
              <span className="rounded-full bg-slate-950/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-100 shadow-sm" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                {prog.grades}
              </span>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-lg font-semibold text-white leading-tight">{prog.title}</h4>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: prog.color }}>
                {prog.tagline}
              </p>
            </div>
          </button>
          </div>
        ))}

        <div className="lg:hidden absolute inset-x-0 bottom-0 px-6 pb-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-slate-950/90 px-4 py-6 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl">
            <div className="flex items-center justify-between px-2 text-sm uppercase tracking-[0.28em] text-slate-300">
              <span>Explore Labs</span>
              <span className="text-slate-400">Swipe ?</span>
            </div>
            <div className="mt-6 flex gap-4 overflow-x-auto pb-2 pl-2 pr-4 scrollbar-none">
              {PROGRAMS.map((prog) => (
                <motion.button
                  key={prog.title}
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  onHoverStart={() => setActive(prog.title)}
                  onHoverEnd={() => setActive('AI & GenAI Lab')}
                  onFocus={() => setActive(prog.title)}
                  className="min-w-[260px] flex-shrink-0 rounded-[1.75rem] border border-white/15 bg-slate-950/80 p-5 text-left shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl" style={{ background: prog.gradient, boxShadow: `0 10px 30px ${prog.glow}` }}>
                      <prog.icon size={22} className="text-white" />
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-200">
                      {prog.grades}
                    </span>
                  </div>
                  <h4 className="mt-5 text-lg font-semibold text-white">{prog.title}</h4>
                  <p className="mt-2 text-sm text-slate-400">{prog.tagline}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPartnerWithUs;
