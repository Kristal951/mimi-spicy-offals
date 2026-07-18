import React from "react";
import { Leaf, Bike, Wallet, ShieldCheck, LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: string;
}

const FEATURES: Feature[] = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Sourced daily, never frozen. What you taste is what was picked this morning.",
    colorClass: "text-emerald-600 dark:text-emerald-400"
  },
  {
    icon: Bike,
    title: "Fast Delivery",
    description: "Hot food, quick hands. Most orders reach your door in under 30 minutes.",
    colorClass: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: Wallet,
    title: "Affordable Prices",
    description: "Good food shouldn't cost a fortune. Honest pricing on every plate.",
    colorClass: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic & Safe",
    description: "Every kitchen inspected, every dish handled with care from prep to pack.",
    colorClass: "text-rose-600 dark:text-rose-400",
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full py-5 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map(({ icon: Icon, title, description, colorClass }) => (
            <div
              key={title}
              className="group relative p-4 flex items-start transition-all duration-300"
            >
              <div className={`p-4 rounded-xl mb-6 transition-colors duration-300`}>
                <Icon className={`${colorClass}`} size={30} strokeWidth={2} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;