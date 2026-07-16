"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export default function FAQSection({ dict }: { dict: Dictionary }) {
  const t = dict.homeFaq;
  const faqs = t.items;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-cw-black overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">
          <div className="section-label">{t.label}</div>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-4 font-[family-name:var(--font-jakarta)]">
            {t.titlePre}<span className="gradient-text">{t.titleHl}</span>
          </h2>
          <p className="section-desc mx-auto text-center">{t.desc}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item border transition-all ${
                  isOpen ? "border-cw-red/30 bg-cw-red/[0.01]" : "border-white/[0.04] bg-cw-surface"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-cw-fg pr-4 font-[family-name:var(--font-jakarta)] flex items-center gap-3">
                    <HelpCircle size={18} className="text-cw-red-light flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-cw-red-light flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-white/[0.04] py-5 px-6" : "max-h-0"
                  }`}
                >
                  <p className="text-cw-gray-400 text-xs sm:text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
