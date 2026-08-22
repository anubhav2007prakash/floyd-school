const StudentBenefits = () => {
  const benefits = [
    { 
      title: "TECHNOLOGY EXPOSURE", 
      desc: "Early, structured introduction to real world technology fields."
    },
    { 
      title: "HANDS ON EXPERIENCE", 
      desc: "Learning by experimenting, building and creating."
    },
    { 
      title: "PROBLEM SOLVING", 
      desc: "Developing logical thinking and practical problem solving ability."
    },
    { 
      title: "CREATIVE CONFIDENCE", 
      desc: "The confidence to turn ideas into working projects."
    },
    { 
      title: "PROJECT PORTFOLIO", 
      desc: "Tangible projects students can showcase."
    },
    { 
      title: "MENTOR GUIDANCE", 
      desc: "Learning directly from experienced technology practitioners."
    },
    { 
      title: "CERTIFICATION", 
      desc: "Recognition for completing a structured learning journey."
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white pt-24 pb-24 w-full relative overflow-hidden">
      {/* Decorative 3D elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-blue-600 bg-blue-50 border border-blue-100 uppercase mb-4">
            WHAT STUDENTS GAIN
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900 uppercase">
            SKILLS THAT GO <span className="text-blue-600">BEYOND THE CLASSROOM.</span>
          </h2>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden flex overflow-x-auto gap-4 pb-6 snap-x px-4">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-[85vw] max-w-[320px] snap-center">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 relative overflow-hidden min-h-[170px]">
                <div className="relative z-10">
                  <span className="text-xs font-black text-blue-500 mb-2 block">0{idx + 1}</span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Cards */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <div key={idx} className="group">
              <div className="h-full bg-white rounded-2xl p-7 shadow-md border border-slate-200 transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                <div className="relative z-10">
                  <span className="text-xs font-black text-blue-600 mb-3 block">0{idx + 1}</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight uppercase leading-snug group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentBenefits;
