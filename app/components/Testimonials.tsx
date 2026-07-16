"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import type { TestimonialItem } from "@/lib/wordpress";

/* Témoignages anonymisés (fonction + secteur, sans nom de personne ni
   d'entreprise). En FR, le contenu peut venir de WordPress (CPT `temoignage`,
   passé en prop `items`) ; sinon il retombe sur le dictionnaire
   (dict.testimonials.items), qui reste la source traduisible AR / EN. */

export default function Testimonials({
  dict,
  items,
}: {
  dict: Dictionary;
  items?: TestimonialItem[];
}) {
  const t = dict.testimonials;
  const testimonials = items && items.length ? items : t.items;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-cw-black overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <div className="section-label">{t.label}</div>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-jakarta)]">
            {t.titlePre}<span className="gradient-text">{t.titleHl}</span>
          </h2>
          <p className="text-cw-gray-500 text-xs mt-4">
            {t.note}
          </p>
        </div>

        <div className="relative bg-cw-surface border border-white/[0.04] rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-6 right-8 text-cw-red-light/[0.06] pointer-events-none">
            <Quote size={120} aria-hidden />
          </div>

          <div className="min-h-[160px] flex flex-col justify-between relative z-10">
            <p className="text-cw-gray-300 text-base sm:text-lg font-medium leading-relaxed italic mb-8">
              « {testimonials[current].quote} »
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-cw-fg font-bold text-base font-[family-name:var(--font-jakarta)]">
                  {testimonials[current].author}
                </div>
                <div className="text-cw-red-light text-xs font-medium mt-0.5">
                  {testimonials[current].role} — <span className="text-cw-gray-500">{testimonials[current].company}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl bg-cw-black border border-white/[0.04] hover:border-cw-red hover:text-cw-red-light flex items-center justify-center text-cw-fg transition-all"
                  aria-label={t.prevAria}
                >
                  <ChevronLeft size={18} aria-hidden />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl bg-cw-black border border-white/[0.04] hover:border-cw-red hover:text-cw-red-light flex items-center justify-center text-cw-fg transition-all"
                  aria-label={t.nextAria}
                >
                  <ChevronRight size={18} aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current ? "bg-cw-red w-6" : "bg-cw-slate-700 w-2"
              }`}
              aria-label={`${t.goToAria} ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
