
import React, { useState } from 'react';
import { SITE_CONTENT } from '../content';

interface HeroProps {
  onApplyClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const { hero } = SITE_CONTENT;

  // Hàm hỗ trợ đổi màu đỏ cho các cụm từ cụ thể trong đoạn mô tả
  const highlightImportantText = (text: string) => {
    const highlights = ["KHÔNG GIỚI HẠN", "đào tạo bài bản từ A-Z"];
    
    let parts: React.ReactNode[] = [text];
    
    highlights.forEach(phrase => {
      const newParts: React.ReactNode[] = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const subParts = part.split(phrase);
          subParts.forEach((subPart, i) => {
            newParts.push(subPart);
            if (i < subParts.length - 1) {
              newParts.push(<span key={`${phrase}-${i}`} className="text-elite-red">{phrase}</span>);
            }
          });
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });
    
    return <>{parts}</>;
  };

  return (
    <div className="relative bg-black pt-2 md:pt-4 pb-6 lg:pt-6 lg:pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-red-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 md:space-y-4">
          
          <div className="flex flex-col space-y-4 md:space-y-6 w-full items-center lg:items-start">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 w-fit px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-md mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 bg-elite-red rounded-full animate-ping"></span>
              <span className="text-white font-black text-[10px] md:text-[17px] uppercase tracking-tight md:tracking-[0.2em] whitespace-nowrap">{hero.badgeText}</span>
            </div>
            <h1 className="text-[24px] md:text-5xl lg:text-6xl xl:text-[75px] font-black tracking-tighter text-white leading-tight lg:leading-[1.1] uppercase whitespace-nowrap">
              {hero.titleMain} <span className="text-elite-red">{hero.titleHighlight}</span>
            </h1>
            <p className="text-white font-black text-[13px] md:text-xl tracking-tighter uppercase border-l-[1px] border-white pl-4 md:pl-6 mx-auto lg:mx-0 h-4 md:h-5 flex items-center">
              {hero.subBrand}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full">
            {/* Cột chữ */}
            <div className="lg:col-span-5 space-y-4 flex flex-col h-full z-20">
              <div className="bg-gradient-to-r from-white/10 to-transparent p-4 md:p-6 rounded-r-lg border-l-[1px] border-white text-left w-full overflow-hidden">
                <h3 className="text-[13px] sm:text-[18px] md:text-[24px] lg:text-[26px] xl:text-[30px] font-black tracking-tighter mb-3 leading-tight uppercase">
                  <span className="text-white block whitespace-nowrap">{hero.headlineLine1}</span>
                  <span className="text-elite-red block whitespace-nowrap md:whitespace-normal">
                    {hero.headlineLine2}
                    <br className="hidden md:block" />
                    <span> {hero.headlineLine3}</span>
                  </span>
                </h3>
                <p className="text-[17px] md:text-[20px] lg:text-[21px] leading-snug md:leading-relaxed font-medium tracking-tight text-white mt-3">
                  {highlightImportantText(hero.description)}
                </p>
              </div>

              <div className="flex flex-col space-y-4 w-full">
                <button
                  onClick={onApplyClick}
                  className="group relative w-full overflow-hidden bg-elite-red text-white px-3 md:px-6 py-4 md:py-5 rounded-sm font-black text-[14px] md:text-[18px] uppercase tracking-wide md:tracking-widest transition-all shadow-[0_25px_60px_rgba(220,38,38,0.35)] hover:scale-105 whitespace-nowrap flex items-center justify-center border-b-4 border-red-800"
                >
                  <span className="relative z-10">{hero.buttonText}</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                </button>
                
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="flex -space-x-3">
                      {hero.avatars.map((url, i) => (
                          <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black bg-gray-800 overflow-hidden shadow-lg transform hover:scale-110 transition-transform cursor-pointer relative z-[10]">
                              <img src={url} alt="Elite Agent Avatar" className="w-full h-full object-cover" />
                          </div>
                      ))}
                  </div>
                  <p className="text-white text-[12px] md:text-[15px] font-bold uppercase tracking-tight text-left leading-tight">
                    {hero.noteText}
                  </p>
                </div>
              </div>
            </div>

            {/* Cột video thumbnail */}
            <div className="lg:col-span-7 w-full h-full z-10 flex items-center">
              <div 
                className="relative group cursor-pointer aspect-video bg-gray-950 rounded-sm overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(220,38,38,0.25)] w-full"
                onClick={() => setShowVideoModal(true)}
              >
                <img 
                  src={`https://img.youtube.com/vi/${hero.videoId}/maxresdefault.jpg`} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-1000 group-hover:scale-105" 
                   alt="Hero Video Thumbnail"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${hero.videoId}/0.jpg`;
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="relative">
                      <div className="absolute inset-0 bg-elite-red blur-[100px] opacity-40 animate-pulse"></div>
                      <div className="relative w-20 h-20 md:w-28 md:h-28 bg-elite-red rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                        <div className="w-0 h-0 border-t-[12px] md:border-t-[18px] border-t-transparent border-l-[20px] md:border-l-[28px] border-l-white border-b-[12px] md:border-b-[18px] border-b-transparent ml-2"></div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal - Cinema Zoom */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          
          <div className="relative w-full max-w-5xl aspect-video mx-4">
            {/* Nút đóng video - Nhỏ gọn, sát góc video, không có chữ Close */}
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-[110] bg-elite-red hover:bg-white text-white hover:text-black rounded-full w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group border-2 border-white shadow-2xl flex items-center justify-center"
              aria-label="Đóng Video"
            >
              <span className="text-2xl md:text-3xl font-bold leading-none transition-transform duration-300 group-hover:rotate-90">&times;</span>
            </button>

            {/* Iframe Video */}
            <div className="w-full h-full bg-black shadow-[0_0_100px_rgba(220,38,38,0.5)] overflow-hidden border border-white/10 rounded-sm">
              <iframe
                src={`https://www.youtube.com/embed/${hero.videoId}?autoplay=1&mute=0&rel=0&modestbranding=1&showinfo=0&controls=1&enablejsapi=1`}
                title="Cinematic Hero Video"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Overlay background clickable to close */}
          <div className="absolute inset-0 -z-10" onClick={() => setShowVideoModal(false)}></div>
        </div>
      )}
    </div>
  );
};

export default Hero;
