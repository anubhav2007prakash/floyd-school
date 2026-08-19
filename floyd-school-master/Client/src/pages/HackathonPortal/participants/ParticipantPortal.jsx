import React, { useState } from 'react';
import ParticipantDashboard from './ParticipantDashboard';
import DiscoverHackathons from './DiscoverHackathons';
import MyHackathons from './MyHackathons';
import Teams from './Teams';
import Submissions from './Submissions';
import Certificates from './Certificates';
import ParticipantProfile from './ParticipantProfile';
import ParticipantRegistrationModal from './ParticipantRegistrationModal';

export default function ParticipantPortal({ activeTab, onTabChange }) {
  const [selectedHackathonForReg, setSelectedHackathonForReg] = useState(null);
  const [selectedHackathonForDetails, setSelectedHackathonForDetails] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {activeTab === 'dashboard' && (
        <ParticipantDashboard
          onNavigateTab={onTabChange}
          onOpenHackathonDetails={(hk) => setSelectedHackathonForDetails(hk)}
        />
      )}

      {activeTab === 'discover' && (
        <DiscoverHackathons
          onRegisterClick={(hk) => setSelectedHackathonForReg(hk)}
          onViewDetails={(hk) => setSelectedHackathonForDetails(hk)}
          selectedHackathon={selectedHackathonForDetails}
          onCloseDetails={() => setSelectedHackathonForDetails(null)}
        />
      )}

      {activeTab === 'my-hackathons' && <MyHackathons onNavigateTab={onTabChange} />}

      {activeTab === 'teams' && <Teams />}

      {activeTab === 'submissions' && <Submissions />}

      {activeTab === 'certificates' && <Certificates />}

      {activeTab === 'profile' && <ParticipantProfile />}

      {/* ─── PARTICIPANT REGISTRATION MODAL ─────────────────────────── */}
      <ParticipantRegistrationModal
        isOpen={Boolean(selectedHackathonForReg)}
        onClose={() => setSelectedHackathonForReg(null)}
        hackathon={selectedHackathonForReg}
        onRegistered={() => {
          // Stay on modal to show success, user clicks "Go to My Hackathons"
        }}
      />
    </div>
  );
}
