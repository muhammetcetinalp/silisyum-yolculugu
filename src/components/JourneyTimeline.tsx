"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Mountain,
  Flame,
  Beaker,
  Sparkles,
  RotateCw,
  Disc,
  Layers,
  Lightbulb,
  Scissors,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { journeySteps } from "@/lib/journey-data";
import StepIllustration from "@/components/StepIllustration";

const iconMap: Record<string, LucideIcon> = {
  mountain: Mountain,
  flame: Flame,
  beaker: Beaker,
  sparkles: Sparkles,
  rotate: RotateCw,
  disc: Disc,
  layers: Layers,
  lightbulb: Lightbulb,
  scissors: Scissors,
  cpu: Cpu,
};

export default function JourneyTimeline() {
  const [activeId, setActiveId] = useState(1);
  const active = journeySteps.find((s) => s.id === activeId)!;
  const Icon = iconMap[active.icon];

  const goPrev = () => setActiveId((id) => Math.max(1, id - 1));
  const goNext = () =>
    setActiveId((id) => Math.min(journeySteps.length, id + 1));

  return (
    <div className="container-page">
      {/* Stepper rail */}
      <div className="relative mb-10">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-silicon-200" />
        <motion.div
          className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-sand-400 via-circuit-500 to-silicon-700"
          initial={false}
          animate={{
            width: `${((activeId - 1) / (journeySteps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <div className="relative grid grid-cols-10 gap-0.5 sm:gap-1">
          {journeySteps.map((step) => {
            const StepIcon = iconMap[step.icon];
            const isActive = step.id === activeId;
            const isPast = step.id < activeId;
            return (
              <button
                key={step.id}
                onClick={() => setActiveId(step.id)}
                className="group flex flex-col items-center"
                aria-label={`Adım ${step.id}: ${step.title}`}
              >
                <div
                  className={`grid h-7 w-7 sm:h-10 sm:w-10 place-items-center rounded-full border-2 transition-all ${
                    isActive
                      ? "border-circuit-500 bg-white shadow-lg shadow-circuit-500/30 scale-110"
                      : isPast
                      ? "border-circuit-500 bg-circuit-500 text-white"
                      : "border-silicon-300 bg-sand-50 text-silicon-400 group-hover:border-silicon-500"
                  }`}
                >
                  <StepIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <div
                  className={`mt-2 hidden text-[10px] font-bold uppercase tracking-wider sm:block ${
                    isActive ? "text-circuit-600" : "text-silicon-400"
                  }`}
                >
                  {String(step.id).padStart(2, "0")}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active step card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="grid gap-8 rounded-3xl border border-silicon-200 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-[1.1fr_1fr]"
        >
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div
                className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${active.color} text-white shadow-md`}
              >
                <Icon className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-circuit-600">
                  Adım {String(active.id).padStart(2, "0")} / 10
                </div>
                <div className="text-xs text-silicon-500">{active.subtitle}</div>
              </div>
            </div>

            <h2 className="mt-5 font-display text-3xl font-bold text-silicon-900 sm:text-4xl">
              {active.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-silicon-700">
              {active.short}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-silicon-500">
              {active.body}
            </p>

            {active.formula && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-silicon-200 bg-sand-50 px-4 py-3 font-mono text-sm font-semibold text-silicon-900">
                <span className="text-xs uppercase tracking-wider text-silicon-400">
                  Reaksiyon
                </span>
                <span>{active.formula}</span>
              </div>
            )}

            <div className="mt-6 grid grid-cols-3 gap-3">
              {active.facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-silicon-200 bg-sand-50 p-3"
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider text-silicon-400">
                    {f.label}
                  </div>
                  <div className="mt-1 font-display text-sm font-bold text-silicon-900">
                    {f.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={goPrev}
                disabled={activeId === 1}
                className="inline-flex items-center gap-2 rounded-full border border-silicon-300 bg-white px-4 py-2 text-sm font-semibold text-silicon-700 transition hover:border-silicon-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" /> Önceki
              </button>
              <div className="text-xs font-semibold text-silicon-400">
                {activeId} / {journeySteps.length}
              </div>
              <button
                onClick={goNext}
                disabled={activeId === journeySteps.length}
                className="inline-flex items-center gap-2 rounded-full bg-silicon-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-silicon-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Sonraki <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-silicon-200 bg-sand-50">
              <StepIllustration step={active.id} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* All steps grid */}
      <div className="mt-16">
        <h3 className="mb-6 font-display text-2xl font-bold text-silicon-900">
          Tüm Adımlara Bakış
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {journeySteps.map((step) => {
            const StepIcon = iconMap[step.icon];
            const isActive = step.id === activeId;
            return (
              <button
                key={step.id}
                onClick={() => setActiveId(step.id)}
                className={`group rounded-2xl border p-4 text-left transition ${
                  isActive
                    ? "border-circuit-500 bg-circuit-500/5 shadow-md"
                    : "border-silicon-200 bg-white hover:border-silicon-400"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br ${step.color} text-white`}
                  >
                    <StepIcon className="h-4 w-4" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-silicon-400">
                    {String(step.id).padStart(2, "0")}
                  </div>
                </div>
                <div className="mt-3 font-display text-sm font-bold text-silicon-900">
                  {step.title}
                </div>
                <div className="mt-1 text-[11px] text-silicon-500">
                  {step.subtitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
