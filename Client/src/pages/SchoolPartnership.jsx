import { useEffect } from 'react';
import Lenis from 'lenis';

import SEO from '../components/common/SEO';
import PartnershipHero from '../components/SchoolPartnership/PartnershipHero';
import BootcampGallery from '../components/SchoolPartnership/BootcampGallery';
import AnnouncementTicker from '../components/SchoolPartnership/AnnouncementTicker';
import MeetInnovators from '../components/SchoolPartnership/MeetInnovators';
import LmsSection from '../components/SchoolPartnership/LmsSection';
import SchoolEcosystemOrbit from '../components/SchoolPartnership/SchoolEcosystemOrbit';
import WhyPartnerWithUs from '../components/SchoolPartnership/WhyPartnerWithUs';
import NationalHackathon from '../components/SchoolPartnership/NationalHackathon';
import PartnershipDomains from '../components/SchoolPartnership/PartnershipDomains';
import FourStageLearning from '../components/SchoolPartnership/FourStageLearning';
import ProgramRoadmap from '../components/SchoolPartnership/ProgramRoadmap';
import PartnershipStory from '../components/SchoolPartnership/PartnershipStory';
import NextGenLabsGallery from '../components/SchoolPartnership/NextGenLabsGallery';
import TestimonialsSection from '../components/SchoolPartnership/TestimonialsSection';
import SchoolBenefits from '../components/SchoolPartnership/SchoolBenefits';
import GroupProjects from '../components/SchoolPartnership/GroupProjects';
import PartnershipRoadmap from '../components/SchoolPartnership/PartnershipRoadmap';
import PartnershipForm from '../components/SchoolPartnership/PartnershipForm';
import PartnershipFooter from '../components/SchoolPartnership/PartnershipFooter';

const SchoolPartnership = () => {
  // Initialize Lenis smooth scroll — only on this page
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="bg-[var(--bg-setu)] text-[var(--dark-setu)] overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <SEO
        title="School Partnerships — Floyd School | Future-Ready Tech Labs"
        description="Partner with Floyd School to deploy AI, Coding, Robotics, and Entrepreneurship education on your campus. Fully managed labs, certified mentors, and NEP-aligned modules."
      />

      {/* 1. Full-screen Hero */}
      <PartnershipHero />

      {/* 1b. Meet Our Innovators photo gallery */}
      <MeetInnovators />

      {/* 2b. Vibrant Announcement Ticker */}
      <AnnouncementTicker />

      {/* 3. Learning Management System */}
      <LmsSection />

      {/* 3b. Integrated Campus Ecosystem Orbit Hub */}
      <SchoolEcosystemOrbit />

      {/* 3c. Trusted By Schools logo marquee section */}
      <BootcampGallery />

      {/* 3c. School Partnership Story */}
      <PartnershipStory />

      {/* NextGen Learning Labs gallery (in-school delivery & online mentor-led sessions) */}
      <NextGenLabsGallery />

      {/* 4. Programs Offered */}
      <WhyPartnerWithUs />

      {/* 4b. Four Stage Learning Model */}
      <FourStageLearning />

      {/* 4c. Program Roadmap Timeline */}
      <ProgramRoadmap />

      {/* 5. Partnership Models */}
      <NationalHackathon />

      {/* 6. Outcomes & Impact */}
      <PartnershipDomains />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. NEP 2020 Alignment */}
      <SchoolBenefits />

      {/* 10. Partnership Process Timeline */}
      <GroupProjects />

      {/* 11. FAQ Accordion */}
      <PartnershipRoadmap />

      {/* 12. Final CTA Banner */}
      <PartnershipForm />

      {/* Footer */}
      <PartnershipFooter />
    </div>
  );
};

export default SchoolPartnership;
