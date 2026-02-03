
import React from 'react';
import { SITE_CONTENT } from '../content';

const Benefits: React.FC = () => {
  const { benefitsSection } = SITE_CONTENT;
  
  const icons = [
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.167a2.405 2.405 0 010-1.543l2.147-6.167A1.76 1.76 0 0111 5.882zM15.5 14c2 0 3.5-1.5 3.5-3.5S17.5 7 15.5 7m2 10c2.5 0 4.5-2 4.5-4.5S20 8 17.5 8" /></svg>,
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {benefitsSection.items.map((item, idx) => (
        <div 
          key={idx} 
          className="group relative p-10 bg-white hover:bg-[#DC2626] transition-all duration-500 border border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-[0_40px_80px_rgba(220,38,38,0.4)] overflow-hidden cursor-default"
        >
          <div className="relative z-10 text-elite-red transition-all duration-500 flex-shrink-0 bg-red-50 group-hover:bg-white w-20 h-20 flex items-center justify-center rounded-sm shadow-sm group-hover:scale-110">
            {icons[idx] || icons[0]}
          </div>
          
          <div className="relative z-10 flex flex-col">
            <h3 className="text-2xl font-black mb-4 text-black group-hover:text-white transition-all duration-500 leading-tight uppercase tracking-tighter italic">
                {item.title}
            </h3>
            <p className="text-black/80 group-hover:text-white text-[15px] leading-relaxed font-bold transition-all duration-500 mb-6">
                {item.desc}
            </p>
            {item.specialBadge && (
                <div className="mt-auto bg-elite-red/5 group-hover:bg-white/20 px-4 py-2 border-l-4 border-elite-red group-hover:border-white transition-all duration-500">
                    <span className="text-[11px] font-black text-elite-red group-hover:text-white uppercase tracking-widest italic leading-none">{item.specialBadge}</span>
                </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
