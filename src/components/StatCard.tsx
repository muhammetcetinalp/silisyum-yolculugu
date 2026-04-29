"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
  color?: string;
}

export default function StatCard({
  icon,
  value,
  label,
  description,
  color = "from-circuit-400 to-circuit-600",
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-silicon-200 bg-white p-6"
    >
      <div
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}
      >
        {icon}
      </div>
      <div className="mt-5">
        <div className="font-display text-3xl font-bold text-silicon-900">
          {value}
        </div>
        <div className="text-xs font-bold uppercase tracking-wider text-silicon-400">
          {label}
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-silicon-500">
        {description}
      </p>
    </motion.div>
  );
}
