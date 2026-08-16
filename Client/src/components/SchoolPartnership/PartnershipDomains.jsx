import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Rocket, School, Target } from 'lucide-react';

const IMPACT_STATS = [
  {
    value: 15000,
    suffix: '+',
    label: 'Students Trained',
    detail: 'Across CBSE partner schools',
    icon: GraduationCap,
    color: '#818cf8',
    glow: 'rgba(129,140,248,0.35)',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Projects Built',
    detail: 'Shipped by student teams',
    icon: Rocket,
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.35)',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Partner Schools',
    detail: 'Active campus deployments',
    icon: School,
    color: '#fb7185',
    glow: 'rgba(251,113,133,0.35)',
  },
  {
    value: 200,
    suffix: '+',
    label: 'Workshops Conducted',
    detail: 'Hands on mentor sessions',
    icon: Target,
    color: '#34d399',
    glow: 'rgba(52,211,153,0.35)',
  },
];

const useCountUp = (target, duration = 2200) => {
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const start = performance.now();

          const run = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - progress) ** 4;
            el.textContent = Math.floor(eased * target).toLocaleString('en-IN');
            if (progress < 1) requestAnimationFrame(run);
            else el.textContent = target.toLocaleString('en-IN');
          };

          requestAnimationFrame(run);
        }
      },
      { threshold: 0.45 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return ref;
};

const StatCard = ({ stat, idx }) => {
  const countRef = useCountUp(stat.value);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative px-4 py-8 text-center md:px-6 md:py-10"
    >
      {idx > 0 && (
        <div className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/10 md:block" />
      )}

      <div
        className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${stat.color}18`,
          border: `1px solid ${stat.color}35`,
          boxShadow: `0 0 30px ${stat.glow}`,
        }}
      >
        <Icon size={24} style={{ color: stat.color }} strokeWidth={2.2} />
      </div>

      <div
        className="mb-2 flex items-end justify-center gap-0.5 font-black leading-none text-white"
        style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}
      >
        <span ref={countRef}>0</span>
        <span style={{ color: stat.color }}>{stat.suffix}</span>
      </div>

      <p className="text-sm font-bold text-white md:text-base">{stat.label}</p>
      <p className="mt-1.5 text-xs text-slate-400">{stat.detail}</p>
    </motion.div>
  );
};

const PartnershipDomains = () => {
  return (
    <section id="domains" className="relative overflow-hidden px-6 py-24 lg:px-12">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #07092b 0%, #0f154d 45%, #0a1035 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)', filter: 'blur(70px)' }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 70%)', filter: 'blur(70px)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-14"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-sky-200">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Impact &amp; Track Record
          </span>
          <h2
            className="mb-4 font-black leading-tight tracking-tight text-white"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Outcomes &amp;{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #38bdf8 50%, #34d399 100%)' }}
            >
              Impact Numbers
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Real results from years of school-level skill lab deployment across India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {IMPACT_STATS.map((stat, idx) => (
              <StatCard key={stat.label} stat={stat} idx={idx} />
            ))}
          </div>

          <div className="border-t border-white/10 px-6 py-4 text-center text-xs font-medium text-slate-500 md:text-sm">
            Verified outcomes from Floyd School campus programs · Updated each academic year
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipDomains;
