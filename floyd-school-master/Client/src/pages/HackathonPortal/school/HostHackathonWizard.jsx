import React, { useState } from 'react';
import { INDIAN_STATES, generateApplicationId, addSchoolHackathon } from '../shared/mockData';
import { Field, Input, Textarea, Select, Btn, showToast } from '../shared/components';

const INITIAL_FORM = {
  // Step 1: Basic Hackathon Info
  hackathonName: '',
  theme: '',
  description: '',
  type: 'Offline',
  date: '',
  startTime: '09:00',
  endTime: '17:00',

  // Step 2: School / Organization Details
  schoolName: '',
  schoolAddress: '',
  city: '',
  state: '',
  schoolEmail: '',
  schoolPhone: '',
  website: '',

  // Step 3: Contact Person
  contactName: '',
  designation: '',
  phone: '',
  sameAsPhone: true,
  whatsappNumber: '',
  email: '',
};

export default function HostHackathonWizard({ onFinish, onCancel }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);

  // Maximum step reached to allow navigating back/forward to completed steps
  const [maxStepReached, setMaxStepReached] = useState(1);

  // Field change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: type === 'checkbox' ? checked : value };

      // Handle WhatsApp same as phone logic
      if (name === 'sameAsPhone') {
        if (checked) {
          updated.whatsappNumber = updated.phone;
        }
      } else if (name === 'phone' && prev.sameAsPhone) {
        updated.whatsappNumber = value;
      }

      return updated;
    });

    // Clear error for this field on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Validation routines per step
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9+ -]{7,15}$/.test(phone.trim());

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.hackathonName.trim()) {
      newErrors.hackathonName = 'Hackathon name is required.';
    } else if (formData.hackathonName.trim().length < 3) {
      newErrors.hackathonName = 'Please enter a meaningful hackathon name (at least 3 characters).';
    }

    if (!formData.theme.trim()) {
      newErrors.theme = 'Hackathon theme is required.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required.';
    }

    if (!formData.type) {
      newErrors.type = 'Please select a hackathon type.';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required.';
    } else {
      const selected = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.date = 'Please select a current or upcoming date.';
      }
    }

    if (!formData.startTime) {
      newErrors.startTime = 'Start time is required.';
    }

    if (!formData.endTime) {
      newErrors.endTime = 'End time is required.';
    } else if (formData.startTime && formData.endTime <= formData.startTime) {
      newErrors.endTime = 'End time must be after the start time.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.schoolName.trim()) {
      newErrors.schoolName = 'School / Institution name is required.';
    }

    if (!formData.schoolAddress.trim()) {
      newErrors.schoolAddress = 'School address is required.';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required.';
    }

    if (!formData.state) {
      newErrors.state = 'Please select a state.';
    }

    if (!formData.schoolEmail.trim()) {
      newErrors.schoolEmail = 'School email is required.';
    } else if (!validateEmail(formData.schoolEmail)) {
      newErrors.schoolEmail = 'Please enter a valid email address.';
    }

    if (!formData.schoolPhone.trim()) {
      newErrors.schoolPhone = 'School phone number is required.';
    } else if (!validatePhone(formData.schoolPhone)) {
      newErrors.schoolPhone = 'Please enter a valid phone number.';
    }

    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = 'Website must start with http:// or https://';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact person name is required.';
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.sameAsPhone) {
      if (!formData.whatsappNumber.trim()) {
        newErrors.whatsappNumber = 'WhatsApp number is required.';
      } else if (!validatePhone(formData.whatsappNumber)) {
        newErrors.whatsappNumber = 'Please enter a valid WhatsApp number.';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation between steps
  const handleNext = () => {
    let isValid = false;
    if (currentStep === 1) isValid = validateStep1();
    else if (currentStep === 2) isValid = validateStep2();
    else if (currentStep === 3) isValid = validateStep3();

    if (isValid) {
      const next = currentStep + 1;
      setCurrentStep(next);
      setMaxStepReached((prev) => Math.max(prev, next));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      showToast('Please fix the errors before continuing.', 'warning');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setErrors({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleJumpToStep = (step) => {
    if (step <= maxStepReached) {
      setCurrentStep(step);
      setErrors({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Final submission
  const handleSubmit = async () => {
    // Validate all
    if (!validateStep1() || !validateStep2() || !validateStep3()) {
      showToast('Please complete all required fields correctly.', 'error');
      return;
    }

    setSubmitting(true);
    try {
      // Simulate network request latency
      await new Promise((resolve) => setTimeout(resolve, 900));

      const appId = generateApplicationId();
      const newHackathon = addSchoolHackathon({
        applicationId: appId,
        name: formData.hackathonName,
        theme: formData.theme,
        description: formData.description,
        type: formData.type,
        date: formData.date,
        startTime: formData.startTime,
        endTime: formData.endTime,
        schoolName: formData.schoolName,
        schoolAddress: formData.schoolAddress,
        city: formData.city,
        state: formData.state,
        schoolEmail: formData.schoolEmail,
        schoolPhone: formData.schoolPhone,
        website: formData.website,
        contactName: formData.contactName,
        designation: formData.designation,
        phone: formData.phone,
        whatsapp: formData.sameAsPhone ? formData.phone : formData.whatsappNumber,
        email: formData.email,
      });

      showToast('Hackathon hosted successfully!', 'success');
      setSuccessData({
        applicationId: appId,
        schoolName: formData.schoolName,
        hackathonName: formData.hackathonName,
        hackathon: newHackathon,
      });
    } catch (err) {
      console.error(err);
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  // Reset form to host another hackathon
  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setCurrentStep(1);
    setMaxStepReached(1);
    setSuccessData(null);
  };

  // If successfully submitted, render SUCCESS SCREEN
  if (successData) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center hp-fade-up">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 to-emerald-600" />

          {/* Success Check Icon */}
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 ring-8 ring-green-50/50">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-3xl font-black text-slate-900 mb-2">
            Hackathon Hosted Successfully!
          </h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
            Your hackathon has been successfully submitted and registered in the Floyd School network.
          </p>

          {/* Application Details Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 mb-8 text-left space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-slate-200 text-sm">
              <span className="text-slate-500 font-medium">Application ID</span>
              <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200/60">
                {successData.applicationId}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500 font-medium">School / Organization</span>
              <span className="font-semibold text-slate-900">{successData.schoolName}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500 font-medium">Hackathon Event</span>
              <span className="font-semibold text-slate-900">{successData.hackathonName}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500 font-medium">Status</span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-green-600 text-xs bg-green-100/70 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                Active / Upcoming
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Btn
              variant="primary"
              size="lg"
              onClick={() => onFinish && onFinish()}
              className="w-full sm:w-auto"
            >
              Go to Dashboard
            </Btn>
            <Btn
              variant="secondary"
              size="lg"
              onClick={handleReset}
              className="w-full sm:w-auto"
            >
              Host Another Hackathon
            </Btn>
          </div>
        </div>
      </div>
    );
  }

  // Calculate progress percentage
  const progressPercent = currentStep === 1 ? 25 : currentStep === 2 ? 50 : currentStep === 3 ? 75 : 100;

  const stepsConfig = [
    { number: 1, label: 'Basic Info' },
    { number: 2, label: 'School Details' },
    { number: 3, label: 'Contact Person' },
    { number: 4, label: 'Review & Submit' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      {/* Header with title and cancel */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Host a New Hackathon
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Complete the 4-step wizard to register your campus event.
          </p>
        </div>
        {onCancel && (
          <Btn variant="ghost" size="sm" onClick={onCancel}>
            Cancel
          </Btn>
        )}
      </div>

      {/* ─── PROGRESS BAR & STEP NODES ─────────────────────────────────── */}
      <div className="mb-10 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
        {/* Progress Bar Line */}
        <div className="relative mb-6">
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-xs font-bold text-slate-400 mt-1.5">
            <span>Step {currentStep} of 4</span>
            <span className="text-blue-600 font-semibold">{progressPercent}% Completed</span>
          </div>
        </div>

        {/* Step Nodes */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {stepsConfig.map((s) => {
            const isCompleted = s.number < currentStep;
            const isActive = s.number === currentStep;
            const isClickable = s.number <= maxStepReached && s.number !== currentStep;

            return (
              <button
                key={s.number}
                type="button"
                onClick={() => isClickable && handleJumpToStep(s.number)}
                disabled={!isClickable}
                className={`flex flex-col sm:flex-row items-center sm:items-start gap-2 p-2 rounded-xl text-left transition-all ${
                  isClickable ? 'hover:bg-slate-50 cursor-pointer' : 'cursor-default'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                    isCompleted
                      ? 'bg-green-600 text-white'
                      : isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    s.number
                  )}
                </div>
                <div className="hidden sm:block">
                  <div
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-slate-400'
                    }`}
                  >
                    Step {s.number}
                  </div>
                  <div className={`text-xs font-semibold ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                    {s.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── STEP FORMS CONTAINER ──────────────────────────────────────── */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-md">
        {/* ── STEP 1: Basic Info ── */}
        {currentStep === 1 && (
          <div className="space-y-6 hp-fade-up">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Step 1 — Basic Hackathon Information</h2>
              <p className="text-slate-500 text-sm mt-1">Set the core details for your innovation challenge.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Hackathon Name */}
              <div className="md:col-span-2">
                <Field label="Hackathon Name" id="hackathonName" required error={errors.hackathonName}>
                  <Input
                    id="hackathonName"
                    name="hackathonName"
                    value={formData.hackathonName}
                    onChange={handleChange}
                    placeholder="Enter hackathon name (e.g., Delhi Inter-School AI Challenge)"
                    error={errors.hackathonName}
                  />
                </Field>
              </div>

              {/* Theme */}
              <div className="md:col-span-2">
                <Field label="Hackathon Theme" id="theme" required error={errors.theme}>
                  <Input
                    id="theme"
                    name="theme"
                    value={formData.theme}
                    onChange={handleChange}
                    placeholder="e.g. AI for Social Good, CleanTech, Smart Cities"
                    error={errors.theme}
                  />
                </Field>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <Field label="Description" id="description" required error={errors.description}>
                  <Textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the focus, goals, and problem areas students will work on..."
                    error={errors.description}
                  />
                </Field>
              </div>

              {/* Type */}
              <div>
                <Field label="Hackathon Type" id="type" required error={errors.type}>
                  <Select id="type" name="type" value={formData.type} onChange={handleChange} error={errors.type}>
                    <option value="Offline">Offline (On Campus)</option>
                    <option value="Online">Online (Virtual)</option>
                    <option value="Hybrid">Hybrid (Campus + Online)</option>
                  </Select>
                </Field>
              </div>

              {/* Date */}
              <div>
                <Field label="Date" id="date" required error={errors.date}>
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    error={errors.date}
                  />
                </Field>
              </div>

              {/* Start Time */}
              <div>
                <Field label="Start Time" id="startTime" required error={errors.startTime}>
                  <Input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    error={errors.startTime}
                  />
                </Field>
              </div>

              {/* End Time */}
              <div>
                <Field label="End Time" id="endTime" required error={errors.endTime}>
                  <Input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    error={errors.endTime}
                  />
                </Field>
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 2: School / Organization Details ── */}
        {currentStep === 2 && (
          <div className="space-y-6 hp-fade-up">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Step 2 — School / Organization Details</h2>
              <p className="text-slate-500 text-sm mt-1">Provide information about your school or institution.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* School Name */}
              <div className="md:col-span-2">
                <Field label="School / Institution Name" id="schoolName" required error={errors.schoolName}>
                  <Input
                    id="schoolName"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    placeholder="Enter school or institution name"
                    error={errors.schoolName}
                  />
                </Field>
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <Field label="School Address" id="schoolAddress" required error={errors.schoolAddress}>
                  <Textarea
                    id="schoolAddress"
                    name="schoolAddress"
                    rows={2}
                    value={formData.schoolAddress}
                    onChange={handleChange}
                    placeholder="Street address, campus locality"
                    error={errors.schoolAddress}
                  />
                </Field>
              </div>

              {/* City */}
              <div>
                <Field label="City" id="city" required error={errors.city}>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. New Delhi, Mumbai, Bengaluru"
                    error={errors.city}
                  />
                </Field>
              </div>

              {/* State */}
              <div>
                <Field label="State" id="state" required error={errors.state}>
                  <Select id="state" name="state" value={formData.state} onChange={handleChange} error={errors.state}>
                    <option value="">Select State / UT</option>
                    {INDIAN_STATES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </Select>
                </Field>
              </div>

              {/* School Email */}
              <div>
                <Field label="School Email" id="schoolEmail" required error={errors.schoolEmail}>
                  <Input
                    type="email"
                    id="schoolEmail"
                    name="schoolEmail"
                    value={formData.schoolEmail}
                    onChange={handleChange}
                    placeholder="official@school.edu"
                    error={errors.schoolEmail}
                  />
                </Field>
              </div>

              {/* School Phone */}
              <div>
                <Field label="School Phone" id="schoolPhone" required error={errors.schoolPhone}>
                  <Input
                    type="tel"
                    id="schoolPhone"
                    name="schoolPhone"
                    value={formData.schoolPhone}
                    onChange={handleChange}
                    placeholder="e.g. 01126512510 or 9876543210"
                    error={errors.schoolPhone}
                  />
                </Field>
              </div>

              {/* Website */}
              <div className="md:col-span-2">
                <Field label="Website (Optional)" id="website" error={errors.website}>
                  <Input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://www.yourschool.edu"
                    error={errors.website}
                  />
                </Field>
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 3: Contact Person ── */}
        {currentStep === 3 && (
          <div className="space-y-6 hp-fade-up">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Step 3 — Contact Person</h2>
              <p className="text-slate-500 text-sm mt-1">
                Enter details of the primary organizer or teacher coordinator.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Contact Person Name */}
              <div>
                <Field label="Contact Person Name" id="contactName" required error={errors.contactName}>
                  <Input
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Full name"
                    error={errors.contactName}
                  />
                </Field>
              </div>

              {/* Designation */}
              <div>
                <Field label="Designation" id="designation" required error={errors.designation}>
                  <Input
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="e.g. Principal, Computer Teacher, HOD"
                    error={errors.designation}
                  />
                </Field>
              </div>

              {/* Phone Number */}
              <div>
                <Field label="Phone Number" id="phone" required error={errors.phone}>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    error={errors.phone}
                  />
                </Field>
              </div>

              {/* WhatsApp Same Checkbox & Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="whatsappNumber" className="text-sm font-medium text-slate-700">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-blue-600 font-semibold cursor-pointer">
                    <input
                      type="checkbox"
                      name="sameAsPhone"
                      checked={formData.sameAsPhone}
                      onChange={handleChange}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    Same as phone number
                  </label>
                </div>
                <Input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={formData.sameAsPhone ? formData.phone : formData.whatsappNumber}
                  onChange={handleChange}
                  disabled={formData.sameAsPhone}
                  placeholder="WhatsApp number"
                  error={errors.whatsappNumber}
                  className={formData.sameAsPhone ? 'bg-slate-50 text-slate-500 cursor-not-allowed' : ''}
                />
                {errors.whatsappNumber && (
                  <p className="text-xs text-red-500 mt-1">{errors.whatsappNumber}</p>
                )}
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <Field label="Email Address" id="email" required error={errors.email}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contact.organizer@email.com"
                    error={errors.email}
                  />
                </Field>
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 4: Review & Submit ── */}
        {currentStep === 4 && (
          <div className="space-y-6 hp-fade-up">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Step 4 — Review & Submit</h2>
              <p className="text-slate-500 text-sm mt-1">
                Please verify all the information before final submission.
              </p>
            </div>

            <div className="space-y-5">
              {/* Card 1: Hackathon Details */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    Hackathon Details
                  </h3>
                  <button
                    type="button"
                    onClick={() => handleJumpToStep(1)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-xs text-slate-500 block">Name</span>
                    <span className="font-semibold text-slate-800">{formData.hackathonName}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Theme</span>
                    <span className="font-semibold text-slate-800">{formData.theme}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Type & Mode</span>
                    <span className="font-semibold text-slate-800">{formData.type}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Date & Timing</span>
                    <span className="font-semibold text-slate-800">
                      {formData.date} ({formData.startTime} – {formData.endTime})
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-xs text-slate-500 block">Description</span>
                    <p className="text-xs text-slate-700 mt-0.5 leading-relaxed bg-white p-2.5 rounded-lg border border-slate-100">
                      {formData.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Institution Details */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                    Institution Details
                  </h3>
                  <button
                    type="button"
                    onClick={() => handleJumpToStep(2)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-xs text-slate-500 block">School / Institution</span>
                    <span className="font-semibold text-slate-800">{formData.schoolName}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">City, State</span>
                    <span className="font-semibold text-slate-800">
                      {formData.city}, {formData.state}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Official Email</span>
                    <span className="font-semibold text-slate-800">{formData.schoolEmail}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Official Phone</span>
                    <span className="font-semibold text-slate-800">{formData.schoolPhone}</span>
                  </div>
                  {formData.website && (
                    <div className="sm:col-span-2">
                      <span className="text-xs text-slate-500 block">Website</span>
                      <a
                        href={formData.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-blue-600 hover:underline font-medium"
                      >
                        {formData.website}
                      </a>
                    </div>
                  )}
                  <div className="sm:col-span-2">
                    <span className="text-xs text-slate-500 block">Campus Address</span>
                    <span className="text-xs text-slate-700">{formData.schoolAddress}</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Organizer Details */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                    Organizer / Contact Person
                  </h3>
                  <button
                    type="button"
                    onClick={() => handleJumpToStep(3)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-xs text-slate-500 block">Contact Name</span>
                    <span className="font-semibold text-slate-800">{formData.contactName}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Designation</span>
                    <span className="font-semibold text-slate-800">{formData.designation}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Phone</span>
                    <span className="font-semibold text-slate-800">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">WhatsApp</span>
                    <span className="font-semibold text-slate-800">
                      {formData.sameAsPhone ? formData.phone : formData.whatsappNumber}
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-xs text-slate-500 block">Email</span>
                    <span className="font-semibold text-slate-800">{formData.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── WIZARD ACTION BUTTONS ──────────────────────────────────── */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
          <div>
            {currentStep > 1 && (
              <Btn variant="secondary" size="md" onClick={handleBack} disabled={submitting}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </Btn>
            )}
          </div>

          <div>
            {currentStep < 4 ? (
              <Btn variant="primary" size="md" onClick={handleNext}>
                {currentStep === 3 ? 'Review' : 'Continue'}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Btn>
            ) : (
              <Btn
                variant="success"
                size="lg"
                onClick={handleSubmit}
                loading={submitting}
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Submit Hackathon'}
              </Btn>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
