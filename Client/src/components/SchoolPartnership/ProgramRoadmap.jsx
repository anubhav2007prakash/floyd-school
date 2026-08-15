import { motion } from 'framer-motion';
import { Sparkles, Calendar, Award, Trophy, Compass, CheckCircle } from 'lucide-react';

const ROADMAP_STEPS = [
  {
    step: '01',
    badge: 'Week 1',
    title: 'Demo Bootcamp',
    description: 'A 7-day high-energy intro for all students to find their spark. Hands-on, exciting, and completely free.',
    side: 'left',
    icon: Compass,
    color: '#3B82F6',
    badgeBg: '#e0f2fe',
    badgeColor: '#0284c7',
  },
  {
    step: '02',
    badge: 'Week 2',
    title: 'Domain Selection',
    description: 'Guided counseling to pick the technology path that fits their talent and interest. No wrong choices — only right starts.',
    side: 'right',
    icon: CheckCircle,
    color: '#6366F1',
    badgeBg: '#e0e7ff',
    badgeColor: '#4338ca',
  },
  {
    step: '03',
    badge: '4 Months',
    title: 'Full Program',
    description: 'Deep-dive technical training on campus with specialized mentors. 2 classes per week, real projects every month, assignments, quizzes, and continuous progress tracking.',
    side: 'left',
    icon: Calendar,
    color: '#8B5CF6',
    badgeBg: '#f3e8ff',
    badgeColor: '#7e22ce',
  },
  {
    step: '04',
    badge: 'Capstone',
    title: 'National Hackathon',
    description: 'Students build and showcase products in a 48-hour nationwide inter-school competition. Real judges, real stakes, real recognition.',
    side: 'right',
    icon: Trophy,
    color: '#EC4899',
    badgeBg: '#fce7f3',
    badgeColor: '#be185d',
  },
  {
    step: '05',
    badge: 'Graduation',
    title: 'Certification',
    description: 'Official Floyd School Certificate of Completion — awarded for demonstrated skills and completed projects, not just attendance. Carries weight on college applications.',
    side: 'left',
    icon: Award,
    color: '#10B981',
    badgeBg: '#d1fae5',
    badgeColor: '#047857',
  },
];

const ProgramRoadmap = () => {
  return (
    <section
      id="roadmap"
      className="py-24 px-6 lg:px-12 relative overflow-hidden bg-slate-50"
    >
      {/* Background Glow Orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Eyebrow badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-100 mb-4 shadow-sm">
            <Sparkles size={13} className="text-blue-500" />
            PROGRAM ROADMAP
          </span>

          {/* Headline */}
          <h2
            className="font-black text-slate-900 mb-4 leading-tight tracking-tight"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Your Journey From{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)',
              }}
            >
              Discovery to Certification
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
            Designed for maximum impact and learning — every step has a purpose.
          </p>
        </motion.div>

        {/* ── Timeline Container ── */}
        <div className="relative">
          
          {/* Central Vertical Timeline Line */}
          <div
            className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-1 rounded-full z-0 hidden md:block"
            style={{
              background: 'linear-gradient(to bottom, #3B82F6 0%, #6366F1 25%, #8B5CF6 50%, #EC4899 75%, #10B981 100%)',
              boxShadow: '0 0 12px rgba(99,102,241,0.3)',
            }}
          />

          {/* Timeline Steps Loop */}
          <div className="space-y-12 md:space-y-16">
            {ROADMAP_STEPS.map((item, index) => {
              const isLeft = item.side === 'left';
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="relative flex flex-col md:flex-row items-center justify-between group"
                >
                  {/* Left Side Content Slot */}
                  <div className={`w-full md:w-[45%] ${isLeft ? 'order-1' : 'order-1 md:order-2'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -6, scale: 1.015 }}
                      className="bg-white rounded-3xl p-7 shadow-[0_10px_35px_rgba(0,0,0,0.05)] border border-slate-200/90 transition-all duration-300 relative group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] group-hover:border-blue-200"
                    >
                      {/* Top Bar Color Accent */}
                      <div
                        className="absolute top-0 left-8 right-8 h-1 rounded-full transition-all duration-300 group-hover:left-4 group-hover:right-4"
                        style={{ background: item.color }}
                      />

                      {/* Header inside card: Badge & Title */}
                      <div className="flex items-center justify-between mb-4 pt-1">
                        <span
                          className="px-3.5 py-1 rounded-full text-xs font-bold shadow-sm"
                          style={{
                            background: item.badgeBg,
                            color: item.badgeColor,
                          }}
                        >
                          {item.badge}
                        </span>

                        <div
                          className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                          style={{
                            background: `${item.color}15`,
                            border: `1px solid ${item.color}30`,
                          }}
                        >
                          <Icon size={20} style={{ color: item.color }} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-2xl font-black text-slate-900 mb-2 leading-snug"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Node Circle on Vertical Timeline Line */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="z-10 my-4 md:my-0 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm shadow-xl border-4 border-white transition-transform duration-300 group-hover:scale-125"
                    style={{
                      background: item.color,
                      boxShadow: `0 0 20px ${item.color}80`,
                    }}
                  >
                    {item.step}
                  </motion.div>

                  {/* Empty Spacer Slot on the Opposite Side (Desktop) */}
                  <div className={`hidden md:block w-[45%] ${isLeft ? 'order-2' : 'order-1'}`} />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProgramRoadmap;
