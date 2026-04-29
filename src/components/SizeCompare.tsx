"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  { id: 0, label: "İnsan Saç Teli", size: "70.000 nm", relativePx: 320, color: "#8B5A2B" },
  { id: 1, label: "Kırmızı Kan Hücresi", size: "7.000 nm", relativePx: 110, color: "#B91C1C" },
  { id: 2, label: "Bakteri", size: "1.000 nm", relativePx: 60, color: "#10B981" },
  { id: 3, label: "Toz Zerresi", size: "100 nm", relativePx: 22, color: "#A2714A" },
  { id: 4, label: "Virüs", size: "30 nm", relativePx: 14, color: "#7C3AED" },
  { id: 5, label: "Modern Transistör", size: "3 nm", relativePx: 6, color: "#0A84FF" },
];

export default function SizeCompare() {
  const [hover, setHover] = useState<number | null>(5);
  const focused = items.find((i) => i.id === hover) ?? items[5];

  return (
    <div className="rounded-3xl border border-silicon-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="text-xs font-bold uppercase tracking-[0.2em] text-silicon-400">
        Boyut Karşılaştırması (logaritmik)
      </div>
      <div className="mt-2 font-display text-xl font-bold text-silicon-900">
        Bir transistör neden temiz odada üretilir?
      </div>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
        {items.map((it) => (
          <button
            key={it.id}
            onMouseEnter={() => setHover(it.id)}
            onClick={() => setHover(it.id)}
            className="group flex flex-1 min-w-[100px] flex-col items-center gap-3"
          >
            <motion.div
              className="rounded-full"
              style={{ backgroundColor: it.color }}
              animate={{
                width: it.relativePx,
                height: it.relativePx,
                opacity: hover === it.id ? 1 : 0.5,
                scale: hover === it.id ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
            <div className="text-center">
              <div
                className={`text-xs font-semibold ${
                  hover === it.id ? "text-silicon-900" : "text-silicon-500"
                }`}
              >
                {it.label}
              </div>
              <div className="font-mono text-[10px] text-silicon-400">
                {it.size}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-silicon-900 p-5 text-white">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-circuit-400">
          {focused.label}
        </div>
        <div className="mt-2 font-display text-2xl font-bold">
          ≈ {focused.size}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-silicon-300">
          {focused.id === 5
            ? "Modern bir transistör, bir toz zerresinin yanında çakıltaşı kadar küçüktür. Bu nedenle çip üretimi havadaki en küçük partikülün bile filtre edildiği temiz odalarda yapılmak zorundadır."
            : focused.id === 3
            ? "Bir toz zerresi, en yeni transistörün yanında bir dağ gibidir. Üzerine düştüğü devre yolunu fiziksel olarak kapatır ve çipi tamamen kullanılmaz hale getirir."
            : `${focused.label} yaklaşık ${focused.size} büyüklüğündedir. Karşılaştırmak için diğer maddelere göz atın.`}
        </p>
      </div>
    </div>
  );
}
