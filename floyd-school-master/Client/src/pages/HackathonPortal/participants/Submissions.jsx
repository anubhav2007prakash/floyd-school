import React, { useState } from 'react';
import { getSubmissions, addSubmission, getDiscoverHackathons, getTeams } from '../shared/mockData';
import { Badge, Btn, Field, Input, Textarea, Select, Modal, EmptyState, showToast } from '../shared/components';

export default function Submissions() {
  const [submissions, setSubmissions] = useState(getSubmissions());
  const [discover] = useState(getDiscoverHackathons());
  const [teams] = useState(getTeams());

  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [selectedSub, setSelectedSub] = useState(null);

  const [formData, setFormData] = useState({
    hackathonId: discover[0]?.id || '',
    team: teams[0]?.name || 'Team ByteBuilders',
    projectName: '',
    problemStatement: '',
    solution: '',
    technologies: '',
    repoLink: '',
    demoLink: '',
    presentationFile: 'project_deck.pdf',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.projectName.trim()) newErrors.projectName = 'Project name is required.';
    if (!formData.problemStatement.trim()) newErrors.problemStatement = 'Problem statement is required.';
    if (!formData.solution.trim()) newErrors.solution = 'Solution description is required.';
    if (!formData.technologies.trim()) newErrors.technologies = 'Technologies used are required.';
    if (formData.repoLink && !/^https?:\/\/.+/.test(formData.repoLink)) {
      newErrors.repoLink = 'Must be a valid URL (http/https).';
    }
    if (formData.demoLink && !/^https?:\/\/.+/.test(formData.demoLink)) {
      newErrors.demoLink = 'Must be a valid URL (http/https).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please fill in all required fields.', 'warning');
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const targetHackathon = discover.find((h) => h.id === formData.hackathonId);
      const newSub = addSubmission({
        ...formData,
        hackathon: targetHackathon ? targetHackathon.name : 'Innovation Sprint',
      });

      setSubmissions(getSubmissions());
      setIsSubmitModalOpen(false);
      setFormData({
        hackathonId: discover[0]?.id || '',
        team: teams[0]?.name || 'Team ByteBuilders',
        projectName: '',
        problemStatement: '',
        solution: '',
        technologies: '',
        repoLink: '',
        demoLink: '',
        presentationFile: 'project_deck.pdf',
      });
      showToast(`Project "${newSub.projectName}" submitted successfully!`, 'success');
    } catch (err) {
      console.error(err);
      showToast('Submission failed. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 hp-fade-up">
      {/* ─── HEADER ─────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Project Submissions
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Submit your hackathon deliverables, GitHub repositories, and live demonstration links.
          </p>
        </div>

        <Btn variant="primary" size="md" onClick={() => setIsSubmitModalOpen(true)}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          New Submission
        </Btn>
      </div>

      {/* ─── SUBMISSION DEADLINE NOTICE ──────────────────────────────── */}
      <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-4 flex items-center gap-3 text-xs text-blue-900">
        <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <span className="font-bold">Submission Guidelines:</span> Ensure repository is public and includes a README. Video demonstrations must not exceed 3 minutes.
        </div>
      </div>

      {/* ─── SUBMISSIONS LIST ────────────────────────────────────────── */}
      {submissions.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-slate-100 text-center shadow-sm">
          <EmptyState
            icon={
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
              </svg>
            }
            title="No project submissions yet"
            description="When you finish building your hackathon solution, submit it here for judges to review."
            action={
              <Btn variant="primary" size="sm" onClick={() => setIsSubmitModalOpen(true)}>
                Submit Project
              </Btn>
            }
          />
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((sub) => (
            <div
              key={sub.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="submitted">{sub.status}</Badge>
                  <span className="text-xs text-slate-500 font-medium">
                    Submitted on: <strong>{sub.submittedDate}</strong>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{sub.projectName}</h3>
                <p className="text-xs text-slate-500 font-semibold">
                  Hackathon: <span className="text-slate-800">{sub.hackathon}</span> • Team: <span className="text-slate-800">{sub.team}</span>
                </p>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-1">
                  {sub.problemStatement}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {sub.technologies &&
                    sub.technologies.split(',').map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-100 rounded text-[11px] font-medium text-slate-700">
                        {tech.trim()}
                      </span>
                    ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <Btn
                  variant="secondary"
                  size="sm"
                  onClick={() => setSelectedSub(sub)}
                  className="text-xs"
                >
                  View Submission
                </Btn>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ─── NEW SUBMISSION MODAL ────────────────────────────────────── */}
      <Modal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        title="Submit Hackathon Project"
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Field label="Hackathon" id="hackathonSelect" required>
                <Select
                  id="hackathonSelect"
                  name="hackathonId"
                  value={formData.hackathonId}
                  onChange={handleChange}
                >
                  {discover.map((h) => (
                    <option key={h.id} value={h.id}>
                      {h.name}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>

            <div>
              <Field label="Team Name" id="teamSelect" required>
                <Input
                  id="teamSelect"
                  name="team"
                  value={formData.team}
                  onChange={handleChange}
                  placeholder="Team Name"
                />
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field label="Project Name" id="projectName" required error={errors.projectName}>
                <Input
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  placeholder="e.g. AI EcoSort, SmartTraffic 360"
                  error={errors.projectName}
                />
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field label="Problem Statement" id="problemStatement" required error={errors.problemStatement}>
                <Textarea
                  id="problemStatement"
                  name="problemStatement"
                  rows={2}
                  value={formData.problemStatement}
                  onChange={handleChange}
                  placeholder="What specific issue does your project solve?"
                  error={errors.problemStatement}
                />
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field label="Proposed Solution & Architecture" id="solution" required error={errors.solution}>
                <Textarea
                  id="solution"
                  name="solution"
                  rows={3}
                  value={formData.solution}
                  onChange={handleChange}
                  placeholder="Explain how your solution works and its key innovations..."
                  error={errors.solution}
                />
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field label="Technologies & Tools Used" id="technologies" required error={errors.technologies}>
                <Input
                  id="technologies"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                  placeholder="e.g. Python, TensorFlow, React, Arduino, Figma"
                  error={errors.technologies}
                />
              </Field>
            </div>

            <div>
              <Field label="Code Repository URL (GitHub/GitLab)" id="repoLink" error={errors.repoLink}>
                <Input
                  type="url"
                  id="repoLink"
                  name="repoLink"
                  value={formData.repoLink}
                  onChange={handleChange}
                  placeholder="https://github.com/username/project"
                  error={errors.repoLink}
                />
              </Field>
            </div>

            <div>
              <Field label="Live Demo URL / Video Link" id="demoLink" error={errors.demoLink}>
                <Input
                  type="url"
                  id="demoLink"
                  name="demoLink"
                  value={formData.demoLink}
                  onChange={handleChange}
                  placeholder="https://youtu.be/... or demo site"
                  error={errors.demoLink}
                />
              </Field>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <Btn variant="secondary" size="sm" type="button" onClick={() => setIsSubmitModalOpen(false)} disabled={isSubmitting}>
              Cancel
            </Btn>
            <Btn variant="primary" size="md" type="submit" loading={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Project'}
            </Btn>
          </div>
        </form>
      </Modal>

      {/* ─── VIEW SUBMISSION MODAL ──────────────────────────────────── */}
      <Modal
        isOpen={Boolean(selectedSub)}
        onClose={() => setSelectedSub(null)}
        title={selectedSub ? `Project: ${selectedSub.projectName}` : 'Submission Details'}
        size="md"
      >
        {selectedSub && (
          <div className="space-y-4 text-sm">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Hackathon:</span>
                <span className="font-semibold text-slate-800">{selectedSub.hackathon}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Team:</span>
                <span className="font-semibold text-slate-800">{selectedSub.team}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <Badge variant="submitted">{selectedSub.status}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Submitted Date:</span>
                <span className="text-slate-700">{selectedSub.submittedDate}</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
                Problem Statement
              </h4>
              <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                {selectedSub.problemStatement}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
                Solution Description
              </h4>
              <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                {selectedSub.solution}
              </p>
            </div>

            {selectedSub.repoLink && (
              <div>
                <span className="text-slate-500 text-xs block">Repository:</span>
                <a
                  href={selectedSub.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-blue-600 font-semibold hover:underline"
                >
                  {selectedSub.repoLink} ↗
                </a>
              </div>
            )}

            <div className="pt-3 flex justify-end">
              <Btn variant="primary" size="sm" onClick={() => setSelectedSub(null)}>
                Close
              </Btn>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
