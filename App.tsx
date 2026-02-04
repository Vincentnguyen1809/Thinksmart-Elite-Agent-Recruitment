
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import Steps from './components/Steps';
import VideoTestimonials from './components/VideoTestimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { SITE_CONTENT } from './content';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const { brand, partners, benefitsSection, opportunitySection, faqSection, tracking } = SITE_CONTENT;

  // Handle Tracking Scripts Injection
  useEffect(() => {
    if (tracking.headScripts) {
      const fragment = document.createRange().createContextualFragment(tracking.headScripts);
      document.head.appendChild(fragment);
    }
    if (tracking.bodyScripts) {
      const fragment = document.createRange().createContextualFragment(tracking.bodyScripts);
      document.body.appendChild(fragment);
    }
  }, [tracking]);

  // Double the partners for seamless marquee on mobile
  const displayPartners = [...partners, ...partners];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-lg z-50 border-b border-white/10 py-3 px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src={brand.logo} 
              alt={`${brand.name} Logo`} 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>
        </div>
        
        <button 
          onClick={() => setShowForm(true)}
          className="bg-elite-red hover:bg-white hover:text-black text-white px-4 md:px-8 py-2.5 md:py-3.5 rounded-sm font-black text-[12px] md:text-[18px] uppercase tracking-normal md:tracking-widest transition-all italic shadow-lg whitespace-nowrap"
        >
          {brand.applyButtonText}
        </button>
      </nav>

      <main className="pt-[58px] md:pt-[65px]">
        <Hero onApplyClick={() => setShowForm(true)} />
        
        <Stats />
        
        <section id="benefits" className="py-6 md:py-12 bg-white relative border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-6 md:mb-8 max-w-3xl mx-auto">
              <h2 className="text-[12px] md:text-[17px] font-black text-elite-red uppercase tracking-[0.6em] mb-1 italic">{benefitsSection.badge}</h2>
              <h3 className="text-2xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter uppercase leading-tight lg:leading-[1.3] italic text-balance">{benefitsSection.title}</h3>
              <div className="mt-2 md:mt-4 w-16 md:w-20 h-1.5 bg-elite-red mx-auto"></div>
            </div>
            <Benefits />
          </div>
        </section>

        <Steps onApplyClick={() => setShowForm(true)} />

        <div className="bg-black text-center">
            <VideoTestimonials />
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-6 md:mt-10">
            <div className="h-[2px] w-full bg-white/25"></div>
        </div>

        {/* Final Conversion Section */}
        <section className="py-6 md:py-12 bg-black text-center relative overflow-hidden border-b border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-900/10 blur-[120px] rounded-full opacity-30 -z-10"></div>
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-elite-red font-medium text-[12px] md:text-[17px] uppercase tracking-[0.5em] md:tracking-[0.6em] mb-2 md:mb-4 italic">{opportunitySection.badge}</h2>
                <h3 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 tracking-tighter text-white leading-tight lg:leading-[1.3] uppercase italic text-balance">
                    {opportunitySection.title}
                </h3>
                <div className="max-w-4xl mx-auto">
                    <p className="text-base md:text-xl text-white font-medium leading-snug md:leading-tight mb-6 md:mb-10 italic uppercase tracking-tighter text-balance">
                        {opportunitySection.description.split(opportunitySection.highlightText)[0]} 
                        <span className="text-elite-red font-black underline decoration-elite-red decoration-4 underline-offset-8 uppercase">
                          {opportunitySection.highlightText}
                        </span> 
                        {opportunitySection.description.split(opportunitySection.highlightText)[1]}
                    </p>
                    
                    <div className="relative overflow-hidden fade-edge py-2 md:py-4">
                      <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-12 items-center justify-start md:justify-center animate-stats-marquee md:animate-marquee-slow md:animate-none whitespace-nowrap">
                          {displayPartners.map((partner, idx) => (
                            <div 
                              key={idx} 
                              className={`flex-shrink-0 w-[30%] md:w-full flex flex-col items-center group px-2 ${idx >= partners.length ? 'md:hidden' : ''}`}
                            >
                                <div className="h-16 md:h-24 w-full flex items-center justify-center mb-2 transition-transform duration-500 group-hover:scale-110">
                                    <img 
                                      src={partner.logo} 
                                      alt={partner.name} 
                                      className="max-h-full max-w-full object-contain filter brightness-110" 
                                    />
                                </div>
                                <span className={`text-white font-black text-[7px] md:text-[11px] italic uppercase tracking-[0.1em] md:tracking-widest border-t ${partner.border} pt-1 md:pt-2 px-1 md:px-4 whitespace-nowrap opacity-80 group-hover:opacity-100`}>
                                  {partner.name}
                                </span>
                            </div>
                          ))}
                      </div>
                    </div>
                </div>

                <div className="mt-8 md:mt-16 px-6 flex flex-col items-center relative z-10">
                    <button 
                        onClick={() => setShowForm(true)}
                        className="w-full md:w-auto bg-elite-red hover:bg-white hover:text-black text-white px-6 md:px-12 py-4 md:py-5 rounded-sm font-black text-[13px] sm:text-[15px] md:text-lg uppercase tracking-wide md:tracking-widest transition-all shadow-[0_15px_40px_rgba(220,38,38,0.4)] italic mb-3 flex items-center justify-center text-center whitespace-nowrap mx-auto"
                    >
                        ỨNG TUYỂN NGAY ELITE AGENT
                    </button>
                    <p className="text-white text-[13px] md:text-[17px] font-bold uppercase tracking-tight">{opportunitySection.subNote}</p>
                </div>
            </div>
        </section>

        <section id="faq" className="py-8 md:py-16 bg-white text-black">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-[12px] md:text-[17px] font-bold text-elite-red uppercase tracking-[0.6em] mb-1 italic">{faqSection.badge}</h2>
              <h3 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-tight lg:leading-[1.3] italic">{faqSection.title}</h3>
            </div>
            <FAQ />
          </div>
        </section>

        <section className="pb-10 md:pb-16 bg-white text-center">
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
                <button 
                  onClick={() => setShowForm(true)}
                  className="w-full md:w-auto bg-elite-red hover:bg-black text-white px-6 md:px-16 py-5 md:py-6 rounded-sm font-black text-[13px] sm:text-[15px] md:text-xl shadow-[0_20px_50px_rgba(220,38,38,0.3)] transition-all transform hover:scale-105 uppercase tracking-wide md:tracking-widest italic mb-4 flex items-center justify-center text-center whitespace-nowrap mx-auto"
                >
                  ỨNG TUYỂN NGAY ELITE AGENT
                </button>
                <p className="text-black text-[13px] md:text-[17px] font-bold uppercase tracking-tight italic opacity-60">{opportunitySection.subNote}</p>
            </div>
        </section>

        {showForm && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4 bg-black/98 backdrop-blur-2xl">
            <div className="bg-white w-full h-full md:max-w-4xl md:h-[880px] md:max-h-[95vh] relative border-t-[10px] border-elite-red shadow-[0_0_100px_rgba(220,38,38,0.3)] flex flex-col overflow-hidden">
              <button 
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-4 text-gray-400 hover:text-black text-4xl font-light leading-none z-[70] transition-transform hover:rotate-90 p-2"
                aria-label="Close"
              >
                &times;
              </button>
              <div className="flex-1 w-full h-full">
                <iframe 
                  src={brand.formUrl}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  title="Elite Agent Booking"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
