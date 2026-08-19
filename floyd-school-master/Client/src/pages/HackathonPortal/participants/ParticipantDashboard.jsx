import React from 'react';
import { getMyHackathons, getTeams, getCertificates, getDiscoverHackathons } from '../shared/mockData';
import { StatCard, Badge, Btn } from '../shared/components';

export default function ParticipantDashboard({ onNavigateTab, onOpenHackathonDetails }) {
  const registeredHackathons = getMyHackathons();
  const teams = getTeams();
  const certificates = getCertificates();
  const discoverHackathons = getDiscoverHackathons();

  return (
    <div className="space-y-8 hp-fade-up">
      {/* ─── GREETING BANNER ───────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        {/* Glow circles */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full text-xs font-semibold backdrop-blur-sm mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Student Innovator Portal
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Welcome back, Innovator!
            </h1>
            <p className="text-blue-100 text-sm mt-2 max-w-xl leading-relaxed">
              Explore open hackathons, build team projects, submit your solutions, and earn recognized certificates.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Btn
              variant="secondary"
              size="lg"
              onClick={() => onNavigateTab('discover')}
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Discover Hackathons
            </Btn>
          </div>
        </div>
      </div>

      {/* ─── SUMMARY STATS ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          value={registeredHackathons.length}
          label="Registered Hackathons"
          color="blue"
        />

        <StatCard
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
          value={teams.length}
          label="My Teams"
          color="purple"
        />

        <StatCard
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          value={certificates.length}
          label="Earned Certificates"
          color="green"
        />

        <StatCard
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          value={discoverHackathons.filter((h) => h.registrationStatus === 'Open').length}
          label="Open Challenges"
          color="amber"
        />
      </div>

      {/* ─── FEATURED OPEN HACKATHONS ─────────────────────────────────── */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Featured Challenges
            </h2>
            <p className="text-slate-500 text-xs mt-0.5">Explore popular hackathons open for registration</p>
          </div>
          <button
            onClick={() => onNavigateTab('discover')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
          >
            Explore All
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {discoverHackathons.slice(0, 2).map((hk) => (
            <div
              key={hk.id}
              className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant={hk.registrationStatus}>{hk.registrationStatus}</Badge>
                  <Badge variant={hk.mode.toLowerCase()}>{hk.mode}</Badge>
                </div>
                <h3 className="font-bold text-slate-900 text-base">{hk.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5 mb-2">{hk.organization}</p>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {hk.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">{hk.date}</span>
                <Btn
                  variant="primary"
                  size="sm"
                  onClick={() => onOpenHackathonDetails(hk)}
                  className="text-xs"
                >
                  View Details
                </Btn>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── REGISTERED & TEAMS SNAPSHOT ─────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Registered Hackathons card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 text-base">My Registered Hackathons</h3>
            <button
              onClick={() => onNavigateTab('my-hackathons')}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              View All
            </button>
          </div>
          {registeredHackathons.length === 0 ? (
            <div className="text-center py-8 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-xs text-slate-500 mb-3">You have not registered for any hackathons yet.</p>
              <Btn variant="primary" size="sm" onClick={() => onNavigateTab('discover')}>
                Discover Hackathons
              </Btn>
            </div>
          ) : (
            <div className="space-y-3">
              {registeredHackathons.slice(0, 3).map((reg) => (
                <div
                  key={reg.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm"
                >
                  <div>
                    <div className="font-semibold text-slate-900 text-xs sm:text-sm">{reg.hackathonName}</div>
                    <div className="text-xs text-slate-400">{reg.date} • {reg.mode}</div>
                  </div>
                  <Badge variant={reg.status}>{reg.status}</Badge>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* My Teams card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 text-base">My Teams</h3>
            <button
              onClick={() => onNavigateTab('teams')}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              Manage Teams
            </button>
          </div>
          {teams.length === 0 ? (
            <div className="text-center py-8 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-xs text-slate-500 mb-3">You don't belong to any team yet.</p>
              <Btn variant="primary" size="sm" onClick={() => onNavigateTab('teams')}>
                Create or Join Team
              </Btn>
            </div>
          ) : (
            <div className="space-y-3">
              {teams.slice(0, 3).map((t) => (
                <div
                  key={t.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm"
                >
                  <div>
                    <div className="font-semibold text-slate-900 text-xs sm:text-sm">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.members.length} members • {t.hackathon}</div>
                  </div>
                  <Badge variant="green">{t.status}</Badge>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
