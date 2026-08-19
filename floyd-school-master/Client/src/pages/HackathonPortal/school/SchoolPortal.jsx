import React, { useState } from 'react';
import SchoolDashboard from './SchoolDashboard';
import SchoolHackathons from './SchoolHackathons';
import SchoolApplications from './SchoolApplications';
import SchoolParticipants from './SchoolParticipants';
import SchoolAnalytics from './SchoolAnalytics';
import HostHackathonWizard from './HostHackathonWizard';
import { Modal, Badge, Btn } from '../shared/components';

export default function SchoolPortal({ activeTab, onTabChange }) {
  const [isHosting, setIsHosting] = useState(false);
  const [viewingHackathon, setViewingHackathon] = useState(null);

  // If user is currently inside the Host Hackathon wizard
  if (isHosting) {
    return (
      <HostHackathonWizard
        onFinish={() => {
          setIsHosting(false);
          onTabChange('dashboard');
        }}
        onCancel={() => setIsHosting(false)}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Tab routing */}
      {activeTab === 'dashboard' && (
        <SchoolDashboard
          onNavigateTab={onTabChange}
          onHostHackathon={() => setIsHosting(true)}
          onViewHackathon={(hk) => setViewingHackathon(hk)}
        />
      )}

      {activeTab === 'hackathons' && (
        <SchoolHackathons
          onHostHackathon={() => setIsHosting(true)}
          onViewDetails={(hk) => setViewingHackathon(hk)}
        />
      )}

      {activeTab === 'applications' && <SchoolApplications />}

      {activeTab === 'participants' && <SchoolParticipants />}

      {activeTab === 'analytics' && <SchoolAnalytics />}

      {/* ─── DETAIL MODAL FOR HACKATHON ─────────────────────────────── */}
      <Modal
        isOpen={Boolean(viewingHackathon)}
        onClose={() => setViewingHackathon(null)}
        title={viewingHackathon ? viewingHackathon.name : 'Hackathon Details'}
        size="lg"
      >
        {viewingHackathon && (
          <div className="space-y-4 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={viewingHackathon.status}>{viewingHackathon.status}</Badge>
              <Badge variant={viewingHackathon.type.toLowerCase()}>{viewingHackathon.type}</Badge>
              <span className="font-mono text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {viewingHackathon.applicationId || 'FL-DEMO'}
              </span>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">Theme:</span>
                <span className="font-semibold text-slate-800 text-xs">{viewingHackathon.theme}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">Date & Time:</span>
                <span className="font-semibold text-slate-800 text-xs">
                  {viewingHackathon.date} ({viewingHackathon.startTime || '09:00'} - {viewingHackathon.endTime || '18:00'})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">School:</span>
                <span className="font-semibold text-slate-800 text-xs">{viewingHackathon.schoolName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">Location / City:</span>
                <span className="font-semibold text-slate-800 text-xs">
                  {viewingHackathon.city}, {viewingHackathon.state}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">Contact Person:</span>
                <span className="font-semibold text-slate-800 text-xs">
                  {viewingHackathon.contactName} ({viewingHackathon.designation})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">Contact Email / Phone:</span>
                <span className="font-semibold text-slate-800 text-xs">
                  {viewingHackathon.email} • {viewingHackathon.phone}
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
                Event Description
              </h4>
              <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 leading-relaxed">
                {viewingHackathon.description}
              </p>
            </div>

            <div className="pt-3 flex justify-end">
              <Btn variant="primary" size="sm" onClick={() => setViewingHackathon(null)}>
                Close
              </Btn>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
