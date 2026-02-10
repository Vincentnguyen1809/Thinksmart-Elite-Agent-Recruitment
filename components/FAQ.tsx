
import React, { useState } from 'react';
import { SITE_CONTENT } from '../content';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { faqSection } = SITE_CONTENT;

  return (
    <div className="space-y-4">
      {faqSection.items.map((faq, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-200 rounded-sm overflow-hidden transition-all duration-300">
          <button 
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full px-6 md:px-8 py-6 md:py-8 text-left flex justify-between items-start hover:bg-gray-100 transition-colors gap-6"
          >
            <span className="text-base md:text-xl tracking-tighter leading-tight font-bold text-black">{faq.q}</span>
            <span className={`text-elite-red text-2xl md:text-3xl font-light transition-transform duration-500 flex-shrink-0 ${openIdx === idx ? 'rotate-45' : ''}`}>+</span>
          </button>
          <div className={`transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-[500px] opacity-100 py-6 md:py-8' : 'max-h-0 opacity-0 overflow-hidden'} px-6 md:px-8 text-elite-red border-t border-gray-100 text-base md:text-lg font-normal leading-relaxed`}>
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
