import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const schedule = [
  {
    time: '15:30',
    title: 'Сбор гостей',
    description: 'Добро пожаловать! Встреча гостей, приветственные напитки и угощения.',
  },
  {
    time: '16:00',
    title: 'Выездная церемония',
    description: 'Торжественная церемония бракосочетания в окружении самых близких людей.',
  },
  {
    time: '17:00',
    title: 'Банкет',
    description: 'Праздничный ужин, тосты, танцы и незабываемые моменты вместе.',
  },
  {
    time: '23:00',
    title: 'Завершение вечера',
    description: 'Финальный танец и тёплые пожелания молодожёнам.',
  },
];

const ScheduleSection: React.FC = () => {
  return (
    <section className="bg-[#f9f5ef] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-[#3d2e1e] tracking-wide">
            План дня
          </h2>
          <div className="w-16 h-px bg-[#c9a96e]/50 mx-auto mt-4" aria-hidden="true" />
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-[#c9a96e]/20 hidden md:block" aria-hidden="true" />

          <div className="space-y-10">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
              >
                {/* Time */}
                <div className="flex items-center gap-3 md:flex-col md:items-end md:w-[72px] md:pt-1 shrink-0">
                  <span className="font-serif text-2xl md:text-3xl text-[#c9a96e] font-bold leading-none">
                    {item.time}
                  </span>
                </div>

                {/* Dot */}
                <div className="hidden md:flex items-start pt-2 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#c9a96e] border-2 border-[#f9f5ef] shadow-sm relative z-10" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/60 border border-[#c9a96e]/15 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-[#c9a96e]" />
                    <h3 className="font-serif text-lg text-[#3d2e1e] font-semibold">{item.title}</h3>
                  </div>
                  <p className="font-sans text-sm text-[#8a7560] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;