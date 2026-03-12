import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface IntroCardProps {
  onEnter: () => void;
}

const couplePhoto = new URL('../../img/IMG_7458.jpg', import.meta.url).href;

const IntroCard: React.FC<IntroCardProps> = ({ onEnter }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#f9f5ef] overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80')] bg-cover bg-center opacity-10" aria-hidden="true" />

      {/* Decorative corner flourishes */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-[#c9a96e]/40" aria-hidden="true" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-[#c9a96e]/40" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-[#c9a96e]/40" aria-hidden="true" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-[#c9a96e]/40" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center text-center px-8 max-w-xl"
      >
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[#c9a96e] text-xs font-sans uppercase tracking-[0.4em] mb-6"
        >
          You are invited
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-serif text-5xl md:text-7xl text-[#3d2e1e] tracking-widest uppercase mb-2"
        >
          Wedding
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="font-serif text-2xl md:text-3xl text-[#c9a96e] tracking-[0.3em] uppercase mb-8"
        >
          Day
        </motion.p>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-24 h-px bg-[#c9a96e]/60 mb-8"
          aria-hidden="true"
        />

        {/* Couple photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-[#c9a96e]/30 overflow-hidden mb-8 shadow-lg bg-[#ede8df] flex items-center justify-center"
        >
          <img
            src={couplePhoto}
            alt="Андрей и Ульяна"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Names */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="font-serif text-4xl md:text-4xl text-[#3d2e1e] font-bold tracking-wide mb-4"
        >
          Андрей & Ульяна
        </motion.h2>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="font-sans text-2xl text-[#8a7560] tracking-[0.25em] mb-8"
        >
          22 · 08 · 26
        </motion.p>

        {/* Invitation text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="font-sans text-sm md:text-base text-[#6b5744] leading-relaxed mb-10 max-w-sm"
        >
          Получение этого приглашения — не случайность. Вы являетесь неотъемлемой частью нашей жизни, и мы очень хотим, чтобы вы разделили с нами этот особенный день!
        </motion.p>

        {/* Heart CTA button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          aria-label="Открыть приглашение"
          className="group flex flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] rounded-full"
        >
          <div className="w-16 h-16 rounded-full bg-[#c9a96e]/10 border border-[#c9a96e]/40 flex items-center justify-center transition-all duration-300 group-hover:bg-[#c9a96e]/20 group-hover:border-[#c9a96e]/70 group-hover:shadow-lg">
            <Heart className="w-7 h-7 text-[#c9a96e] fill-[#c9a96e]" />
          </div>
          <span className="font-sans text-xs text-[#8a7560] tracking-widest uppercase">Открыть</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default IntroCard;