
import React from 'react';
import { SITE_CONTENT } from '../content';

interface StepsProps {
  onApplyClick: () => void;
}

const icons = [
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
];

const Steps: React.FC<StepsProps> = ({ onApplyClick }) => {
  const { stepsSection, brand } = SITE_CONTENT;

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden text-center border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-[12px] md:text-[17px] font-black text-elite-red uppercase tracking-[0.6em] md:tracking-[0.7em] mb-2 md:mb-3 italic">{stepsSection.badge}</h2>
          <h3 className="text-2xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter uppercase leading-tight lg:leading-[1.3] italic text-balance">
            {stepsSection.title}
          </h3>
          <div className="mt-4 md:mt-8 w-16 md:w-24 h-1.5 md:h-2 bg-elite-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 relative mb-12 md:mb-24">
          <div className="hidden md:block absolute top-[52px] left-[10%] w-[80%] h-[1.5px] bg-gray-100 z-0"></div>
          
          {stepsSection.items.map((step, idx) => (
            <div key={idx} className="relative z-10 group cursor-default">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 group-hover:shadow-md transition-all duration-300 relative">
                <div className="text-elite-red transform scale-75 transition-transform duration-300">
                  {icons[idx]}
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 md:w-9 md:h-9 bg-elite-red text-white text-[9px] md:text-[10px] font-black rounded-full flex items-center justify-center border-2 md:border-4 border-white shadow-sm z-20 group-hover:scale-[2] transition-transform duration-500 ease-out origin-center">
                  {step.number}
                </div>
              </div>
              
              <div className="text-center px-2">
                <h4 className="text-base md:text-xl font-black text-black mb-2 uppercase tracking-tighter italic leading-none group-hover:scale-105 transition-transform duration-300">
                  {step.title}
                </h4>
                <p className="text-black text-[14px] md:text-[15px] leading-relaxed font-bold tracking-tight text-balance">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
            <button 
                onClick={onApplyClick}
                className="w-full md:w-auto bg-elite-red hover:bg-black text-white px-10 py-5 rounded-sm font-black text-base md:text-lg uppercase tracking-widest transition-all shadow-[0_15px_40px_rgba(220,38,38,0.25)] italic mb-6"
            >
                Bắt đầu {brand.applyButtonText} Elite Agent
            </button>
            <p className="text-black text-[13px] md:text-[17px] font-bold uppercase tracking-tight text-balance">
                Đăng ký ngày để được phỏng vấn 1:1 cùng Elite Agent Manager
            </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
