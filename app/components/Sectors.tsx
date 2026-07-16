"use client";

import { useEffect, useRef, useState } from "react";
import {
  Truck,
  Container,
  HardHat,
  Package,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { localizePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const meta = [
  { icon: <Truck size={36} />, href: "/secteurs/transport-routier" },
  { icon: <Container size={36} />, href: "/secteurs/logistique" },
  { icon: <HardHat size={36} />, href: "/secteurs/btp" },
  { icon: <Package size={36} />, href: "/secteurs/distribution" },
];

export default function Sectors({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.sectorsHome;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="secteurs"
      className="relative py-24 lg:py-32 bg-cw-black-deep"
      aria-label={t.label}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cw-red/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">
          <div className="section-label">{t.label}</div>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-4 font-[family-name:var(--font-jakarta)]">
            {t.titlePre}<span className="gradient-text">{t.titleHl}</span>
          </h2>
          <p className="section-desc mx-auto text-center">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {meta.map((sector, index) => (
            <Link
              key={sector.href}
              href={localizePath(locale, sector.href)}
              className={`sector-card group flex flex-col justify-between transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-cw-red/10 border border-cw-red/20 flex items-center justify-center text-cw-red-light mx-auto mb-6 group-hover:bg-cw-red group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {sector.icon}
                </div>

                <h3 className="text-cw-fg font-bold text-base mb-3 font-[family-name:var(--font-jakarta)] group-hover:text-cw-red-light transition-colors">
                  {t.items[index].title}
                </h3>

                <p className="text-cw-gray-400 text-xs leading-relaxed mb-6">
                  {t.items[index].desc}
                </p>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-cw-gray-500 text-xs font-semibold group-hover:text-cw-red-light transition-colors">
                <span>{t.discover}</span>
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
