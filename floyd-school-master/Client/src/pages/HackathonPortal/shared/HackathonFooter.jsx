import React from 'react';

export default function HackathonFooter({ onSwitchPortal, onGoHome }) {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">HackPortal</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering the next generation of innovators, schools, and young builders through hands-on hackathons.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onGoHome} className="hover:text-white transition-colors">
                  Journey Selector
                </button>
              </li>
              <li>
                <button onClick={() => onSwitchPortal('school')} className="hover:text-white transition-colors">
                  School Portal
                </button>
              </li>
              <li>
                <button onClick={() => onSwitchPortal('participant')} className="hover:text-white transition-colors">
                  Participant Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Support & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white cursor-pointer transition-colors">Help Center & FAQ</li>
              <li className="hover:text-white cursor-pointer transition-colors">Organizer Guidelines</li>
              <li className="hover:text-white cursor-pointer transition-colors">Code of Conduct</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy & Terms</li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Contact</h4>
            <p className="text-xs text-slate-400 mb-2">Have questions about organizing or participating?</p>
            <a href="mailto:support@floydschool.com" className="text-xs text-blue-400 hover:underline">
              support@floydschool.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} HackPortal by Floyd School. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms</span>
            <span className="hover:text-slate-400 cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
