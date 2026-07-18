"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const WHATSAPP_NUMBER = "2349085181295";

export function getWhatsAppOrderLink(productName: string) {
  const message = `Hello Mimi Spicy Offals! 👋

    I would like to order *${productName}*.

    Please let me know the availability and the total cost.

    Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const MENU_ITEMS = [
  {
    id: "m1",
    name: "Peppered Kpomo",
    description:
      "Tender, bite-sized cow skin slow-simmered in our signature fiery, aromatic pepper sauce.",
    price: 1500,
    category: "offals",
    image: "/assets/kpoms.png",
  },
  {
    id: "m2",
    name: "Party Jollof Rice & Chicken",
    description:
      "Classic Nigerian party-style smoky Jollof rice served alongside tender, well-seasoned fried chicken.",
    price: 10000,
    category: "meals",
    image: "/assets/JollofRiceAndChiken.png",
  },
  //   {
  //     id: "m3",
  //     name: "Party Jollof Rice & Beef",
  //     description: "Rich, aromatic smoky Jollof rice paired with deeply marinated, flame-grilled peppered beef chunks.",
  //     price: 9000,
  //     category: "meals",
  //     image: "/assets/JollofRiceAndBeef.png",
  //   },
  //   {
  //     id: "m4",
  //     name: "Signature Fried Rice",
  //     description: "Savory, stir-fried rice loaded with sweet liver cubes, crisp garden vegetables, and local spices.",
  //     price: 8500,
  //     category: "meals",
  //     image: "/assets/FriedRice.png",
  //   },
  {
    id: "m5",
    name: "Jollof Spaghetti",
    description:
      "Richly infused, spicy pan-tossed pasta cooked down in a savory, concentrated tomato and pepper base.",
    price: 5000,
    category: "meals",
    image: "/assets/spaghetti.png",
  },
  {
    id: "m6",
    name: "White Rice and Stew",
    description:
      "Fluffy parboiled white rice paired with a rich, deeply fried local tomato and bell pepper designer stew.",
    price: 5000,
    category: "meals",
    image: "/assets/RiceAndStew.jpg",
  },
  {
    id: "m7",
    name: "African Salad (Abacha)",
    description:
      "Traditional cassava flakes tossed in warm palm oil, processed potash, ugba, garden eggs, and dried fish.",
    price: 15000,
    category: "combos",
    image: "/assets/Abacha.png",
  },
  {
    id: "m8",
    name: "Plantain Pizza",
    description:
      "A gorgeous baked arrangement of sweet, golden dodo coins bound with seasoned eggs and minced meat toppings.",
    price: 7500,
    category: "combos",
    image: "/assets/PlantainPizza.png",
  },
  //   {
  //     id: "m9",
  //     name: "Traditional Nkwobi",
  //     description: "Tender, perfectly chopped cow foot gelatin chunks immersed in a rich, spiced palm oil local utazi paste.",
  //     price: 6500,
  //     category: "offals",
  //     image: "/assets/Nkwobi.png",
  //   },
  //   {
  //     id: "m10",
  //     name: "Fiery Peppered Soup",
  //     description: "An intense, light aromatic broth heavily seasoned with local spices, ehu, and assortments.",
  //     price: 4500,
  //     category: "soups",
  //     image: "/assets/PepperedSoup.png",
  //   },
  {
    id: "m11",
    name: "Egusi Soup & Semo",
    description:
      "Rich, nutty ground melon seed soup cooked down with spinach and palm oil, paired with smooth cooked Semolina.",
    price: 7000,
    category: "soups",
    image: "/assets/EgusiSoup.png",
  },
  //   {
  //     id: "m12",
  //     name: "Oha Soup & Swallow",
  //     description: "Traditional Eastern soup thickened with cocoyam paste, flavored with ogiri, and finished with fresh shredded Oha leaves.",
  //     price: 8000,
  //     category: "soups",
  //     image: "/assets/OhaSoup.png",
  //   },
  //   {
  //     id: "m13",
  //     name: "Vegetable Soup (Edikang Ikong)",
  //     description: "A nutrient-packed, luxurious blend of fresh water leaves and fluted pumpkin ugu leaves cooked with rich local proteins.",
  //     price: 8500,
  //     category: "soups",
  //     image: "/assets/VegetableSoup.png",
  //   },
  //   {
  //     id: "m14",
  //     name: "Ogbono Soup & Swallow",
  //     description: "A beautifully viscous draw soup cooked with wild African bush mango seeds, stockfish, and local palm oil layers.",
  //     price: 7500,
  //     category: "soups",
  //     image: "/assets/OgbonoSoup.png",
  //   },
  {
    id: "m15",
    name: "Gourmet Peppered Meat",
    description:
      "Hard-boiled beef cuts deeply fried and tossed in a high-intensity, sweet and spicy habanero bell pepper reduction.",
    price: 2500,
    category: "sides",
    image: "/assets/PepperedMeat.png",
  },
  {
    id: "m16",
    name: "Peppered Chicken",
    description:
      "Crispy golden fried chicken portions fully glazed in a sticky, sweet-heat local pepper sauce blend.",
    price: 7500,
    category: "sides",
    image: "/assets/PepperedChicken.png",
  },
];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "meals", label: "Main Dishes & Rice" },
  { id: "offals", label: "Peppered Offals" },
  { id: "soups", label: "Soups & Swallows" },
  { id: "combos", label: "Combo Packs" },
  { id: "sides", label: "Sides & Extras" },
];

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="w-full min-h-screen bg-background pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
            Our Spicy <span className="text-accent">Menu</span>
          </h1>
          <p className="text-neutral-600 font-light text-sm md:text-base">
            Handpicked local delicacies, slow-cooked to perfection and packed
            with premium peppered heat. Find your perfect fix below.
          </p>
        </div>

        <div className="w-full flex flex-col xl:flex-row gap-4 items-center justify-between mb-10 bg-white p-4 rounded-2xl border border-neutral-100 shadow-sm">
          <div className="relative w-full xl:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="text"
              placeholder="Search for rice, swallows, peppered treats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-xl text-sm text-[#140806] placeholder-neutral-400 focus:outline-none focus:border-[#E05A36] focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full xl:w-auto scrollbar-hide pb-1 xl:pb-0">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === category.id
                    ? "bg-accent text-white shadow-md shadow-[#E05A36]/20"
                    : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {filteredItems.length === 0 && (
          <div className="w-full text-center py-20 bg-white rounded-3xl border border-dashed border-neutral-200">
            <p className="text-neutral-500 font-medium mb-2">
              No spicy treats found matching your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="text-xs font-bold text-accent underline uppercase tracking-wider cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative w-full aspect-4/3 bg-neutral-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col grow justify-between">
                <div className="flex items-start flex-col gap-1.5">
                  <h3 className="font-serif font-medium text-lg text-[#140806] transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                  <span className="text-sm font-bold text-accent shrink-0">
                    ₦{item.price.toLocaleString()}
                  </span>
                </div>

                <p className="text-xs text-neutral-500 font-light mt-2 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                <Link
                  href={getWhatsAppOrderLink(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 cursor-pointer w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 hover:bg-opacity-90"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MenuPage;
