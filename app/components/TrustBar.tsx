import { ShieldCheck, PhoneCall, Wifi, Clock } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

const icons = [
  <ShieldCheck key="s" className="text-cw-red-light" size={18} />,
  <Wifi key="w" className="text-cw-red-light" size={18} />,
  <PhoneCall key="p" className="text-cw-red-light" size={18} />,
  <Clock key="c" className="text-cw-red-light" size={18} />,
];

export default function TrustBar({ dict }: { dict: Dictionary }) {
  const items = dict.trustBar;

  return (
    <section className="relative z-30 py-6 bg-cw-black-deep/80 backdrop-blur-md border-y border-white/[0.04]" aria-label={dict.trustBar[0].label}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cw-red/10 flex items-center justify-center flex-shrink-0">
                {icons[index]}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-cw-fg tracking-tight font-[family-name:var(--font-jakarta)]">
                  {item.label}
                </div>
                <div className="text-[10px] sm:text-xs text-cw-gray-500">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
