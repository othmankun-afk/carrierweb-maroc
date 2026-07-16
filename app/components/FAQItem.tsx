"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border border-white/5 rounded-xl overflow-hidden transition-all ${
        open ? "border-cw-red/30" : ""
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-cw-fg pr-4">{question}</span>
        <ChevronDown
          size={16}
          className={`text-cw-red-light flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-xs text-cw-gray-300 leading-relaxed border-t border-white/5 pt-3">
          {answer}
        </div>
      )}
    </div>
  );
}
