import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
    Building2,
    Users2,
    Trophy,
    Zap,
    CheckCircle,
    ArrowUpRight,
    Star,
    Lightbulb,
    BarChart3,
    Clock,
} from 'lucide-react';
import ScrollDarkenHeading from '../components/common/ScrollDarkenHeading';

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const BENEFITS = [
    {
        icon: Users2,
        title: 'Engage Young Talent',
        desc: 'Connect with innovative students and build your brand among the next generation of problem-solvers.',
        color: 'from-blue-50 to-slate-50',
        iconColor: 'text-blue-600',
    },
    {
        icon: Lightbulb,
        title: 'Source Real Ideas',
        desc: 'Get fresh perspectives and solutions from students tackling your real-world problems.',
        color: 'from-amber-50 to-slate-50',
        iconColor: 'text-amber-500',
    },
    {
        icon: Trophy,
        title: 'Find Future Talent',
        desc: 'Identify exceptional performers for internships, mentorship programs, and future hiring.',
        color: 'from-purple-50 to-slate-50',
        iconColor: 'text-purple-600',
    },
    {
        icon: BarChart3,
        title: 'Brand Building',
        desc: 'Establish your company as an industry leader invested in education and innovation.',
        color: 'from-emerald-50 to-slate-50',
        iconColor: 'text-emerald-500',
    },
];

const WHY_HOST = [
    {
        icon: Building2,
        title: 'No Infrastructure Needed',
        desc: 'We handle all logistics, venue management, and student coordination. Your team provides the problem statement.',
    },
    {
        icon: Clock,
        title: 'Minimal Time Investment',
        desc: 'Attend the opening to present your challenge. A representative can attend the closing to see solutions.',
    },
    {
        icon: CheckCircle,
        title: 'Proven Track Record',
        desc: '500+ students. 20+ schools. 100+ real problems solved. See tangible results from your partnership.',
    },
    {
        icon: Star,
        title: 'Full Support Team',
        desc: 'Our team manages everything from problem scoping to final evaluation and winner selection.',
    },
];

const STATS = [
    { value: 48, suffix: 'H', label: 'Build Sprint' },
    { value: 500, suffix: '+', label: 'Students' },
    { value: 20, suffix: '+', label: 'Schools' },
    { value: 100, suffix: '%', label: 'Real Problems' },
];

function Counter({ to, suffix }) {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = Math.ceil(to / 40);
        const timer = setInterval(() => {
            start += step;
            if (start >= to) { setVal(to); clearInterval(timer); }
            else setVal(start);
        }, 28);
        return () => clearInterval(timer);
    }, [inView, to]);

    return (
        <span ref={ref} className="tabular-nums">
            {val}{suffix}
        </span>
    );
}

function CornerBorders({ size = 14, thickness = 1.5, color = 'rgba(15,23,42,0.18)' }) {
    const style = (top, right, bottom, left) => ({
        position: 'absolute',
        width: size,
        height: size,
        top: top !== undefined ? top : undefined,
        right: right !== undefined ? right : undefined,
        bottom: bottom !== undefined ? bottom : undefined,
        left: left !== undefined ? left : undefined,
        borderTop: (top !== undefined) ? `${thickness}px solid ${color}` : undefined,
        borderBottom: (bottom !== undefined) ? `${thickness}px solid ${color}` : undefined,
        borderLeft: (left !== undefined) ? `${thickness}px solid ${color}` : undefined,
        borderRight: (right !== undefined) ? `${thickness}px solid ${color}` : undefined,
        pointerEvents: 'none',
        zIndex: 20,
    });
    return (
        <>
            <span style={{ ...style(8, undefined, undefined, 8), borderTop: `${thickness}px solid ${color}`, borderLeft: `${thickness}px solid ${color}`, borderBottom: undefined, borderRight: undefined }} />
            <span style={{ ...style(8, 8, undefined, undefined), borderTop: `${thickness}px solid ${color}`, borderRight: `${thickness}px solid ${color}`, borderBottom: undefined, borderLeft: undefined }} />
            <span style={{ ...style(undefined, undefined, 8, 8), borderBottom: `${thickness}px solid ${color}`, borderLeft: `${thickness}px solid ${color}`, borderTop: undefined, borderRight: undefined }} />
            <span style={{ ...style(undefined, 8, 8, undefined), borderBottom: `${thickness}px solid ${color}`, borderRight: `${thickness}px solid ${color}`, borderTop: undefined, borderLeft: undefined }} />
        </>
    );
}

export default function HostHackathonPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-white py-20 px-6 overflow-hidden">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.01]"
                    style={{
                        backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="relative max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-[11px] font-black text-blue-600 uppercase tracking-widest border border-blue-100/50 mb-6">
                            For Organizations
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-6 max-w-4xl mx-auto">
                            Host a Hackathon <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                                and Find Innovation.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                            Partner with FLOYD School to sponsor a 48-hour hackathon. Present your real-world problem to 500+ innovative students across India. Get fresh solutions, identify top talent, and strengthen your brand.
                        </p>
                        <Link to="/hackathon?view=school">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-black text-sm uppercase tracking-[0.2em] rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20"
                            >
                                Host Now <ArrowUpRight size={18} />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative bg-gradient-to-b from-slate-50 to-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {STATS.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-2">
                                    <Counter to={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative bg-white py-20 px-6 overflow-hidden">
                <div className="relative max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <ScrollDarkenHeading>
                            WHY HOST A HACKATHON
                        </ScrollDarkenHeading>
                        <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
                            Connect with talented students while solving real business challenges.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {BENEFITS.map((benefit, i) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative p-8 rounded-2xl border border-slate-100 bg-gradient-to-br ${benefit.color} hover:shadow-lg transition-all group`}
                            >
                                <CornerBorders />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                                        <benefit.icon size={24} className={`${benefit.iconColor} group-hover:text-white transition-colors`} />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="relative bg-slate-50 py-20 px-6">
                <div className="relative max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <ScrollDarkenHeading>
                            HOW IT WORKS
                        </ScrollDarkenHeading>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {WHY_HOST.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-6 group"
                            >
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600 text-white group-hover:scale-110 transition-transform">
                                        <item.icon size={20} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20 px-6 overflow-hidden">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: 'linear-gradient(45deg, #fff 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                    }}
                />

                <div className="relative max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            Ready to Host?
                        </h2>
                        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                            Tell us about your company and the problem you'd like to present to our students. Our team will guide you through the entire process.
                        </p>
                        <Link to="/hackathon?view=school">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-black text-sm uppercase tracking-[0.2em] rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/40"
                            >
                                Start Registration <ArrowUpRight size={18} />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
