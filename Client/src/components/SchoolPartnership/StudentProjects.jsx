import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  ExternalLink,
  Star,
  Eye,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Globe,
  Database
} from 'lucide-react';
import useIsMobile from '../../hooks/useIsMobile';

import boy1 from '../../assets/avatars/boy1.jpg';
import boy2 from '../../assets/avatars/boy2.jpg';
import boy3 from '../../assets/avatars/boy3.avif';
import girl1 from '../../assets/avatars/girl1.jpg';
import girl2 from '../../assets/avatars/girl2.avif';
import girl3 from '../../assets/avatars/girl3.avif';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Snake Game',
    category: 'Game Development',
    description: 'A classic Snake game built with modern web technologies — smooth controls, score tracking, and addictive gameplay.',
    image: '/projects/snake_game.png',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    stats: { stars: 142, views: '950' },
    featured: false,
    color: '#10b981',
    author: {
      name: 'Priya Sharma',
      avatar: girl1,
      course: 'Web Dev Bootcamp'
    },
    liveUrl: 'https://snakegame1-nine.vercel.app/'
  },
  {
    id: 2,
    title: 'AI Expense Coach',
    category: 'Full Stack Development',
    description: 'An AI-powered personal finance coach that helps users track expenses, set budgets, and get smart spending insights.',
    image: '/projects/E_commerce.png',
    tech: ['React', 'Node.js', 'AI API', 'Firebase'],
    stats: { stars: 189, views: '1.1k' },
    featured: true,
    color: '#3B82F6',
    author: {
      name: 'Rahul Verma',
      avatar: boy1,
      course: 'Full Stack Web Dev'
    },
    liveUrl: 'https://ai-expense-coach--shansharma.replit.app/'
  },
  {
    id: 3,
    title: 'Todo App',
    category: 'Productivity',
    description: 'A clean and intuitive todo application to manage daily tasks with priority levels, deadlines, and progress tracking.',
    image: '/projects/task_management.jpg',
    tech: ['React', 'CSS3', 'LocalStorage'],
    stats: { stars: 98, views: '620' },
    featured: false,
    color: '#8B5CF6',
    author: {
      name: 'Sneha Patel',
      avatar: girl2,
      course: 'Web Dev Bootcamp'
    },
    liveUrl: 'https://todo-app-delta-one-65.vercel.app/'
  },
  {
    id: 4,
    title: 'School Website',
    category: 'Web Development',
    description: 'A fully responsive school website featuring course listings, faculty profiles, admissions info, and a modern design.',
    image: '/projects/IoT-For-Home-Automation.jpg',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    stats: { stars: 176, views: '1.4k' },
    featured: true,
    color: '#F97316',
    author: {
      name: 'Kavya Reddy',
      avatar: girl3,
      course: 'Web Dev Bootcamp'
    },
    liveUrl: 'https://floydschool-bootcamp-webdev-project.vercel.app/'
  },
  {
    id: 5,
    title: 'Netflix Clone',
    category: 'Full Stack Development',
    description: 'A fully functional Netflix clone with movie browsing, trailer playback, user authentication, and personalized recommendations.',
    image: '/projects/netflix_clone.png',
    tech: ['React', 'Node.js', 'MongoDB', 'API'],
    stats: { stars: 342, views: '3.2k' },
    featured: true,
    color: '#EF4444',
    author: {
      name: 'Vikram Singh',
      avatar: boy2,
      course: 'Full Stack Web Dev'
    },
    liveUrl: 'https://netfixcopy9.vercel.app/'
  }
];

const StudentProjects = () => {
  const [filter, setFilter] = useState('all');
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const mobileScrollRef = useRef(null);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
  const filteredProjects = filter === 'featured' ? featuredProjects : PROJECTS_DATA;

  // Auto-scroll logic for mobile carousel
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      if (!mobileScrollRef.current) return;

      const nextIndex = (mobileActiveIndex + 1) % filteredProjects.length;
      const scrollAmount = mobileScrollRef.current.offsetWidth * 0.85 + 24;

      mobileScrollRef.current.scrollTo({
        left: nextIndex * scrollAmount,
        behavior: 'smooth'
      });
      setMobileActiveIndex(nextIndex);
    }, 3500);

    return () => clearInterval(interval);
  }, [isMobile, mobileActiveIndex, filteredProjects.length]);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const scrollLeft = mobileScrollRef.current.scrollLeft;
    const itemWidth = mobileScrollRef.current.offsetWidth * 0.85 + 24;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex !== mobileActiveIndex && newIndex >= 0 && newIndex < filteredProjects.length) {
      setMobileActiveIndex(newIndex);
    }
  };

  return (
    <section id="student-projects" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-slate-50/60">
      {/* Background glow effects */}
      <div
        className="absolute top-1/3 left-0 -translate-y-1/2 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-10 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full setu-body text-xs font-bold uppercase tracking-widest mb-5"
            style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(99,102,241,0.1))',
              border: '1px solid rgba(59,130,246,0.2)',
              color: 'var(--accent-setu2)'
            }}
          >
            <Sparkles size={14} className="text-blue-500 animate-pulse" />
            REAL STUDENT BUILDS
          </span>
          <h2
            className="setu-heading font-black text-slate-900 mb-5 uppercase tracking-tighter"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
          >
            These are real projects students actually build.
          </h2>
          <p className="setu-body text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
            From interactive games to production-ready web apps and AI assistants, explore projects built hands-on in our labs.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {['all', 'featured'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                filter === tab
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80 shadow-sm'
              }`}
            >
              {tab === 'all' ? 'All Projects' : 'Featured Only'}
            </button>
          ))}
        </div>

        {/* Mobile Carousel View */}
        {isMobile ? (
          <div>
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory py-4 -mx-6 px-6 scrollbar-hide"
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="snap-center shrink-0 w-[85vw] bg-white rounded-3xl border border-slate-200/70 overflow-hidden shadow-md flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden relative bg-slate-100 border-b border-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-800 border border-white/40 shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-6 pt-4 border-t border-slate-100 mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-slate-200 overflow-hidden bg-slate-100">
                          <img
                            src={project.author.avatar}
                            alt={project.author.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">{project.author.name}</p>
                          <p className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">{project.author.course}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-slate-600">
                        <Star size={13} className="text-amber-500 fill-amber-500" />
                        <span className="text-xs font-bold">{project.stats.stars}</span>
                      </div>
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest text-center shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Launch Project</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4 mb-2">
              {filteredProjects.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    mobileActiveIndex === idx ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`group relative bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col ${
                  project.featured ? 'ring-2 ring-blue-500/20' : ''
                }`}
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                    {project.category}
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md">
                      Featured
                    </div>
                  )}

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <span>Launch</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-slate-200 overflow-hidden bg-slate-100 shadow-sm">
                        <img
                          src={project.author.avatar}
                          alt={project.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{project.author.name}</p>
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">{project.author.course}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-slate-500">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                        <span className="text-xs font-bold text-slate-700">{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span className="text-xs font-bold text-slate-700">{project.stats.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <a
            href="#partnership-form"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer text-sm md:text-base"
          >
            <span>Partner With Floyd School For Your Campus</span>
            <ArrowRight size={18} />
          </a>
          <p className="text-slate-500 text-xs md:text-sm mt-3 font-medium">
            Empower your students to build industry-level projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentProjects;
