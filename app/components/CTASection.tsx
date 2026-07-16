"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { localizePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function CTASection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.cta;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-24 lg:py-32 overflow-hidden bg-cw-black-deep"
      aria-label={t.label}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cw-red/[0.04] via-cw-black to-cw-red/[0.04]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cw-red/20 to-transparent" />

      <div
        className={`relative max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="section-label mx-auto w-fit mb-6">
          {t.label}
        </div>

        <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6 font-[family-name:var(--font-jakarta)]">
          {t.titlePre}<span className="gradient-text">{t.titleHl}</span>
        </h2>

        <p className="section-desc mx-auto text-center mb-10 text-cw-gray-400">
          {t.desc}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href={localizePath(locale, "/contact")} className="cta-primary text-base px-8 py-4">
            <span className="flex items-center gap-2">
              {t.button}
              <ArrowRight size={18} />
            </span>
          </Link>
          <a href="tel:+212522361988" className="cta-secondary text-base px-8 py-4" dir="ltr">
            <Phone size={16} className="text-cw-red-light" />
            <span>+212 (0)5 22 36 19 88</span>
          </a>
        </div>
      </div>
    </section>
  );
}
