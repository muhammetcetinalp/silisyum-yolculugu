"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function TransistorSwitch() {
  const [on, setOn] = useState(false);

  return (
    <div className="rounded-3xl border border-silicon-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-silicon-400">
            Transistör Anahtarı
          </div>
          <div className="mt-1 font-display text-xl font-bold text-silicon-900">
            Kapı (Gate) Voltajı
          </div>
        </div>
        <button
          onClick={() => setOn((v) => !v)}
          className={`relative inline-flex h-9 w-20 items-center rounded-full p-1 transition ${
            on ? "bg-chip-neon" : "bg-silicon-200"
          }`}
          aria-pressed={on}
        >
          <motion.span
            layout
            className={`inline-block h-7 w-7 rounded-full bg-white shadow-md`}
            animate={{ x: on ? 44 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          <span
            className={`absolute right-3 text-[10px] font-bold ${
              on ? "text-silicon-900" : "hidden"
            }`}
          >
            ON
          </span>
          <span
            className={`absolute left-3 text-[10px] font-bold ${
              on ? "hidden" : "text-silicon-500"
            }`}
          >
            OFF
          </span>
        </button>
      </div>

      <div className="mt-6 aspect-[2/1] rounded-2xl bg-silicon-900 p-6">
        <svg viewBox="0 0 600 280" className="h-full w-full">
          <defs>
            <linearGradient id="srcGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0A84FF" />
              <stop offset="100%" stopColor="#3FA9FF" />
            </linearGradient>
          </defs>

          {/* Substrate */}
          <rect x="50" y="170" width="500" height="60" fill="#2E353F" stroke="#6E7C8C" strokeWidth="1.5" rx="4" />
          <text x="300" y="215" textAnchor="middle" fontSize="11" fontWeight="700" fill="#9AA5B3">
            p-tipi silisyum altlık
          </text>

          {/* Source (n+) */}
          <rect x="80" y="160" width="120" height="20" fill="#0A84FF" rx="2" />
          <text x="140" y="155" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3FA9FF">
            Kaynak (n+)
          </text>

          {/* Drain (n+) */}
          <rect x="400" y="160" width="120" height="20" fill="#0A84FF" rx="2" />
          <text x="460" y="155" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3FA9FF">
            Drenaj (n+)
          </text>

          {/* Oxide layer */}
          <rect x="200" y="150" width="200" height="10" fill="#FBF6EF" stroke="#A2714A" strokeWidth="0.5" />
          <text x="300" y="148" textAnchor="middle" fontSize="9" fill="#FBF6EF">
            SiO₂
          </text>

          {/* Gate */}
          <rect x="200" y="120" width="200" height="30" fill={on ? "#7CFFB2" : "#4A5560"} stroke="#FFFFFF" strokeWidth="1" rx="2" />
          <text x="300" y="140" textAnchor="middle" fontSize="11" fontWeight="700" fill={on ? "#0A0E14" : "#FFFFFF"}>
            Kapı (Gate)
          </text>

          {/* Channel */}
          {on && (
            <motion.rect
              x="200"
              y="170"
              width="200"
              height="8"
              fill="#7CFFB2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
              style={{ transformOrigin: "left center" }}
            />
          )}

          {/* Electron flow when ON */}
          {on &&
            [0, 1, 2, 3].map((i) => (
              <motion.circle
                key={i}
                cy={174}
                r="3"
                fill="#FFFFFF"
                animate={{ cx: [80, 520] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "linear",
                }}
              />
            ))}

          {/* Voltage indicator */}
          <line x1="300" y1="60" x2="300" y2="120" stroke="#FFFFFF" strokeWidth="1.5" />
          <text x="300" y="50" textAnchor="middle" fontSize="14" fontWeight="800" fill={on ? "#7CFFB2" : "#9AA5B3"}>
            {on ? "+ Vg" : "0 V"}
          </text>

          {/* Output indicator */}
          <text x="540" y="125" fontSize="11" fontWeight="800" fill={on ? "#7CFFB2" : "#9AA5B3"}>
            {on ? "1" : "0"}
          </text>
        </svg>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-silicon-600">
        {on
          ? "Kapıya pozitif voltaj uygulandığında oksit altında bir 'kanal' oluşur ve elektronlar kaynaktan drenaja akar — transistör 'AÇIK' (1)."
          : "Kapı voltajı sıfırken kanal yoktur ve elektronlar geçemez — transistör 'KAPALI' (0). İşte bilgisayarın anladığı tek dil bu."}
      </p>
    </div>
  );
}
