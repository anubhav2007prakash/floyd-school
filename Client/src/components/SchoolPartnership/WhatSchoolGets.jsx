import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap } from 'lucide-react';

const SUCCESS_STORIES = [
  {
    school: 'Delhi Public School, Vasant Kunj',
    logo: 'DPS',
    challenge: 'Students had no exposure to modern tech skills. Demand from parents for future-ready curriculum was growing.',
    implementation: 'Floyd School AI Lab deployed for Class 9 & 10 over 12 weeks. 3 batches of 30 students each.',
    results: '87 students built AI projects. 12 projects presented at national hackathon. School received STEM excellence award.',
    metrics: [
      { icon: Users, value: '87', label: 'Students Trained' },
      { icon: TrendingUp, value: '12', label: 'Projects Built' },
      { icon: Zap, value: '1', label: 'National Award' },
    ],
    color: '#6C63FF',
    quote: 'The transformation in how students approach problems has been remarkable.',
    principal: 'Principal, DPS Vasant Kunj',
  },
  {
    school: 'Ryan International, Gurgaon',
    logo: 'RIS',
    challenge: 'Parents were comparing the school to competitors offering coding classes. Enrollment was at risk.',
    implementation: 'Coding Lab + Robotics Lab combination. 2 semesters. Class 8 through 11.',
    results: 'Parent satisfaction score jumped from 72% to 94%. Enrollment increased by 15% the following year.',
    metrics: [
      { icon: TrendingUp, value: '+22%', label: 'Parent Satisfaction' },
      { icon: Users, value: '+15%', label: 'Enrollment Growth' },
      { icon: Zap, value: '120+', label: 'Students Certified' },
    ],
    color: '#00D4FF',
    quote: 'Floyd School helped us differentiate ourselves in a competitive market.',
    principal: 'Director, Ryan International Gurgaon',
  },
  {
    school: 'Modern School, Barakhamba',
    logo: 'MS',
    challenge: 'Class 11 and 12 students were unsure about career paths in tech. Internship placements were low.',
    implementation: 'Career Lab + AI Lab for senior students. 6 month intensive with portfolio building.',
    results: '23 students secured internships. 8 got selected in national AI competitions. 100% certification rate.',
    metrics: [
      { icon: Zap, value: '23', label: 'Internships Secured' },
      { icon: TrendingUp, value: '8', label: 'Competition Winners' },
      { icon: Users, value: '100%', label: 'Certification Rate' },
    ],
    color: '#FF6B6B',
    quote: 'Our students left with skills and confidence that matched college freshers.',
    principal: 'Head of Academics, Modern School',
  },
];

const WhatSchoolGets = () => {
  return (
    <section className="py-24 px-6 lg:px-12 relative overflow-hidden" style={{ background: '#0F172A' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(108,99,255,0.07) 0%, transparent 50%)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full sp-body text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)', color: '#00D4FF' }}>
            Success Stories
          </span>
          <h2 className="sp-heading font-black text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
            Schools that{' '}
            <span style={{ background: 'linear-gradient(135deg, #00D4FF, #6C63FF)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              transformed with us
            </span>
          </h2>
          <p className="sp-body text-slate-400 max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
            Real schools. Real challenges. Real results.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="space-y-6">
          {SUCCESS_STORIES.map((story, i) => (
            <motion.div
              key={story.school}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Left: School info + metrics */}
                <div className="lg:col-span-2 p-8 border-b lg:border-b-0 lg:border-r" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                  {/* Logo */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center sp-heading font-black text-white text-xl mb-5"
                    style={{ background: `linear-gradient(135deg, ${story.color}, ${story.color}88)`, boxShadow: `0 0 20px ${story.color}40` }}>
                    {story.logo}
                  </div>

                  <h3 className="sp-heading font-black text-white text-xl mb-2">{story.school}</h3>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {story.metrics.map((metric) => (
                      <div key={metric.label} className="p-3 rounded-2xl text-center"
                        style={{ background: `${story.color}0D`, border: `1px solid ${story.color}20` }}>
                        <div className="sp-heading font-black text-white text-lg">{metric.value}</div>
                        <div className="sp-body text-slate-500 text-[10px] mt-0.5 leading-tight">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mt-6 p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="sp-body text-slate-400 text-sm italic leading-relaxed">"{story.quote}"</p>
                    <p className="sp-body text-slate-600 text-xs mt-2">{story.principal}</p>
                  </div>
                </div>

                {/* Right: Story */}
                <div className="lg:col-span-3 p-8">
                  <div className="space-y-6 h-full flex flex-col justify-center">
                    {[
                      { label: 'Challenge', content: story.challenge, color: '#FF6B6B' },
                      { label: 'Implementation', content: story.implementation, color: story.color },
                      { label: 'Results', content: story.results, color: '#6BCB77' },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="sp-body text-xs font-bold uppercase tracking-widest" style={{ color: item.color }}>
                            {item.label}
                          </span>
                        </div>
                        <p className="sp-body text-slate-300 leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSchoolGets;
