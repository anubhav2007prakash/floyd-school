import { motion } from 'framer-motion';
import { Rocket, Sparkles, Award, Star } from 'lucide-react';

const ITEMS = [
  { text: 'Important Announcement • A Proud Milestone', icon: Rocket },
  { text: 'Empowering Students Across Partner Schools', icon: Star },
  { text: 'Official NEP 2020 Tech and Skill Partner', icon: Award },
  { text: 'Transforming School Computer Labs into AI Hubs', icon: Sparkles },
];

const AnnouncementTicker = () => {
  const tickerContent = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden py-3 font-sans shadow-md"
      style={{
        background: 'linear-gradient(90deg, #FACC15 0%, #F59E0B 50%, #FACC15 100%)',
        borderTop: '2px solid #FEF08A',
        borderBottom: '2px solid #D97706',
      }}
    >
      {/* Background Subtle Shimmer */}
      <div className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.4) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.4) 75%, transparent 75%, transparent)',
          backgroundSize: '40px 40px',
        }}
      />

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker-loop {
          display: flex;
          width: max-content;
          animation: ticker 35s linear infinite;
        }
        .animate-ticker-loop:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative flex overflow-hidden">
        <div className="animate-ticker-loop items-center gap-8">
          {tickerContent.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 whitespace-nowrap px-4 group cursor-pointer">
                <div className="w-7 h-7 rounded-full bg-slate-900/10 flex items-center justify-center text-slate-900 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-amber-300 transition-all duration-300">
                  <Icon size={14} className="flex-shrink-0" />
                </div>
                <span className="text-slate-950 font-black text-sm md:text-base tracking-wide uppercase group-hover:text-slate-900 transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.text}
                </span>
                <span className="text-amber-900/40 text-xs font-bold pl-4">✦</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
