import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, Star } from 'lucide-react';

import logo1 from '../../assets/logos/1.png';
import logo2 from '../../assets/logos/2.jpg';
import logo3 from '../../assets/logos/3.jpg';
import logo4 from '../../assets/logos/4.jpg';

const LOGO_IMAGES = [
  { id: 'logo-1', img: logo1, alt: 'Partner School Logo 1' },
  { id: 'logo-2', img: logo2, alt: 'Partner School Logo 2' },
  { id: 'logo-3', img: logo3, alt: 'Partner School Logo 3' },
  { id: 'logo-4', img: logo4, alt: 'Partner School Logo 4' },
];

/* CSS keyframes injected once */
const MARQUEE_STYLE = `
  @keyframes marquee-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track {
    animation: marquee-scroll 18s linear infinite;
    will-change: transform;
  }
  .marquee-track:hover {
    animation-play-state: paused;
  }
`;

const BootcampGallery = () => {
  /* Duplicate the list — the animation moves exactly -50% so the loop is seamless */
  const loopLogos = [...LOGO_IMAGES, ...LOGO_IMAGES, ...LOGO_IMAGES, ...LOGO_IMAGES,
                     ...LOGO_IMAGES, ...LOGO_IMAGES, ...LOGO_IMAGES, ...LOGO_IMAGES];

  return (
    <section className="py-20 relative overflow-hidden bg-[#0A0F1D] text-white">
      {/* Inject keyframes */}
      <style>{MARQUEE_STYLE}</style>

      {/* Ambient Color Orbs */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      {/* Top glowing border line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #38BDF8, #A855F7, #EC4899, transparent)' }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-6 mb-12 text-center"
      >
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-4 backdrop-blur-md"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <Sparkles size={14} className="text-amber-400" />
          <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Trusted By Leading Schools Across India
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight">
          Empowering Young Innovators at{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #38BDF8 0%, #A855F7 50%, #EC4899 100%)' }}
          >
            Partner Schools Across India
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

      {/* Seamless Marquee */}
      <div className="relative overflow-hidden py-4">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-36 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #0A0F1D 0%, transparent 100%)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-36 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #0A0F1D 0%, transparent 100%)' }}
        />

        {/* The track — doubled so -50% lands exactly back at the start */}
        <div
          className="marquee-track flex gap-6 items-center"
          style={{ width: 'max-content' }}
        >
          {loopLogos.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center w-56 h-28 px-6 py-4 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/20 transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <img
                src={logo.img}
                alt={logo.alt}
                className="max-h-20 max-w-[180px] w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom glowing border line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #EC4899, #A855F7, #38BDF8, transparent)' }}
      />
    </section>
  );
};

export default BootcampGallery;
