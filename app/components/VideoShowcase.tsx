"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

// Section vidéo de démonstration de la plateforme.
// Lecture automatique muette en boucle, déclenchée quand la section entre
// dans le viewport (économie de données/batterie tant qu'elle est hors-champ).
export default function VideoShowcase({ dict }: { dict: Dictionary }) {
  const t = dict.videoShowcase;
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // play() peut rejeter (politique autoplay) : on ignore l'erreur.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="video-demo"
      className="relative py-24 lg:py-32 bg-cw-black overflow-hidden"
      aria-label={t.label}
    >
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cw-red/[0.03] rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="section-label justify-center">{t.label}</div>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-4 font-[family-name:var(--font-jakarta)]">
            {t.titlePre}<span className="gradient-text">{t.titleHl}</span>{t.titlePost}
          </h2>
          <p className="text-cw-gray-400 text-sm sm:text-base leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div
          className={`relative transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute inset-0 bg-cw-red/10 rounded-2xl blur-[50px] scale-95 pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-cw-surface">
            <video
              ref={videoRef}
              className="w-full h-auto block"
              src="/carrierweb-demo.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              autoPlay
              aria-label={t.videoAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
