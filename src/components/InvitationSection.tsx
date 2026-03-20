import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Music2 } from 'lucide-react';
import weddingMusic from '../../music/beautiful-boys-nezhnaya-lyubov-77602132_lGN22CYu_gain.mp3';

const InvitationSection: React.FC = () => {
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (musicOn) {
      audio.play().catch(() => {
        setMusicOn(false);
      });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [musicOn]);

  return (
    <section className="bg-[#f2ece2] py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top decorative line */}
          <div className="flex items-center gap-4 justify-center mb-8" aria-hidden="true">
            <div className="flex-1 h-px bg-[#c9a96e]/30 max-w-[80px]" />
            <div className="w-2 h-2 rounded-full bg-[#c9a96e]/50" />
            <div className="flex-1 h-px bg-[#c9a96e]/30 max-w-[80px]" />
          </div>

          <p className="font-sans font-semibold text-sm md:text-base text-[#a8854e] tracking-[0.4em] uppercase mb-4">
            Приглашение на свадьбу
          </p>

          <h2 className="font-serif text-4xl md:text-6xl text-[#3d2e1e] font-bold tracking-wide uppercase mb-6">
            Андрей<br />
            <span className="text-[#c9a96e]">&</span><br />
            Ульяна
          </h2>

          <p className="font-sans text-base md:text-lg text-[#6b5744] leading-relaxed mb-10 max-w-md mx-auto">
            Мы с радостью приглашаем вас разделить с нами этот незабываемый день, наполненный любовью, теплом и счастьем.
          </p>

          {/* Music toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMusicOn(!musicOn)}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#c9a96e]/40 bg-white/60 text-[#8a7560] font-sans text-base md:text-lg tracking-widest uppercase transition-all duration-300 hover:bg-[#c9a96e]/10 hover:border-[#c9a96e]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]"
            aria-pressed={musicOn}
            aria-label={musicOn ? 'Выключить музыку' : 'Включить музыку'}
          >
            {musicOn ? (
              <Music2 className="w-4 h-4 text-[#c9a96e]" />
            ) : (
              <Music className="w-4 h-4 text-[#c9a96e]" />
            )}
            {musicOn ? 'Выключить музыку' : 'Включить музыку'}
          </motion.button>
          <audio ref={audioRef} src={weddingMusic} preload="auto" />

          {/* Bottom decorative line */}
          <div className="flex items-center gap-4 justify-center mt-10" aria-hidden="true">
            <div className="flex-1 h-px bg-[#c9a96e]/30 max-w-[80px]" />
            <div className="w-2 h-2 rounded-full bg-[#c9a96e]/50" />
            <div className="flex-1 h-px bg-[#c9a96e]/30 max-w-[80px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationSection;