import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Heart } from 'lucide-react';

const wishes = [
  {
    icon: Baby,
    tag: '#ДЕТИ',
    title: 'Праздник для взрослых',
    text: 'Наша свадьба — праздник для взрослых. Пожалуйста, позаботьтесь о том, чтобы оставить детишек дома под любящим присмотром, и всецело насладитесь атмосферой нашего торжества.',
  },
  {
    icon: Heart,
    tag: '#ГОРЬКО',
    title: 'Горько',
    text: 'Никакой официальности и суеты. Только близкие люди, без которых мы не представляем этот день, непринуждённая атмосфера и много веселья. Однако, пожалуйста, воздержитесь от криков «Горько».',
  },
];

const WishesSection: React.FC = () => {
  return (
    <section className="bg-[#f9f5ef] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-sans text-xs text-[#c9a96e] tracking-[0.4em] uppercase mb-4">
            Пожелания
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#3d2e1e] uppercase tracking-wide">
            Наши просьбы
          </h2>
          <div className="flex items-center gap-4 justify-center mt-6" aria-hidden="true">
            <div className="flex-1 h-px bg-[#c9a96e]/30 max-w-[80px]" />
            <div className="w-2 h-2 rounded-full bg-[#c9a96e]/50" />
            <div className="flex-1 h-px bg-[#c9a96e]/30 max-w-[80px]" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishes.map((wish, i) => {
            const Icon = wish.icon;
            return (
              <motion.div
                key={wish.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="bg-white/60 border border-[#c9a96e]/20 rounded-2xl p-8 shadow-sm flex flex-col gap-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#c9a96e]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#c9a96e]" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-[#c9a96e] tracking-[0.3em] uppercase mb-0.5">
                      {wish.tag}
                    </p>
                    <h3 className="font-serif text-xl text-[#3d2e1e]">{wish.title}</h3>
                  </div>
                </div>
                <div className="w-8 h-px bg-[#c9a96e]/40" aria-hidden="true" />
                <p className="font-sans text-sm text-[#6b5744] leading-relaxed">{wish.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
