import React, { useState } from 'react';
import { getProfile, saveProfile } from '../shared/mockData';
import { Field, Input, Textarea, Select, Btn, Modal, showToast } from '../shared/components';

export default function ParticipantProfile() {
  const [profile, setProfile] = useState(getProfile());
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editData, setEditData] = useState(profile);

  // Calculate profile completion percentage
  let filledFields = 0;
  const totalFields = 6;
  if (profile?.name) filledFields++;
  if (profile?.email) filledFields++;
  if (profile?.phone) filledFields++;
  if (profile?.institution) filledFields++;
  if (profile?.course) filledFields++;
  if (profile?.skills && profile.skills.length > 0) filledFields++;
  const completionPercent = Math.round((filledFields / totalFields) * 100);

  const handleSave = (e) => {
    e.preventDefault();
    if (!editData.name.trim() || !editData.email.trim()) {
      showToast('Name and email are required.', 'warning');
      return;
    }

    const skillsArray = typeof editData.skills === 'string'
      ? editData.skills.split(',').map((s) => s.trim()).filter(Boolean)
      : editData.skills;

    const updated = {
      ...editData,
      skills: skillsArray,
    };

    saveProfile(updated);
    setProfile(updated);
    setIsEditOpen(false);
    showToast('Profile updated successfully!', 'success');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 hp-fade-up">
      {/* ─── HEADER ─────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Participant Profile
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Manage your personal credentials, education, and innovation skill tags.
          </p>
        </div>

        <Btn
          variant="primary"
          size="md"
          onClick={() => {
            setEditData({
              ...profile,
              skills: profile.skills ? profile.skills.join(', ') : '',
            });
            setIsEditOpen(true);
          }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Edit Profile
        </Btn>
      </div>

      {/* ─── PROFILE OVERVIEW CARD ──────────────────────────────────── */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm space-y-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-slate-100">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-3xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            {profile.name?.charAt(0) || 'U'}
          </div>

          <div className="text-center sm:text-left flex-1">
            <h2 className="text-2xl font-bold text-slate-900">{profile.name}</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {profile.institution} • {profile.course}
            </p>
            <p className="text-xs text-slate-600 mt-2 max-w-xl">
              {profile.bio || 'Passionate student innovator interested in technology and coding.'}
            </p>
          </div>

          {/* Profile Completion Widget */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center w-full sm:w-44">
            <div className="text-xs font-semibold text-slate-500 mb-1">Profile Strength</div>
            <div className="text-2xl font-black text-blue-600">{completionPercent}%</div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: `${completionPercent}%` }} />
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-1">
            <span className="text-xs text-slate-400 block font-medium">Email Address</span>
            <span className="font-semibold text-slate-800 text-sm">{profile.email}</span>
          </div>

          <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-1">
            <span className="text-xs text-slate-400 block font-medium">Phone Number</span>
            <span className="font-semibold text-slate-800 text-sm">{profile.phone}</span>
          </div>

          <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-1">
            <span className="text-xs text-slate-400 block font-medium">School / Institution</span>
            <span className="font-semibold text-slate-800 text-sm">{profile.institution}</span>
          </div>

          <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-1">
            <span className="text-xs text-slate-400 block font-medium">Current Grade / Class</span>
            <span className="font-semibold text-slate-800 text-sm">{profile.course}</span>
          </div>

          <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-1">
            <span className="text-xs text-slate-400 block font-medium">City & Region</span>
            <span className="font-semibold text-slate-800 text-sm">{profile.city || 'New Delhi'}</span>
          </div>

          <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-1">
            <span className="text-xs text-slate-400 block font-medium">Experience Level</span>
            <span className="font-semibold text-slate-800 text-sm">{profile.experience || 'Beginner'}</span>
          </div>
        </div>

        {/* Skills Tag Section */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 mb-3">Skills & Technical Competencies</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills && profile.skills.map((s, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-50 text-blue-700 font-semibold text-xs rounded-xl border border-blue-100"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── EDIT PROFILE MODAL ───────────────────────────────────────── */}
      <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit Participant Profile" size="md">
        <form onSubmit={handleSave} className="space-y-4 text-sm">
          <Field label="Full Name" id="editName" required>
            <Input
              id="editName"
              value={editData.name}
              onChange={(e) => setEditData((prev) => ({ ...prev, name: e.target.value }))}
            />
          </Field>

          <Field label="Email Address" id="editEmail" required>
            <Input
              type="email"
              id="editEmail"
              value={editData.email}
              onChange={(e) => setEditData((prev) => ({ ...prev, email: e.target.value }))}
            />
          </Field>

          <Field label="Phone Number" id="editPhone">
            <Input
              type="tel"
              id="editPhone"
              value={editData.phone}
              onChange={(e) => setEditData((prev) => ({ ...prev, phone: e.target.value }))}
            />
          </Field>

          <Field label="Institution" id="editInstitution">
            <Input
              id="editInstitution"
              value={editData.institution}
              onChange={(e) => setEditData((prev) => ({ ...prev, institution: e.target.value }))}
            />
          </Field>

          <Field label="Class / Grade" id="editCourse">
            <Select
              id="editCourse"
              value={editData.course}
              onChange={(e) => setEditData((prev) => ({ ...prev, course: e.target.value }))}
            >
              <option value="Class 7-8">Class 7–8</option>
              <option value="Class 9-10">Class 9–10</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
              <option value="Undergraduate">Undergraduate / College</option>
            </Select>
          </Field>

          <Field label="Skills (comma separated)" id="editSkills">
            <Input
              id="editSkills"
              value={editData.skills}
              onChange={(e) => setEditData((prev) => ({ ...prev, skills: e.target.value }))}
              placeholder="Python, Web Development, UI/UX"
            />
          </Field>

          <Field label="Bio" id="editBio">
            <Textarea
              id="editBio"
              rows={2}
              value={editData.bio || ''}
              onChange={(e) => setEditData((prev) => ({ ...prev, bio: e.target.value }))}
              placeholder="Short bio about yourself"
            />
          </Field>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <Btn variant="secondary" size="sm" type="button" onClick={() => setIsEditOpen(false)}>
              Cancel
            </Btn>
            <Btn variant="primary" size="md" type="submit">
              Save Changes
            </Btn>
          </div>
        </form>
      </Modal>
    </div>
  );
}
