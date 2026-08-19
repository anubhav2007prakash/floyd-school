import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Radio, Star } from 'lucide-react';

import { FALLBACK_COURSES } from '../../constants/siteData';

const tabs = [
  { id: 'live', label: 'Live' },
  { id: 'upcoming', label: 'Coming Soon' },
];

const CourseCard = ({ course, isDark, onApply, onViewCurriculum }) => {
  const isComingSoon = !!course.comingSoon;

  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border p-4 shadow-[0_30px_90px_rgba(2,6,23,0.6)] ${
        isDark
          ? 'border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_25%),linear-gradient(135deg,#0a0f1a_0%,#0d1016_100%)]'
          : 'border-slate-200 bg-white'
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

      <div className="flex min-h-[420px] flex-col justify-between">
        <div className="flex items-center justify-between px-2 pb-5 pt-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-300">
          <span className="opacity-90">FLOYD SCHOOL</span>
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] ${
              isComingSoon ? 'bg-white/5 text-slate-300' : 'bg-blue-600/20 text-blue-300'
            }`}
          >
            {isComingSoon ? 'Coming Soon' : 'Live'}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 px-2 pb-2 lg:pb-0">
            <div className="mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
              {isComingSoon ? 'Early Access' : 'Live Batch'}
            </div>

            <h3 className="max-w-[540px] text-3xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-4xl lg:text-[3.5rem]">
              {course.title.includes('AI') && course.title.includes('Machine') ? (
                <>
                  <span className="block">Foundations of</span>
                  <span className="block bg-gradient-to-r from-[#d7f2ff] via-[#d7d6ff] to-[#f6d4ff] bg-clip-text text-transparent">
                    AI &amp; MACHINE
                  </span>
                  <span className="block">LEARNING</span>
                </>
              ) : course.title.includes('Web') ? (
                <>
                  <span className="block">Foundations of</span>
                  <span className="block bg-gradient-to-r from-[#f9d5ff] via-[#f6a8ff] to-[#d0dcff] bg-clip-text text-transparent">
                    WEB
                  </span>
                  <span className="block">DEVELOPMENT</span>
                </>
              ) : course.title.includes('IoT') ? (
                <>
                  <span className="block">Foundations of</span>
                  <span className="block bg-gradient-to-r from-[#d7f2ff] via-white to-[#dce7ff] bg-clip-text text-transparent">
                    IOT &amp;
                  </span>
                  <span className="block">ROBOTICS</span>
                </>
              ) : (
                <>
                  <span className="block">Foundations of</span>
                  <span className="block bg-gradient-to-r from-[#d7f2ff] via-[#bffae1] to-[#d3fcff] bg-clip-text text-transparent">
                    CYBER
                  </span>
                  <span className="block">SECURITY</span>
                </>
              )}
            </h3>
          </div>

          <div className="relative mx-auto h-[240px] w-full max-w-[360px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1c1d30] via-[#0f172a] to-[#111827] sm:h-[260px] sm:max-w-[400px] lg:mx-0 lg:h-[280px] lg:max-w-[440px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_65%)]" />
            <img
              src={course.image}
              alt={course.title}
              className="absolute inset-0 h-full w-full object-contain object-center p-3 opacity-95"
              style={{
                filter: 'contrast(1.08) saturate(1.2)',
              }}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 px-2 pb-1 text-sm text-slate-200">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1.5 font-bold">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            {course.rating} Rating
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1.5 font-bold text-emerald-300">
            <Radio className="h-3.5 w-3.5" />
            {isComingSoon ? 'Coming Soon' : 'Live Sessions'}
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1.5 font-bold text-slate-300">
            {course.duration}
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1.5 font-bold text-slate-300">
            {course.curriculum?.length || 4} Modules
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 px-2 pb-2">
          <button
            type="button"
            onClick={() => onApply(course._id)}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_12px_30px_rgba(59,130,246,0.35)] transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
          >
            {isComingSoon ? 'Early Register' : 'Apply Now'}
          </button>

          <button
            type="button"
            onClick={() => onViewCurriculum(course._id)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white cursor-pointer"
          >
            View Curriculum
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const OurBatchesSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('live');

  const handleApply = (courseId) => {
    navigate(`/course/${courseId}?openRegistration=true`);
  };

  const handleViewCurriculum = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  const filteredCourses = useMemo(() => {
    return FALLBACK_COURSES.filter((course) => {
      if (course.hideFromBatches) return false;
      if (activeTab === 'live') return !course.comingSoon;
      return !!course.comingSoon;
    });
  }, [activeTab]);

  return (
    <section id="online-focus" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute left-0 top-0 h-[700px] w-[700px] -ml-[350px] -mt-[350px] rounded-full bg-blue-600/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] -mr-[300px] -mb-[300px] rounded-full bg-purple-600/5 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 md:text-6xl lg:text-8xl">
            Our Batches
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-500" />
        </div>

        <div className="mb-12 flex justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-12">
          {filteredCourses.map((course) => (
            <CourseCard key={course._id} course={course} isDark onApply={handleApply} onViewCurriculum={handleViewCurriculum} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBatchesSection;
