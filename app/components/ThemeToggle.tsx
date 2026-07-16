"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

/**
 * Bascule clair/sombre. Le thème initial est posé AVANT hydratation par le
 * script inline de app/layout.tsx (data-theme sur <html>) pour éviter tout
 * flash. Ce composant lit cet état, l'affiche, et le persiste dans
 * localStorage sous la clé "cw-theme".
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Sync au montage avec le thème posé par le script inline du layout
    // (valeur inconnue au SSR, d'où la lecture DOM ici).
    /* eslint-disable react-hooks/set-state-in-effect */
    const current = (document.documentElement.dataset.theme as Theme) || "dark";
    setTheme(current);
    setMounted(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("cw-theme", next);
    } catch {
      /* stockage indisponible (navigation privée) — on continue sans persister */
    }
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      // Avant le montage, on neutralise l'icône pour éviter un mismatch SSR
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      title={isDark ? "Thème clair" : "Thème sombre"}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/[0.08] text-cw-gray-300 hover:text-cw-fg hover:border-cw-red/40 transition-colors ${className}`}
    >
      {mounted && isDark ? (
        <Sun size={18} aria-hidden />
      ) : (
        <Moon size={18} aria-hidden />
      )}
    </button>
  );
}
