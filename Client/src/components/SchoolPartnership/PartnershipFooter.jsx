import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const FOOTER_LINKS = [
  {
    heading: 'Programs',
    links: [
      { name: 'AI Lab', href: '#programs' },
      { name: 'Coding Lab', href: '#programs' },
      { name: 'Robotics Lab', href: '#programs' },
      { name: 'Innovation Lab', href: '#programs' },
      { name: 'Startup Lab', href: '#programs' },
    ],
  },
  {
    heading: 'Partnership',
    links: [
      { name: 'Partner With Us', href: '#partner-form' },
      { name: 'Curriculum Integration', href: '#models' },
      { name: 'After School Bootcamps', href: '#models' },
      { name: 'Innovation Hub Setup', href: '#models' },
      { name: 'Book Free Trial', href: '#partner-form' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { name: 'About Floyd School', href: '/about' },
      { name: 'Host a Session', href: '#partner-form' },
      { name: 'Courses', href: '/course' },
      { name: 'Contact Us', href: '#partner-form' },
    ],
  },
];

const SOCIAL = [
  { icon: Instagram, href: 'https://instagram.com/floydschool.in', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const PartnershipFooter = () => {
  const scrollTo = (id) => {
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#060913' }}>
      {/* Top gradient line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.4), rgba(0,212,255,0.4), transparent)' }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 pb-6">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <img
                src="/logo-white.png"
                alt="Floyd School"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="sp-body text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of innovators with AI, Coding, Robotics, and future skills education, delivered directly at your school campus.
            </p>
            {/* Contact */}
            <div className="space-y-2.5">
              <a href="tel:+918368801220" className="flex items-center gap-2.5 text-slate-400 hover:text-slate-200 transition-colors sp-body text-sm">
                <Phone size={14} style={{ color: '#6C63FF' }} />
                +91 8368801220
              </a>
              <a href="mailto:floydschoolhq@gmail.com" className="flex items-center gap-2.5 text-slate-400 hover:text-slate-200 transition-colors sp-body text-sm">
                <Mail size={14} style={{ color: '#00D4FF' }} />
                floydschoolhq@gmail.com
              </a>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <s.icon size={16} className="text-slate-400 hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <h4 className="sp-heading font-bold text-white text-sm mb-5">{group.heading}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="sp-body text-slate-400 hover:text-slate-200 text-sm transition-colors"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a href={link.href} className="sp-body text-slate-400 hover:text-slate-200 text-sm transition-colors">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 pb-10 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="sp-body text-slate-500 text-xs">
            © {new Date().getFullYear()} Floyd School. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 sp-body text-slate-500 text-xs">
            <span>Built with</span>
            <span className="text-red-500">♥</span>
            <span>to empower students across India</span>
          </div>
        </div>

        {/* Giant Centered Footer Branding Banner */}
        <div className="pt-4 pb-2 text-center overflow-hidden border-t border-white/5">
          <h1 className="text-[10vw] font-black uppercase tracking-tight leading-none whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 select-none">
            FLOYD SCHOOL
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default PartnershipFooter;
