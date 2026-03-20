import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const couplePhoto = new URL('../../img/IMG_4801.jpg', import.meta.url).href;

const MONTH_DAYS = [
  [null, null, null, null, null, null, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30, 31, null, null, null, null, null],
];

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#f9f5ef] flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-60 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-2xl overflow-hidden border border-[#c9a96e]/20 shadow-xl bg-[#ede8df] flex items-center justify-center">
              <img
                src={couplePhoto}
                alt="Андрей и Ульяна"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame offset */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[#c9a96e]/20 -z-10" aria-hidden="true" />
          </div>
        </motion.div>

        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <p className="font-sans font-semibold text-sm md:text-base text-[#a8854e] tracking-[0.3em] uppercase mb-3 sm:mb-4">Дата свадьбы</p>

          <div className="bg-white/70 border border-[#c9a96e]/20 rounded-2xl p-4 sm:p-6 shadow-sm w-full max-w-xs">
            {/* Weekday headers */}
            <div className="grid grid-cols-7 mb-2 sm:mb-3">
              {WEEKDAYS.map((d) => (
                <div key={d} className="text-center font-sans text-sm text-[#8a7560] tracking-wide py-1">
                  {d}
                </div>
              ))}
            </div>
            {/* Days */}
            {MONTH_DAYS.map((week, wi) => (
              <div key={wi} className="grid grid-cols-7">
                {week.map((day, di) => (
                  <div
                    key={di}
                    className={`flex items-center justify-center h-8 sm:h-9 w-8 sm:w-9 mx-auto rounded-full font-sans text-sm sm:text-base transition-all duration-200 ${
                      day === 22
                        ? 'bg-[#c9a96e] text-white font-bold shadow-md'
                        : day
                        ? 'text-[#3d2e1e] hover:bg-[#c9a96e]/10'
                        : ''
                    }`}
                  >
                    {day === 22 ? (
                      <span className="flex flex-col items-center leading-none">
                        <span>{day}</span>
                      </span>
                    ) : (
                      day
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Heart marker */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
            className="mt-4 sm:mt-5 flex items-center gap-2"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a96e] fill-[#c9a96e]" />
            <span className="font-sans text-sm sm:text-base text-[#8a7560] tracking-widest">22 августа 2026</span>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a96e] fill-[#c9a96e]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;