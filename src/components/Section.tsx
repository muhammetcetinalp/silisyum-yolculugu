import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`container-page py-16 ${className}`}>
      {(title || eyebrow || description) && (
        <div className="mb-10 max-w-2xl">
          {eyebrow && (
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-circuit-600">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="heading-display text-3xl sm:text-4xl">{title}</h2>
          )}
          {description && (
            <p className="mt-4 text-base leading-relaxed text-silicon-500">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
