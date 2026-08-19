import React, { useState } from 'react';
import { registerForHackathon, getProfile } from '../shared/mockData';
import { Field, Input, Select, Btn, Modal, showToast } from '../shared/components';

export default function ParticipantRegistrationModal({ isOpen, onClose, hackathon, onRegistered }) {
  const profile = getProfile();

  const [formData, setFormData] = useState({
    fullName: profile?.name || '',
    email: profile?.email || '',
    phone: profile?.phone || '',
    college: profile?.institution || '',
    course: profile?.course || 'Class 11',
    city: profile?.city || '',
    skills: profile?.skills ? profile.skills.join(', ') : 'Python, Web Development',
    experience: 'Beginner',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successInfo, setSuccessInfo] = useState(null);

  if (!hackathon) return null;

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
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.college.trim()) newErrors.college = 'School / College name is required.';
    if (!formData.city.trim()) newErrors.city = 'City is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please fix the errors in the form.', 'warning');
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const reg = registerForHackathon(hackathon.id, formData);
      showToast('Registration successful!', 'success');
      setSuccessInfo(reg);
      if (onRegistered) onRegistered(reg);
    } catch (err) {
      console.error(err);
      showToast('Failed to register. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setSuccessInfo(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={successInfo ? 'Registration Confirmed' : `Register for ${hackathon.name}`}
      size="md"
    >
      {successInfo ? (
        <div className="text-center py-4 space-y-4 hp-fade-up">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600 ring-8 ring-green-50/50">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-slate-900">Registration Successful!</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            You are officially registered for <span className="font-semibold text-slate-800">{hackathon.name}</span>.
          </p>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-500">Registration ID:</span>
              <span className="font-mono font-bold text-blue-600">{successInfo.registrationId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Participant:</span>
              <span className="font-semibold text-slate-800">{formData.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Event Date:</span>
              <span className="font-semibold text-slate-800">{hackathon.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Mode:</span>
              <span className="font-semibold text-slate-800">{hackathon.mode}</span>
            </div>
          </div>

          <div className="pt-2 flex justify-center">
            <Btn variant="primary" size="md" onClick={handleClose}>
              Go to My Hackathons
            </Btn>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="sm:col-span-2">
              <Field label="Full Name" id="fullName" required error={errors.fullName}>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  error={errors.fullName}
                />
              </Field>
            </div>

            <div>
              <Field label="Email Address" id="email" required error={errors.email}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  error={errors.email}
                />
              </Field>
            </div>

            <div>
              <Field label="Phone Number" id="phone" required error={errors.phone}>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit phone number"
                  error={errors.phone}
                />
              </Field>
            </div>

            <div>
              <Field label="College / School" id="college" required error={errors.college}>
                <Input
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="School or college name"
                  error={errors.college}
                />
              </Field>
            </div>

            <div>
              <Field label="Course / Class" id="course">
                <Select id="course" name="course" value={formData.course} onChange={handleChange}>
                  <option value="Class 7-8">Class 7–8</option>
                  <option value="Class 9-10">Class 9–10</option>
                  <option value="Class 11">Class 11</option>
                  <option value="Class 12">Class 12</option>
                  <option value="Undergraduate">Undergraduate / College</option>
                </Select>
              </Field>
            </div>

            <div>
              <Field label="City" id="city" required error={errors.city}>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. New Delhi"
                  error={errors.city}
                />
              </Field>
            </div>

            <div>
              <Field label="Experience Level" id="experience">
                <Select id="experience" name="experience" value={formData.experience} onChange={handleChange}>
                  <option value="Beginner">Beginner (First hackathon)</option>
                  <option value="Intermediate">Intermediate (1-2 hackathons)</option>
                  <option value="Advanced">Advanced (3+ hackathons)</option>
                </Select>
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field label="Skills & Technologies" id="skills">
                <Input
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g. Python, HTML/CSS, UI Design, Robotics"
                />
              </Field>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <Btn variant="secondary" size="sm" type="button" onClick={handleClose} disabled={submitting}>
              Cancel
            </Btn>
            <Btn variant="primary" size="md" type="submit" loading={submitting}>
              {submitting ? 'Registering...' : 'Complete Registration'}
            </Btn>
          </div>
        </form>
      )}
    </Modal>
  );
}
