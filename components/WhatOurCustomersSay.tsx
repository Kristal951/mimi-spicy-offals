import React from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  handle: string;
  rating: number;
  comment: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Chioma Nwachukwu",
    handle: "@chi_eats_local",
    rating: 5,
    comment:
      "The Peppered Kpomo is exactly how it should be—spicy, tender, and incredibly flavorful! It arrived piping hot and tasted like a proper home-cooked delicacy.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "2",
    name: "Tunde Bakare",
    handle: "@tunde_foodie",
    rating: 5,
    comment:
      "I was skeptical about Plantain Pizza at first, but it is an absolute masterpiece! Perfect balance of sweet and savory. Delivery was incredibly fast too—under 25 minutes.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "3",
    name: "Amara Okafor",
    handle: "@amara_bakes",
    rating: 5,
    comment:
      "Finding authentic, fresh Abacha online is rare, but their African Salad is stellar. The ugba and fish accompaniments were fresh and handled with distinct hygiene.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
  },
];

const WhatOurCustomersSay = () => {
  return (
    <section className="w-full px-6 md:px-12 py-24 warm-glow-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-full flex flex-col gap-3 items-center justify-center">
            <span className="text-sm font-semibold tracking-wider text-accent uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl font-poppins">
              What Our Customers Say
            </h2>
            <span className="h-1 bg-accent w-12 rounded-full mt-1" />
          </div>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm">
            Don't just take our word for it. Hear from our amazing community of
            food lovers who order daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative p-8 flex flex-col justify-between rounded-4xl bg-card border border-border shadow-md hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="absolute top-6 right-8 text-accent/10 group-hover:text-accent/20 transition-colors duration-300">
                <Quote size={56} className="fill-current" />
              </div>

              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>

                <p className="text-base text-muted-foreground leading-relaxed italic mb-8 relative z-10">
                  "{testimonial.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent/10 group-hover:border-accent/30 transition-colors duration-300"
                />
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <span className="text-xs text-muted-foreground">
                    {testimonial.handle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatOurCustomersSay;
