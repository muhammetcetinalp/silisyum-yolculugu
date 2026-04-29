import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Atom, Mountain, Beaker, Hexagon } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import AtomDiagram from "@/components/AtomDiagram";
import CrystalLattice from "@/components/CrystalLattice";

export const metadata: Metadata = {
  title: "Silisyum Nedir?",
  description:
    "Silisyumun atomik yapısı, periyodik tablodaki yeri ve doğadaki bulunuş biçimi.",
};

const properties = [
  { label: "Sembol", value: "Si" },
  { label: "Atom Numarası", value: "14" },
  { label: "Atom Kütlesi", value: "28.085 u" },
  { label: "Grup", value: "14 (Karbon Grubu)" },
  { label: "Periyot", value: "3" },
  { label: "Sınıf", value: "Metaloid" },
  { label: "Erime Noktası", value: "1414 °C" },
  { label: "Yoğunluk", value: "2.33 g/cm³" },
];

export default function SilisyumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Atom · 14 · Si"
        title={
          <>
            Silisyum: Doğanın{" "}
            <span className="gradient-text">dijital kalbi</span>
          </>
        }
        description="Periyodik tablonun 14. grubunda yer alan, oksijenden sonra yer kabuğunda en bol bulunan ikinci element. Doğada saf halde bulunmaz; oksijenle birleşerek silisyum dioksit (SiO₂) bileşiğini oluşturur ve karşımıza kuvars kumu, çakmaktaşı ve birçok mineralin temel bileşeni olarak çıkar."
      />

      {/* Atom + Properties */}
      <Section eyebrow="Atomik Kimlik" title="Bohr modeli ile silisyum atomu">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-silicon-200 bg-white p-8 shadow-sm">
            <div className="aspect-square">
              <AtomDiagram />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-silicon-600">
              Silisyum atomunun en dış yörüngesinde (M kabuğu){" "}
              <span className="font-semibold text-chip-gold">
                4 değerlik elektronu
              </span>{" "}
              bulunur. Bu sayı, silisyumun komşu atomlarla kovalent bağ kurarak
              kararlı kristal kafesler oluşturmasının ve yarı iletken
              davranışının kökenidir.
            </p>
          </div>

          <div className="space-y-3">
            {properties.map((p) => (
              <div
                key={p.label}
                className="flex items-center justify-between rounded-2xl border border-silicon-200 bg-white px-5 py-4"
              >
                <span className="text-sm font-medium text-silicon-500">
                  {p.label}
                </span>
                <span className="font-display text-base font-bold text-silicon-900">
                  {p.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Crystal lattice */}
      <Section
        eyebrow="Kristal Yapı"
        title="Atomları kovalent bağlarla bir araya getiren elmas kafesi"
        description="Silisyum atomları, dört değerlik elektronunu komşularıyla paylaşarak elmas-kübik kristal yapısı oluşturur. Bu son derece düzenli kafes, modern çiplerin temelini atan mükemmel bir platformdur."
      >
        <div className="rounded-3xl border border-silicon-200 bg-white p-8 shadow-sm">
          <div className="aspect-[5/4] max-w-3xl mx-auto">
            <CrystalLattice />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-sand-50 p-4">
              <div className="font-display text-sm font-bold text-silicon-900">
                Kovalent Bağlar
              </div>
              <p className="mt-1 text-xs text-silicon-500">
                Her Si atomu, 4 komşusuyla elektron paylaşır.
              </p>
            </div>
            <div className="rounded-xl bg-sand-50 p-4">
              <div className="font-display text-sm font-bold text-silicon-900">
                Tetrahedral Geometri
              </div>
              <p className="mt-1 text-xs text-silicon-500">
                Bağlar 109.5° açıyla simetrik şekilde uzanır.
              </p>
            </div>
            <div className="rounded-xl bg-sand-50 p-4">
              <div className="font-display text-sm font-bold text-silicon-900">
                Tek Kristal
              </div>
              <p className="mt-1 text-xs text-silicon-500">
                Çip üretimi için kafes hiç kırılmamalıdır.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* In Nature */}
      <Section
        eyebrow="Doğada Silisyum"
        title="Bir kum tanesi neden teknolojinin başlangıç noktasıdır?"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <Mountain className="h-7 w-7 text-sand-500" />
            <h3 className="mt-4 font-display text-lg font-bold text-silicon-900">
              Yer Kabuğunun %27.7'si
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-silicon-500">
              Silisyum, oksijenden sonra yer kabuğunda en bol bulunan ikinci
              elementtir. Hemen her kayanın, kumun ve toprağın temel bileşeni
              SiO₂'dir.
            </p>
          </div>
          <div className="card">
            <Beaker className="h-7 w-7 text-circuit-500" />
            <h3 className="mt-4 font-display text-lg font-bold text-silicon-900">
              SiO₂ — Silisyum Dioksit
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-silicon-500">
              Doğada saf bulunmayan silisyum, oksijenle birleşerek silisyum
              dioksit oluşturur. Kuvars, çakmaktaşı, ametist ve opal hep SiO₂
              türevleridir.
            </p>
          </div>
          <div className="card">
            <Hexagon className="h-7 w-7 text-chip-gold" />
            <h3 className="mt-4 font-display text-lg font-bold text-silicon-900">
              Kuvars Kumu
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-silicon-500">
              Çip üretiminin başlangıç hammaddesi, yüksek saflıkta SiO₂
              içeren özel kuvars kumudur. Sıradan plaj kumu çoğu zaman yeterli
              değildir.
            </p>
          </div>
        </div>
      </Section>

      {/* Periodic context */}
      <Section
        eyebrow="Periyodik Tabloda"
        title="14. Grup — Karbon Ailesi"
        description="Silisyum, karbonun hemen altında yer alır. Karbon yaşamın temel taşıyken, silisyum dijital dünyanın temel taşı haline gelmiştir."
      >
        <div className="rounded-3xl border border-silicon-200 bg-gradient-to-br from-silicon-900 to-silicon-700 p-8 text-white">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            {[
              { sym: "C", num: 6, name: "Karbon", muted: true },
              { sym: "Si", num: 14, name: "Silisyum", highlight: true },
              { sym: "Ge", num: 32, name: "Germanyum", muted: true },
              { sym: "Sn", num: 50, name: "Kalay", muted: true },
              { sym: "Pb", num: 82, name: "Kurşun", muted: true },
              { sym: "Fl", num: 114, name: "Flerovyum", muted: true },
            ].map((el) => (
              <div
                key={el.sym}
                className={`rounded-2xl border p-4 text-center ${
                  el.highlight
                    ? "border-chip-gold bg-chip-gold/10 shadow-lg shadow-chip-gold/20"
                    : "border-silicon-700 bg-silicon-800/40"
                }`}
              >
                <div
                  className={`text-[10px] font-bold ${
                    el.highlight ? "text-chip-gold" : "text-silicon-400"
                  }`}
                >
                  {el.num}
                </div>
                <div
                  className={`font-display text-3xl font-bold ${
                    el.highlight ? "text-chip-gold" : "text-white"
                  }`}
                >
                  {el.sym}
                </div>
                <div
                  className={`text-[10px] ${
                    el.highlight ? "text-chip-gold/80" : "text-silicon-400"
                  }`}
                >
                  {el.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Link
          href="/yolculuk"
          className="group flex flex-col items-start justify-between gap-4 rounded-3xl border border-silicon-200 bg-white p-10 transition hover:border-circuit-500 sm:flex-row sm:items-center"
        >
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-circuit-600">
              Sırada
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold text-silicon-900">
              Bir kum tanesi nasıl mikroçipe dönüşür?
            </h3>
            <p className="mt-2 text-sm text-silicon-500">
              10 adımda etkileşimli yolculuk seni bekliyor.
            </p>
          </div>
          <span className="btn-primary">
            Yolculuğa Başla <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </Section>
    </>
  );
}
