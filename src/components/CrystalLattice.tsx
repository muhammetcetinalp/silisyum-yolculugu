"use client";

import { motion } from "framer-motion";

// Diamond cubic-like 2D representation: Si atoms with covalent bonds
export default function CrystalLattice() {
  const positions: { x: number; y: number }[] = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 5; c++) {
      positions.push({ x: c * 70 + (r % 2 ? 35 : 0) + 30, y: r * 70 + 40 });
    }
  }

  // bonds between neighbors
  const bonds: { x1: number; y1: number; x2: number; y2: number }[] = [];
  positions.forEach((p, i) => {
    positions.forEach((q, j) => {
      if (j <= i) return;
      const dx = q.x - p.x;
      const dy = q.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 80) bonds.push({ x1: p.x, y1: p.y, x2: q.x, y2: q.y });
    });
  });

  return (
    <svg viewBox="0 0 400 320" className="h-full w-full">
      <defs>
        <radialGradient id="siGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C2CAD4" />
          <stop offset="100%" stopColor="#4A5560" />
        </radialGradient>
      </defs>

      {/* Bonds */}
      {bonds.map((b, i) => (
        <motion.line
          key={i}
          x1={b.x1}
          y1={b.y1}
          x2={b.x2}
          y2={b.y2}
          stroke="#0A84FF"
          strokeWidth="1.5"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: i * 0.04 }}
        />
      ))}

      {/* Atoms */}
      {positions.map((p, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 + i * 0.03 }}
        >
          <circle cx={p.x} cy={p.y} r="14" fill="url(#siGrad)" stroke="#2E353F" strokeWidth="1" />
          <text
            x={p.x}
            y={p.y + 4}
            textAnchor="middle"
            fontSize="10"
            fontWeight="800"
            fill="#FFFFFF"
          >
            Si
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
