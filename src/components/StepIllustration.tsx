"use client";

import { motion } from "framer-motion";

interface Props {
  step: number;
}

// A library of small SVG illustrations, one per step
export default function StepIllustration({ step }: Props) {
  switch (step) {
    case 1:
      return <StepSand />;
    case 2:
      return <StepArc />;
    case 3:
      return <StepDistill />;
    case 4:
      return <StepEgs />;
    case 5:
      return <StepCzochralski />;
    case 6:
      return <StepWafer />;
    case 7:
      return <StepOxide />;
    case 8:
      return <StepLitho />;
    case 9:
      return <StepDoping />;
    case 10:
      return <StepChip />;
    default:
      return null;
  }
}

const SVG = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 320 240" className="h-full w-full">
    {children}
  </svg>
);

function StepSand() {
  return (
    <SVG>
      <defs>
        <linearGradient id="s1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E9D5" />
          <stop offset="100%" stopColor="#A2714A" />
        </linearGradient>
      </defs>
      <rect width="320" height="240" fill="#FBF6EF" rx="8" />
      <ellipse cx="160" cy="200" rx="120" ry="14" fill="#0F131A" opacity="0.08" />
      <path d="M 60 200 Q 160 80 260 200 Z" fill="url(#s1)" stroke="#A2714A" strokeWidth="1.5" />
      {Array.from({ length: 30 }).map((_, i) => (
        <circle
          key={i}
          cx={80 + (i % 8) * 22 + (i % 2 ? 6 : 0)}
          cy={140 + Math.floor(i / 8) * 16}
          r={1 + (i % 3) * 0.5}
          fill="#A2714A"
          opacity={0.55}
        />
      ))}
      <text x="160" y="40" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0F131A">
        SiO₂
      </text>
    </SVG>
  );
}

function StepArc() {
  return (
    <SVG>
      <rect width="320" height="240" fill="#1B0A0A" rx="8" />
      <rect x="80" y="60" width="160" height="140" rx="8" fill="#3A1208" stroke="#FF6B35" strokeWidth="1.5" />
      <motion.g animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.2, repeat: Infinity }}>
        <ellipse cx="160" cy="140" rx="55" ry="40" fill="#FFB627" opacity="0.7" />
        <ellipse cx="160" cy="140" rx="35" ry="25" fill="#FFEC5C" />
      </motion.g>
      {/* Electrodes */}
      <rect x="120" y="60" width="6" height="40" fill="#999" />
      <rect x="194" y="60" width="6" height="40" fill="#999" />
      {/* Lightning */}
      <motion.path
        d="M 123 100 L 130 115 L 125 120 L 145 140"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        fill="none"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />
      <text x="160" y="225" textAnchor="middle" fontSize="11" fontWeight="700" fill="#FFB627">
        ~1900 °C
      </text>
    </SVG>
  );
}

function StepDistill() {
  return (
    <SVG>
      <rect width="320" height="240" fill="#F0F8F4" rx="8" />
      {/* Column */}
      <rect x="140" y="40" width="40" height="160" rx="6" fill="#fff" stroke="#10B981" strokeWidth="1.5" />
      {[60, 90, 120, 150, 180].map((y, i) => (
        <line key={i} x1="142" y1={y} x2="178" y2={y} stroke="#10B981" strokeDasharray="2 2" opacity="0.5" />
      ))}
      {/* Bubbles */}
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          cx={155 + (i % 2) * 10}
          cy={190}
          r={3}
          fill="#3FA9FF"
          animate={{ cy: [190, 50], opacity: [0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      <text x="160" y="225" textAnchor="middle" fontSize="11" fontWeight="700" fill="#10B981">
        HSiCl₃
      </text>
      <text x="220" y="80" fontSize="9" fontWeight="600" fill="#10B981">
        Saf gaz
      </text>
      <text x="220" y="180" fontSize="9" fontWeight="600" fill="#A2714A">
        Yabancı atomlar
      </text>
    </SVG>
  );
}

function StepEgs() {
  return (
    <SVG>
      <rect width="320" height="240" fill="#0A1929" rx="8" />
      {/* Reactor */}
      <ellipse cx="160" cy="120" rx="60" ry="80" fill="#0066CC" opacity="0.15" stroke="#3FA9FF" strokeWidth="1.5" />
      {/* Si rod */}
      <rect x="155" y="60" width="10" height="120" fill="url(#egsGrad)" rx="3" />
      <defs>
        <linearGradient id="egsGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C2CAD4" />
          <stop offset="100%" stopColor="#4A5560" />
        </linearGradient>
      </defs>
      {/* Particles depositing */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.circle
          key={i}
          cx={120 + i * 18}
          cy={50}
          r={2}
          fill="#7CFFB2"
          animate={{ cy: [50, 120], opacity: [1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      <text x="160" y="220" textAnchor="middle" fontSize="13" fontWeight="800" fill="#7CFFB2">
        9N · %99.9999999
      </text>
    </SVG>
  );
}

function StepCzochralski() {
  return (
    <SVG>
      <rect width="320" height="240" fill="#1A0F2E" rx="8" />
      {/* Crucible */}
      <ellipse cx="160" cy="180" rx="80" ry="14" fill="#3A1F60" />
      <path d="M 80 180 L 90 200 L 230 200 L 240 180 Z" fill="#5B2F8C" stroke="#B388FF" strokeWidth="1.5" />
      <ellipse cx="160" cy="180" rx="70" ry="10" fill="#FFB627" opacity="0.8" />
      {/* Ingot growing */}
      <motion.g
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="148" y="50" width="24" height="120" rx="4" fill="url(#ingotGrad)" stroke="#B388FF" strokeWidth="1" />
        <ellipse cx="160" cy="50" rx="12" ry="3" fill="#C2CAD4" />
      </motion.g>
      <defs>
        <linearGradient id="ingotGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E0E5EA" />
          <stop offset="100%" stopColor="#6E7C8C" />
        </linearGradient>
      </defs>
      {/* Pull rod */}
      <line x1="160" y1="20" x2="160" y2="50" stroke="#FFFFFF" strokeWidth="2" />
      <text x="160" y="225" textAnchor="middle" fontSize="11" fontWeight="700" fill="#B388FF">
        Tek Kristal Külçe
      </text>
    </SVG>
  );
}

function StepWafer() {
  return (
    <SVG>
      <rect width="320" height="240" fill="#F4F6F8" rx="8" />
      {/* Stack of wafers */}
      {[0, 1, 2, 3, 4].map((i) => (
        <ellipse
          key={i}
          cx={160}
          cy={180 - i * 16}
          rx={70 - i * 2}
          ry={12 - i * 0.4}
          fill={i === 4 ? "#E0E5EA" : "#C2CAD4"}
          stroke="#6E7C8C"
          strokeWidth="1"
        />
      ))}
      <ellipse cx="160" cy="100" rx="62" ry="11" fill="#FBF6EF" stroke="#6E7C8C" strokeWidth="1" />
      <text x="160" y="103" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4A5560">
        300 mm Si Wafer
      </text>
      <text x="160" y="225" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4A5560">
        Kâğıt İnceliğinde Diskler
      </text>
    </SVG>
  );
}

function StepOxide() {
  return (
    <SVG>
      <rect width="320" height="240" fill="#E0F7FA" rx="8" />
      {/* Layers */}
      <rect x="40" y="160" width="240" height="40" fill="#6E7C8C" />
      <rect x="40" y="140" width="240" height="20" fill="#0A84FF" opacity="0.7" />
      <rect x="40" y="120" width="240" height="20" fill="#FBF6EF" />
      <rect x="40" y="100" width="240" height="20" fill="#7CFFB2" />
      <text x="290" y="180" fontSize="9" fill="#FFFFFF" fontWeight="600">
        Si
      </text>
      <text x="290" y="155" fontSize="9" fill="#FFFFFF" fontWeight="600">
        SiO₂
      </text>
      <text x="290" y="135" fontSize="9" fill="#0F131A" fontWeight="600">
        Si₃N₄
      </text>
      <text x="290" y="115" fontSize="9" fill="#0F131A" fontWeight="600">
        Metal
      </text>
      <text x="160" y="40" textAnchor="middle" fontSize="13" fontWeight="800" fill="#006064">
        İnce Film Kaplama
      </text>
      <text x="160" y="60" textAnchor="middle" fontSize="9" fill="#00838F">
        nanometre kalınlığında katmanlar
      </text>
    </SVG>
  );
}

function StepLitho() {
  return (
    <SVG>
      <rect width="320" height="240" fill="#0A0E1A" rx="8" />
      {/* Light source */}
      <circle cx="160" cy="40" r="14" fill="#B388FF" opacity="0.3" />
      <circle cx="160" cy="40" r="8" fill="#FFFFFF" />
      {/* Light rays */}
      {[-30, -15, 0, 15, 30].map((dx, i) => (
        <motion.line
          key={i}
          x1={160}
          y1={48}
          x2={160 + dx}
          y2={120}
          stroke="#B388FF"
          strokeWidth="1.2"
          opacity="0.7"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
      {/* Mask */}
      <rect x="100" y="118" width="120" height="6" fill="#4A5560" />
      <rect x="115" y="118" width="6" height="6" fill="#0A0E1A" />
      <rect x="135" y="118" width="4" height="6" fill="#0A0E1A" />
      <rect x="155" y="118" width="8" height="6" fill="#0A0E1A" />
      <rect x="180" y="118" width="6" height="6" fill="#0A0E1A" />
      {/* Wafer */}
      <rect x="40" y="170" width="240" height="40" fill="#6E7C8C" rx="2" />
      <rect x="40" y="160" width="240" height="10" fill="#7CFFB2" opacity="0.8" />
      <text x="160" y="225" textAnchor="middle" fontSize="11" fontWeight="700" fill="#B388FF">
        EUV · 13.5 nm
      </text>
    </SVG>
  );
}

function StepDoping() {
  return (
    <SVG>
      <rect width="320" height="240" fill="#FFF1F2" rx="8" />
      {/* Lattice */}
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 6 }).map((_, c) => {
          const x = 60 + c * 36 + (r % 2 ? 18 : 0);
          const y = 80 + r * 36;
          const isDopant = (r === 1 && c === 2) || (r === 2 && c === 4);
          const dopantColor = r === 1 ? "#0A84FF" : "#E0B83A";
          return (
            <g key={`${r}-${c}`}>
              <circle
                cx={x}
                cy={y}
                r="11"
                fill={isDopant ? dopantColor : "#C2CAD4"}
                stroke="#4A5560"
                strokeWidth="1"
              />
              <text
                x={x}
                y={y + 3}
                textAnchor="middle"
                fontSize="8"
                fontWeight="800"
                fill={isDopant ? "#FFFFFF" : "#0F131A"}
              >
                {isDopant ? (r === 1 ? "P" : "B") : "Si"}
              </text>
            </g>
          );
        })
      )}
      <text x="160" y="40" textAnchor="middle" fontSize="13" fontWeight="800" fill="#E11D48">
        Doping (Katkılama)
      </text>
      <text x="60" y="225" fontSize="9" fontWeight="700" fill="#0A84FF">
        n-tipi (P)
      </text>
      <text x="220" y="225" fontSize="9" fontWeight="700" fill="#A2714A">
        p-tipi (B)
      </text>
    </SVG>
  );
}

function StepChip() {
  return (
    <SVG>
      <rect width="320" height="240" fill="#0A0E1A" rx="8" />
      {/* Chip body */}
      <rect x="80" y="60" width="160" height="120" rx="10" fill="#0F131A" stroke="#0A84FF" strokeWidth="2" />
      {/* Pins */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i}>
          <rect x={88 + i * 18} y="55" width="10" height="8" fill="#999" />
          <rect x={88 + i * 18} y="177" width="10" height="8" fill="#999" />
        </g>
      ))}
      {/* Circuit */}
      <g stroke="#3FA9FF" strokeWidth="1.2" fill="none" opacity="0.9">
        <path d="M 100 90 L 140 90 L 140 110 L 200 110" className="circuit-trace" />
        <path d="M 100 130 L 160 130 L 160 150 L 220 150" className="circuit-trace" />
        <path d="M 130 160 L 130 140 L 170 140" className="circuit-trace" />
      </g>
      <circle cx="140" cy="90" r="2.5" fill="#7CFFB2" />
      <circle cx="200" cy="110" r="2.5" fill="#7CFFB2" />
      <circle cx="220" cy="150" r="2.5" fill="#E0B83A" />
      <text x="160" y="125" textAnchor="middle" fontSize="20" fontWeight="800" fill="#FFFFFF" opacity="0.4" letterSpacing="3">
        Si
      </text>
      <text x="160" y="220" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3FA9FF">
        Bitmiş Mikroçip
      </text>
    </SVG>
  );
}
