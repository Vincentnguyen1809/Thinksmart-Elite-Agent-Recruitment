
import React from 'react';
import { SITE_CONTENT } from '../content';

const Footer: React.FC = () => {
  const { brand, socials } = SITE_CONTENT;

  return (
    <footer className="bg-black text-white py-8 md:py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-4 md:mb-6">
          <div className="md:col-span-6 text-center md:text-left">
            <div className="mb-6 md:mb-8 flex justify-center md:justify-start">
              <img 
                src={brand.logo} 
                alt={`${brand.name} Logo`} 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed font-bold uppercase text-[9px] tracking-widest mx-auto md:mx-0">
              {brand.slogan}
            </p>
            
            <div className="flex flex-nowrap gap-3 md:gap-5 justify-start items-end overflow-x-auto no-scrollbar pb-2">
               {socials.map(social => (
                 <a 
                   key={social.name} 
                   href={social.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex flex-col items-center group transition-all flex-shrink-0"
                 >
                   <div className="h-8 md:h-10 mb-3 flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
                     <img 
                       src={social.logo} 
                       alt={social.name} 
                       className="max-h-full w-auto object-contain transition-all duration-300 group-hover:scale-110" 
                     />
                   </div>
                   <span 
                    className="px-3 md:px-5 py-2 border border-white/10 text-[9px] md:text-[10px] font-black group-hover:text-white transition-all uppercase tracking-widest whitespace-nowrap bg-white/5 group-hover:bg-elite-red group-hover:border-elite-red shadow-lg"
                   >
                     {social.name}
                   </span>
                 </a>
               ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-elite-red mb-4 md:mb-6">Office Address</h4>
            <p className="text-gray-400 text-sm leading-snug font-black uppercase tracking-tight">
              {brand.address.split(',').map((part, i) => (
                <React.Fragment key={i}>
                  {part.trim()} {i < brand.address.split(',').length - 1 && <br/>}
                </React.Fragment>
              ))}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-elite-red mb-4 md:mb-6">Contact Support</h4>
            <ul className="space-y-4">
              <li>
                <span className="text-gray-600 block text-[9px] uppercase font-black tracking-widest mb-0.5">Hotline (USA)</span>
                <a href={`tel:${brand.hotline.replace(/\D/g, '')}`} className="text-sm font-black hover:text-elite-red transition-colors uppercase tracking-tight">{brand.hotline}</a>
              </li>
              <li>
                <span className="text-gray-600 block text-[9px] uppercase font-black tracking-widest mb-0.5">Email Center</span>
                <a href={`mailto:${brand.email}`} className="hover:text-elite-red transition-colors font-bold tracking-widest text-[11px] uppercase">{brand.email}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[8px] font-black text-gray-500 uppercase tracking-[0.4em]">
          <p>© {new Date().getFullYear()} {brand.name}. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href={brand.privacyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href={brand.termsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
