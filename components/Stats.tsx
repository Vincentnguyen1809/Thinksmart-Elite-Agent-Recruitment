
import React from 'react';
import { SITE_CONTENT } from '../content';

const Stats: React.FC = () => {
  const { stats } = SITE_CONTENT;
  
  const getIcon = (label: string) => {
    if (label.includes('GOOGLE')) return <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
    if (label.includes('REVIEW')) return <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>;
    if (label.includes('BANG')) return <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    return <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M12 2a10 10 0 100 20 10 10 0 000-20z" /></svg>;
  };

  const displayStats = [...stats, ...stats, ...stats];

  return (
    <div className="bg-black py-8 md:py-12 border-y border-white/10 relative overflow-hidden">
      <div className="fade-edge relative z-10">
        <div className="animate-stats-marquee flex items-center gap-6 md:gap-24 whitespace-nowrap">
          {displayStats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center px-4 md:px-6 group w-[33vw] md:w-auto min-w-[130px]"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-elite-red group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100">
                {getIcon(stat.label)}
              </div>
              <dd className="text-lg md:text-[26px] font-black tracking-tighter text-white uppercase leading-none mb-1 md:mb-2">
                {stat.label.includes('GOOGLE') || stat.label.includes('REVIEW') ? (
                  <span className="text-elite-red drop-shadow-[0_0_12px_rgba(220,38,38,0.5)]">{stat.value}</span>
                ) : (
                  stat.value
                )}
              </dd>
              <dt className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-gray-500 group-hover:text-white transition-colors duration-500 text-center">
                {stat.label}
              </dt>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
