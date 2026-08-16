import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../api/axios';
import { Phone, Mail, Instagram, CheckCircle2, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

const DOMAINS = [
  'Foundations of Web Development',
  'AI & Machine Learning',
  'Cybersecurity',
  'IoT & Robotics',
  'Entrepreneurship & Startup',
  'Career Readiness',
  'Custom Curriculum',
];

const CONTACT_CHANNELS = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91-8368801220',
    href: 'tel:+91-8368801220',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'floydschoolhq@gmail.com',
    href: 'mailto:floydschoolhq@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@floydschool.in',
    href: 'https://instagram.com/floydschool.in',
  },
];

const QUICK_INFO = [
  { label: 'For Schools', value: 'Classes 7 to 12' },
  { label: 'Batch Size', value: '25 to 100 Students' },
  { label: 'Response Time', value: 'Within 24 Hours' },
];

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    designation: '',
    phone: '',
    city: '',
    domain: DOMAINS[0],
    students: '',
    requirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.schoolName || !formData.contactPerson || !formData.phone) {
      alert('Please fill in School Name, Contact Person, and Phone Number.');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await api.post('/school-partnership/lead', formData);
      if (response.data.success) {
        setIsSubmitted(true);
        setFormData({ schoolName: '', contactPerson: '', designation: '', phone: '', city: '', domain: DOMAINS[0], students: '', requirements: '' });
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* Input styles matching the clean photo design */
  const inputClass =
    'w-full px-4 py-3 rounded-xl setu-body text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#EF8E80]/40 focus:border-[#EF8E80] bg-white';
  const inputStyle = {
    border: '1px solid #E2E8F0',
  };

  return (
    <>
      {/* ── CTA Banner (Highlighted) ────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-slate-50">
        <div className="max-w-[1240px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[40px] p-10 sm:p-14 lg:p-20 text-center shadow-[0_30px_100px_rgba(15,23,42,0.25)] border border-indigo-500/20"
            style={{
              background: 'linear-gradient(135deg, #090d29 0%, #131846 50%, #0c1033 100%)',
            }}
          >
            {/* Ambient Background Glowing Orbs */}
            <motion.div
              className="absolute -top-24 left-1/4 w-[450px] h-[450px] rounded-full pointer-events-none"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', filter: 'blur(60px)' }}
            />
            <motion.div
              className="absolute -bottom-24 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
              animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)', filter: 'blur(60px)' }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{ background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)', filter: 'blur(70px)' }}
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full setu-body text-xs font-bold uppercase tracking-[0.25em] mb-8 bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                <Sparkles size={14} className="text-amber-400" />
                GET STARTED TODAY
              </span>

              <h2
                className="setu-heading font-black text-white mb-6 leading-tight"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', lineHeight: 1.08 }}
              >
                Let's build the future of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-200 to-amber-300">
                  education together
                </span>
              </h2>

              <p className="setu-body text-slate-300 max-w-xl mx-auto mb-10 text-base sm:text-lg font-medium leading-relaxed">
                Start with a free 7 day campus trial. Zero risk, real results.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(99,102,241,0.6)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-9 py-4 rounded-full setu-body text-sm sm:text-base font-extrabold text-white cursor-pointer shadow-[0_8px_30px_rgba(99,102,241,0.4)] transition-all"
                  style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)' }}
                >
                  Book a Discovery Session →
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.04, backgroundColor: 'rgba(16,185,129,0.25)' }}
                  whileTap={{ scale: 0.97 }}
                  href="https://wa.me/918368801220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-9 py-4 rounded-full setu-body text-sm sm:text-base font-bold text-emerald-300 border border-emerald-500/40 bg-emerald-500/10 shadow-[0_8px_25px_rgba(16,185,129,0.15)] transition-all"
                >
                  Talk via WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Partnership Form — Styled exact to Photo ──────────────────── */}
      <section
        id="partner-form"
        className="py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-slate-50"
      >
        <div className="max-w-[1240px] mx-auto relative z-10">

          {/* Warm Peach / Salmon Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[36px] p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #FDECE8 0%, #FDF0ED 100%)',
              border: '1px solid #FAD5CE',
            }}
          >
            {/* Background Ripple Circles Pattern */}
            <div className="absolute -top-12 -left-12 w-96 h-96 rounded-full border border-[#EF8E80]/15 pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full border border-[#EF8E80]/10 pointer-events-none" />
            <div className="absolute -top-36 -left-36 w-[600px] h-[600px] rounded-full border border-[#EF8E80]/05 pointer-events-none" />

            {/* Top Step Indicators (right-aligned as in the photo) */}
            <div className="flex items-center justify-end gap-3 sm:gap-6 mb-8 text-xs sm:text-sm setu-body font-semibold">
              <div className="flex items-center gap-2 text-[var(--accent-setu2)]">
                <span className="w-6 h-6 rounded-full bg-[var(--accent-setu2)] text-white flex items-center justify-center text-xs font-bold shadow-sm">1</span>
                <span>About You</span>
              </div>
              <div className="h-px w-8 sm:w-16 bg-[var(--accent-setu2)]/30" />
              <div className="flex items-center gap-2 text-slate-500">
                <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold">2</span>
                <span>Preferences</span>
              </div>
              <div className="h-px w-8 sm:w-16 bg-slate-300" />
              <div className="flex items-center gap-2 text-slate-400">
                <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold">3</span>
                <span>Details</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">

              {/* ── Left Column: Header, Illustration & Info Cards ───── */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
                
                {/* Title & Eyebrow */}
                <div>
                  <span className="inline-block px-3.5 py-1.5 rounded-full setu-body text-[11px] font-bold uppercase tracking-widest text-[var(--accent-setu2)] bg-[var(--accent-setu2)]/15 mb-4 border border-[var(--accent-setu2)]/30">
                    PARTNERSHIP INQUIRY
                  </span>
                  <h2 className="setu-heading font-extrabold text-slate-900 leading-tight mb-3" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                    Ready to partner with us?
                  </h2>
                  <p className="setu-body text-slate-600 text-base font-medium">
                    Our regional team responds within 24 hours.
                  </p>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {QUICK_INFO.map((item) => (
                    <div key={item.label} className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#EF8E80]/20 shadow-sm">
                      <div className="setu-body text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{item.label}</div>
                      <div className="setu-heading font-bold text-slate-800 text-xs sm:text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Contact Channels */}
                <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[var(--accent-setu2)]/15 space-y-3 shadow-sm">
                  <div className="setu-body text-xs font-bold uppercase tracking-wider text-slate-500">Contact Channels</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {CONTACT_CHANNELS.map((ch) => (
                      <a
                        key={ch.label}
                        href={ch.href}
                        target={ch.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group p-2 rounded-xl hover:bg-[#EF8E80]/10 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[var(--accent-setu2)]/15 flex items-center justify-center text-[var(--accent-setu2)]">
                          <ch.icon size={14} />
                        </div>
                        <div className="truncate">
                          <div className="setu-body text-[10px] text-slate-400 font-medium">{ch.label}</div>
                          <div className="setu-body text-xs font-bold text-slate-700 truncate">{ch.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Vector Person Graphic (Matching the photo layout) */}
                <div className="relative pt-4 flex items-end">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                      alt="Student Support"
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -top-3 -right-2 bg-white text-[var(--accent-setu2)] w-9 h-9 rounded-full flex items-center justify-center shadow-md border border-[var(--accent-setu2)]/30 animate-bounce">
                      <HelpCircle size={20} />
                    </div>
                  </div>
                  <div className="ml-4 mb-2">
                    <div className="setu-heading font-extrabold text-slate-800 text-sm">Have Questions?</div>
                    <div className="setu-body text-xs text-slate-500 font-medium">We're here to guide your institution step by step.</div>
                  </div>
                </div>

              </div>

              {/* ── Right Column: Floating White Card Form (Exact photo style) ── */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                      >
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                          style={{ background: 'rgba(107, 203, 119, 0.15)', border: '1px solid rgba(107, 203, 119, 0.3)' }}
                        >
                          <CheckCircle2 size={36} style={{ color: '#6BCB77' }} />
                        </div>
                        <h3 className="setu-heading font-black text-slate-900 text-2xl mb-2">
                          You're on the list!
                        </h3>
                        <p className="setu-body text-slate-500 mb-6 max-w-sm text-sm">
                          Your partnership request has been submitted. Our regional team will contact you within 24 hours.
                        </p>
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="setu-body text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity cursor-pointer text-[#E06E5D]"
                        >
                          Submit another request
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          
                          {/* School Name */}
                          <div className="md:col-span-2">
                            <label className="block setu-body text-xs font-bold text-slate-700 mb-1.5">
                              School Name *
                            </label>
                            <input
                              name="schoolName"
                              type="text"
                              required
                              value={formData.schoolName}
                              onChange={handleChange}
                              placeholder="Enter your school name"
                              className={inputClass}
                              style={inputStyle}
                            />
                          </div>

                          {/* Contact Person */}
                          <div>
                            <label className="block setu-body text-xs font-bold text-slate-700 mb-1.5">
                              Contact Person *
                            </label>
                            <input
                              name="contactPerson"
                              type="text"
                              required
                              value={formData.contactPerson}
                              onChange={handleChange}
                              placeholder="Contact person name"
                              className={inputClass}
                              style={inputStyle}
                            />
                          </div>

                          {/* Designation */}
                          <div>
                            <label className="block setu-body text-xs font-bold text-slate-700 mb-1.5">
                              Designation
                            </label>
                            <input
                              name="designation"
                              type="text"
                              value={formData.designation}
                              onChange={handleChange}
                              placeholder="Your designation"
                              className={inputClass}
                              style={inputStyle}
                            />
                          </div>

                          {/* Phone Number */}
                          <div>
                            <label className="block setu-body text-xs font-bold text-slate-700 mb-1.5">
                              Phone Number *
                            </label>
                            <input
                              name="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Phone number"
                              className={inputClass}
                              style={inputStyle}
                            />
                          </div>

                          {/* City */}
                          <div>
                            <label className="block setu-body text-xs font-bold text-slate-700 mb-1.5">
                              City
                            </label>
                            <input
                              name="city"
                              type="text"
                              value={formData.city}
                              onChange={handleChange}
                              placeholder="Your city"
                              className={inputClass}
                              style={inputStyle}
                            />
                          </div>

                          {/* Preferred Domain */}
                          <div>
                            <label className="block setu-body text-xs font-bold text-slate-700 mb-1.5">
                              Preferred Domain
                            </label>
                            <select
                              name="domain"
                              value={formData.domain}
                              onChange={handleChange}
                              className={inputClass}
                              style={{ ...inputStyle, cursor: 'pointer' }}
                            >
                              {DOMAINS.map((d) => (
                                <option key={d} value={d} className="bg-white text-slate-800">
                                  {d}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Approx Students */}
                          <div>
                            <label className="block setu-body text-xs font-bold text-slate-700 mb-1.5">
                              Approx. Students
                            </label>
                            <input
                              name="students"
                              type="number"
                              value={formData.students}
                              onChange={handleChange}
                              placeholder="Number of students"
                              className={inputClass}
                              style={inputStyle}
                            />
                          </div>

                          {/* Specific Requirements */}
                          <div className="md:col-span-2">
                            <label className="block setu-body text-xs font-bold text-slate-700 mb-1.5">
                              Specific Requirements
                            </label>
                            <textarea
                              name="requirements"
                              rows={3}
                              value={formData.requirements}
                              onChange={handleChange}
                              placeholder="Any specific requirements or questions..."
                              className={`${inputClass} resize-none`}
                              style={inputStyle}
                            />
                          </div>
                        </div>

                        {/* Coral / Salmon Peach Button (as in photo) */}
                        <div className="pt-2">
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(239, 142, 128, 0.4)' }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3.5 rounded-2xl setu-body text-sm font-bold text-white flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shadow-md"
                            style={{
                              background: 'linear-gradient(135deg, #EF8E80 0%, #E06E5D 100%)',
                            }}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              <>
                                Submit Partnership Request
                                <ArrowRight size={16} />
                              </>
                            )}
                          </motion.button>
                        </div>

                        {/* Subtext under button */}
                        <p className="text-center setu-body text-slate-400 text-xs pt-1">
                          We respond within 24 hours of submission.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PartnershipForm;
