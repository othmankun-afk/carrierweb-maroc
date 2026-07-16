"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Fuel, Thermometer, MessageSquare, BarChart3, Settings2 } from "lucide-react";
import { localizePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const meta = [
  { icon: <BarChart3 size={28} />, href: "/solutions/gestion-flotte" },
  { icon: <MapPin size={28} />, href: "/solutions/suivi-gps" },
  { icon: <Fuel size={28} />, href: "/solutions/gestion-carburant" },
  { icon: <Thermometer size={28} />, href: "/solutions/controle-temperature" },
  { icon: <MessageSquare size={28} />, href: "/solutions/communication-chauffeurs" },
  { icon: <Settings2 size={28} />, href: "/solutions/integration" },
];

export default function Services({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.services;
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
      id="services-grid"
      className="relative z-20 py-24 lg:py-32 bg-cw-black"
      aria-label={t.label}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">
          <div className="section-label">{t.label}</div>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-4 font-[family-name:var(--font-jakarta)]">
            {t.titlePre}<span className="gradient-text">{t.titleHl}</span>
          </h2>
          <p className="section-desc mx-auto text-center">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meta.map((service, index) => (
            <Link
              href={localizePath(locale, service.href)}
              key={service.href}
              className={`service-card flex flex-col justify-between transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-cw-red/10 border border-cw-red/20 flex items-center justify-center text-cw-red-light">
                    {service.icon}
                  </div>
                  <span
                    aria-hidden
                    className="text-5xl font-extrabold leading-none text-cw-fg/[0.05] font-[family-name:var(--font-jakarta)] select-none"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-cw-fg font-bold text-lg mb-2.5 font-[family-name:var(--font-jakarta)]">
                  {t.items[index].title}
                </h3>
                <p className="text-cw-gray-400 text-sm leading-relaxed mb-6">
                  {t.items[index].description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-cw-red-light group">
                <span>{t.discover}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
