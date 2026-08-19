// ─── MOCK DATA & LOCALSTORAGE HELPERS ──────────────────────────────────────

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli',
  'Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

export function generateApplicationId() {
  const num = Math.floor(100000 + Math.random() * 900000);
  return `FL-${num}`;
}

// ── LocalStorage helpers ──────────────────────────────────────────────────
function ls(key, defaultVal) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultVal;
  } catch {
    return defaultVal;
  }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

// ── School Hackathons ─────────────────────────────────────────────────────
const SEED_HACKATHONS = [
  {
    id: 'hk-001', applicationId: 'FL-482731',
    name: 'AI for Social Good', theme: 'Artificial Intelligence',
    description: 'Students build AI-powered solutions addressing social challenges like healthcare, education, and environment.',
    type: 'Offline', date: '2026-09-15', startTime: '09:00', endTime: '18:00',
    schoolName: 'Delhi Public School, R.K. Puram', schoolAddress: '1, Mathura Road', city: 'New Delhi', state: 'Delhi',
    schoolEmail: 'contact@dpsnewdelhi.edu', schoolPhone: '01126512510', website: 'https://dpsnewdelhi.edu',
    contactName: 'Dr. Anjali Sharma', designation: 'Principal', phone: '9876543210', whatsapp: '9876543210', email: 'anjali@dpsnewdelhi.edu',
    status: 'Upcoming', participants: 87, applications: 94, registrationCount: 87,
    createdAt: '2026-08-01T10:00:00Z'
  },
  {
    id: 'hk-002', applicationId: 'FL-391048',
    name: 'Green Tech Hackathon', theme: 'Sustainability & CleanTech',
    description: 'Building technology solutions to address climate change and environmental challenges.',
    type: 'Hybrid', date: '2026-10-05', startTime: '10:00', endTime: '17:00',
    schoolName: 'Kendriya Vidyalaya No. 1', schoolAddress: '14, Rajpur Road', city: 'Dehradun', state: 'Uttarakhand',
    schoolEmail: 'kv1ddn@kvs.gov.in', schoolPhone: '01352714180', website: '',
    contactName: 'Mr. Ramesh Kumar', designation: 'Teacher', phone: '9412345678', whatsapp: '9412345678', email: 'ramesh@kv1ddn.edu',
    status: 'Upcoming', participants: 64, applications: 72, registrationCount: 64,
    createdAt: '2026-08-10T09:00:00Z'
  },
  {
    id: 'hk-003', applicationId: 'FL-204951',
    name: 'Smart City Challenge', theme: 'Urban Technology',
    description: 'Design smart solutions for urban problems like traffic, waste management, and public safety.',
    type: 'Online', date: '2026-08-01', startTime: '09:00', endTime: '17:00',
    schoolName: 'Ryan International School', schoolAddress: '32, Sector 25', city: 'Noida', state: 'Uttar Pradesh',
    schoolEmail: 'noida@ryanschool.edu', schoolPhone: '01204304012', website: 'https://ryanschool.edu',
    contactName: 'Ms. Priya Verma', designation: 'Coordinator', phone: '9811234567', whatsapp: '9811234567', email: 'priya@ryanschool.edu',
    status: 'Completed', participants: 132, applications: 145, registrationCount: 132,
    createdAt: '2026-07-01T08:00:00Z'
  },
  {
    id: 'hk-004', applicationId: 'FL-773920',
    name: 'HealthTech Innovation', theme: 'Healthcare & Biotech',
    description: 'Developing digital health solutions to improve access and quality of healthcare.',
    type: 'Offline', date: '2026-11-20', startTime: '09:30', endTime: '18:30',
    schoolName: 'The Shri Ram School', schoolAddress: '5, Vasant Marg', city: 'New Delhi', state: 'Delhi',
    schoolEmail: 'info@tsrs.org', schoolPhone: '01126156162', website: 'https://tsrs.org',
    contactName: 'Mr. Arun Singh', designation: 'Faculty', phone: '9871234567', whatsapp: '9871234567', email: 'arun@tsrs.org',
    status: 'Draft', participants: 0, applications: 12, registrationCount: 0,
    createdAt: '2026-08-18T14:00:00Z'
  },
];

export function getSchoolHackathons() {
  const stored = ls('hp_school_hackathons', null);
  if (!stored) {
    lsSet('hp_school_hackathons', SEED_HACKATHONS);
    return SEED_HACKATHONS;
  }
  return stored;
}

export function addSchoolHackathon(hackathon) {
  const list = getSchoolHackathons();
  const newItem = { ...hackathon, id: `hk-${Date.now()}`, createdAt: new Date().toISOString(), status: 'Upcoming', participants: 0, applications: 0, registrationCount: 0 };
  const updated = [newItem, ...list];
  lsSet('hp_school_hackathons', updated);
  return newItem;
}

// ── Applications ──────────────────────────────────────────────────────────
const SEED_APPLICATIONS = [
  { id: 'app-001', applicationId: 'FL-482731', hackathon: 'AI for Social Good', participant: 'Team ByteBuilders', date: '2026-08-05', status: 'Approved', members: 4, school: 'Delhi Public School' },
  { id: 'app-002', applicationId: 'FL-391048', hackathon: 'Green Tech Hackathon', participant: 'Team EcoCoders', date: '2026-08-12', status: 'Pending', members: 3, school: 'Kendriya Vidyalaya' },
  { id: 'app-003', applicationId: 'FL-204951', hackathon: 'Smart City Challenge', participant: 'Team CityMinds', date: '2026-07-20', status: 'Approved', members: 4, school: 'Ryan International' },
  { id: 'app-004', applicationId: 'FL-773920', hackathon: 'HealthTech Innovation', participant: 'Team MediTech', date: '2026-08-18', status: 'Under Review', members: 2, school: 'The Shri Ram School' },
  { id: 'app-005', applicationId: 'FL-482731', hackathon: 'AI for Social Good', participant: 'Team NeuralMinds', date: '2026-08-06', status: 'Rejected', members: 3, school: 'Delhi Public School' },
  { id: 'app-006', applicationId: 'FL-391048', hackathon: 'Green Tech Hackathon', participant: 'Team SolarSpark', date: '2026-08-13', status: 'Pending', members: 4, school: 'Kendriya Vidyalaya' },
];

export function getApplications() {
  const stored = ls('hp_applications', null);
  if (!stored) { lsSet('hp_applications', SEED_APPLICATIONS); return SEED_APPLICATIONS; }
  return stored;
}

export function addApplication(app) {
  const list = getApplications();
  const newItem = { ...app, id: `app-${Date.now()}`, date: new Date().toISOString().split('T')[0], status: 'Pending' };
  lsSet('hp_applications', [newItem, ...list]);
  return newItem;
}

// ── School Participants ───────────────────────────────────────────────────
const SEED_SCHOOL_PARTICIPANTS = [
  { id: 'sp-001', name: 'Arjun Mehta', team: 'Team ByteBuilders', email: 'arjun.m@email.com', hackathon: 'AI for Social Good', registrationDate: '2026-08-05', status: 'Confirmed', phone: '9876543210', college: 'Delhi Public School', course: 'Class 11' },
  { id: 'sp-002', name: 'Priya Sharma', team: 'Team ByteBuilders', email: 'priya.s@email.com', hackathon: 'AI for Social Good', registrationDate: '2026-08-05', status: 'Confirmed', phone: '9876543211', college: 'Delhi Public School', course: 'Class 11' },
  { id: 'sp-003', name: 'Rahul Gupta', team: 'Team EcoCoders', email: 'rahul.g@email.com', hackathon: 'Green Tech Hackathon', registrationDate: '2026-08-12', status: 'Pending', phone: '9876543212', college: 'Kendriya Vidyalaya', course: 'Class 10' },
  { id: 'sp-004', name: 'Sneha Patel', team: 'Team CityMinds', email: 'sneha.p@email.com', hackathon: 'Smart City Challenge', registrationDate: '2026-07-20', status: 'Confirmed', phone: '9876543213', college: 'Ryan International', course: 'Class 12' },
  { id: 'sp-005', name: 'Vikram Rao', team: 'Team MediTech', email: 'vikram.r@email.com', hackathon: 'HealthTech Innovation', registrationDate: '2026-08-18', status: 'Pending', phone: '9876543214', college: 'The Shri Ram School', course: 'Class 12' },
  { id: 'sp-006', name: 'Anya Kapoor', team: 'Team NeuralMinds', email: 'anya.k@email.com', hackathon: 'AI for Social Good', registrationDate: '2026-08-06', status: 'Confirmed', phone: '9876543215', college: 'Delhi Public School', course: 'Class 11' },
];

export function getSchoolParticipants() {
  const stored = ls('hp_school_participants', null);
  if (!stored) { lsSet('hp_school_participants', SEED_SCHOOL_PARTICIPANTS); return SEED_SCHOOL_PARTICIPANTS; }
  return stored;
}

// ── Discover Hackathons (for participant portal) ──────────────────────────
const SEED_DISCOVER = [
  {
    id: 'dh-001', name: 'AI for Social Good', organization: 'Delhi Public School, R.K. Puram',
    theme: 'Artificial Intelligence', date: '2026-09-15', mode: 'Offline', location: 'New Delhi',
    registrationStatus: 'Open', participantCount: 87, maxParticipants: 200,
    description: 'Build AI-powered solutions addressing social challenges like healthcare, education, and environment.',
    rules: ['Teams of 2-4 students', 'Original work only', 'Presentation required', 'No prior coding required'],
    eligibility: 'Classes 7-12 students', prizes: ['1st: ₹10,000', '2nd: ₹6,000', '3rd: ₹3,000'],
    timeline: [{ event: 'Registration Opens', date: '2026-08-01' }, { event: 'Registration Closes', date: '2026-09-10' }, { event: 'Hackathon Day', date: '2026-09-15' }, { event: 'Results', date: '2026-09-16' }],
    organizer: { name: 'Dr. Anjali Sharma', email: 'anjali@dpsnewdelhi.edu', phone: '9876543210' },
    tags: ['AI', 'Machine Learning', 'Social Impact']
  },
  {
    id: 'dh-002', name: 'Green Tech Hackathon', organization: 'Kendriya Vidyalaya No. 1',
    theme: 'Sustainability & CleanTech', date: '2026-10-05', mode: 'Hybrid', location: 'Dehradun',
    registrationStatus: 'Open', participantCount: 64, maxParticipants: 150,
    description: 'Building technology solutions to address climate change and environmental challenges.',
    rules: ['Teams of 2-4', 'Focus on sustainability', 'Working prototype preferred'],
    eligibility: 'Classes 8-12 students', prizes: ['1st: ₹8,000', '2nd: ₹5,000', '3rd: ₹2,000'],
    timeline: [{ event: 'Registration Opens', date: '2026-08-15' }, { event: 'Registration Closes', date: '2026-10-01' }, { event: 'Hackathon Day', date: '2026-10-05' }, { event: 'Results', date: '2026-10-06' }],
    organizer: { name: 'Mr. Ramesh Kumar', email: 'ramesh@kv1ddn.edu', phone: '9412345678' },
    tags: ['Sustainability', 'CleanTech', 'Climate']
  },
  {
    id: 'dh-003', name: 'HealthTech Innovation', organization: 'The Shri Ram School',
    theme: 'Healthcare & Biotech', date: '2026-11-20', mode: 'Offline', location: 'New Delhi',
    registrationStatus: 'Coming Soon', participantCount: 0, maxParticipants: 120,
    description: 'Developing digital health solutions to improve access and quality of healthcare.',
    rules: ['Teams of 2-4', 'Healthcare focus required', 'Data privacy must be addressed'],
    eligibility: 'Classes 9-12 students', prizes: ['1st: ₹12,000', '2nd: ₹7,000', '3rd: ₹4,000'],
    timeline: [{ event: 'Registration Opens', date: '2026-10-01' }, { event: 'Registration Closes', date: '2026-11-15' }, { event: 'Hackathon Day', date: '2026-11-20' }, { event: 'Results', date: '2026-11-21' }],
    organizer: { name: 'Mr. Arun Singh', email: 'arun@tsrs.org', phone: '9871234567' },
    tags: ['Health', 'Biotech', 'Digital Health']
  },
  {
    id: 'dh-004', name: 'Smart City Challenge', organization: 'Ryan International School',
    theme: 'Urban Technology', date: '2026-12-10', mode: 'Online', location: 'Virtual',
    registrationStatus: 'Open', participantCount: 45, maxParticipants: 300,
    description: 'Design smart solutions for urban problems like traffic, waste management, and public safety.',
    rules: ['Teams of 1-5', 'Must address a real city problem', 'Video demo required for online'],
    eligibility: 'Classes 7-12 students', prizes: ['1st: ₹15,000', '2nd: ₹9,000', '3rd: ₹5,000'],
    timeline: [{ event: 'Registration Opens', date: '2026-11-01' }, { event: 'Registration Closes', date: '2026-12-05' }, { event: 'Hackathon Day', date: '2026-12-10' }, { event: 'Results', date: '2026-12-12' }],
    organizer: { name: 'Ms. Priya Verma', email: 'priya@ryanschool.edu', phone: '9811234567' },
    tags: ['Smart City', 'IoT', 'Urban Tech']
  },
];

export function getDiscoverHackathons() {
  return ls('hp_discover', SEED_DISCOVER);
}

// ── Participant Registrations ─────────────────────────────────────────────
export function getMyHackathons() {
  return ls('hp_my_hackathons', []);
}

export function registerForHackathon(hackathonId, participantData) {
  const myList = getMyHackathons();
  const discover = getDiscoverHackathons();
  const hackathon = discover.find(h => h.id === hackathonId);
  if (!hackathon) return null;
  const existing = myList.find(h => h.hackathonId === hackathonId);
  if (existing) return existing;
  const reg = {
    id: `reg-${Date.now()}`,
    hackathonId, hackathonName: hackathon.name, organization: hackathon.organization,
    date: hackathon.date, mode: hackathon.mode,
    participantData,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Confirmed', teamName: null, submissionStatus: 'Not Submitted',
    registrationId: generateApplicationId()
  };
  lsSet('hp_my_hackathons', [reg, ...myList]);
  return reg;
}

// ── Teams ─────────────────────────────────────────────────────────────────
const SEED_TEAMS = [
  { id: 'tm-001', name: 'Team ByteBuilders', leader: 'Arjun Mehta', members: ['Arjun Mehta', 'Priya Sharma', 'Rohan Das', 'Neha Joshi'], hackathon: 'AI for Social Good', status: 'Active', maxMembers: 4, hackathonId: 'dh-001' },
];

export function getTeams() {
  return ls('hp_teams', SEED_TEAMS);
}

export function createTeam(teamData) {
  const teams = getTeams();
  const newTeam = { ...teamData, id: `tm-${Date.now()}`, status: 'Active', members: [teamData.leader] };
  lsSet('hp_teams', [newTeam, ...teams]);
  return newTeam;
}

export function joinTeam(teamId, memberName) {
  const teams = getTeams();
  const updated = teams.map(t => t.id === teamId ? { ...t, members: [...t.members, memberName] } : t);
  lsSet('hp_teams', updated);
}

// ── Submissions ───────────────────────────────────────────────────────────
const SEED_SUBMISSIONS = [
  {
    id: 'sub-001', hackathon: 'Smart City Challenge', hackathonId: 'dh-003',
    team: 'Team CityMinds', projectName: 'TrafficFlowAI', problemStatement: 'Traffic congestion in urban areas causes daily delays.',
    solution: 'An AI-powered traffic management system using real-time CCTV data.',
    technologies: 'Python, TensorFlow, React, Node.js', repoLink: 'https://github.com/example/trafficflowai', demoLink: 'https://trafficflowai.demo.com',
    submittedDate: '2026-08-01', status: 'Submitted'
  },
];

export function getSubmissions() {
  return ls('hp_submissions', SEED_SUBMISSIONS);
}

export function addSubmission(sub) {
  const list = getSubmissions();
  const newSub = { ...sub, id: `sub-${Date.now()}`, submittedDate: new Date().toISOString().split('T')[0], status: 'Submitted' };
  lsSet('hp_submissions', [newSub, ...list]);
  return newSub;
}

// ── Certificates ──────────────────────────────────────────────────────────
const SEED_CERTIFICATES = [
  { id: 'cert-001', hackathon: 'Smart City Challenge', participantName: 'Demo User', certificateType: 'Participation', date: '2026-08-01', status: 'Available' },
  { id: 'cert-002', hackathon: 'Smart City Challenge', participantName: 'Demo User', certificateType: '3rd Place Winner', date: '2026-08-01', status: 'Available' },
];

export function getCertificates() {
  return ls('hp_certificates', SEED_CERTIFICATES);
}

// ── Participant Profile ───────────────────────────────────────────────────
const DEFAULT_PROFILE = {
  name: 'Demo User', email: 'demo@example.com', phone: '9876543210',
  institution: 'Delhi Public School', course: 'Class 11', city: 'New Delhi',
  skills: ['Python', 'Web Development', 'Machine Learning'],
  experience: 'Beginner', bio: 'Passionate student interested in technology and innovation.'
};

export function getProfile() {
  return ls('hp_profile', DEFAULT_PROFILE);
}

export function saveProfile(profile) {
  lsSet('hp_profile', profile);
}

// ── Analytics ─────────────────────────────────────────────────────────────
export function getAnalyticsData() {
  const hackathons = getSchoolHackathons();
  return {
    registrationGrowth: [
      { month: 'Apr', registrations: 12 }, { month: 'May', registrations: 28 },
      { month: 'Jun', registrations: 45 }, { month: 'Jul', registrations: 67 },
      { month: 'Aug', registrations: 132 }, { month: 'Sep', registrations: 87 },
    ],
    participantsByHackathon: hackathons.map(h => ({ name: h.name.length > 15 ? h.name.slice(0, 15) + '…' : h.name, participants: h.participants })),
    applicationStatus: [
      { status: 'Approved', count: 24 }, { status: 'Pending', count: 18 },
      { status: 'Under Review', count: 8 }, { status: 'Rejected', count: 5 },
    ],
    completionRate: 78,
    totalHackathons: hackathons.length,
    activeHackathons: hackathons.filter(h => h.status === 'Upcoming' || h.status === 'Live').length,
    totalParticipants: hackathons.reduce((s, h) => s + h.participants, 0),
    totalApplications: hackathons.reduce((s, h) => s + h.applications, 0),
  };
}
