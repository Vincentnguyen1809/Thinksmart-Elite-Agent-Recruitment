
import React, { useRef, useState } from 'react';
import { SITE_CONTENT } from '../content';

const VideoTestimonials: React.FC = () => {
  const agentScrollRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const { testimonialsSection } = SITE_CONTENT;

  const scroll = (direction: 'left' | 'right') => {
    if (agentScrollRef.current) {
      const scrollAmount = agentScrollRef.current.clientWidth * 0.8;
      agentScrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="pt-6 md:pt-12 pb-0 bg-transparent overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-2 md:mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-4 md:mb-8">
            <div className="max-w-2xl text-left">
              <h2 className="text-[12px] md:text-[17px] font-bold text-elite-red uppercase tracking-[0.4em] md:tracking-[0.5em] mb-1">{testimonialsSection.badge}</h2>
              <h3 className="text-2xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight lg:leading-[1.3] text-balance">{testimonialsSection.title}</h3>
              <p className="mt-1 text-gray-400 font-medium text-[14px] md:text-base">{testimonialsSection.subtitle}</p>
            </div>
            <div className="hidden md:flex gap-3 mt-4">
              <button onClick={() => scroll('left')} className="w-10 h-10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all text-lg font-light">&larr;</button>
              <button onClick={() => scroll('right')} className="w-10 h-10 bg-elite-red text-white flex items-center justify-center hover:bg-white hover:text-black transition-all text-lg font-light">&rarr;</button>
            </div>
          </div>
          
          <div className="relative fade-edge">
            <div 
              ref={agentScrollRef}
              className="flex gap-8 overflow-x-auto no-scrollbar snap-x pb-4"
            >
              {testimonialsSection.items.map(video => (
                <div key={video.id} className="min-w-[85%] md:min-w-[450px] snap-center group">
                  <div className="relative aspect-video bg-black overflow-hidden border-b-[6px] md:border-b-[8px] border-elite-red shadow-lg">
                    {playingId === video.id ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=0&rel=0&modestbranding=1&showinfo=0&controls=1&enablejsapi=1`}
                        title={video.title}
                        className="absolute inset-0 w-full h-full border-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div 
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => setPlayingId(video.id)}
                      >
                        <img 
                          src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} 
                          alt={video.name} 
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
                          onError={(e) => {
                             (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/0.jpg`;
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-elite-red/90 backdrop-blur-sm flex items-center justify-center rounded-full shadow-2xl transform group-hover:scale-110 transition-all">
                            <div className="w-0 h-0 border-t-[6px] md:border-t-[8px] border-t-transparent border-l-[11px] md:border-l-[14px] border-l-white border-b-[6px] md:border-b-[8px] border-b-transparent ml-1.5"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 md:mt-5 text-left">
                    <h4 className="text-base md:text-lg font-black text-white uppercase tracking-tighter leading-none mb-1.5">{video.title}</h4>
                    <p className="text-gray-400 font-medium mb-2.5 text-[15px] md:text-[14px]">{video.description}</p>
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="h-px w-4 md:w-6 bg-elite-red"></div>
                        <p className="text-white font-black text-[12px] md:text-[13px] uppercase tracking-widest">{video.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
