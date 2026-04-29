"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type DopantType = "none" | "phosphorus" | "boron";

const labels: Record<DopantType, string> = {
  none: "Saf Silisyum",
  phosphorus: "Fosfor (P) eklendi",
  boron: "Bor (B) eklendi",
};

const descriptions: Record<DopantType, string> = {
  none: "4 değerlik elektronu komşularla paylaşılır. Fazla elektron yok, boşluk yok. İletkenlik son derece düşük.",
  phosphorus:
    "Fosfor 5 değerlik elektronuna sahiptir. 4'ü bağlanır, 5.'si serbest kalır → fazla elektron → n-tipi yarı iletken.",
  boron:
    "Bor yalnızca 3 değerlik elektronu sunar. Bir bağ yarı kalır → 'delik' (hole) → p-tipi yarı iletken.",
};

export default function DopingSimulator() {
  const [type, setType] = useState<DopantType>("none");

  const positions: { x: number; y: number; isDopant?: boolean }[] = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 5; c++) {
      positions.push({
        x: c * 70 + (r % 2 ? 35 : 0) + 30,
        y: r * 70 + 40,
        isDopant: r === 1 && c === 2,
      });
    }
  }

  const dopantColor =
    type === "phosphorus" ? "#0A84FF" : type === "boron" ? "#A2714A" : "#C2CAD4";
  const dopantSymbol =
    type === "phosphorus" ? "P" : type === "boron" ? "B" : "Si";

  return (
    <div className="rounded-3xl border border-silicon-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-silicon-400">
          Doping Simülatörü
        </span>
        <div className="ml-auto flex flex-wrap gap-2">
          <button
            onClick={() => setType("none")}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              type === "none"
                ? "bg-silicon-900 text-white"
                : "border border-silicon-300 text-silicon-700 hover:border-silicon-500"
            }`}
          >
            Saf Si
          </button>
          <button
            onClick={() => setType("phosphorus")}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              type === "phosphorus"
                ? "bg-circuit-500 text-white"
                : "border border-silicon-300 text-silicon-700 hover:border-circuit-500"
            }`}
          >
            + Fosfor (n-tipi)
          </button>
          <button
            onClick={() => setType("boron")}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              type === "boron"
                ? "bg-sand-500 text-white"
                : "border border-silicon-300 text-silicon-700 hover:border-sand-500"
            }`}
          >
            + Bor (p-tipi)
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="aspect-[5/4] rounded-2xl bg-sand-50 p-4">
          <svg viewBox="0 0 400 320" className="h-full w-full">
            <defs>
              <radialGradient id="siGradD" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C2CAD4" />
                <stop offset="100%" stopColor="#4A5560" />
              </radialGradient>
            </defs>

            {/* Bonds */}
            {positions.map((p, i) => {
              return positions.slice(i + 1).map((q, j) => {
                const dx = q.x - p.x;
                const dy = q.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > 80) return null;
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={p.x}
                    y1={p.y}
                    x2={q.x}
                    y2={q.y}
                    stroke="#0A84FF"
                    strokeWidth="1.2"
                    opacity="0.4"
                  />
                );
              });
            })}

            {/* Atoms */}
            {positions.map((p, i) => (
              <g key={i}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="14"
                  fill={p.isDopant && type !== "none" ? dopantColor : "url(#siGradD)"}
                  stroke="#2E353F"
                  strokeWidth="1"
                />
                <text
                  x={p.x}
                  y={p.y + 4}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="800"
                  fill="#FFFFFF"
                >
                  {p.isDopant && type !== "none" ? dopantSymbol : "Si"}
                </text>
              </g>
            ))}

            {/* Free electron for n-type */}
            {type === "phosphorus" &&
              positions
                .filter((p) => p.isDopant)
                .map((p, i) => (
                  <motion.g key={`e-${i}`}>
                    <motion.circle
                      cx={p.x + 25}
                      cy={p.y - 20}
                      r="4"
                      fill="#7CFFB2"
                      animate={{
                        cx: [p.x + 25, p.x + 60, p.x + 90, p.x + 60, p.x + 25],
                        cy: [p.y - 20, p.y - 30, p.y, p.y + 25, p.y - 20],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </motion.g>
                ))}

            {/* Hole for p-type */}
            {type === "boron" &&
              positions
                .filter((p) => p.isDopant)
                .map((p, i) => (
                  <g key={`h-${i}`}>
                    <motion.circle
                      cx={p.x + 25}
                      cy={p.y - 20}
                      r="6"
                      fill="none"
                      stroke="#E11D48"
                      strokeWidth="1.5"
                      strokeDasharray="3 2"
                      animate={{
                        cx: [p.x + 25, p.x + 70, p.x + 35, p.x + 25],
                        cy: [p.y - 20, p.y, p.y + 30, p.y - 20],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </g>
                ))}
          </svg>
        </div>

        <div>
          <div
            className={`rounded-2xl border p-5 ${
              type === "phosphorus"
                ? "border-circuit-500 bg-circuit-500/5"
                : type === "boron"
                ? "border-sand-500 bg-sand-50"
                : "border-silicon-200 bg-sand-50"
            }`}
          >
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-silicon-400">
              Sonuç
            </div>
            <div className="mt-2 font-display text-xl font-bold text-silicon-900">
              {labels[type]}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-silicon-600">
              {descriptions[type]}
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-silicon-200 bg-white p-3">
              <div className="font-bold uppercase tracking-wider text-circuit-600">
                n-tipi
              </div>
              <div className="mt-1 text-silicon-600">
                Yük taşıyıcı: <span className="font-semibold">elektron</span>
              </div>
            </div>
            <div className="rounded-xl border border-silicon-200 bg-white p-3">
              <div className="font-bold uppercase tracking-wider text-sand-600">
                p-tipi
              </div>
              <div className="mt-1 text-silicon-600">
                Yük taşıyıcı: <span className="font-semibold">delik</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
