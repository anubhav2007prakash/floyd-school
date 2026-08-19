import { motion } from 'framer-motion';
import { School, Users, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

const BENEFITS = [
  {
    audience: 'For Schools',
    icon: School,
    color: '#6C63FF',
    headline: 'Elevate your institution\'s brand with future-skills education',
    description: 'Schools that partner with Floyd School gain a competitive edge in enrollment, parent satisfaction, and academic reputation.',
    stats: [
      { value: '3×', label: 'Higher enrollment interest from parents who value tech education' },
      { value: '95%', label: 'School satisfaction rate after first program cycle' },
      { value: '0', label: 'Disruption to existing academic schedule' },
    ],
    points: [
      'Expert mentors handle all teaching and logistics',
      'No changes required from existing staff',
      'School-branded certificates and recognition',
      'Real-time student progress dashboard',
      'National-level exposure through hackathons',
    ],
    image: 'school',
  },
  {
    audience: 'For Students',
    icon: Users,
    color: '#00D4FF',
    headline: 'Real skills, real projects, real career advantage',
    description: 'Students don\'t just learn theory — they build things. Every program ends with portfolio-worthy projects and industry-recognized certifications.',
    stats: [
      { value: '12+', label: 'Real projects built per program' },
      { value: '80%', label: 'Students report increased confidence in tech skills' },
      { value: '500+', label: 'Students placed in internships through our network' },
    ],
    points: [
      'Hands-on learning with real tools (Python, TensorFlow, Arduino)',
      'Portfolio of production-grade projects',
      'Industry-recognized certifications',
      'Access to national hackathons and competitions',
      'Mentorship from working professionals',
    ],
    image: 'students',
  },
  {
    audience: 'For Parents',
    icon: Heart,
    color: '#FF6B6B',
    headline: 'Invest in your child\'s future without the uncertainty',
    description: 'Parents see tangible progress every week. No more wondering if your child is actually learning — they\'ll show you what they built.',
    stats: [
      { value: '7', label: 'Days free trial — see results before committing' },
      { value: '100%', label: 'Transparency with weekly progress reports' },
      { value: '24hrs', label: 'Response time for any parent queries' },
    ],
    points: [
      'Weekly progress reports sent directly to parents',
      'Student projects you can see and share',
      'Industry-recognized certification at program end',
      'Mentors available for parent queries',
      'No expensive equipment — all provided by Floyd School',
    ],
    image: 'parents',
  },
];

const IllustrationBox = ({ type, color }) => {
  const patterns = {
    school: ['🏫', '📊', '🎓', '📋', '🌟', '🏆'],
    students: ['💻', '🤖', '⚡', '🧠', '🔧', '🚀'],
    parents: ['📱', '📈', '💚', '🎯', '🔔', '✅'],
  };
  const icons = patterns[type] || patterns.school;

  return (
    <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${color}12, ${color}06)`, border: `1px solid ${color}20` }}>
      <div className="grid grid-cols-3 gap-6 opacity-60">
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
            className="text-4xl text-center"
          >
            {icon}
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 rounded-3xl" style={{ background: `radial-gradient(circle at 50% 50%, ${color}10, transparent 70%)` }} />
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="benefits" className="py-24 px-6 lg:px-12 relative overflow-hidden" style={{ background: '#080C18' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 30%, rgba(108,99,255,0.05) 0%, transparent 50%)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full sp-body text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.3)', color: '#FF6B6B' }}>
            Benefits
          </span>
          <h2 className="sp-heading font-black text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
            Everyone wins with{' '}
            <span style={{ background: 'linear-gradient(135deg, #FF6B6B, #6C63FF)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Floyd School
            </span>
          </h2>
          <p className="sp-body text-slate-400 max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
            Designed to benefit every stakeholder in the education ecosystem.
          </p>
        </motion.div>

        {/* Alternating sections */}
        <div className="space-y-24">
          {BENEFITS.map((benefit, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={benefit.audience}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Text Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${benefit.color}18`, border: `1px solid ${benefit.color}30` }}>
                      <benefit.icon size={20} style={{ color: benefit.color }} />
                    </div>
                    <span className="sp-body text-sm font-bold uppercase tracking-widest" style={{ color: benefit.color }}>
                      {benefit.audience}
                    </span>
                  </div>

                  <h3 className="sp-heading font-black text-white" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.2 }}>
                    {benefit.headline}
                  </h3>

                  <p className="sp-body text-slate-400 leading-relaxed">{benefit.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {benefit.stats.map((stat) => (
                      <div key={stat.label} className="p-4 rounded-2xl text-center"
                        style={{ background: `${benefit.color}08`, border: `1px solid ${benefit.color}15` }}>
                        <div className="sp-heading font-black text-white text-xl mb-1">{stat.value}</div>
                        <div className="sp-body text-slate-500 text-[10px] leading-tight">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2.5">
                    {benefit.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: benefit.color }} />
                        <span className="sp-body text-slate-400 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 sp-body text-sm font-semibold transition-all duration-200 hover:gap-3"
                    style={{ color: benefit.color }}
                  >
                    Learn more <ArrowRight size={14} />
                  </button>
                </div>

                {/* Illustration */}
                <IllustrationBox type={benefit.image} color={benefit.color} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
