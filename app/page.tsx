import AboutSection from "@/components/landing/About";
import Features from "@/components/landing/Features";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/landing/HeroSection";
import PopularMeals from "@/components/landing/PopularMeals";
import WhatOurCustomersSay from "@/components/landing/WhatOurCustomersSay";
import { ArrowRight } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col">
      <HeroSection/>
      <Features />
      <PopularMeals/>
      <AboutSection/>
      <WhatOurCustomersSay/>
    </div>
  );
};

export default Page;
