import React, { useState } from 'react';
import { getSchoolParticipants } from '../shared/mockData';
import { Badge, Btn, SearchBar, EmptyState, Modal } from '../shared/components';

export default function SchoolParticipants() {
  const [participants, setParticipants] = useState(getSchoolParticipants());
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedParticipant, setSelectedParticipant] = useState(null);

  const filtered = participants.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.team.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase()) ||
      p.hackathon.toLowerCase().includes(search.toLowerCase()) ||
      (p.college && p.college.toLowerCase().includes(search.toLowerCase()));

    const matchesStatus = statusFilter === 'ALL' || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 hp-fade-up">
      {/* ─── HEADER ─────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            School Participants
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Directory of registered students and team members participating across your events.
          </p>
        </div>
      </div>

      {/* ─── FILTERS & SEARCH ────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="flex-1 max-w-md">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search by student name, team, email..."
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="ALL">All Statuses</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* ─── PARTICIPANTS LIST / TABLE ───────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-slate-100 text-center shadow-sm">
          <EmptyState
            icon={
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
            title="No participants found"
            description="No student records match your search query."
          />
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-4">Participant</th>
                  <th className="py-4 px-4">Team</th>
                  <th className="py-4 px-4">Hackathon</th>
                  <th className="py-4 px-4">Registered Date</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">
                          {p.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{p.name}</div>
                          <div className="text-xs text-slate-400">{p.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-700 text-xs">
                      {p.team}
                    </td>
                    <td className="py-4 px-4 text-xs font-medium text-slate-600">
                      {p.hackathon}
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-500 font-medium">
                      {p.registrationDate}
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant={p.status}>{p.status}</Badge>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Btn
                        variant="secondary"
                        size="sm"
                        onClick={() => setSelectedParticipant(p)}
                        className="text-xs"
                      >
                        View Details
                      </Btn>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ─── PARTICIPANT DETAIL MODAL ─────────────────────────────────── */}
      <Modal
        isOpen={Boolean(selectedParticipant)}
        onClose={() => setSelectedParticipant(null)}
        title={selectedParticipant ? `Participant: ${selectedParticipant.name}` : 'Participant Details'}
        size="md"
      >
        {selectedParticipant && (
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-base">
                {selectedParticipant.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">{selectedParticipant.name}</h3>
                <p className="text-xs text-slate-500">{selectedParticipant.email}</p>
                <div className="mt-1">
                  <Badge variant={selectedParticipant.status}>{selectedParticipant.status}</Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div>
                <span className="text-slate-400 block">Team</span>
                <span className="font-semibold text-slate-800 text-sm">{selectedParticipant.team}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Hackathon</span>
                <span className="font-semibold text-slate-800 text-sm">{selectedParticipant.hackathon}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Class / Grade</span>
                <span className="font-semibold text-slate-800">{selectedParticipant.course || 'Class 11'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Institution</span>
                <span className="font-semibold text-slate-800">{selectedParticipant.college || 'School'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Phone</span>
                <span className="font-semibold text-slate-800">{selectedParticipant.phone || '9876543210'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Registered On</span>
                <span className="font-semibold text-slate-800">{selectedParticipant.registrationDate}</span>
              </div>
            </div>

            <div className="pt-3 flex justify-end">
              <Btn variant="primary" size="sm" onClick={() => setSelectedParticipant(null)}>
                Close
              </Btn>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
