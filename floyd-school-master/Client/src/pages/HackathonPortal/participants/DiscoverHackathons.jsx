import React, { useState } from 'react';
import { getDiscoverHackathons } from '../shared/mockData';
import { Badge, Btn, SearchBar, EmptyState, Modal } from '../shared/components';

export default function DiscoverHackathons({ onRegisterClick, onViewDetails, selectedHackathon, onCloseDetails }) {
  const [hackathons] = useState(getDiscoverHackathons());
  const [search, setSearch] = useState('');
  const [modeFilter, setModeFilter] = useState('ALL');
  const [categoryFilter, setCategoryFilter] = useState('ALL');

  const filtered = hackathons.filter((h) => {
    const matchesSearch =
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.organization.toLowerCase().includes(search.toLowerCase()) ||
      h.theme.toLowerCase().includes(search.toLowerCase()) ||
      h.location.toLowerCase().includes(search.toLowerCase());

    const matchesMode = modeFilter === 'ALL' || h.mode === modeFilter;
    const matchesCategory =
      categoryFilter === 'ALL' ||
      (h.tags && h.tags.some((t) => t.toLowerCase() === categoryFilter.toLowerCase()));

    return matchesSearch && matchesMode && matchesCategory;
  });

  return (
    <div className="space-y-6 hp-fade-up">
      {/* ─── HEADER ─────────────────────────────────────────────────── */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Discover Hackathons
        </h1>
        <p className="text-slate-500 text-sm mt-0.5">
          Find upcoming challenges, innovation sprints, and tech competitions across India.
        </p>
      </div>

      {/* ─── SEARCH & FILTERS ────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="flex-1 max-w-md">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search by challenge name, topic, or location..."
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Mode filter */}
          <select
            value={modeFilter}
            onChange={(e) => setModeFilter(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="ALL">All Modes</option>
            <option value="Offline">Offline</option>
            <option value="Online">Online</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          {/* Category / Tag filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="ALL">All Categories</option>
            <option value="AI">AI & Machine Learning</option>
            <option value="Sustainability">Sustainability</option>
            <option value="Health">HealthTech</option>
            <option value="Smart City">Smart Cities</option>
          </select>
        </div>
      </div>

      {/* ─── HACKATHONS LIST ─────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-slate-100 text-center shadow-sm">
          <EmptyState
            icon={
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
            title="No hackathons found"
            description="Try changing your search terms or filters to find other events."
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
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant={hk.registrationStatus}>{hk.registrationStatus}</Badge>
                    <Badge variant={hk.mode.toLowerCase()}>{hk.mode}</Badge>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    {hk.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {hk.name}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-0.5 mb-2">
                  Organized by <span className="text-slate-800 font-semibold">{hk.organization}</span>
                </p>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {hk.description}
                </p>

                {/* Tags */}
                {hk.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {hk.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[11px] font-medium"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-2xl border border-slate-100 mb-4">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Event Date</span>
                    <span className="font-semibold text-slate-800">{hk.date}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Participants</span>
                    <span className="font-semibold text-blue-600">
                      {hk.participantCount} / {hk.maxParticipants || 150}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <Btn
                  variant="secondary"
                  size="sm"
                  onClick={() => onViewDetails(hk)}
                  className="text-xs"
                >
                  View Details
                </Btn>

                <Btn
                  variant="primary"
                  size="sm"
                  onClick={() => onRegisterClick(hk)}
                  disabled={hk.registrationStatus === 'Closed'}
                  className="text-xs"
                >
                  {hk.registrationStatus === 'Closed' ? 'Closed' : 'Register Now'}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Btn>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ─── FULL HACKATHON DETAILS MODAL ────────────────────────────── */}
      <Modal
        isOpen={Boolean(selectedHackathon)}
        onClose={onCloseDetails}
        title={selectedHackathon ? selectedHackathon.name : 'Hackathon Overview'}
        size="lg"
      >
        {selectedHackathon && (
          <div className="space-y-6 text-sm">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Badge variant={selectedHackathon.registrationStatus}>
                  {selectedHackathon.registrationStatus}
                </Badge>
                <Badge variant={selectedHackathon.mode.toLowerCase()}>{selectedHackathon.mode}</Badge>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                {selectedHackathon.location} • {selectedHackathon.date}
              </span>
            </div>

            {/* Overview */}
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
                About the Challenge
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                {selectedHackathon.description}
              </p>
            </div>

            {/* Rules & Eligibility */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Rules & Guidelines
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {(selectedHackathon.rules || ['Teams of 2-4 students', 'Original projects only']).map(
                    (rule, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold">•</span>
                        {rule}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-600"></span>
                  Eligibility & Prizes
                </h4>
                <p className="text-xs text-slate-700 font-semibold mb-2">
                  Eligible: <span className="font-normal text-slate-600">{selectedHackathon.eligibility || 'Classes 7 to 12'}</span>
                </p>
                <div className="space-y-1 text-xs text-slate-600">
                  {(selectedHackathon.prizes || ['1st Place: Certificate & Trophy', 'All: Participation Certificates']).map(
                    (prize, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="text-amber-500">🏆</span>
                        {prize}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Organizer Contact */}
            {selectedHackathon.organizer && (
              <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100 text-xs">
                <h4 className="font-bold text-blue-950 uppercase tracking-wider mb-1">
                  Organizer Contact
                </h4>
                <p className="text-blue-800">
                  {selectedHackathon.organizer.name} • {selectedHackathon.organizer.email} • {selectedHackathon.organizer.phone}
                </p>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <Btn variant="secondary" size="sm" onClick={onCloseDetails}>
                Close
              </Btn>
              <Btn
                variant="primary"
                size="md"
                onClick={() => {
                  onCloseDetails();
                  onRegisterClick(selectedHackathon);
                }}
                disabled={selectedHackathon.registrationStatus === 'Closed'}
              >
                Register for Hackathon
              </Btn>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
