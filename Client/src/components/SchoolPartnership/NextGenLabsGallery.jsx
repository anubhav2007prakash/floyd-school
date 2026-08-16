import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Sparkles, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import use3dTilt from '../../hooks/use3dTilt';

const CATEGORIES = [
  { id: 'campus', label: 'School Lab Sessions' },
];

const LAB_PHOTOS = [
  {
    id: 1,
    title: 'AI & Coding Interactive Lab',
    category: 'ai-coding',
    location: 'DPS Vasant Kunj Campus',
    description: 'Students programming intelligent web applications and AI models under mentor guidance.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    tag: 'AI & Coding',
    color: '#00D4FF',
  },
  {
    id: 2,
    title: 'Robotics & Microcontroller Studio',
    category: 'robotics',
    location: 'Ryan International School',
    description: 'Hands-on assembly of automated robotic cars and sensor circuit layouts.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tag: 'Robotics & IoT',
    color: '#3B82F6',
  },
  {
    id: 3,
    title: 'Smart Board Mentoring Session',
    category: 'ai-coding',
    location: 'GD Goenka Public School',
    description: 'Resident mentor walking students through algorithmic logic on interactive displays.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    tag: 'Live Mentoring',
    color: '#8B5CF6',
  },
  {
    id: 4,
    title: 'Collaborative STEM Workshop',
    category: 'stem',
    location: 'Amity International Campus',
    description: 'Group project design sessions testing CAD prototypes and physics models.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    tag: 'STEM & Innovation',
    color: '#F97316',
  },
  {
    id: 5,
    title: 'Turnkey Branding & Equipment Setup',
    category: 'campus',
    location: 'Modern School Barakhamba',
    description: 'Fully branded physical lab room equipped with modern computers & hardware workstations.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    tag: 'Campus Setup',
    color: '#4F46E5',
  },
  {
    id: 6,
    title: 'Future Tech AI Certification Cohort',
    category: 'ai-coding',
    location: 'Springdales School',
    description: 'Class 9 students presenting their semester AI projects for final certification.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    tag: 'Student Projects',
    color: '#EC4899',
  },
  {
    id: 7,
    title: 'Hands-on IoT Hardware Experiment',
    category: 'robotics',
    location: 'Bal Bharati Public School',
    description: 'Students connecting microcontrollers to cloud servers for smart irrigation testing.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    tag: 'Robotics & IoT',
    color: '#10B981',
  },
  {
    id: 8,
    title: 'NEP 2020 10-Bagless Day Activity',
    category: 'stem',
    location: 'DAV Public School',
    description: 'Experiential learning session engaging middle-school students in hands-on STEM challenges.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    tag: 'NEP 2020 Activity',
    color: '#F59E0B',
  },
];

const NextGenLabsGallery = () => {
  const [activeCategory, setActiveCategory] = useState('campus');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = activeCategory === 'campus'
    ? LAB_PHOTOS
    : LAB_PHOTOS.filter((photo) => photo.category === activeCategory);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden" style={{ background: 'var(--bg-setu)' }}>
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full bg-cyan-100/30 filter blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[450px] h-[450px] rounded-full bg-indigo-100/30 filter blur-[90px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full setu-body text-xs font-bold uppercase tracking-widest text-[#4F46E5] bg-indigo-50 border border-indigo-100 mb-4 shadow-sm">
            <Sparkles size={14} className="text-indigo-600" />
            IN-SCHOOL LAB DELIVERY
          </span>
          <h2 className="setu-heading font-extrabold text-slate-900 mb-4" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', lineHeight: 1.15 }}>
            NextGen Learning{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #2A2F8F 0%, #4F46E5 50%, #00D4FF 100%)' }}>
              Labs
            </span>
          </h2>
          <p className="setu-body text-slate-500 max-w-2xl mx-auto text-base">
            A glimpse into our AI, Coding, Robotics, and STEM sessions taught inside your school computer lab period.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center items-center flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full setu-body text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-white text-slate-800 border border-slate-200/90 shadow-md scale-105 ring-2 ring-indigo-500/20'
                    : 'bg-slate-100 text-slate-600 border border-transparent hover:bg-slate-200'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-indigo-600 animate-pulse' : 'bg-slate-400'}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 4x2 Responsive Photo Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <GalleryTile key={photo.id} photo={photo} onClick={() => setSelectedPhoto(photo)} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Premium Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl border border-indigo-100 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 50%, #F5F3FF 100%)',
          }}
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 setu-body text-xs font-bold text-indigo-600 uppercase tracking-widest">
              <CheckCircle2 size={16} className="text-emerald-500" />
              SCHOOLS-FIRST DELIVERY
            </div>
            <h3 className="setu-heading font-extrabold text-slate-900 text-lg sm:text-xl">
              Bring Artificial Intelligence into your school's lab period
            </h3>
            <p className="setu-body text-slate-600 text-sm max-w-2xl">
              Floyd mentors deliver AI and Machine Learning sessions directly in your existing lab, with more domains on the way.
            </p>
          </div>

          <button
            onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 px-8 py-4 rounded-2xl setu-body text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #2A2F8F 0%, #4F46E5 100%)',
              boxShadow: '0 8px 25px rgba(79, 70, 229, 0.3)',
            }}
          >
            <span>Book a Discovery Session</span>
            <ArrowRight size={16} />
          </button>
        </motion.div>

      </div>

      {/* ── LIGHTBOX FULLSCREEN MODAL ────────────────────────────────── */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X size={20} />
              </button>

              {/* Lightbox Image */}
              <div className="aspect-[16/9] w-full bg-black relative">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Lightbox Details Bar */}
              <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2.5 py-0.5 rounded-full setu-body text-[10px] font-bold text-white"
                      style={{ background: selectedPhoto.color }}
                    >
                      {selectedPhoto.tag}
                    </span>
                    <span className="setu-body text-xs text-slate-400 flex items-center gap-1">
                      <MapPin size={12} className="text-cyan-400" />
                      {selectedPhoto.location}
                    </span>
                  </div>
                  <h3 className="setu-heading font-extrabold text-white text-lg">
                    {selectedPhoto.title}
                  </h3>
                  <p className="setu-body text-slate-400 text-xs">
                    {selectedPhoto.description}
                  </p>
                  <div className="mt-4 rounded-2xl bg-slate-950/80 border border-white/10 p-3 text-[10px] text-slate-300">
                    Delivered during your school’s computer lab period with our mentor-led online teaching model.
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedPhoto(null);
                    document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-xl setu-body text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors flex-shrink-0"
                >
                  Inquiry for School Lab Session
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Small presentational tile component with 3D tilt
const GalleryTile = ({ photo, onClick }) => {
  const handlers = use3dTilt({ max: 8, scale: 1.03, perspective: 900, transition: 'transform 240ms cubic-bezier(.2,.9,.3,1)' });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.36 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="group relative rounded-3xl overflow-hidden shadow-md border border-slate-100 bg-slate-900 cursor-pointer aspect-[4/3]"
      ref={handlers.ref}
      onMouseMove={handlers.onMouseMove}
      onMouseLeave={handlers.onMouseLeave}
      style={handlers.style}
    >
      <img src={photo.image} alt={photo.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
      <div className="absolute top-3.5 left-3.5 z-10">
        <span className="inline-block px-3 py-1 rounded-full setu-body text-[10px] font-bold text-white shadow-md border border-white/20 backdrop-blur-md" style={{ background: `${photo.color}CC` }}>{photo.tag}</span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
          <Maximize2 size={20} />
        </div>
      </div>
      <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
        <h3 className="setu-heading font-extrabold text-white text-sm line-clamp-1 mb-1">{photo.title}</h3>
        <div className="flex items-center gap-1.5 setu-body text-[11px] text-slate-300 font-medium"><MapPin size={12} className="text-cyan-400" /><span className="truncate">{photo.location}</span></div>
      </div>
    </motion.div>
  );
};

export default NextGenLabsGallery;
