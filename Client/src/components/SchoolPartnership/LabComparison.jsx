import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Monitor, Award, HeartHandshake, ShieldCheck, Compass } from 'lucide-react';

const COMPARISON_DATA = [
  {
    aspect: 'Student Experience',
    icon: Monitor,
    traditional: 'Basic typing, MS Office, and simple computer literacy.',
    floydschool: 'Hands on AI coding, Robotics assembly, 3D printing and real prototype building.',
    traditionalSummary: 'Muted & Passive',
    floydschoolSummary: 'Active & Creative',
    color: '#3B82F6',
  },
  {
    aspect: 'Curriculum Alignment',
    icon: Compass,
    traditional: 'Ad hoc computer periods with outdated, static textbooks.',
    floydschool: '100% aligned with CBSE skill subjects & NEP 2020 experiential directives.',
    traditionalSummary: 'Outdated Syllabus',
    floydschoolSummary: 'NEP & CBSE Aligned',
    color: '#8B5CF6',
  },
  {
    aspect: 'Teacher Support',
    icon: HeartHandshake,
    traditional: 'A single one time orientation seminar for local ICT staff.',
    floydschool: 'Certified trainers deployed on campus with ongoing professional workshops.',
    traditionalSummary: 'No Daily Support',
    floydschoolSummary: 'Full Time Mentors',
    color: '#FF6B00',
  },
  {
    aspect: 'Evidence of Learning',
    icon: Award,
    traditional: 'Written exams, theory scores, and local paper marks.',
    floydschool: 'Public project portfolios, live prototype showcases and Floyd skill certifications.',
    traditionalSummary: 'Theory Only',
    floydschoolSummary: 'Portfolio & Credentials',
    color: '#10B981',
  },
  {
    aspect: 'Scalability & Operations',
    icon: ShieldCheck,
    traditional: 'Prone to hardware downtime, missing cables, and broken labs.',
    floydschool: 'Turnkey operational audits, hardware replacement, and active portal tracking.',
    traditionalSummary: 'High Downtime',
    floydschoolSummary: '100% Managed SLA',
    color: '#EC4899',
  },
];

const LabComparison = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-white">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200" />

      {/* Background color accents */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-50/40 filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-50/40 filter blur-[80px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full setu-body text-xs font-bold uppercase tracking-widest text-[#4F46E5] bg-indigo-50 border border-indigo-100 mb-4 shadow-sm">
            WHY THIS VS TRADITIONAL LABS
          </span>
          <h2 className="setu-heading font-extrabold text-slate-900 mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', lineHeight: 1.15 }}>
            Traditional Computer Labs vs{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #2A2F8F, #4F46E5)' }}>
              Floyd School Labs
            </span>
          </h2>
          <p className="setu-body text-slate-500 max-w-2xl mx-auto text-base">
            See how our managed Skill Labs outperform standard classroom computing in student engagement, compliance, and support.
          </p>
        </motion.div>

        {/* Comparison Grid Board */}
        <div className="space-y-6">
          {COMPARISON_DATA.map((item, idx) => (
            <motion.div
              key={item.aspect}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              whileHover={{ scale: 1.01, boxShadow: '0 12px 30px rgba(0,0,0,0.04)' }}
              className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-100/90 shadow-md relative overflow-hidden transition-all duration-300"
            >
              {/* Aspect Indicator on Left Edge */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: item.color }} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* 1. ASPECT COLUMN (Col Span 3) */}
                <div className="lg:col-span-3 flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${item.color}, #818cf8)` }}
                  >
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="setu-heading font-extrabold text-slate-800 text-sm sm:text-base leading-snug">
                      {item.aspect}
                    </h3>
                  </div>
                </div>

                {/* 2. TRADITIONAL LAB COLUMN (Col Span 4) */}
                <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 relative">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle size={16} className="text-slate-400" />
                    <span className="setu-body text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Traditional Lab
                    </span>
                  </div>
                  <p className="setu-body text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {item.traditional}
                  </p>
                  <span className="inline-block mt-3 px-2.5 py-0.5 rounded-full setu-body text-[9px] font-bold bg-slate-200/60 text-slate-600">
                    {item.traditionalSummary}
                  </span>
                </div>

                {/* VS Divider badge (visible md+) */}
                <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
                  <span className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center setu-heading font-black text-xs text-indigo-500 shadow-sm">
                    VS
                  </span>
                </div>

                {/* 3. FLOYD SCHOOL COMPOSITE LAB COLUMN (Col Span 4) */}
                <div
                  className="lg:col-span-4 p-4 rounded-2xl relative border"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}0A 0%, rgba(255,255,255,1) 100%)`,
                    borderColor: `${item.color}25`,
                    boxShadow: `0 8px 24px ${item.color}0A`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} style={{ color: item.color }} />
                    <span className="setu-body text-[10px] font-bold uppercase tracking-wider" style={{ color: item.color }}>
                      Floyd School Managed Lab
                    </span>
                  </div>
                  <p className="setu-body text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                    {item.floydschool}
                  </p>
                  <span
                    className="inline-block mt-3 px-2.5 py-0.5 rounded-full setu-body text-[9px] font-bold text-white shadow-sm"
                    style={{ background: item.color }}
                  >
                    {item.floydschoolSummary}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LabComparison;
