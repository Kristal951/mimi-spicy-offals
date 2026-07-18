import React from "react";
import Image from "next/image";
import { UtensilsCrossed, Leaf, Play, Award, ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-background py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        <div className="lg:col-span-6 relative w-full max-w-lg lg:max-w-xl mx-auto aspect-4/4 sm:aspect-4/3.5 lg:aspect-square">
          <div className="absolute top-0 left-0 w-[68%] aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-black/5 group cursor-pointer z-10">
            <Image
              src="/assets/flyer.jpg"
              alt="Delicious Spicy Peppered Kpomo Pack"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-w-786px) 70vw, 40vw"
            />
          </div>

          <div className="absolute bottom-0 right-0 w-[60%] aspect-4/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF9F6] z-20">
            <Image
              src="/assets/mimi.jpg"
              alt="Mimi Spicy Offals Brand Identity"
              fill
              className="object-cover"
              sizes="(max-w-786px) 60vw, 35vw"
            />
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-start lg:pl-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E05A36]/10 text-[#E05A36] text-xs font-bold tracking-wider uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05A36]" />
            Our Story
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-serif font-medium text-[#0F1115] leading-[1.15] tracking-tight mb-6">
            Enjoy Your Finest <br className="hidden sm:inline" />
            <span className="text-[#E05A36]">Spicy Moments</span> <br />
            With Mimi
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
            We believe that exceptional food requires bold choices. Since our
            founding, Mimi Spicy Offals has been elevating traditional
            delicacies into extraordinary culinary experiences, marrying
            perfectly balanced heat with slow-cooked perfection.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mb-10">
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col items-start">
              <div className="p-2.5 bg-[#E05A36]/10 text-accent rounded-xl mb-4">
                <UtensilsCrossed size={20} />
              </div>
              <h4 className="text-base font-bold text-[#0F1115] mb-1.5">
                Signature Spice
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Slow-simmered in our secret house blend of aromatic peppers and
                rich traditional spices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col items-start">
              <div className="p-2.5 bg-[#E05A36]/10 text-accent rounded-xl mb-4">
                <Leaf size={20} />
              </div>
              <h4 className="text-base font-bold text-[#0F1115] mb-1.5">
                100% Fresh Daily
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Premium, meticulously cleaned offals sourced fresh every morning
                for the ultimate taste.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#chefs"
              className="group flex items-center gap-2 font-bold text-sm text-accent hover:text-accent/90 transition-colors duration-200"
            >
              Explore Menu
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
