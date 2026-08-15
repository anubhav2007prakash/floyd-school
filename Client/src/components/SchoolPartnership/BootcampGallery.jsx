import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Sparkles, Award, Star, CheckCircle } from 'lucide-react';

const SCHOOL_LOGOS = [
  { name: 'Delhi Public School',       emoji: '🏫', color: '#38BDF8', bg: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(3,105,161,0.15))', border: 'rgba(56,189,248,0.35)' },
  { name: 'Ryan International',        emoji: '📚', color: '#A855F7', bg: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(109,40,217,0.15))', border: 'rgba(168,85,247,0.35)' },
  { name: 'Amity International',       emoji: '🎓', color: '#F472B6', bg: 'linear-gradient(135deg, rgba(244,114,182,0.15), rgba(190,24,93,0.15))', border: 'rgba(244,114,182,0.35)' },
  { name: 'GD Goenka Public School',   emoji: '🏆', color: '#F59E0B', bg: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(180,83,9,0.15))', border: 'rgba(245,158,11,0.35)' },
  { name: 'Kendriya Vidyalaya',        emoji: '🏛️', color: '#34D399', bg: 'linear-gradient(135deg, rgba(52,211,153,0.15), rgba(4,120,87,0.15))', border: 'rgba(52,211,153,0.35)' },
  { name: 'Modern School Barakhamba',  emoji: '⭐', color: '#818CF8', bg: 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(67,56,202,0.15))', border: 'rgba(129,140,248,0.35)' },
  { name: 'Springdales School',        emoji: '🌟', color: '#FBBF24', bg: 'linear-gradient(135deg, rgba(251,191,36,0.15), rgba(180,83,9,0.15))', border: 'rgba(251,191,36,0.35)' },
  { name: 'Bal Bharati Public School', emoji: '🎯', color: '#FB7185', bg: 'linear-gradient(135deg, rgba(251,113,133,0.15), rgba(190,18,60,0.15))', border: 'rgba(251,113,133,0.35)' },
  { name: 'Cambridge Foundation',      emoji: '🔬', color: '#38BDF8', bg: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(14,165,233,0.15))', border: 'rgba(56,189,248,0.35)' },
  { name: 'The Heritage School',       emoji: '🏰', color: '#C084FC', bg: 'linear-gradient(135deg, rgba(192,132,252,0.15), rgba(126,34,206,0.15))', border: 'rgba(192,132,252,0.35)' },
  { name: 'Sanskriti School',          emoji: '🌸', color: '#F472B6', bg: 'linear-gradient(135deg, rgba(244,114,182,0.15), rgba(219,39,119,0.15))', border: 'rgba(244,114,182,0.35)' },
  { name: 'DAV Public School',         emoji: '📖', color: '#6EE7B7', bg: 'linear-gradient(135deg, rgba(110,231,183,0.15), rgba(5,150,105,0.15))', border: 'rgba(110,231,183,0.35)' },
];

const BootcampGallery = () => {
  const marqueeControls = useAnimation();
  const logos = [...SCHOOL_LOGOS, ...SCHOOL_LOGOS, ...SCHOOL_LOGOS];

  useEffect(() => {
    marqueeControls.start({
      x: [0, -(SCHOOL_LOGOS.length * 270)],
      transition: { duration: 32, repeat: Infinity, ease: 'linear' },
    });
  }, [marqueeControls]);

  return (
    <section className="py-20 relative overflow-hidden bg-[#0A0F1D] text-white">
      {/* ── Background Color Ambient Orbs ── */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Top glowing line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #38BDF8, #A855F7, #EC4899, transparent)' }} />

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-6 mb-12 text-center"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-4 backdrop-blur-md"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
          <Sparkles size={14} className="text-amber-400 animate-spin" />
          <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Trusted By Leading Schools Across India
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Empowering Next-Gen Innovators at{' '}
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #38BDF8 0%, #A855F7 50%, #EC4899 100%)' }}>
            50+ Partner Schools
          </span>
        </h2>

        <div className="flex items-center justify-center gap-4 text-xs md:text-sm font-semibold text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle size={14} /> 100% NEP 2020 Aligned
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-amber-400">
            <Star size={14} className="fill-amber-400" /> Rated 4.9/5 by Principals
          </span>
        </div>
      </motion.div>

      {/* ── Marquee Loop ── */}
      <div className="relative overflow-hidden py-4">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-36 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #0A0F1D 0%, transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-36 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #0A0F1D 0%, transparent 100%)' }} />

        <motion.div
          animate={marqueeControls}
          className="flex gap-5 py-2"
          style={{ width: 'max-content' }}
          onHoverStart={() => marqueeControls.stop()}
          onHoverEnd={() => marqueeControls.start({
            x: [null, -(SCHOOL_LOGOS.length * 270)],
            transition: { duration: 32, repeat: Infinity, ease: 'linear' },
          })}
        >
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.06, y: -4 }}
              className="flex-shrink-0 flex items-center gap-3.5 px-6 py-4 rounded-2xl text-sm font-bold whitespace-nowrap cursor-pointer backdrop-blur-md transition-all duration-300 group"
              style={{
                background: logo.bg,
                border: `1px solid ${logo.border}`,
                boxShadow: `0 8px 24px ${logo.border}30`,
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-white/10 border border-white/10 group-hover:scale-110 transition-transform">
                {logo.emoji}
              </div>
              <span className="text-white font-bold tracking-wide group-hover:text-white"
                style={{ textShadow: `0 0 12px ${logo.color}60` }}>
                {logo.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom glowing line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #EC4899, #A855F7, #38BDF8, transparent)' }} />
    </section>
  );
};

export default BootcampGallery;
