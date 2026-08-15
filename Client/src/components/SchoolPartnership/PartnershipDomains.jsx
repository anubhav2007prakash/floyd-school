import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const IMPACT_STATS = [
  { value: 15000, suffix: '+', label: 'Students Trained',     icon: '🧑‍🎓', color: '#6C63FF', glow: 'rgba(108,99,255,0.2)',  gradient: 'linear-gradient(135deg, #6C63FF, #818cf8)' },
  { value: 500,   suffix: '+', label: 'Projects Built',       icon: '⚡',    color: '#0ea5e9', glow: 'rgba(14,165,233,0.2)',  gradient: 'linear-gradient(135deg, #0ea5e9, #38bdf8)' },
  { value: 100,   suffix: '+', label: 'Partner Schools',      icon: '🏫',   color: '#f43f5e', glow: 'rgba(244,63,94,0.2)',   gradient: 'linear-gradient(135deg, #f43f5e, #fb7185)' },
  { value: 200,   suffix: '+', label: 'Workshops Conducted',  icon: '🎯',   color: '#10b981', glow: 'rgba(16,185,129,0.2)',  gradient: 'linear-gradient(135deg, #10b981, #34d399)' },
];

const useCountUp = (target, duration = 2200) => {
  const ref = useRef(null);
  const animated = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const start = performance.now();
        const run = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = Math.floor(eased * target).toLocaleString();
          if (p < 1) requestAnimationFrame(run);
          else el.textContent = target.toLocaleString();
        };
        requestAnimationFrame(run);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return ref;
};

const StatCard = ({ stat, idx }) => {
  const countRef = useCountUp(stat.value, 2200);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: `0 0 0 1px ${stat.color}25, 0 20px 50px ${stat.glow}` }}
      className="group relative p-8 rounded-3xl text-center overflow-hidden cursor-default bg-white"
      style={{ border: '1px solid rgba(148,163,184,0.18)', transition: 'box-shadow 0.3s, transform 0.3s' }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: stat.gradient }} />

      {/* Background glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center, ${stat.glow} 0%, transparent 70%)` }} />

      <div className="relative z-10 space-y-3">
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} className="text-4xl">{stat.icon}</motion.div>

        <div className="setu-heading font-black flex items-end justify-center gap-0.5"
          style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
          <span ref={countRef} style={{ color: stat.color }}>0</span>
          <span style={{ color: stat.color }}>{stat.suffix}</span>
        </div>

        <div className="setu-body text-slate-500 text-sm font-bold">{stat.label}</div>
      </div>
    </motion.div>
  );
};

const PartnershipDomains = () => {
  return (
    <section id="impact" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white">
      {/* Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 65%)', filter: 'blur(50px)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full setu-body text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(16,185,129,0.1))', border: '1px solid rgba(79,70,229,0.2)', color: 'var(--accent-setu2)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            IMPACT &amp; TRACK RECORD
          </span>
          <h2 className="setu-heading font-extrabold text-slate-900 mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.15 }}>
            Outcomes &amp;{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6C63FF, #0ea5e9, #10b981)' }}>
              Impact Numbers
            </span>
          </h2>
          <p className="setu-body text-slate-500 max-w-2xl mx-auto" style={{ fontSize: '1.05rem' }}>
            Real results from years of school-level skill lab deployment.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {IMPACT_STATS.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipDomains;
