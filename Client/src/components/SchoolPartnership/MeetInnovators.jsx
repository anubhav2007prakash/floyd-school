import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Code2, Brain, Rocket, Wrench } from 'lucide-react';

/* ── Real Photos & Videos from Startup folder ── */
const MEDIA_ITEMS = [
  { type: 'video', src: '/startup_media/video_1.mp4', label: 'Robotics Demo', icon: Cpu, color: '#f472b6' },
  { type: 'image', src: '/startup_media/photo_1.jpg', label: 'AI Classroom', icon: Brain, color: '#38bdf8' },
  { type: 'image', src: '/startup_media/photo_2.jpg', label: 'Coding Lab', icon: Code2, color: '#4ade80' },
  { type: 'video', src: '/startup_media/video_2.mp4', label: 'Student Project', icon: Rocket, color: '#a78bfa' },
  { type: 'image', src: '/startup_media/photo_3.jpg', label: 'Build Session', icon: Wrench, color: '#fb923c' },
  { type: 'image', src: '/startup_media/photo_4.jpg', label: 'Innovation Hub', icon: Zap, color: '#facc15' },
  { type: 'video', src: '/startup_media/video_3.mp4', label: 'Live Mentoring', icon: Brain, color: '#38bdf8' },
  { type: 'image', src: '/startup_media/photo_5.jpg', label: 'Hardware Tinkering', icon: Cpu, color: '#f472b6' },
  { type: 'image', src: '/startup_media/photo_6.jpg', label: 'Teamwork', icon: Rocket, color: '#a78bfa' },
  { type: 'video', src: '/startup_media/video_4.mp4', label: 'IoT Circuit', icon: Wrench, color: '#fb923c' },
  { type: 'image', src: '/startup_media/photo_7.jpg', label: 'Hackathon', icon: Zap, color: '#facc15' },
  { type: 'image', src: '/startup_media/photo_8.jpg', label: 'App Dev', icon: Code2, color: '#38bdf8' },
  { type: 'video', src: '/startup_media/video_5.mp4', label: 'Robotics Lab', icon: Cpu, color: '#f472b6' },
  { type: 'image', src: '/startup_media/photo_9.jpg', label: 'AI Workshop', icon: Brain, color: '#4ade80' },
  { type: 'video', src: '/startup_media/video_6.mp4', label: 'Project Showcase', icon: Rocket, color: '#a78bfa' },
  { type: 'image', src: '/startup_media/photo_10.jpg', label: 'Mentors & Students', icon: Wrench, color: '#fb923c' },
  { type: 'video', src: '/startup_media/video_7.mp4', label: 'Future Innovators', icon: Zap, color: '#facc15' },
  { type: 'image', src: '/startup_media/photo_11.jpg', label: 'Lab Deployment', icon: Cpu, color: '#38bdf8' },
  { type: 'video', src: '/startup_media/video_8.mp4', label: 'Classroom Energy', icon: Rocket, color: '#f472b6' },
  { type: 'image', src: '/startup_media/photo_12.jpg', label: 'Student Achievement', icon: Brain, color: '#4ade80' },
];

/* Duplicate for seamless infinite loop */
const TRACK = [...MEDIA_ITEMS, ...MEDIA_ITEMS];

const MediaCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div
      className="relative flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 shadow-lg"
      style={{ width: '260px', height: '180px', margin: '0 10px', background: '#0f172a' }}
    >
      {/* Media: Image or Video */}
      {item.type === 'video' ? (
        <video
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <img
          src={item.src}
          alt={item.label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

      {/* Badge */}
      <div
        className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md shadow-md z-10"
        style={{ background: 'rgba(15,23,42,0.75)', border: `1px solid ${item.color}66` }}
      >
        <Icon size={12} style={{ color: item.color }} />
        <span className="text-[10px] font-bold text-white tracking-wide">{item.label}</span>
      </div>

      {/* Media Type pill indicator (Video / Photo) */}
      {item.type === 'video' && (
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-red-500/80 backdrop-blur-md text-[9px] font-black uppercase text-white tracking-wider z-10">
          ▶ LIVE
        </div>
      )}

      {/* Bottom label on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-white text-xs font-bold block truncate">{item.label}</span>
      </div>

      {/* Top-border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
      />
    </div>
  );
};

/* ─────────────────────────────────────────────────────────── */
const MeetInnovators = () => {
  return (
    <section
      className="relative overflow-hidden py-16"
      style={{ background: 'linear-gradient(180deg, #0a0a1a 0%, #0d0d2b 50%, #0a0a1a 100%)' }}
    >
      {/* ── Background decorations ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(184,84,162,0.15) 0%, transparent 70%)' }}
      />

      {/* ── Header ── */}
      <div className="text-center mb-10 px-6 relative z-10">
        {/* Pill tag */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="w-8 h-[1.5px]" style={{ background: 'linear-gradient(90deg, transparent, #38bdf8)' }} />
          <span className="text-[10px] font-black tracking-[0.25em] uppercase text-cyan-400">Our Young Learners</span>
          <span className="w-8 h-[1.5px]" style={{ background: 'linear-gradient(90deg, #38bdf8, transparent)' }} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Meet Our{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #B854A2 0%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Innovators
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed mb-6"
        >
          Where your child's curiosity becomes their{' '}
          <span className="font-black text-white">Superpower</span>
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-8"
        >
          {[
            { val: '1,000+', label: 'Active Students', color: '#B854A2' },
            { val: '50+',    label: 'Partner Schools', color: '#38bdf8' },
            { val: '5+',     label: 'Tech Domains',    color: '#a78bfa' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-xl font-black" style={{ color: s.color }}>{s.val}</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Single Marquee Line (One infinite scrolling row) ── */}
      <style>{`
        @keyframes scrollSingleLine {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .single-line-marquee {
          animation: scrollSingleLine 50s linear infinite;
        }
        .single-line-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="relative overflow-hidden py-2"
        style={{ maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)' }}
      >
        <div className="flex single-line-marquee" style={{ width: 'max-content' }}>
          {TRACK.map((item, i) => (
            <MediaCard key={`single-line-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-10 relative z-10"
      >
        <p className="text-slate-500 text-xs mb-3">
          Real students. Real projects. Real impact.
        </p>
        <button
          onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #B854A2, #38bdf8)',
            boxShadow: '0 8px 24px rgba(184,84,162,0.3)',
          }}
        >
          <Zap size={14} />
          Partner with Us
        </button>
      </motion.div>
    </section>
  );
};

export default MeetInnovators;
