import React, { useState } from 'react';
import { getApplications } from '../shared/mockData';
import { Badge, Btn, SearchBar, EmptyState, Modal, showToast } from '../shared/components';

export default function SchoolApplications() {
  const [applications, setApplications] = useState(getApplications());
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedApp, setSelectedApp] = useState(null);

  // Status updates
  const handleUpdateStatus = (appId, newStatus) => {
    setApplications((prev) =>
      prev.map((a) => (a.id === appId ? { ...a, status: newStatus } : a))
    );
    if (selectedApp && selectedApp.id === appId) {
      setSelectedApp((prev) => ({ ...prev, status: newStatus }));
    }
    showToast(`Application status updated to ${newStatus}`, 'success');
  };

  const filtered = applications.filter((app) => {
    const matchesSearch =
      app.participant.toLowerCase().includes(search.toLowerCase()) ||
      app.hackathon.toLowerCase().includes(search.toLowerCase()) ||
      app.applicationId.toLowerCase().includes(search.toLowerCase()) ||
      (app.school && app.school.toLowerCase().includes(search.toLowerCase()));

    const matchesStatus = statusFilter === 'ALL' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 hp-fade-up">
      {/* ─── HEADER ─────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            School Applications
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Review and manage student team registrations submitted for your hackathons.
          </p>
        </div>
      </div>

      {/* ─── FILTERS & SEARCH ────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="flex-1 max-w-md">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search by team, hackathon, ID..."
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="ALL">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Under Review">Under Review</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* ─── APPLICATIONS TABLE ──────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-slate-100 text-center shadow-sm">
          <EmptyState
            icon={
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            title="No applications found"
            description="No applications match your current search or filter criteria."
          />
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-4">App ID</th>
                  <th className="py-4 px-4">Participant / Team</th>
                  <th className="py-4 px-4">Hackathon</th>
                  <th className="py-4 px-4">Date</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 font-mono text-xs font-bold text-blue-600">
                      {app.applicationId}
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-slate-900">{app.participant}</div>
                      <div className="text-xs text-slate-400">
                        {app.members ? `${app.members} members` : 'Individual'} • {app.school || 'School'}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-medium text-slate-800 text-xs">
                      {app.hackathon}
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-500 font-medium">
                      {app.date}
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant={app.status}>{app.status}</Badge>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Btn
                        variant="secondary"
                        size="sm"
                        onClick={() => setSelectedApp(app)}
                        className="text-xs"
                      >
                        Review
                      </Btn>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ─── APPLICATION DETAIL & REVIEW MODAL ───────────────────────── */}
      <Modal
        isOpen={Boolean(selectedApp)}
        onClose={() => setSelectedApp(null)}
        title={selectedApp ? `Application: ${selectedApp.participant}` : 'Application Details'}
        size="md"
      >
        {selectedApp && (
          <div className="space-y-5 text-sm">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">Application ID</span>
                <span className="font-mono font-bold text-blue-600 text-xs">{selectedApp.applicationId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">Hackathon</span>
                <span className="font-semibold text-slate-900 text-xs">{selectedApp.hackathon}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">Team / Lead</span>
                <span className="font-semibold text-slate-900 text-xs">{selectedApp.participant}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">School / Institution</span>
                <span className="font-semibold text-slate-800 text-xs">{selectedApp.school || 'Standard Member'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">Submitted Date</span>
                <span className="text-slate-700 text-xs">{selectedApp.date}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                <span className="text-slate-500 text-xs">Current Status</span>
                <Badge variant={selectedApp.status}>{selectedApp.status}</Badge>
              </div>
            </div>

            {/* Quick Status Action Controls */}
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                Update Application Decision
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleUpdateStatus(selectedApp.id, 'Approved')}
                  className={`py-2 px-3 rounded-xl font-bold text-xs transition-all border ${
                    selectedApp.status === 'Approved'
                      ? 'bg-green-600 text-white border-green-600 shadow-sm'
                      : 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100'
                  }`}
                >
                  ✓ Approve
                </button>
                <button
                  onClick={() => handleUpdateStatus(selectedApp.id, 'Under Review')}
                  className={`py-2 px-3 rounded-xl font-bold text-xs transition-all border ${
                    selectedApp.status === 'Under Review'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                  }`}
                >
                  Under Review
                </button>
                <button
                  onClick={() => handleUpdateStatus(selectedApp.id, 'Rejected')}
                  className={`py-2 px-3 rounded-xl font-bold text-xs transition-all border ${
                    selectedApp.status === 'Rejected'
                      ? 'bg-red-600 text-white border-red-600 shadow-sm'
                      : 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'
                  }`}
                >
                  ✕ Reject
                </button>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Btn variant="secondary" size="sm" onClick={() => setSelectedApp(null)}>
                Done
              </Btn>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
