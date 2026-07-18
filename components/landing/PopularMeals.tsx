import React from "react";
import { ShoppingBag, Flame } from "lucide-react";
import Link from "next/link";

interface Meal {
  id: string;
  title: string;
  price: string;
  image: string;
}

const WHATSAPP_NUMBER = "2349085181295";

export function getWhatsAppOrderLink(productName: string) {
  const message = `Hello Mimi Spicy Offals! 👋

I would like to order *${productName}*.

Please let me know the availability and the total cost.

Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const MEALS: Meal[] = [
  {
    id: "1",
    title: "Peppered Kpomo",
    price: "1,500",
    image: "/assets/kpoms.png",
  },
  {
    id: "2",
    title: "Plantain Pizza",
    price: "7,000",
    image: "/assets/PlantainPizza.png",
  },
  {
    id: "3",
    title: "African Salad (Abacha)",
    price: "15,000",
    image: "/assets/Abacha.png",
  },
  {
    id: "4",
    title: "Jollof Rice and Chicken",
    price: "10,000",
    image: "/assets/JollofRiceAndChiken.png",
  },
  {
    id: "5",
    title: "White Rice and Stew",
    price: "5,000",
    image: "/assets/RiceAndStew.jpg",
  },
  {
    id: "6",
    title: "Spaghetti",
    price: "5,000",
    image: "/assets/spaghetti.png",
  },
];

const PopularMeals = () => {
  return (
    <section id="popularMeals" className="w-full py-24 px-4 md:px-6 relative overflow-hidden warm-glow-gradient">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-accent uppercase flex items-center gap-1.5 mb-2">
            <Flame size={16} className="fill-current text-accent" /> Customer
            Favorites
          </span>
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl font-poppins">
            Popular Meals
          </h2>
          <div className="h-1 bg-accent w-12 rounded-full mt-4 mb-3" />
          <p className="text-muted-foreground text-sm max-w-sm">
            Fresh, delicious, and locally sourced favorites prepared daily with
            love.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {MEALS.map((meal) => (
            <div
              key={meal.id}
              className="group relative h-120 w-full rounded-4xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={meal.image}
                alt={meal.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 z-10">
                <h4 className="text-white font-poppins text-xl font-bold tracking-tight mb-2">
                  {meal.title}
                </h4>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-white font-bold text-lg flex items-center">
                    <span className="text-xs font-medium mr-0.5">₦</span>
                    {meal.price}
                  </span>

                  <Link
                    href={getWhatsAppOrderLink(meal.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Order ${meal.title} now`}
                    className="bg-accent backdrop-blur-md cursor-pointer text-white px-5 py-2.5 rounded-full font-poppins text-xs font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-105 active:scale-95 shrink-0"
                  >
                    <ShoppingBag size={14} className="fill-current" />
                    <span>Order Now</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMeals;
