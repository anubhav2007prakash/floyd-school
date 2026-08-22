import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Brain, Bot, Monitor, Atom, LayoutGrid, BookOpen, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import AnimatedPath from './AnimatedPath';
import TimelineNode from './TimelineNode';

const CAMPUS_MEDIA = [
  // Videos
  { type: 'video', src: '/startup_media/video_1.mp4', alt: 'Startup activity video 1' },
  { type: 'video', src: '/startup_media/video_2.mp4', alt: 'Startup activity video 2' },
  { type: 'video', src: '/startup_media/video_3.mp4', alt: 'Startup activity video 3' },
  { type: 'video', src: '/startup_media/video_4.mp4', alt: 'Startup activity video 4' },
  { type: 'video', src: '/startup_media/video_5.mp4', alt: 'Startup activity video 5' },
  { type: 'video', src: '/startup_media/video_6.mp4', alt: 'Startup activity video 6' },
  { type: 'video', src: '/startup_media/video_7.mp4', alt: 'Startup activity video 7' },
  { type: 'video', src: '/startup_media/video_8.mp4', alt: 'Startup activity video 8' },
  // Photos
  { type: 'image', src: '/startup_media/photo_1.jpg', alt: 'Startup photo 1' },
  { type: 'image', src: '/startup_media/photo_2.jpg', alt: 'Startup photo 2' },
  { type: 'image', src: '/startup_media/photo_3.jpg', alt: 'Startup photo 3' },
  { type: 'image', src: '/startup_media/photo_4.jpg', alt: 'Startup photo 4' },
  { type: 'image', src: '/startup_media/photo_5.jpg', alt: 'Startup photo 5' },
  { type: 'image', src: '/startup_media/photo_6.jpg', alt: 'Startup photo 6' },
  { type: 'image', src: '/startup_media/photo_7.jpg', alt: 'Startup photo 7' },
  { type: 'image', src: '/startup_media/photo_8.jpg', alt: 'Startup photo 8' },
  { type: 'image', src: '/startup_media/photo_9.jpg', alt: 'Startup photo 9' },
  { type: 'image', src: '/startup_media/photo_10.jpg', alt: 'Startup photo 10' },
  { type: 'image', src: '/startup_media/photo_11.jpg', alt: 'Startup photo 11' },
  { type: 'image', src: '/startup_media/photo_12.jpg', alt: 'Startup photo 12' },
];

const CampusMediaFrame = ({
  frameClassName = 'w-[380px] lg:w-[460px] h-[260px] lg:h-[310px] rounded-t-[180px] rounded-b-3xl border-4',
  pillClassName = 'text-xs px-4 py-1.5',
  showGlow = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % CAMPUS_MEDIA.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const activeMedia = CAMPUS_MEDIA[activeIndex];

  const frame = (
    <div
      className={`${frameClassName} overflow-hidden border-white shadow-2xl relative bg-slate-900 group`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMedia.src}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.55 }}
          className="absolute inset-0"
        >
          {activeMedia.type === 'video' ? (
            <video
              src={activeMedia.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
          ) : (
            <img
              src={activeMedia.src}
              alt={activeMedia.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

      <div className="absolute bottom-4 left-0 right-0 text-center px-4 z-10">
        <span
          className={`inline-flex items-center gap-1.5 setu-heading font-black text-white uppercase tracking-widest bg-slate-900/90 rounded-full border border-white/20 shadow-lg backdrop-blur-md ${pillClassName}`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          FLOYD SCHOOL
        </span>
      </div>
    </div>
  );

  if (!showGlow) return frame;

  return (
    <div className="relative group">
      <div className="absolute -inset-1.5 rounded-t-[180px] rounded-b-3xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 opacity-40 blur-xl group-hover:opacity-75 transition-opacity duration-500" />
      {frame}
    </div>
  );
};

const ECOSYSTEM_NODES = [
  {
    id: 1,
    title: 'AI & MACHINE LEARNING',
    subtitle: 'Understand AI models, patterns and neural logic',
    description: 'Understand how AI learns from data, recognizes patterns and makes predictions through practical activities and projects.',
    outcomes: ['Neural Networks', 'Predictive Models', 'Computer Vision'],
    icon: Brain,
    color: '#00E5FF',
    glowColor: 'rgba(0, 229, 255, 0.4)',
    bg: 'linear-gradient(135deg, #00E5FF 0%, #0284C7 100%)',
    badgeBorder: '#38BDF8',
    positionDesktop: 'left-[4%] top-[14%]',
    delay: 0,
  },
  {
    id: 2,
    title: 'CODING & WEB DEVELOPMENT',
    subtitle: 'From software logic to full stack applications',
    description: 'Learn how ideas become websites, applications and digital products through hands on coding.',
    outcomes: ['Full Stack Web Apps', 'Clean Code Logic', 'Cloud Deployments'],
    icon: LayoutGrid,
    color: '#3B82F6',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    bg: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
    badgeBorder: '#60A5FA',
    positionDesktop: 'left-[8%] top-[48%]',
    delay: 0.15,
  },
  {
    id: 3,
    title: 'CYBERSECURITY',
    subtitle: 'Digital defense, protocols and threat analysis',
    description: 'Explore digital safety, security fundamentals and responsible cybersecurity practices.',
    outcomes: ['Network Defense', 'Cryptographic Basics', 'Vulnerability Scanning'],
    icon: BookOpen,
    color: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    bg: 'linear-gradient(135deg, #A855F7 0%, #6D28D9 100%)',
    badgeBorder: '#C084FC',
    positionDesktop: 'left-[22%] top-[78%]',
    delay: 0.3,
  },
  {
    id: 4,
    title: 'IOT & ROBOTICS',
    subtitle: 'Sensors, circuits and autonomous machines',
    description: 'Connect code with the physical world through sensors, automation, electronics and robotics.',
    outcomes: ['Sensor Integration', 'Autonomous Rovers', 'Smart Automation'],
    icon: Bot,
    color: '#FF6B00',
    glowColor: 'rgba(255, 107, 0, 0.4)',
    bg: 'linear-gradient(135deg, #FF6B00 0%, #EA580C 100%)',
    badgeBorder: '#FB923C',
    positionDesktop: 'right-[22%] top-[78%]',
    delay: 0.45,
  },
  {
    id: 5,
    title: 'STEM & INNOVATION',
    subtitle: 'Problem solving through technology challenges',
    description: 'Develop problem solving, creativity, collaboration and project skills through technology based challenges.',
    outcomes: ['Applied STEM Models', 'Product Prototyping', 'Design Thinking'],
    icon: Atom,
    color: '#6366F1',
    glowColor: 'rgba(99, 102, 241, 0.4)',
    bg: 'linear-gradient(135deg, #6366F1 0%, #4338CA 100%)',
    badgeBorder: '#818CF8',
    positionDesktop: 'right-[8%] top-[48%]',
    delay: 0.6,
  },
  {
    id: 6,
    title: 'LEARNING MANAGEMENT SYSTEM',
    subtitle: 'Digital ecosystem connecting mentors, schools & parents',
    description: 'Our digital learning environment connects students, mentors, parents and school teams throughout the program.',
    outcomes: ['Live Session Sync', 'Progress Dashboards', 'Project Submissions'],
    icon: Monitor,
    color: '#EC4899',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    bg: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
    badgeBorder: '#F472B6',
    positionDesktop: 'right-[4%] top-[14%]',
    delay: 0.75,
  },
];

const SchoolEcosystemOrbit = () => {
  const [activeNodeId, setActiveNodeId] = useState(1);
  const activeNode = ECOSYSTEM_NODES.find((n) => n.id === activeNodeId) || ECOSYSTEM_NODES[0];

  const containerRef = useRef(null);

  /* ── Ultra-Sensitive Scroll Progress Motion Values ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 90%', 'end 10%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.0005,
  });

  /* ── Continuous Scroll-Reactive Transformations (Reacts to even 1px scroll) ── */
  const dashOffset = useTransform(smoothProgress, [0, 1], [0, -2400]);
  const laserProgress = useTransform(smoothProgress, [0, 1], [0, 1]);
  const pathProgressLeft = useTransform(smoothProgress, [0.0, 0.7], [0.35, 1]);
  const pathProgressRight = useTransform(smoothProgress, [0.0, 0.7], [0.35, 1]);

  /* ── Node Reveal Animations ── */
  const node1Opacity = useTransform(smoothProgress, [0.0, 0.25], [0.55, 1]);
  const node1Y = useTransform(smoothProgress, [0.0, 0.25], [20, 0]);
  const node1Scale = useTransform(smoothProgress, [0.0, 0.25], [0.92, 1]);

  const node6Opacity = useTransform(smoothProgress, [0.0, 0.25], [0.55, 1]);
  const node6Y = useTransform(smoothProgress, [0.0, 0.25], [20, 0]);
  const node6Scale = useTransform(smoothProgress, [0.0, 0.25], [0.92, 1]);

  const node2Opacity = useTransform(smoothProgress, [0.15, 0.45], [0.45, 1]);
  const node2Y = useTransform(smoothProgress, [0.15, 0.45], [20, 0]);
  const node2Scale = useTransform(smoothProgress, [0.15, 0.45], [0.92, 1]);

  const node5Opacity = useTransform(smoothProgress, [0.15, 0.45], [0.45, 1]);
  const node5Y = useTransform(smoothProgress, [0.15, 0.45], [20, 0]);
  const node5Scale = useTransform(smoothProgress, [0.15, 0.45], [0.92, 1]);

  const node3Opacity = useTransform(smoothProgress, [0.35, 0.65], [0.4, 1]);
  const node3Y = useTransform(smoothProgress, [0.35, 0.65], [20, 0]);
  const node3Scale = useTransform(smoothProgress, [0.35, 0.65], [0.92, 1]);

  const node4Opacity = useTransform(smoothProgress, [0.35, 0.65], [0.4, 1]);
  const node4Y = useTransform(smoothProgress, [0.35, 0.65], [20, 0]);
  const node4Scale = useTransform(smoothProgress, [0.35, 0.65], [0.92, 1]);

  const nodeTransforms = {
    1: { opacity: node1Opacity, y: node1Y, scale: node1Scale },
    2: { opacity: node2Opacity, y: node2Y, scale: node2Scale },
    3: { opacity: node3Opacity, y: node3Y, scale: node3Scale },
    4: { opacity: node4Opacity, y: node4Y, scale: node4Scale },
    5: { opacity: node5Opacity, y: node5Y, scale: node5Scale },
    6: { opacity: node6Opacity, y: node6Y, scale: node6Scale },
  };

  return (
    <section id="ecosystem" ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-slate-50">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200" />

      {/* Decorative Floating Color Orbs */}
      <div className="absolute top-1/4 left-5 w-[450px] h-[450px] rounded-full bg-cyan-400/10 filter blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-[450px] h-[450px] rounded-full bg-purple-500/10 filter blur-[90px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full setu-body text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100/80 mb-4 shadow-sm">
            <Sparkles size={14} className="text-amber-500" />
            THE FLOYD SCHOOL ECOSYSTEM
          </span>
          <h2 className="setu-heading font-extrabold text-slate-900 uppercase" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', lineHeight: 1.15 }}>
            EVERYTHING STUDENTS NEED{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #0284c7 100%)' }}>
              TO START BUILDING.
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
            A connected learning environment combining technology programs, expert mentorship, practical projects and digital learning support.
          </p>
        </motion.div>

        {/* Orbit Hub Card Container */}
        <div className="rounded-[40px] bg-slate-950/85 p-6 sm:p-10 lg:p-14 relative shadow-2xl border border-slate-800/70 overflow-hidden text-white">
          {/* Subtle Grid Backdrop */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #0F172A 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* ── DESKTOP ANIMATED TIMELINE ORBIT DIAGRAM (md+) ────────────────────── */}
          <div className="relative min-h-[580px] hidden md:block">

            {/* SVG Scroll-Animated Path */}
            <AnimatedPath
              pathProgressLeft={pathProgressLeft}
              pathProgressRight={pathProgressRight}
              dashOffset={dashOffset}
              laserProgress={laserProgress}
            />

            {/* Center Campus Media Card (Remains visible initially) */}
            <div className="absolute left-1/2 top-2 -translate-x-1/2 z-30">
              <CampusMediaFrame showGlow />
            </div>

            {/* 6 Scroll-Animated Nodes */}
            {ECOSYSTEM_NODES.map((node) => {
              const isActive = node.id === activeNodeId;
              const transform = nodeTransforms[node.id];

              return (
                <TimelineNode
                  key={node.id}
                  node={node}
                  isActive={isActive}
                  onHover={() => setActiveNodeId(node.id)}
                  onClick={() => setActiveNodeId(node.id)}
                  nodeOpacity={transform.opacity}
                  nodeY={transform.y}
                  nodeScale={transform.scale}
                />
              );
            })}

          </div>

          {/* ── MOBILE VERTICAL SCROLL JOURNEY (sm/xs screens) ──────────────────── */}
          <div className="block md:hidden space-y-6">
            <CampusMediaFrame
              frameClassName="w-full h-[220px] sm:h-[260px] max-w-[320px] sm:max-w-[380px] mx-auto rounded-t-[140px] rounded-b-2xl border-2"
              pillClassName="text-[10px] px-2.5 py-0.5"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ECOSYSTEM_NODES.map((node) => {
                const isActive = node.id === activeNodeId;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl transition-all text-left ${
                      isActive ? 'bg-indigo-500/15 border-2 border-indigo-400/40 shadow-md' : 'bg-slate-900/80 border border-slate-700 shadow-sm'
                    }`}
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-md"
                      style={{ background: node.bg }}
                    >
                      <node.icon size={20} />
                    </div>
                    <div>
                      <div className="w-4 h-1 rounded-full mb-1" style={{ background: node.color }} />
                      <div className="setu-heading font-bold text-slate-100 text-xs leading-snug">
                        {node.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SchoolEcosystemOrbit;
