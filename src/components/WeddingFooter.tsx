import React from 'react';
import { Heart } from 'lucide-react';

const WeddingFooter: React.FC = () => {
  return (
    <footer className="bg-[#3d2e1e] py-12 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <p className="font-serif text-3xl md:text-4xl text-[#c9a96e] tracking-widest mb-2">
          Андрей & Ульяна
        </p>
        <p className="font-sans font-semibold text-sm md:text-base text-[#a8854e]/85 tracking-[0.3em] uppercase mb-6">
          22 · 08 · 2026
        </p>
        <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
          <div className="flex-1 h-px bg-[#c9a96e]/20 max-w-[60px]" />
          <Heart className="w-4 h-4 text-[#c9a96e]/60 fill-[#c9a96e]/60" />
          <div className="flex-1 h-px bg-[#c9a96e]/20 max-w-[60px]" />
        </div>
        <p className="font-sans text-sm md:text-base text-[#8a7560] leading-relaxed">
          PARUS · Банкетный зал «White Hall» · Береговая улица, 56
        </p>
        <p className="font-sans text-sm text-[#6b5744]/50 mt-6">
          © 2026 Андрей & Ульяна. Создано с любовью.
        </p>
      </div>
    </footer>
  );
};

export default WeddingFooter;