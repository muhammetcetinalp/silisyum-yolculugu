import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wind, Shield, Droplet, Eye } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SizeCompare from "@/components/SizeCompare";

export const metadata: Metadata = {
  title: "Temiz Oda",
  description:
    "Çip üretiminin neden temiz odalarda yapılması gerektiğini ve bu mekanların nasıl çalıştığını keşfedin.",
};

const cleanlinessLevels = [
  {
    label: "Sokak Havası",
    particles: "35.000.000",
    fill: 100,
    color: "bg-rose-500",
  },
  {
    label: "Ev İçi",
    particles: "10.000.000",
    fill: 70,
    color: "bg-orange-500",
  },
  {
    label: "Ofis",
    particles: "1.000.000",
    fill: 40,
    color: "bg-yellow-500",
  },
  {
    label: "Hastane Ameliyathanesi",
    particles: "100.000",
    fill: 20,
    color: "bg-emerald-500",
  },
  {
    label: "ISO 4 Temiz Oda",
    particles: "352",
    fill: 6,
    color: "bg-circuit-500",
  },
  {
    label: "ISO 1 Çip Fab.",
    particles: "1",
    fill: 1,
    color: "bg-chip-neon",
  },
];

export default function TemizOdaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hassasiyet · Saflık · Disiplin"
        title={
          <>
            Bir <span className="gradient-text">toz zerresi</span> bile çipinizi
            mahveder
          </>
        }
        description="Modern bir mikroçip üzerindeki transistörler, yalnızca birkaç nanometre boyutundadır. Normal bir odadaki tek bir toz zerresi bu nano devrenin üzerinde dağ gibi durur ve devreyi kısa devreye sokarak çipi tamamen kullanılmaz hale getirir."
      />

      <Section>
        <SizeCompare />
      </Section>

      <Section
        eyebrow="ISO Sınıflandırması"
        title="Çip fabrikaları nereden bakarsanız bakın akıl alır gibi değil"
        description="Aşağıdaki grafik, 1 metreküp havada bulunan ≥0.5 µm boyutundaki partikül sayısını gösterir. Çip fabrikaları, dünyanın en temiz iç mekanlarıdır."
      >
        <div className="rounded-3xl border border-silicon-200 bg-white p-8 shadow-sm">
          <div className="space-y-3">
            {cleanlinessLevels.map((l) => (
              <div key={l.label}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-semibold text-silicon-700">
                    {l.label}
                  </span>
                  <span className="font-mono text-silicon-500">
                    {l.particles} partikül/m³
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-silicon-100">
                  <div
                    className={`h-full ${l.color} transition-all`}
                    style={{ width: `${l.fill}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-sand-50 p-4 text-sm text-silicon-600">
            <strong className="text-silicon-900">Karşılaştırma:</strong> Sokakta
            soluduğumuz hava, en üst sınıf çip fabrikasından{" "}
            <span className="font-mono">35 milyon kat</span> daha kirlidir.
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Temiz Odanın Anatomisi"
        title="Tek bir partikülü bile dışarıda bırakan dört önlem"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: Wind,
              title: "HEPA Filtreler",
              text: "Tavandan zemine doğru sürekli hava akımı yaratan, 0.3 µm partikülün %99.97'sini tutan filtreler.",
            },
            {
              icon: Shield,
              title: "Bunny Suit",
              text: "Çalışanlar saçlarından parmak uçlarına kadar her yeri kapatan özel tulumlar (bunny suit) giymek zorundadır.",
            },
            {
              icon: Droplet,
              title: "Ultra Saf Su",
              text: "Wafer'lar arasında 1 ppt (trilyonda 1) saflıkta arıtılmış su ile yıkanır — şehir suyundan binlerce kat saf.",
            },
            {
              icon: Eye,
              title: "Sarı Işık",
              text: "Fotolitografi alanlarında UV ışığı engellemek için sarı LED'ler kullanılır; bu yüzden çip fab.lar sarı görünür.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-silicon-200 bg-white p-6"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-circuit-500/10 text-circuit-600">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-base font-bold text-silicon-900">
                    {item.title}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-silicon-500">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="İlginç Bilgi"
        title="Çalışanların kozmetik kullanması bile yasaktır"
      >
        <div className="rounded-3xl border border-silicon-200 bg-gradient-to-br from-silicon-900 to-silicon-700 p-10 text-white">
          <p className="max-w-3xl text-base leading-relaxed">
            Çip fabrikalarında çalışan mühendisler temiz odaya girmeden önce
            saatlerce eğitim alır. Parfüm, ruj, oje, hatta günlük ten kremi
            kullanmaları kesinlikle yasaktır. Bunny suit içindeyken bile
            saatte yaklaşık <strong className="text-chip-neon">10 milyon</strong>{" "}
            deri parçacığı dökerler ve bu parçacıkların hepsi havalandırma ile
            anında uzaklaştırılır. Bir kişi temiz odaya girmeden önce, hava
            duşundan geçirilerek üzerindeki tüm gevşek partiküllerden
            arındırılır.
          </p>
        </div>
      </Section>

      <Section>
        <Link
          href="/surdurulebilirlik"
          className="group flex flex-col items-start justify-between gap-4 rounded-3xl border border-silicon-200 bg-white p-10 transition hover:border-circuit-500 sm:flex-row sm:items-center"
        >
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-circuit-600">
              Sırada
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold text-silicon-900">
              Bu hassasiyetin çevresel bir bedeli var
            </h3>
            <p className="mt-2 text-sm text-silicon-500">
              Çip endüstrisinin su, enerji ve karbon ayak izini inceleyelim.
            </p>
          </div>
          <span className="btn-primary">
            Sürdürülebilirlik <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </Section>
    </>
  );
}
