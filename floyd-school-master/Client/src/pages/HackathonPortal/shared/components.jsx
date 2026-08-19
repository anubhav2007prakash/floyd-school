import { useState, useRef, useEffect } from 'react';

// ─── MODAL ────────────────────────────────────────────────────────────────────
export function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) { document.addEventListener('keydown', handleEsc); document.body.style.overflow = 'hidden'; }
    return () => { document.removeEventListener('keydown', handleEsc); document.body.style.overflow = ''; };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = { sm: 'max-w-md', md: 'max-w-lg', lg: 'max-w-2xl', xl: 'max-w-4xl' };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative bg-white rounded-2xl shadow-2xl w-full ${sizes[size]} max-h-[90vh] flex flex-col animate-modal-in`} style={{ animation: 'modalIn 0.2s ease-out' }}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 flex-shrink-0">
          <h2 className="text-lg font-bold text-slate-900">{title}</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors" aria-label="Close modal">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="overflow-y-auto flex-1 px-6 py-4">{children}</div>
      </div>
    </div>
  );
}

// ─── TOAST SYSTEM ─────────────────────────────────────────────────────────────
let toastListeners = [];
let toastIdCounter = 0;

export function showToast(message, type = 'info') {
  const id = ++toastIdCounter;
  toastListeners.forEach(fn => fn({ id, message, type }));
  return id;
}

export function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const listener = (toast) => {
      setToasts(prev => [...prev, toast]);
      setTimeout(() => setToasts(prev => prev.filter(t => t.id !== toast.id)), 4000);
    };
    toastListeners.push(listener);
    return () => { toastListeners = toastListeners.filter(fn => fn !== listener); };
  }, []);

  const icons = {
    success: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    error: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M6 6l4 4M10 6l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    warning: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3l6 10H2L8 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 7v3M8 11.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    info: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M8 7v4M8 5.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  };

  const colors = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  };

  return (
    <div className="fixed top-4 right-4 z-[200] flex flex-col gap-2 pointer-events-none" style={{ maxWidth: '360px' }}>
      {toasts.map(t => (
        <div key={t.id} className={`flex items-start gap-3 px-4 py-3 rounded-xl border shadow-lg text-sm font-medium pointer-events-auto ${colors[t.type]}`}
          style={{ animation: 'toastIn 0.3s ease-out' }}>
          <span className="flex-shrink-0 mt-0.5">{icons[t.type]}</span>
          <span className="flex-1">{t.message}</span>
        </div>
      ))}
    </div>
  );
}

// ─── BADGE ────────────────────────────────────────────────────────────────────
export function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-slate-100 text-slate-700',
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-700',
    amber: 'bg-amber-100 text-amber-700',
    purple: 'bg-purple-100 text-purple-700',
    draft: 'bg-slate-100 text-slate-600',
    upcoming: 'bg-blue-100 text-blue-700',
    live: 'bg-green-100 text-green-700',
    completed: 'bg-purple-100 text-purple-700',
    pending: 'bg-amber-100 text-amber-700',
    approved: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700',
    'under review': 'bg-blue-100 text-blue-700',
    confirmed: 'bg-green-100 text-green-700',
    open: 'bg-green-100 text-green-700',
    'coming soon': 'bg-amber-100 text-amber-700',
    closed: 'bg-red-100 text-red-700',
    available: 'bg-green-100 text-green-700',
    submitted: 'bg-blue-100 text-blue-700',
    offline: 'bg-purple-100 text-purple-700',
    online: 'bg-blue-100 text-blue-700',
    hybrid: 'bg-teal-100 text-teal-700',
  };
  const cls = variants[variant?.toLowerCase()] || variants.default;
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${cls}`}>{children}</span>;
}

// ─── BUTTON ───────────────────────────────────────────────────────────────────
export function Btn({ children, variant = 'primary', size = 'md', loading = false, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 shadow-sm',
    secondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 focus-visible:ring-slate-400 shadow-sm',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400',
    success: 'bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500',
  };
  const sizes = { sm: 'text-sm px-3 py-1.5', md: 'text-sm px-4 py-2', lg: 'text-base px-6 py-3' };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} disabled={loading || props.disabled} {...props}>
      {loading && <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>}
      {children}
    </button>
  );
}

// ─── FORM FIELD ───────────────────────────────────────────────────────────────
export function Field({ label, error, required, children, id }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={id} className="text-sm font-medium text-slate-700">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>}
      {children}
      {error && <p className="text-xs text-red-500 flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M6 4v3M6 8.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>{error}</p>}
    </div>
  );
}

export function Input({ id, error, className = '', ...props }) {
  return (
    <input id={id} className={`w-full px-3 py-2.5 text-sm rounded-lg border ${error ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-blue-200'} focus:outline-none focus:ring-2 focus:border-transparent bg-white text-slate-900 placeholder:text-slate-400 transition-all ${className}`} {...props} />
  );
}

export function Textarea({ id, error, className = '', rows = 3, ...props }) {
  return (
    <textarea id={id} rows={rows} className={`w-full px-3 py-2.5 text-sm rounded-lg border ${error ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-blue-200'} focus:outline-none focus:ring-2 focus:border-transparent bg-white text-slate-900 placeholder:text-slate-400 transition-all resize-none ${className}`} {...props} />
  );
}

export function Select({ id, error, className = '', children, ...props }) {
  return (
    <select id={id} className={`w-full px-3 py-2.5 text-sm rounded-lg border ${error ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-blue-200'} focus:outline-none focus:ring-2 focus:border-transparent bg-white text-slate-900 transition-all appearance-none ${className}`} {...props}>
      {children}
    </select>
  );
}

// ─── STAT CARD ────────────────────────────────────────────────────────────────
export function StatCard({ icon, value, label, trend, color = 'blue' }) {
  const colors = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', badge: 'bg-blue-100' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', badge: 'bg-green-100' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', badge: 'bg-purple-100' },
    amber: { bg: 'bg-amber-50', icon: 'text-amber-600', badge: 'bg-amber-100' },
  };
  const c = colors[color];
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center ${c.icon}`}>{icon}</div>
        {trend && <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${trend > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{trend > 0 ? '+' : ''}{trend}%</span>}
      </div>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-sm text-slate-500 mt-0.5">{label}</p>
    </div>
  );
}

// ─── EMPTY STATE ──────────────────────────────────────────────────────────────
export function EmptyState({ icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-4">{icon}</div>
      <h3 className="text-base font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 max-w-xs mb-4">{description}</p>
      {action}
    </div>
  );
}

// ─── SEARCH BAR ───────────────────────────────────────────────────────────────
export function SearchBar({ value, onChange, placeholder = 'Search…' }) {
  return (
    <div className="relative">
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="11" cy="11" r="8" strokeWidth="2"/><path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/></svg>
      <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent bg-white" />
    </div>
  );
}

// ─── CSS ANIMATIONS (injected once) ──────────────────────────────────────────
const STYLE_ID = 'hp-portal-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = `
    @keyframes modalIn { from { opacity:0; transform:scale(0.95) translateY(8px); } to { opacity:1; transform:scale(1) translateY(0); } }
    @keyframes toastIn { from { opacity:0; transform:translateX(16px); } to { opacity:1; transform:translateX(0); } }
    @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
    .hp-fade-up { animation: fadeUp 0.4s ease-out both; }
    .hp-fade-up-2 { animation: fadeUp 0.4s ease-out 0.1s both; }
    .hp-fade-up-3 { animation: fadeUp 0.4s ease-out 0.2s both; }
  `;
  document.head.appendChild(s);
}
