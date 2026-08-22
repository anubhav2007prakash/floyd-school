import { motion } from 'framer-motion';
import { HelpCircle, Compass, Hammer, Sparkles, RefreshCw } from 'lucide-react';

const PHILOSOPHY_STEPS = [
  {
    step: '01',
    title: 'ASK',
    tagline: 'Curiosity starts the journey.',
    desc: 'Students question how things work and identify problems around them worth solving.',
    icon: HelpCircle,
    color: '#38bdf8',
    gradient: 'linear-gradient(135deg, #0284c7, #38bdf8)',
  },
  {
    step: '02',
    title: 'EXPLORE',
    tagline: 'Students experiment with ideas and technology.',
    desc: 'Hands-on experimentation with algorithms, code logic, sensors, and frameworks.',
    icon: Compass,
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
  },
  {
    step: '03',
    title: 'BUILD',
    tagline: 'Concepts become practical projects.',
    desc: 'Translating knowledge into real, working prototypes, websites, models and applications.',
    icon: Hammer,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #059669, #10b981)',
  },
  {
    step: '04',
    title: 'IMPROVE',
    tagline: 'Students test, learn and make their work better.',
    desc: 'Continuous iteration through testing, mentor feedback, debugging, and refinement.',
    icon: RefreshCw,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #d97706, #f59e0b)',
  },
];

const StudentPhilosophy = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 uppercase mb-4 shadow-sm">
            <Sparkles size={14} className="text-amber-500" />
            THE FLOYD APPROACH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase mb-4">
            ACTION OVER{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6366f1 0%, #0284c7 100%)' }}>
              OBSERVATION.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600 font-medium leading-relaxed">
            Students learn faster when they are given the opportunity to experiment, make mistakes, solve problems and build something of their own.
          </p>
        </motion.div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHILOSOPHY_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between relative overflow-hidden group hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-indigo-600 transition-colors">
                      {item.step}
                    </span>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
                      style={{ background: item.gradient }}
                    >
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-xs font-bold text-indigo-600 mb-3 leading-snug">
                    {item.tagline}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StudentPhilosophy;
