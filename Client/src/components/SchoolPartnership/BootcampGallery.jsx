import { motion } from 'framer-motion';
import { Sparkles, CheckCircle } from 'lucide-react';

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
    animation: marquee-scroll 40s linear infinite;
    will-change: transform;
  }
  .marquee-track:hover {
    animation-play-state: paused;
  }
`;

const BootcampGallery = () => {
  /* Duplicate the list so -50% lands exactly back at the start */
  const loopLogos = [
    ...LOGO_IMAGES, ...LOGO_IMAGES, ...LOGO_IMAGES, ...LOGO_IMAGES,
    ...LOGO_IMAGES, ...LOGO_IMAGES, ...LOGO_IMAGES, ...LOGO_IMAGES
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200/80">
      {/* Inject keyframes */}
      <style>{MARQUEE_STYLE}</style>

      {/* Subtle Pastel Ambient Orbs */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] rounded-full pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)', filter: 'blur(90px)' }}
      />
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] rounded-full pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)', filter: 'blur(90px)' }}
      />

      {/* Subtle Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-6 mb-14 text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-5 bg-purple-50 border border-purple-200/80 shadow-sm">
          <Sparkles size={14} className="text-amber-500" />
          <span className="text-xs font-black uppercase tracking-[0.2em] text-purple-700">
            TRUSTED BY SCHOOL COMMUNITIES
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 tracking-tight uppercase text-slate-900 leading-tight">
          BRINGING PRACTICAL TECHNOLOGY{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            LEARNING INTO SCHOOLS.
          </span>
        </h2>

        <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
          Floyd School works alongside schools to give students meaningful exposure to modern technology through structured, mentor led and project based learning.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-[11px] md:text-xs font-bold">
          {['CLASSES 6 TO 12', 'EXPERT MENTORS', 'PROJECT BASED LEARNING', 'SCHOOL CAMPUS DELIVERY', 'STUDENT PROGRESS TRACKING'].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 shadow-sm"
            >
              <CheckCircle size={13} className="text-emerald-600" />
              {badge}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Seamless Logo Marquee */}
      <div className="relative overflow-hidden py-4 z-10">
        {/* Fade Edges (White to transparent) */}
        <div
          className="absolute left-0 top-0 bottom-0 w-36 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0) 100%)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-36 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #ffffff 0%, rgba(255,255,255,0) 100%)' }}
        />

        {/* The Track */}
        <div
          className="marquee-track flex gap-6 items-center"
          style={{ width: 'max-content' }}
        >
          {loopLogos.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center w-56 h-28 px-6 py-4 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-200/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
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
    </section>
  );
};

export default BootcampGallery;
