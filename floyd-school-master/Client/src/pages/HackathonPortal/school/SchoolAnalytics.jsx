import React from 'react';
import { getAnalyticsData } from '../shared/mockData';
import { StatCard } from '../shared/components';

export default function SchoolAnalytics() {
  const analytics = getAnalyticsData();

  // Find max registration for relative bar heights
  const maxReg = Math.max(...analytics.registrationGrowth.map((r) => r.registrations));

  return (
    <div className="space-y-8 hp-fade-up">
      {/* ─── HEADER ─────────────────────────────────────────────────── */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          School Analytics & Insights
        </h1>
        <p className="text-slate-500 text-sm mt-0.5">
          Real-time metrics on student participation, event registrations, and overall performance.
        </p>
      </div>

      {/* ─── METRIC STAT CARDS ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
          value={`${analytics.completionRate}%`}
          label="Event Completion Rate"
          trend={5}
          color="green"
        />

        <StatCard
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
          value={analytics.totalParticipants}
          label="Total Student Participants"
          trend={18}
          color="blue"
        />

        <StatCard
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
          value={analytics.totalApplications}
          label="Submitted Applications"
          trend={12}
          color="purple"
        />

        <StatCard
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          }
          value={analytics.totalHackathons}
          label="Hosted Events"
          color="amber"
        />
      </div>

      {/* ─── CHARTS & VISUALIZATIONS ─────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Registration Growth Chart */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Registration Growth</h3>
            <p className="text-slate-500 text-xs mt-0.5 mb-6">
              Monthly student participant registrations across all challenges
            </p>
          </div>

          <div className="pt-6">
            <div className="flex items-end justify-between gap-3 h-48 border-b border-slate-100 pb-2">
              {analytics.registrationGrowth.map((item, idx) => {
                const heightPercent = Math.round((item.registrations / maxReg) * 100);
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                      {item.registrations}
                    </span>
                    <div className="w-full bg-slate-50 rounded-t-lg flex items-end h-36 p-1">
                      <div
                        className="w-full bg-blue-600 group-hover:bg-blue-500 rounded-t transition-all duration-500 shadow-sm"
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-600">{item.month}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Participants by Hackathon */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-900 text-lg">Participants by Hackathon</h3>
          <p className="text-slate-500 text-xs mt-0.5 mb-6">
            Distribution of student enrollment across individual events
          </p>

          <div className="space-y-4">
            {analytics.participantsByHackathon.map((item, idx) => {
              const maxPart = 150;
              const percent = Math.min(100, Math.round((item.participants / maxPart) * 100));
              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-800">{item.name}</span>
                    <span className="text-blue-600">{item.participants} students</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── APPLICATIONS BREAKDOWN ──────────────────────────────────── */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
        <h3 className="font-bold text-slate-900 text-lg mb-1">Application Pipeline Status</h3>
        <p className="text-slate-500 text-xs mb-6">
          Breakdown of current application approvals, reviews, and rejections
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {analytics.applicationStatus.map((st, idx) => {
            const colors = {
              Approved: 'bg-green-50 border-green-200 text-green-700',
              Pending: 'bg-amber-50 border-amber-200 text-amber-700',
              'Under Review': 'bg-blue-50 border-blue-200 text-blue-700',
              Rejected: 'bg-red-50 border-red-200 text-red-700',
            };
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border ${colors[st.status] || 'bg-slate-50 border-slate-200'}`}
              >
                <div className="text-2xl font-black">{st.count}</div>
                <div className="text-xs font-bold mt-1 uppercase tracking-wider">{st.status}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
