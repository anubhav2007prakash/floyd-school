import React, { useState } from 'react';
import { getMyHackathons } from '../shared/mockData';
import { Badge, Btn, EmptyState } from '../shared/components';

export default function MyHackathons({ onNavigateTab }) {
  const [registrations] = useState(getMyHackathons());

  return (
    <div className="space-y-6 hp-fade-up">
      {/* ─── HEADER ─────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            My Registered Hackathons
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Track your upcoming challenges, team affiliations, and submission statuses.
          </p>
        </div>

        <Btn variant="primary" size="md" onClick={() => onNavigateTab('discover')}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Explore More Hackathons
        </Btn>
      </div>

      {/* ─── REGISTRATIONS LIST ──────────────────────────────────────── */}
      {registrations.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-slate-100 text-center shadow-sm">
          <EmptyState
            icon={
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="You haven't joined any hackathons yet"
            description="Discover exciting innovation challenges and register your participation today."
            action={
              <Btn variant="primary" size="sm" onClick={() => onNavigateTab('discover')}>
                Discover Hackathons
              </Btn>
            }
          />
        </div>
      ) : (
        <div className="space-y-4">
          {registrations.map((reg) => (
            <div
              key={reg.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={reg.status}>{reg.status}</Badge>
                  <Badge variant={reg.mode?.toLowerCase() || 'offline'}>{reg.mode || 'Offline'}</Badge>
                  <span className="font-mono text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {reg.registrationId}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{reg.hackathonName}</h3>
                <p className="text-xs text-slate-500">{reg.organization}</p>

                <div className="flex flex-wrap gap-4 text-xs text-slate-600 pt-1">
                  <span>📅 Event Date: <strong className="text-slate-800">{reg.date}</strong></span>
                  <span>👥 Team: <strong className="text-slate-800">{reg.teamName || 'Not Assigned'}</strong></span>
                  <span>
                    🚀 Submission: <Badge variant={reg.submissionStatus === 'Submitted' ? 'green' : 'amber'}>
                      {reg.submissionStatus || 'Pending'}
                    </Badge>
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <Btn
                  variant="secondary"
                  size="sm"
                  onClick={() => onNavigateTab('teams')}
                  className="text-xs"
                >
                  Manage Team
                </Btn>
                <Btn
                  variant="primary"
                  size="sm"
                  onClick={() => onNavigateTab('submissions')}
                  className="text-xs"
                >
                  Submit Project
                </Btn>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
