
import React from 'react';
import { SITE_CONTENT } from '../content';

const Benefits: React.FC = () => {
  const { benefitsSection } = SITE_CONTENT;
  
  const icons = [
    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.167a2.405 2.405 0 010-1.543l2.147-6.167A1.76 1.76 0 0111 5.882zM15.5 14c2 0 3.5-1.5 3.5-3.5S17.5 7 15.5 7m2 10c2.5 0 4.5-2 4.5-4.5S20 8 17.5 8" /></svg>,
    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ];

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Grid of benefit cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {benefitsSection.items.map((item, idx) => (
          <div 
            key={idx} 
            className="group relative p-5 md:p-10 bg-[#DC2626] md:bg-white md:hover:bg-[#DC2626] transition-all duration-500 border border-gray-100 flex flex-col md:flex-row gap-4 md:gap-8 items-stretch md:items-start hover:shadow-[0_40px_80px_rgba(220,38,38,0.4)] overflow-hidden cursor-default"
          >
            {/* Header row for Mobile (Icon + Title) */}
            <div className="flex flex-row items-center gap-4 md:contents">
              {/* Icon Box: White box */}
              <div className="relative z-10 text-elite-red transition-all duration-500 flex-shrink-0 bg-white md:bg-red-50 md:group-hover:bg-white w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-sm shadow-sm">
                {icons[idx] || icons[0]}
              </div>

              {/* Title: Only visible in the header on mobile */}
              <h3 className="md:hidden text-[19px] font-black text-white leading-tight uppercase tracking-tighter flex-1">
                {item.title}
              </h3>
            </div>
            
            <div className="relative z-10 flex flex-col flex-1">
              {/* Title: Visible on Desktop next to icon or in flex-row */}
              <h3 className="hidden md:block text-2xl font-black mb-4 text-black md:group-hover:text-white transition-all duration-500 leading-tight uppercase tracking-tighter">
                  {item.title}
              </h3>
              
              {/* Description Box: Bordered on mobile */}
              <div className="border-2 border-white md:border-0 p-4 md:p-0 transition-all duration-500">
                <p className="text-white md:text-black md:group-hover:text-white text-[16px] md:text-[19px] leading-relaxed font-normal md:font-bold">
                    {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Highlight Box - Bonus and Trip text is here */}
      <div className="w-full border-2 border-elite-red bg-white p-4 md:p-6 text-center shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-elite-red"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-elite-red"></div>
          
          <h4 className="text-elite-red text-lg md:text-2xl font-black uppercase tracking-widest mb-2">
            {benefitsSection.specialHighlightTitle}
          </h4>
          <div className="flex flex-col gap-1 md:gap-2">
            {benefitsSection.specialHighlightItems.map((text, i) => (
              <p key={i} className="text-elite-red text-[12px] md:text-[18px] font-bold uppercase tracking-tight">
                {text}
              </p>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Benefits;
