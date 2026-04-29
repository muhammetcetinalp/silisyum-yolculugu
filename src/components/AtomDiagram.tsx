"use client";

import { motion } from "framer-motion";

export default function AtomDiagram() {
  const orbits = [
    { r: 50, electrons: 2, duration: 8, color: "#0A84FF" },
    { r: 90, electrons: 8, duration: 14, color: "#3FA9FF" },
    { r: 135, electrons: 4, duration: 20, color: "#E0B83A" },
  ];

  return (
    <svg
      viewBox="-180 -180 360 360"
      className="h-full w-full"
      role="img"
      aria-label="Silisyum atomunun Bohr modeli"
    >
      <defs>
        <radialGradient id="nucleus" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FBF6EF" />
          <stop offset="100%" stopColor="#A2714A" />
        </radialGradient>
        <radialGradient id="atomBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0A84FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="0" cy="0" r="170" fill="url(#atomBg)" />

      {/* Orbits */}
      {orbits.map((orbit, oi) => (
        <g key={oi}>
          <circle
            cx="0"
            cy="0"
            r={orbit.r}
            fill="none"
            stroke={orbit.color}
            strokeWidth="0.8"
            strokeDasharray="2 4"
            opacity="0.5"
          />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{
              duration: orbit.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: orbit.electrons }).map((_, i) => {
              const angle = (i / orbit.electrons) * Math.PI * 2;
              const cx = Math.cos(angle) * orbit.r;
              const cy = Math.sin(angle) * orbit.r;
              return (
                <g key={i}>
                  <circle cx={cx} cy={cy} r="6" fill={orbit.color} opacity="0.25" />
                  <circle cx={cx} cy={cy} r="3.5" fill={orbit.color} />
                </g>
              );
            })}
          </motion.g>
        </g>
      ))}

      {/* Nucleus */}
      <circle cx="0" cy="0" r="28" fill="url(#nucleus)" stroke="#A2714A" strokeWidth="1.5" />
      <text
        x="0"
        y="-1"
        textAnchor="middle"
        fontSize="14"
        fontWeight="800"
        fill="#0F131A"
      >
        Si
      </text>
      <text
        x="0"
        y="11"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="#4A5560"
      >
        14
      </text>

      {/* Labels */}
      <text x="0" y="-150" textAnchor="middle" fontSize="9" fontWeight="700" fill="#E0B83A" letterSpacing="2">
        4 DEĞERLİK ELEKTRONU
      </text>
      <text x="135" y="60" fontSize="8" fontWeight="600" fill="#4A5560">
        K · 2e⁻
      </text>
      <text x="135" y="78" fontSize="8" fontWeight="600" fill="#4A5560">
        L · 8e⁻
      </text>
      <text x="135" y="96" fontSize="8" fontWeight="600" fill="#E0B83A">
        M · 4e⁻
      </text>
    </svg>
  );
}
