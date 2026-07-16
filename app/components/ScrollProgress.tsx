"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Barre de progression de lecture (haut de page) + bouton « retour en haut ».
 * Nudges d'engagement : la barre incite à faire défiler tout le contenu
 * (meilleur temps passé), le bouton facilite la ré-exploration sans quitter.
 * Passif, throttlé via requestAnimationFrame, respecte prefers-reduced-motion
 * pour le scroll fluide.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      const pct = scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0;
      setProgress(pct);
      setShowTop(el.scrollTop > 600);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Barre de progression — au-dessus du header */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none"
        aria-hidden
      >
        <div
          className="h-full bg-gradient-to-r from-cw-red to-cw-red-light transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Retour en haut */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Retour en haut de la page"
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-cw-red text-white shadow-lg shadow-cw-red/30 flex items-center justify-center transition-all duration-300 hover:bg-cw-red-dark ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} aria-hidden />
      </button>
    </>
  );
}
