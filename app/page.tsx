import AboutSection from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PopularMeals from "@/components/PopularMeals";
import WhatOurCustomersSay from "@/components/WhatOurCustomersSay";
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
      <Footer/>
    </div>
  );
};

export default Page;
