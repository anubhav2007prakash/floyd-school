import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import HackathonNavbar from './shared/HackathonNavbar';
import HackathonFooter from './shared/HackathonFooter';
import { ToastContainer } from './shared/components';
import SchoolPortal from './school/SchoolPortal';
import ParticipantPortal from './participants/ParticipantPortal';

export default function HackathonPortal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const viewParam = searchParams.get('view'); // 'school' | 'participant' | null
  const tabParam = searchParams.get('tab'); // e.g. 'dashboard', 'hackathons', 'discover', etc.

  const [activePortal, setActivePortal] = useState(viewParam || null);
  const [schoolTab, setSchoolTab] = useState(tabParam || 'dashboard');
  const [participantTab, setParticipantTab] = useState(tabParam || 'dashboard');

  useEffect(() => {
    setActivePortal(viewParam || null);
  }, [viewParam]);

  // Handle portal selection from Journey Selector
  const handleSelectPortal = (portal) => {
    setActivePortal(portal);
    setSearchParams({ view: portal });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle switching portals via navbar / footer
  const handleSwitchPortal = (target) => {
    const next = target || (activePortal === 'school' ? 'participant' : 'school');
    setActivePortal(next);
    setSearchParams({ view: next });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle tab changes
  const handleSchoolTabChange = (tabId) => {
    setSchoolTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleParticipantTabChange = (tabId) => {
    setParticipantTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActivePortal(null);
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-600 selection:text-white">
      <SEO
        title={
          activePortal === 'school'
            ? 'School Portal — Hackathon Management'
            : activePortal === 'participant'
            ? 'Participant Portal — Student Hackathons'
            : 'Hackathon Portal — Floyd School'
        }
        description="A unified hackathon platform for schools to host innovation challenges and students to build real-world solutions."
      />

      {/* Global Toast Container */}
      <ToastContainer />

      {/* ─── 1. JOURNEY SELECTOR (LANDING SCREEN) ────────────────────── */}
      {!activePortal && (
        <div className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Top Brand Header */}
          <header className="relative z-10 px-6 py-6 max-w-7xl mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <span className="font-black text-lg tracking-tight text-white block leading-none">HackPortal</span>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">by Floyd School</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/')}
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              ← Back to Main Site
            </button>
          </header>

          {/* Center Hero & Two Journey Cards */}
          <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 flex-1 flex flex-col items-center justify-center text-center">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Unified Hackathon Ecosystem
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-3xl leading-[1.1] mb-4">
              Where Young Minds Stop Consuming and <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-indigo-300 bg-clip-text text-transparent">Start Building.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
              Choose your journey to access tailored tools for hosting campus innovation challenges or discovering student hackathons.
            </p>

            {/* ── TWO JOURNEY CARDS ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
              {/* Card 1: School */}
              <div
                onClick={() => handleSelectPortal('school')}
                className="group relative bg-slate-800/80 hover:bg-slate-800/95 backdrop-blur-xl border border-slate-700/60 hover:border-blue-500/60 rounded-3xl p-8 sm:p-10 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/25 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Icon illustration */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                    School
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    Schools can register, host campus hackathons, manage events, track student teams, and review project applications seamlessly.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 group-hover:text-blue-300">
                    Enter School Portal
                  </span>
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 group-hover:bg-blue-600 flex items-center justify-center text-blue-400 group-hover:text-white transition-all group-hover:translate-x-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 2: Participants */}
              <div
                onClick={() => handleSelectPortal('participant')}
                className="group relative bg-slate-800/80 hover:bg-slate-800/95 backdrop-blur-xl border border-slate-700/60 hover:border-indigo-500/60 rounded-3xl p-8 sm:p-10 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl group-hover:bg-indigo-600/25 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Icon illustration */}
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-md">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    Participants
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    Participants can discover hackathons, register individually or in teams, build solutions, submit deliverables, and earn verified certificates.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 group-hover:text-indigo-300">
                    Enter Participant Portal
                  </span>
                  <div className="w-8 h-8 rounded-full bg-indigo-600/20 group-hover:bg-indigo-600 flex items-center justify-center text-indigo-400 group-hover:text-white transition-all group-hover:translate-x-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Minimal bottom footer */}
          <footer className="relative z-10 py-6 text-center text-xs text-slate-500 border-t border-slate-800">
            © {new Date().getFullYear()} Floyd School HackPortal Ecosystem. All rights reserved.
          </footer>
        </div>
      )}

      {/* ─── 2. SCHOOL PORTAL VIEW ───────────────────────────────────── */}
      {activePortal === 'school' && (
        <div className="min-h-screen flex flex-col pt-16">
          <HackathonNavbar
            portal="school"
            activeTab={schoolTab}
            onTabChange={handleSchoolTabChange}
            onSwitchPortal={() => handleSwitchPortal('participant')}
          />
          <main className="flex-1">
            <SchoolPortal
              activeTab={schoolTab}
              onTabChange={handleSchoolTabChange}
            />
          </main>
          <HackathonFooter
            onSwitchPortal={handleSwitchPortal}
            onGoHome={handleGoHome}
          />
        </div>
      )}

      {/* ─── 3. PARTICIPANT PORTAL VIEW ──────────────────────────────── */}
      {activePortal === 'participant' && (
        <div className="min-h-screen flex flex-col pt-16">
          <HackathonNavbar
            portal="participant"
            activeTab={participantTab}
            onTabChange={handleParticipantTabChange}
            onSwitchPortal={() => handleSwitchPortal('school')}
          />
          <main className="flex-1">
            <ParticipantPortal
              activeTab={participantTab}
              onTabChange={handleParticipantTabChange}
            />
          </main>
          <HackathonFooter
            onSwitchPortal={handleSwitchPortal}
            onGoHome={handleGoHome}
          />
        </div>
      )}
    </div>
  );
}
