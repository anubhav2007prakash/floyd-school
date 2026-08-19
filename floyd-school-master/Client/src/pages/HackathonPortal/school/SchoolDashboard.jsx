import React from 'react';
import { getSchoolHackathons, getApplications, getSchoolParticipants } from '../shared/mockData';
import { StatCard, Badge, Btn, EmptyState } from '../shared/components';

export default function SchoolDashboard({ onNavigateTab, onHostHackathon, onViewHackathon }) {
  const hackathons = getSchoolHackathons();
  const applications = getApplications();
  const participants = getSchoolParticipants();

  const totalHackathons = hackathons.length;
  const activeHackathons = hackathons.filter(
    (h) => h.status === 'Upcoming' || h.status === 'Live'
  ).length;
  const totalParticipantsCount = hackathons.reduce((acc, h) => acc + (h.participants || 0), 0);
  const totalApplicationsCount = applications.length;

  return (
    <div className="space-y-8 hp-fade-up">
      {/* ─── WELCOME BANNER ────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        {/* Background glow decoration */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-blue-300 backdrop-blur-sm mb-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              School Management Hub
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Welcome back, School Administrator
            </h1>
            <p className="text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
              Manage your institution's hackathons, track student registrations, review team applications, and measure event impact.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Btn
              variant="primary"
              size="lg"
              onClick={onHostHackathon}
              className="bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 text-white font-bold"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Host Hackathon
            </Btn>
          </div>
        </div>
      </div>

      {/* ─── SUMMARY STATS CARDS ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          }
          value={totalHackathons}
          label="Total Hackathons"
          trend={12}
          color="blue"
        />

        <StatCard
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          value={activeHackathons}
          label="Active Hackathons"
          trend={8}
          color="green"
        />

        <StatCard
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          }
          value={totalParticipantsCount}
          label="Total Participants"
          trend={24}
          color="purple"
        />

        <StatCard
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
          value={totalApplicationsCount}
          label="Applications Received"
          trend={15}
          color="amber"
        />
      </div>

      {/* ─── RECENT HACKATHONS SECTION ─────────────────────────────────── */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Recent Hackathons</h2>
            <p className="text-slate-500 text-xs mt-0.5">Overview of active and upcoming challenges</p>
          </div>
          <button
            onClick={() => onNavigateTab('hackathons')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
          >
            View All ({hackathons.length})
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {hackathons.length === 0 ? (
          <EmptyState
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
            title="No hackathons hosted yet"
            description="Create your first hackathon to empower students to build real solutions."
            action={
              <Btn variant="primary" size="sm" onClick={onHostHackathon}>
                Host First Hackathon
              </Btn>
            }
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <th className="pb-3 px-2">Hackathon Name</th>
                  <th className="pb-3 px-3">Date</th>
                  <th className="pb-3 px-3">Status</th>
                  <th className="pb-3 px-3">Participants</th>
                  <th className="pb-3 px-3">Applications</th>
                  <th className="pb-3 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {hackathons.slice(0, 5).map((hk) => (
                  <tr key={hk.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-2">
                      <div className="font-bold text-slate-900">{hk.name}</div>
                      <div className="text-xs text-slate-400">{hk.theme} • {hk.type}</div>
                    </td>
                    <td className="py-4 px-3 text-slate-600 text-xs font-medium">
                      {hk.date}
                    </td>
                    <td className="py-4 px-3">
                      <Badge variant={hk.status}>{hk.status}</Badge>
                    </td>
                    <td className="py-4 px-3 font-semibold text-slate-800">
                      {hk.participants || 0}
                    </td>
                    <td className="py-4 px-3 font-semibold text-slate-800">
                      {hk.applications || 0}
                    </td>
                    <td className="py-4 px-3 text-right">
                      <Btn
                        variant="secondary"
                        size="sm"
                        onClick={() => onViewHackathon(hk)}
                      >
                        View Details
                      </Btn>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ─── QUICK SHORTCUTS & ACTIVITY ────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Applications card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 text-base">Recent Applications</h3>
            <button
              onClick={() => onNavigateTab('applications')}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {applications.slice(0, 4).map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm"
              >
                <div>
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm">{app.participant}</div>
                  <div className="text-xs text-slate-400">{app.hackathon} • {app.date}</div>
                </div>
                <Badge variant={app.status}>{app.status}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Registered Participants snapshot */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 text-base">Key Participants</h3>
            <button
              onClick={() => onNavigateTab('participants')}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {participants.slice(0, 4).map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-xs sm:text-sm">{p.name}</div>
                    <div className="text-xs text-slate-400">{p.team} • {p.course}</div>
                  </div>
                </div>
                <Badge variant={p.status}>{p.status}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
