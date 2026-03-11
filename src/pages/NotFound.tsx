import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f9f5ef] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 rounded-full bg-[#c9a96e]/10 border border-[#c9a96e]/30 flex items-center justify-center mb-6">
        <Heart className="w-7 h-7 text-[#c9a96e] fill-[#c9a96e]" />
      </div>
      <h1 className="font-serif text-4xl text-[#3d2e1e] mb-3">404</h1>
      <p className="font-sans text-sm text-[#8a7560] mb-8 tracking-wide">Страница не найдена</p>
      <Link
        to="/"
        className="font-sans text-xs text-[#c9a96e] tracking-widest uppercase border border-[#c9a96e]/40 px-6 py-3 rounded-full hover:bg-[#c9a96e]/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;