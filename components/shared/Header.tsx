"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = pathname === "/";
  const isInMenuPage = pathname === "/menu";

  console.log(pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white border-b border-neutral-100 shadow-sm py-0"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/assets/mimi-spicy-offals_transparent.svg"
            alt="Logo"
            width={64}
            height={64}
            priority
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  active
                    ? "text-[#E05A36]"
                    : isScrolled
                      ? `${isHome ? "text-foreground" : "text-neutral-700"} hover:text-[#E05A36]`
                      : `${isHome ? "text-white/90" : "text-foreground"} hover:text-[#E05A36]`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {!isInMenuPage && (
            <Link
              href="/"
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                isScrolled
                  ? `bg-accent text-white hover:bg-[#c74a2b]`
                  : `${isHome ? "bg-white" : "bg-accent"} text-[#0F1115] hover:bg-white/90 shadow-md`
              }`}
            >
              Order Now
            </Link>
          )}
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`md:hidden p-2 rounded-xl transition-colors ${
            isScrolled
              ? "text-neutral-800 hover:bg-neutral-100"
              : `${isHome ? 'text-white' : 'text-foreground' } hover:bg-white/10`
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-4 py-6 flex flex-col gap-1 shadow-xl animate-fade-in">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium px-4 py-3 rounded-xl transition-colors ${
                  active
                    ? "bg-[#E05A36]/10 text-[#E05A36]"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-[#0F1115]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {!isInMenuPage && (
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-neutral-100">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3 bg-[#E05A36] text-white font-semibold text-sm rounded-full hover:bg-[#c74a2b] transition-colors"
              >
                Order Now
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
