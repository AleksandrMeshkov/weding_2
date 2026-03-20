import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const WEDDING_DATE = new Date('2026-08-22T15:30:00');
const VENUE_MAP_URL =
  'https://2gis.ru/search/%D0%91%D0%B5%D1%80%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%2056';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, '0');

const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f9f5ef] py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl text-[#3d2e1e] mb-5 leading-relaxed">
            Дорогие родные и друзья!
          </h2>
          <p className="font-sans text-sm text-[#6b5744] leading-relaxed max-w-md mx-auto mb-3">
            Мы счастливы пригласить вас на самый важный день нашей жизни. Ваше присутствие наполнит этот день особым теплом и радостью.
          </p>
          <p className="font-sans text-sm text-[#6b5744] leading-relaxed max-w-md mx-auto">
            Мы с нетерпением ждём встречи с каждым из вас и надеемся, что этот вечер станет незабываемым для всех нас.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 justify-center mb-10" aria-hidden="true">
          <div className="flex-1 h-px bg-[#c9a96e]/30 max-w-[100px]" />
          <div className="w-2 h-2 rounded-full bg-[#c9a96e]/50" />
          <div className="flex-1 h-px bg-[#c9a96e]/30 max-w-[100px]" />
        </div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="font-sans text-xs text-[#8a7560] tracking-[0.3em] uppercase mb-6">
            до свадьбы осталось...
          </p>
          <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto">
            {[
              { value: timeLeft.days, label: 'дней' },
              { value: timeLeft.hours, label: 'часов' },
              { value: timeLeft.minutes, label: 'минут' },
              { value: timeLeft.seconds, label: 'секунд' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-full aspect-square bg-white/70 border border-[#c9a96e]/20 rounded-xl flex items-center justify-center shadow-sm mb-2">
                  <span className="font-serif text-2xl md:text-3xl text-[#3d2e1e] font-bold tabular-nums">
                    {pad(item.value)}
                  </span>
                </div>
                <span className="font-sans text-xs text-[#8a7560] tracking-wide">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 justify-center mb-10" aria-hidden="true">
          <div className="flex-1 h-px bg-[#c9a96e]/30 max-w-[100px]" />
          <div className="w-2 h-2 rounded-full bg-[#c9a96e]/50" />
          <div className="flex-1 h-px bg-[#c9a96e]/30 max-w-[100px]" />
        </div>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-sans text-xs text-[#c9a96e] tracking-[0.4em] uppercase mb-4">
            Место проведения
          </p>
          <div className="bg-white/60 border border-[#c9a96e]/20 rounded-2xl p-6 shadow-sm inline-block">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#c9a96e]/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#c9a96e]" />
              </div>
              <div className="text-left">
                <p className="font-serif text-lg text-[#3d2e1e] font-semibold mb-1">PARUS</p>
                <p className="font-sans text-sm text-[#8a7560] mb-1">Банкетный зал «White Hall»</p>
                <a
                  href={VENUE_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-[#6b5744] underline decoration-[#c9a96e]/50 underline-offset-4 hover:text-[#3d2e1e] transition-colors"
                >
                  Береговая улица, 56
                </a>
              </div>
            </div>
          </div>
          <p className="font-sans text-xs text-[#8a7560] mt-3">
            Нажмите на адрес, чтобы открыть маршрут на карте.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;