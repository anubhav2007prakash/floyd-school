import React, { useState } from 'react';
import { getSchoolHackathons } from '../shared/mockData';
import { Badge, Btn, SearchBar, EmptyState, Modal } from '../shared/components';

export default function SchoolHackathons({ onHostHackathon, onViewDetails }) {
  const [hackathons, setHackathons] = useState(getSchoolHackathons());
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [typeFilter, setTypeFilter] = useState('ALL');

  // Selected hackathon for details / edit modal
  const [selectedHk, setSelectedHk] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Filter hackathons
  const filtered = hackathons.filter((h) => {
    const matchesSearch =
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.theme.toLowerCase().includes(search.toLowerCase()) ||
      (h.schoolName && h.schoolName.toLowerCase().includes(search.toLowerCase())) ||
      (h.city && h.city.toLowerCase().includes(search.toLowerCase()));

    const matchesStatus = statusFilter === 'ALL' || h.status === statusFilter;
    const matchesType = typeFilter === 'ALL' || h.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-6 hp-fade-up">
      {/* ─── TOP BAR ─────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            School Hackathons
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Manage, schedule, and view all innovation challenges hosted by your institution.
          </p>
        </div>

        <Btn variant="primary" size="md" onClick={onHostHackathon} className="shrink-0">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Create Hackathon
        </Btn>
      </div>

      {/* ─── FILTERS & SEARCH ────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="flex-1 max-w-md">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search by name, theme, city..."
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="ALL">All Statuses</option>
            <option value="Draft">Draft</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Live">Live</option>
            <option value="Completed">Completed</option>
          </select>

          {/* Type filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="ALL">All Modes</option>
            <option value="Offline">Offline</option>
            <option value="Online">Online</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      {/* ─── HACKATHONS LIST ─────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-slate-100 text-center shadow-sm">
          <EmptyState
            icon={
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            }
            title="No hackathons found"
            description="Create your first hackathon to get started or adjust your search filters."
            action={
              <Btn variant="primary" size="sm" onClick={onHostHackathon}>
                Host Hackathon
              </Btn>
            }
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((hk) => (
            <div
              key={hk.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top header of card */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex flex-wrap gap-2 items-center">
                    <Badge variant={hk.status}>{hk.status}</Badge>
                    <Badge variant={hk.type.toLowerCase()}>{hk.type}</Badge>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    {hk.applicationId || 'FL-DEMO'}
                  </span>
                </div>

                {/* Title & Theme */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {hk.name}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-1 mb-3">
                  Theme: <span className="text-slate-800 font-semibold">{hk.theme}</span>
                </p>

                {/* Description snippet */}
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {hk.description}
                </p>

                {/* Meta details */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-100 mb-4">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Date</span>
                    <span className="font-semibold text-slate-800">{hk.date}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Location</span>
                    <span className="font-semibold text-slate-800">{hk.city || 'Campus'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Registrations</span>
                    <span className="font-semibold text-blue-600">{hk.participants || 0} students</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Applications</span>
                    <span className="font-semibold text-slate-800">{hk.applications || 0} teams</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <Btn
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setSelectedHk(hk);
                    setIsEditModalOpen(true);
                  }}
                  className="text-xs"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Edit / Manage
                </Btn>

                <Btn
                  variant="primary"
                  size="sm"
                  onClick={() => onViewDetails(hk)}
                  className="text-xs"
                >
                  View Details
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Btn>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ─── QUICK EDIT / DETAILS MODAL ──────────────────────────────── */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={selectedHk ? `Manage ${selectedHk.name}` : 'Hackathon Details'}
        size="lg"
      >
        {selectedHk && (
          <div className="space-y-4 text-sm">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Application ID:</span>
                <span className="font-mono font-bold text-blue-600">{selectedHk.applicationId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <Badge variant={selectedHk.status}>{selectedHk.status}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">School:</span>
                <span className="font-semibold text-slate-800">{selectedHk.schoolName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Organizer:</span>
                <span className="font-semibold text-slate-800">{selectedHk.contactName} ({selectedHk.designation})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Email:</span>
                <span className="font-semibold text-slate-800">{selectedHk.email}</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-1">Description</h4>
              <p className="text-slate-600 text-xs leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                {selectedHk.description}
              </p>
            </div>

            <div className="pt-4 flex justify-end gap-2">
              <Btn variant="secondary" size="sm" onClick={() => setIsEditModalOpen(false)}>
                Close
              </Btn>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
