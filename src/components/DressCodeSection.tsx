import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const palette = [
  { name: 'Слоновая кость', hex: '#f5f0e8' },
  { name: 'Шампань', hex: '#e8d5b0' },
  { name: 'Пудровый', hex: '#e8c9b8' },
  { name: 'Бежевый', hex: '#d4b896' },
  { name: 'Тауп', hex: '#b8a898' },
  { name: 'Тёмный крем', hex: '#8a7560' },
];

const DressCodeSection: React.FC = () => {
  return (
    <section className="bg-[#f2ece2] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Dress Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-xs text-[#c9a96e] tracking-[0.4em] uppercase mb-2">#ДРЕСС-КОД</p>
            <h2 className="font-serif text-2xl text-[#3d2e1e] mb-4">Цветовая палитра</h2>
            <div className="w-10 h-px bg-[#c9a96e]/50 mb-5" aria-hidden="true" />
            <p className="font-sans text-sm text-[#6b5744] leading-relaxed mb-6">
              Мы будем очень благодарны, если вы поддержите цветовую палитру нашей свадьбы:
            </p>

            <div className="grid grid-cols-3 gap-3">
              {palette.map((color) => (
                <motion.div
                  key={color.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className="w-12 h-12 rounded-full border border-[#c9a96e]/20 shadow-sm"
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                  />
                  <span className="font-sans text-xs text-[#8a7560] text-center leading-tight">{color.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-sans text-xs text-[#c9a96e] tracking-[0.4em] uppercase mb-2">#КОНТАКТЫ</p>
            <h2 className="font-serif text-2xl text-[#3d2e1e] mb-4">Организатор</h2>
            <div className="w-10 h-px bg-[#c9a96e]/50 mb-5" aria-hidden="true" />
            <p className="font-sans text-sm text-[#6b5744] leading-relaxed mb-6">
              По всем вопросам, связанным с торжественным вечером и сюрпризами, просим обращаться к нашему организатору:
            </p>

            <div className="bg-white/60 border border-[#c9a96e]/20 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-full bg-[#c9a96e]/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#c9a96e]" />
                </div>
                <div>
                  <p className="font-serif text-lg text-[#3d2e1e] font-semibold">Яна</p>
                  <a
                    href="tel:+79876662828"
                    className="font-sans text-sm text-[#c9a96e] tracking-wide hover:text-[#a8854e] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] rounded"
                  >
                    +7-987-666-28-28
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;