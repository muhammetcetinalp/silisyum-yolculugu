"use client";

import { motion } from "framer-motion";

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 480"
      className="h-full w-full"
      role="img"
      aria-label="Kumdan çipe dönüşümü gösteren illüstrasyon"
    >
      <defs>
        <linearGradient id="sandGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5E9D5" />
          <stop offset="100%" stopColor="#D4A574" />
        </linearGradient>
        <linearGradient id="siliconGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9AA5B3" />
          <stop offset="100%" stopColor="#4A5560" />
        </linearGradient>
        <linearGradient id="chipGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A84FF" />
          <stop offset="100%" stopColor="#0F131A" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0A84FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <circle cx="300" cy="240" r="220" fill="url(#glow)" />

      {/* Stage 1 — Sand pile */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <ellipse cx="110" cy="350" rx="80" ry="18" fill="#0F131A" opacity="0.08" />
        <path
          d="M 50 350 Q 110 240 170 350 Z"
          fill="url(#sandGrad)"
          stroke="#A2714A"
          strokeWidth="1.5"
        />
        {[...Array(12)].map((_, i) => (
          <circle
            key={i}
            cx={70 + (i % 4) * 25 + (i % 2 === 0 ? 3 : 0)}
            cy={300 + Math.floor(i / 4) * 18 + (i % 3 === 0 ? -5 : 0)}
            r={1.6 + (i % 3) * 0.4}
            fill="#A2714A"
            opacity={0.6}
          />
        ))}
        <text
          x="110"
          y="395"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#4A5560"
          letterSpacing="2"
        >
          KUM (SiO₂)
        </text>
      </motion.g>

      {/* Arrow 1 */}
      <motion.path
        d="M 195 320 L 240 320"
        stroke="#6E7C8C"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="4 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      <polygon points="240,316 248,320 240,324" fill="#6E7C8C" />

      {/* Stage 2 — Silicon ingot */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <ellipse cx="305" cy="385" rx="55" ry="10" fill="#0F131A" opacity="0.1" />
        <rect
          x="262"
          y="240"
          width="86"
          height="135"
          rx="42"
          fill="url(#siliconGrad)"
          stroke="#2E353F"
          strokeWidth="1.5"
        />
        <ellipse cx="305" cy="240" rx="43" ry="10" fill="#C2CAD4" />
        <ellipse
          cx="305"
          cy="240"
          rx="43"
          ry="10"
          fill="none"
          stroke="#2E353F"
          strokeWidth="1.5"
        />
        {/* Crystal facets */}
        <line x1="280" y1="252" x2="280" y2="370" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.4" />
        <line x1="305" y1="252" x2="305" y2="375" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.5" />
        <line x1="330" y1="252" x2="330" y2="370" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.4" />
        <text
          x="305"
          y="410"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#4A5560"
          letterSpacing="2"
        >
          KÜLÇE (Ingot)
        </text>
      </motion.g>

      {/* Arrow 2 */}
      <motion.path
        d="M 370 320 L 415 320"
        stroke="#6E7C8C"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="4 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      />
      <polygon points="415,316 423,320 415,324" fill="#6E7C8C" />

      {/* Stage 3 — Chip */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <rect
          x="440"
          y="245"
          width="120"
          height="120"
          rx="14"
          fill="url(#chipGrad)"
          stroke="#0066CC"
          strokeWidth="1.5"
        />
        {/* Pins */}
        {[...Array(6)].map((_, i) => (
          <g key={`pin-${i}`}>
            <rect x={448 + i * 18} y="237" width="10" height="10" fill="#4A5560" rx="1" />
            <rect x={448 + i * 18} y="363" width="10" height="10" fill="#4A5560" rx="1" />
          </g>
        ))}
        {[...Array(6)].map((_, i) => (
          <g key={`pinside-${i}`}>
            <rect x="432" y={252 + i * 18} width="10" height="10" fill="#4A5560" rx="1" />
            <rect x="558" y={252 + i * 18} width="10" height="10" fill="#4A5560" rx="1" />
          </g>
        ))}

        {/* Circuit traces */}
        <g stroke="#3FA9FF" strokeWidth="1" fill="none" opacity="0.9">
          <path d="M 460 270 L 490 270 L 490 290 L 540 290" className="circuit-trace" />
          <path d="M 460 305 L 510 305 L 510 325 L 540 325" className="circuit-trace" />
          <path d="M 460 340 L 480 340 L 480 320 L 500 320" className="circuit-trace" />
          <path d="M 540 270 L 540 250" className="circuit-trace" />
          <path d="M 470 345 L 470 360" className="circuit-trace" />
        </g>
        {/* Nodes */}
        <circle cx="490" cy="290" r="2.5" fill="#7CFFB2" />
        <circle cx="510" cy="325" r="2.5" fill="#7CFFB2" />
        <circle cx="540" cy="290" r="2.5" fill="#E0B83A" />
        <circle cx="500" cy="320" r="2.5" fill="#E0B83A" />

        {/* Chip label */}
        <text
          x="500"
          y="320"
          textAnchor="middle"
          fontSize="10"
          fontWeight="800"
          fill="#FFFFFF"
          letterSpacing="3"
          opacity="0.65"
        >
          Si
        </text>
        <text
          x="500"
          y="395"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#4A5560"
          letterSpacing="2"
        >
          MİKROÇİP
        </text>
      </motion.g>

      {/* Floating particles */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        {[
          { cx: 220, cy: 130, r: 3, c: "#0A84FF" },
          { cx: 380, cy: 105, r: 2, c: "#E0B83A" },
          { cx: 470, cy: 140, r: 2.5, c: "#7CFFB2" },
          { cx: 145, cy: 180, r: 2, c: "#0A84FF" },
          { cx: 320, cy: 150, r: 1.5, c: "#B388FF" },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill={p.c}
            animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </motion.g>

      {/* Title bar */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <rect x="180" y="50" width="240" height="46" rx="23" fill="#0F131A" />
        <text
          x="300"
          y="78"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#FFFFFF"
          letterSpacing="1"
        >
          ATOMUN DİJİTAL DÖNÜŞÜMÜ
        </text>
      </motion.g>
    </svg>
  );
}
