"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, Bell, FileText } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

const featureIcons = [<Eye key="e" size={16} />, <Bell key="b" size={16} />, <FileText key="f" size={16} />];

export default function DashboardPreview({ dict }: { dict: Dictionary }) {
  const t = dict.dashboard;
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

  const kpis = [
    { label: t.kpiLabels[0], val: "48/50", accent: "text-cw-green" },
    { label: t.kpiLabels[1], val: "2", accent: "text-cw-amber" },
    { label: t.kpiLabels[2], val: "OK", accent: "text-cw-green" },
  ];

  return (
    <section
      ref={sectionRef}
      id="tableau-de-bord"
      className="relative py-24 lg:py-32 bg-cw-black-deep overflow-hidden"
      aria-label={t.label}
    >
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cw-red/[0.02] rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div
            className={`lg:col-span-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="section-label">{t.label}</div>
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-4 font-[family-name:var(--font-jakarta)]">
              {t.titlePre}<span className="gradient-text">{t.titleHl}</span>
            </h2>
            <p className="text-cw-gray-400 text-sm leading-relaxed mb-8">
              {t.desc}
            </p>

            <div className="space-y-6">
              {t.features.map((feature, index) => (
                <div
                  key={feature.text}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-cw-red/10 border border-cw-red/20 flex items-center justify-center flex-shrink-0 text-cw-red-light">
                    {featureIcons[index]}
                  </div>
                  <div>
                    <h4 className="text-cw-fg font-bold text-sm mb-1 font-[family-name:var(--font-jakarta)]">
                      {feature.text}
                    </h4>
                    <p className="text-cw-gray-400 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`lg:col-span-7 relative transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-cw-red/10 rounded-2xl blur-[40px] scale-95" />

            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-cw-surface p-3">
              <div className="flex items-center gap-1.5 border-b border-white/[0.04] pb-3 mb-3 px-1" dir="ltr">
                <span className="w-2.5 h-2.5 rounded-full bg-cw-red/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-cw-amber/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-cw-green/40" />
                <span className="text-[10px] text-cw-gray-600 ml-2 font-medium">https://portal.carrierweb.ma</span>
              </div>
              <div className="bg-cw-black/80 rounded-xl overflow-hidden h-[360px] relative p-3 flex flex-col gap-3">
                <div className="grid grid-cols-3 gap-2.5">
                  {kpis.map((kpi) => (
                    <div key={kpi.label} className="bg-cw-surface-2 border border-white/[0.05] rounded-lg px-3 py-2.5">
                      <div className={`text-lg font-black font-[family-name:var(--font-jakarta)] ${kpi.accent}`}>
                        {kpi.val}
                      </div>
                      <div className="text-[9px] text-cw-gray-500 uppercase tracking-wide">
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative flex-1 bg-cw-surface rounded-lg border border-white/[0.05] overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-60" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden>
                    <path
                      d="M 20 170 Q 120 120 200 130 T 380 40"
                      fill="none"
                      stroke="rgba(191, 32, 38, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="6 5"
                    />
                  </svg>
                  {[
                    { top: "78%", left: "6%" },
                    { top: "58%", left: "38%" },
                    { top: "60%", left: "62%" },
                    { top: "16%", left: "92%" },
                  ].map((pos, i) => (
                    <span key={i} className="pulse-dot absolute" style={{ top: pos.top, left: pos.left }} />
                  ))}
                  <div className="absolute top-[42%] left-[38%] -translate-x-1/2 bg-cw-black/90 border border-cw-red/30 rounded-md px-2 py-1 text-[9px] text-cw-fg font-medium shadow-lg">
                    {t.vehicleTag}
                    <span className="block text-cw-gray-500">{t.vehicleRoute}</span>
                  </div>
                  <div className="absolute bottom-2 right-2.5 text-[8px] text-cw-gray-600 uppercase tracking-wider">
                    {t.demoData}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-cw-red text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg font-[family-name:var(--font-jakarta)]">
              {t.badge}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
