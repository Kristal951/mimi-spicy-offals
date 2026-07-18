import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SocialIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Footer = () => {
  const SOCIAL_ICONS = [
    {
      label: "Instagram",
      icon: ({ size = 24, ...props }: SocialIconProps) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={size}
          height={size}
          {...props}
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      label: "TikTok",
      icon: ({ size = 24, ...props }: SocialIconProps) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={size}
          height={size}
          {...props}
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      icon: ({ size = 24, ...props }: SocialIconProps) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={size}
          height={size}
          {...props}
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: "Gmail",
      icon: ({ size = 24, ...props }: SocialIconProps) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={size}
          height={size}
          {...props}
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-10 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/assets/mimi-spicy-offals_transparent.svg"
                alt="Logo"
                width={64}
                height={64}
                priority
                className="object-cover"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Crafting delicious, wholesome dishes with top-tier local
              ingredients. Delivering fresh culinary joy straight to your
              kitchen table.
            </p>

            <div className="flex gap-4 mt-2">
              {SOCIAL_ICONS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href={
                    label === "Whatsaap"
                      ? "https://wa.me/2349085181295"
                      : label === "Gmail"
                        ? "mailto:Mchidimma439@gmail.com"
                        : ""
                  }
                  aria-label={label}
                  className="p-2.5 rounded-xl bg-secondary/15 text-muted-foreground hover:bg-accent hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {["Our Menu", "Features", "What They Say"].map((link) => (
                <li key={link}>
                  <a
                    href={
                      link === "Our Menu"
                        ? "/menu"
                        : link === "Features"
                          ? "#features"
                          : "#reviews"
                    }
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="text-accent shrink-0" />
                <span>Abuja, Nigeria.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-accent shrink-0" />
                <a
                  href="tel:+1555123456"
                  className="hover:text-accent transition-colors"
                >
                  +234 908 518 1295
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-accent shrink-0" />
                <a
                  href="mailto:Mchidimma439@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  Mchidimma439@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
