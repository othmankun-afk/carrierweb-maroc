"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Clock, TrendingDown, BarChart3, ArrowRight } from "lucide-react";
import { localizePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const featureIcons = [<Clock key="c" size={28} />, <TrendingDown key="t" size={28} />, <BarChart3 key="b" size={28} />];

export default function WhyCarrierWeb({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.why;
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
      id="pourquoi-carrierweb"
      className="relative py-24 lg:py-32 bg-cw-black overflow-hidden"
      aria-label={t.label}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-7 space-y-6">
            <div className="section-label">{t.label}</div>
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)]">
              {t.titlePre}<span className="gradient-text">{t.titleHl}</span>
            </h2>
            <p className="text-cw-gray-400 text-base leading-relaxed">
              {t.paragraph}
            </p>

            <div className="space-y-6 mt-8">
              {t.features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cw-red/10 border border-cw-red/20 flex items-center justify-center text-cw-red-light flex-shrink-0">
                    {featureIcons[idx]}
                  </div>
                  <div>
                    <h3 className="text-cw-fg font-semibold text-base font-[family-name:var(--font-jakarta)] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-cw-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={localizePath(locale, "/pourquoi-carrierweb")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cw-red-light hover:text-cw-fg transition-colors mt-2 group"
            >
              {t.link}
              <ArrowRight size={15} aria-hidden className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className={`lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            {t.metrics.map((metric, i) => (
              <div key={i} className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 hover:border-cw-red/30 transition-all group">
                <div className="text-3xl font-black text-cw-red-light font-[family-name:var(--font-jakarta)] mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {metric.val}
                </div>
                <div className="text-sm font-bold text-cw-fg mb-1.5 font-[family-name:var(--font-jakarta)]">
                  {metric.label}
                </div>
                <div className="text-xs text-cw-gray-500 leading-relaxed">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
