import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroCard from '../components/IntroCard';
import HeroSection from '../components/HeroSection';
import InvitationSection from '../components/InvitationSection';
import ScheduleSection from '../components/ScheduleSection';
import DressCodeSection from '../components/DressCodeSection';
import CountdownSection from '../components/CountdownSection';
import RsvpSection from '../components/RsvpSection';
import WishesSection from '../components/WishesSection';
import WeddingFooter from '../components/WeddingFooter';

const Home: React.FC = () => {
  const [entered, setEntered] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => {
      mainRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {!entered && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7 }}
            className="fixed inset-0 z-50"
          >
            <IntroCard onEnter={handleEnter} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        ref={mainRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <main>
          <InvitationSection />
          <HeroSection />
          <ScheduleSection />
          <CountdownSection />
          <WishesSection />
          <RsvpSection />
          <DressCodeSection />
        </main>
        <WeddingFooter />
      </motion.div>
    </>
  );
};

export default Home;