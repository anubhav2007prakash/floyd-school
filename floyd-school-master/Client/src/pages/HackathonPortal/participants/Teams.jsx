import React, { useState } from 'react';
import { getTeams, createTeam, joinTeam, getDiscoverHackathons, getProfile } from '../shared/mockData';
import { Badge, Btn, Field, Input, Select, Modal, EmptyState, showToast } from '../shared/components';

export default function Teams() {
  const [teams, setTeams] = useState(getTeams());
  const [discover] = useState(getDiscoverHackathons());
  const profile = getProfile();

  // Modals
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  // Form states
  const [createData, setCreateData] = useState({
    name: '',
    hackathonId: discover[0]?.id || '',
    leader: profile?.name || 'Demo User',
    maxMembers: 4,
  });

  const [joinCode, setJoinCode] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');

  // Handle create team
  const handleCreateTeam = (e) => {
    e.preventDefault();
    if (!createData.name.trim()) {
      showToast('Please enter a team name.', 'warning');
      return;
    }

    const hackathon = discover.find((h) => h.id === createData.hackathonId);
    const newTeam = createTeam({
      name: createData.name,
      hackathon: hackathon ? hackathon.name : 'Open Hackathon',
      hackathonId: createData.hackathonId,
      leader: createData.leader,
      maxMembers: Number(createData.maxMembers) || 4,
    });

    setTeams(getTeams());
    setIsCreateOpen(false);
    setCreateData({ name: '', hackathonId: discover[0]?.id || '', leader: profile?.name || 'Demo User', maxMembers: 4 });
    showToast(`Team "${newTeam.name}" created successfully!`, 'success');
  };

  // Handle join team
  const handleJoinTeam = (e) => {
    e.preventDefault();
    if (!joinCode.trim()) {
      showToast('Please enter a team name or code.', 'warning');
      return;
    }

    const teamToJoin = teams.find(
      (t) => t.id === joinCode.trim() || t.name.toLowerCase() === joinCode.trim().toLowerCase()
    );

    if (!teamToJoin) {
      showToast('Team not found. Please verify the code or name.', 'error');
      return;
    }

    if (teamToJoin.members.includes(profile?.name || 'Demo User')) {
      showToast('You are already a member of this team.', 'warning');
      return;
    }

    if (teamToJoin.members.length >= (teamToJoin.maxMembers || 4)) {
      showToast('This team is already full.', 'error');
      return;
    }

    joinTeam(teamToJoin.id, profile?.name || 'Demo User');
    setTeams(getTeams());
    setIsJoinOpen(false);
    setJoinCode('');
    showToast(`Joined ${teamToJoin.name} successfully!`, 'success');
  };

  // Handle invite
  const handleSendInvite = (e) => {
    e.preventDefault();
    if (!inviteEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inviteEmail)) {
      showToast('Please enter a valid teammate email.', 'warning');
      return;
    }
    showToast(`Invitation sent to ${inviteEmail}`, 'success');
    setInviteEmail('');
    setIsInviteOpen(false);
  };

  return (
    <div className="space-y-6 hp-fade-up">
      {/* ─── HEADER ─────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Team Management
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Form collaborative groups, join existing squads, and invite your schoolmates.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Btn variant="secondary" size="md" onClick={() => setIsJoinOpen(true)}>
            Join Team
          </Btn>
          <Btn variant="primary" size="md" onClick={() => setIsCreateOpen(true)}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Create Team
          </Btn>
        </div>
      </div>

      {/* ─── TEAMS LIST ─────────────────────────────────────────────── */}
      {teams.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-slate-100 text-center shadow-sm">
          <EmptyState
            icon={
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            title="No teams yet"
            description="Create your own team or join a teammate's squad to compete together."
            action={
              <Btn variant="primary" size="sm" onClick={() => setIsCreateOpen(true)}>
                Create Team
              </Btn>
            }
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant={team.status === 'Active' ? 'green' : 'default'}>{team.status}</Badge>
                  <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    ID: {team.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{team.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5 mb-3">
                  Competing in: <strong className="text-slate-800">{team.hackathon}</strong>
                </p>

                {/* Team Leader */}
                <div className="flex items-center gap-2 text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-4">
                  <span className="text-amber-500">👑</span>
                  <span className="text-slate-500">Leader:</span>
                  <span className="font-semibold text-slate-800">{team.leader}</span>
                </div>

                {/* Members list */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs font-semibold text-slate-600">
                    <span>Members ({team.members.length} / {team.maxMembers || 4})</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {team.members.map((m, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-800 rounded-lg text-xs font-medium border border-blue-100"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <Btn
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setSelectedTeam(team);
                    setIsInviteOpen(true);
                  }}
                  className="text-xs"
                  disabled={team.members.length >= (team.maxMembers || 4)}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Invite Member
                </Btn>

                <span className="text-[11px] text-slate-400 font-medium">
                  {team.members.length >= (team.maxMembers || 4) ? 'Team is Full' : 'Open Slots Available'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ─── CREATE TEAM MODAL ───────────────────────────────────────── */}
      <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create a New Team" size="md">
        <form onSubmit={handleCreateTeam} className="space-y-4 text-sm">
          <Field label="Team Name" id="teamName" required>
            <Input
              id="teamName"
              value={createData.name}
              onChange={(e) => setCreateData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="e.g. ByteBuilders, CyberKnights"
            />
          </Field>

          <Field label="Associated Hackathon" id="hackathonSelect" required>
            <Select
              id="hackathonSelect"
              value={createData.hackathonId}
              onChange={(e) => setCreateData((prev) => ({ ...prev, hackathonId: e.target.value }))}
            >
              {discover.map((h) => (
                <option key={h.id} value={h.id}>
                  {h.name} ({h.organization})
                </option>
              ))}
            </Select>
          </Field>

          <Field label="Team Leader" id="leader">
            <Input
              id="leader"
              value={createData.leader}
              onChange={(e) => setCreateData((prev) => ({ ...prev, leader: e.target.value }))}
              placeholder="Team Leader Name"
            />
          </Field>

          <Field label="Maximum Team Members" id="maxMembers">
            <Select
              id="maxMembers"
              value={createData.maxMembers}
              onChange={(e) => setCreateData((prev) => ({ ...prev, maxMembers: e.target.value }))}
            >
              <option value="2">2 Members</option>
              <option value="3">3 Members</option>
              <option value="4">4 Members (Standard)</option>
              <option value="5">5 Members</option>
            </Select>
          </Field>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <Btn variant="secondary" size="sm" type="button" onClick={() => setIsCreateOpen(false)}>
              Cancel
            </Btn>
            <Btn variant="primary" size="md" type="submit">
              Create Team
            </Btn>
          </div>
        </form>
      </Modal>

      {/* ─── JOIN TEAM MODAL ─────────────────────────────────────────── */}
      <Modal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} title="Join Existing Team" size="sm">
        <form onSubmit={handleJoinTeam} className="space-y-4 text-sm">
          <Field label="Team Name or ID" id="joinCode" required>
            <Input
              id="joinCode"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
              placeholder="e.g. tm-001 or Team ByteBuilders"
            />
          </Field>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <Btn variant="secondary" size="sm" type="button" onClick={() => setIsJoinOpen(false)}>
              Cancel
            </Btn>
            <Btn variant="primary" size="md" type="submit">
              Join Squad
            </Btn>
          </div>
        </form>
      </Modal>

      {/* ─── INVITE MEMBER MODAL ─────────────────────────────────────── */}
      <Modal
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
        title={selectedTeam ? `Invite to ${selectedTeam.name}` : 'Invite Teammate'}
        size="sm"
      >
        <form onSubmit={handleSendInvite} className="space-y-4 text-sm">
          <p className="text-xs text-slate-500">
            Send an email invitation with an invite link to join this squad.
          </p>

          <Field label="Teammate Email Address" id="inviteEmail" required>
            <Input
              type="email"
              id="inviteEmail"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              placeholder="friend@school.edu"
            />
          </Field>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <Btn variant="secondary" size="sm" type="button" onClick={() => setIsInviteOpen(false)}>
              Cancel
            </Btn>
            <Btn variant="primary" size="md" type="submit">
              Send Invite
            </Btn>
          </div>
        </form>
      </Modal>
    </div>
  );
}
