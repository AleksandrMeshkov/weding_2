import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import dresOne from '../../img/dres_one.png';
import dresTwo from '../../img/dres_two.png';
import dresThree from '../../img/dres_three.png';
import dresFour from '../../img/dres_four.png';
import dresFive from '../../img/dres_five.png';
import dresSix from '../../img/dres_six.png';

const palette = [
  { name: 'Образ 1', image: dresOne },
  { name: 'Образ 2', image: dresTwo },
  { name: 'Образ 3', image: dresThree },
  { name: 'Образ 4', image: dresFour },
  { name: 'Образ 5', image: dresFive },
  { name: 'Образ 6', image: dresSix },
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
            <p className="font-sans font-semibold text-sm md:text-base text-[#a8854e] tracking-[0.4em] uppercase mb-2">ДРЕСС-КОД</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#3d2e1e] mb-4">Цветовая палитра</h2>
            <div className="w-10 h-px bg-[#c9a96e]/50 mb-5" aria-hidden="true" />
            <p className="font-sans text-base md:text-lg text-[#6b5744] leading-relaxed mb-6">
              Мы будем очень благодарны, если вы поддержите цветовую палитру нашей свадьбы:
            </p>

            <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
              {palette.map((color) => (
                <motion.div
                  key={color.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex justify-center"
                >
                  <img
                    src={color.image}
                    alt={color.name}
                    className="h-16 w-16 rounded-full border border-[#c9a96e]/20 object-cover shadow-sm md:h-20 md:w-20"
                  />
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
            <p className="font-sans font-semibold text-sm md:text-base text-[#a8854e] tracking-[0.4em] uppercase mb-2">КОНТАКТЫ</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#3d2e1e] mb-4">Координатор</h2>
            <div className="w-10 h-px bg-[#c9a96e]/50 mb-5" aria-hidden="true" />
            <p className="font-sans text-base md:text-lg text-[#6b5744] leading-relaxed mb-6">
              По всем вопросам, связанным с торжественным вечером, просим обращаться к нашему координатору:
            </p>

            <div className="bg-white/60 border border-[#c9a96e]/20 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-full bg-[#c9a96e]/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#c9a96e]" />
                </div>
                <div>
                  <p className="font-serif text-xl md:text-2xl text-[#3d2e1e] font-semibold">Александра</p>
                  <a
                    href="tel:+79993009995"
                    className="font-sans text-base md:text-lg text-[#c9a96e] tracking-wide hover:text-[#a8854e] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] rounded"
                  >
                    +7-999-300-99-95
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-white/60 border border-[#c9a96e]/20 rounded-xl p-5 shadow-sm">
              <p className="font-serif text-xl md:text-2xl text-[#3d2e1e] font-semibold mb-3">Чаты</p>
              <p className="font-sans text-base md:text-lg text-[#6b5744] leading-relaxed mb-4">
                Пожалуйста, вступайте в чаты, чтобы быть в курсе всех организационных моментов.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#c9a96e]/10 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-[#c9a96e]" />
                  </div>
                  <a
                    href="https://t.me/+aYStBkH1uFxjNWU6"
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-base md:text-lg text-[#c9a96e] tracking-wide hover:text-[#a8854e] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] rounded"
                  >
                    Чат в Telegram
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#c9a96e]/10 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-[#c9a96e]" />
                  </div>
                  <a
                    href="https://max.ru/join/Rw_CfabMY5hls8zn20ZBs9G22_OdAFcmhYjBCfTiZF4"
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-base md:text-lg text-[#c9a96e] tracking-wide hover:text-[#a8854e] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] rounded"
                  >
                    Чат в MAX
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