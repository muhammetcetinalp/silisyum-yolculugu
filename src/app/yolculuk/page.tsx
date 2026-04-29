import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import JourneyTimeline from "@/components/JourneyTimeline";
import Link from "next/link";
import Section from "@/components/Section";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kumdan Çipe Yolculuk",
  description:
    "Silisyumun kuvars kumundan başlayıp bitmiş bir mikroçipe dönüşmesini 10 etkileşimli adımda keşfedin.",
};

export default function YolculukPage() {
  return (
    <>
      <PageHeader
        eyebrow="10 Adımlı Etkileşimli Yolculuk"
        title={
          <>
            Bir kum tanesinden{" "}
            <span className="gradient-text">milyarlarca transistöre</span>
          </>
        }
        description="Kuvars kumunun saflaştırılmasından başlayıp tamamen bitmiş bir mikroçipe ulaşan yolculuğun her adımını adım numarasından tıklayarak keşfedebilir, ileri-geri ilerleyerek süreci kendi hızınızda takip edebilirsiniz."
      />

      <JourneyTimeline />

      <Section>
        <Link
          href="/yari-iletken"
          className="group flex flex-col items-start justify-between gap-4 rounded-3xl border border-silicon-200 bg-white p-10 transition hover:border-circuit-500 sm:flex-row sm:items-center"
        >
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-circuit-600">
              Sırada
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold text-silicon-900">
              Peki transistör tam olarak ne yapıyor?
            </h3>
            <p className="mt-2 text-sm text-silicon-500">
              Doping ve transistör mantığını etkileşimli olarak inceleyelim.
            </p>
          </div>
          <span className="btn-primary">
            Yarı İletken Bilimine Geç <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </Section>
    </>
  );
}
