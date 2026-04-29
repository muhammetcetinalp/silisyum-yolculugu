import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string;
  children?: ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="container-page pb-12 pt-12">
      <div className="max-w-3xl">
        {eyebrow && (
          <div className="chip mb-5 border-circuit-500/30 bg-circuit-500/10 text-circuit-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-circuit-500" />
            {eyebrow}
          </div>
        )}
        <h1 className="heading-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg leading-relaxed text-silicon-500">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
