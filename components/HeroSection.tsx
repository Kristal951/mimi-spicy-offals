import React from "react";
import { ArrowRight, Flame } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex w-full items-center overflow-hidden h-screen bg-[#140806]">
      <img
        src="/assets/kpoms.png"
        alt="Delicious Peppered Kpomo"
        className="w-full h-full object-cover object-center absolute inset-0 select-none pointer-events-none"
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(20,8,6,0.95) 0%, rgba(20,8,6,0.85) 35%, rgba(20,8,6,0.4) 65%, rgba(20,8,6,0.1) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 z-20 flex flex-col items-start justify-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#E05A36]/10 text-[#E05A36] text-xs font-bold tracking-wider uppercase mb-6 animate-fade-in backdrop-blur-md border border-[#E05A36]/20">
          <Flame size={14} className="fill-current" />
          Mimi Spicy Offals
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-serif font-medium text-white leading-[1.1] tracking-tight mb-6 max-w-2xl">
          Boldly Crafted. <br />
          <span className="text-[#E05A36]">Perfectly Spiced.</span> <br />
          Unforgettable.
        </h1>

        <p className="text-base sm:text-lg text-neutral-300/90 leading-relaxed mb-10 max-w-lg font-light">
          We don’t do boring food. Experience high-intensity, deeply savory local 
          delicacies slow-simmered in our signature pepper blends for a true flavor explosion.
        </p>

        <div className="flex flex-wrap items-center gap-5 sm:gap-6 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#E05A36] text-white font-semibold text-sm hover:bg-[#c74a2b] shadow-lg shadow-[#E05A36]/20 hover:shadow-[#E05A36]/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Menu
          </a>
          
          <a
            href="#story"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 font-bold text-sm text-white hover:text-[#E05A36] transition-colors duration-200 py-3"
          >
            Our Story
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none select-none">
        <span className="text-[10px] uppercase font-bold text-white/50 tracking-[0.2em]">
          Scroll Down
        </span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-[#E05A36] rounded-full animate-bounce" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;