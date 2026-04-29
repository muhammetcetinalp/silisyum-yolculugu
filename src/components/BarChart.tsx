"use client";

import { motion } from "framer-motion";

interface BarChartProps {
  data: { label: string; value: number; color: string; suffix?: string }[];
  unit?: string;
  max?: number;
}

export default function BarChart({ data, unit = "", max }: BarChartProps) {
  const peak = max ?? Math.max(...data.map((d) => d.value));

  return (
    <div className="space-y-4">
      {data.map((d, i) => {
        const pct = (d.value / peak) * 100;
        return (
          <div key={d.label}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm font-semibold text-silicon-700">
                {d.label}
              </span>
              <span className="font-mono text-sm font-semibold text-silicon-900">
                {d.value.toLocaleString("tr-TR")}
                {d.suffix ?? unit}
              </span>
            </div>
            <div className="h-7 overflow-hidden rounded-lg bg-silicon-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                className="h-full rounded-lg"
                style={{ backgroundColor: d.color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
