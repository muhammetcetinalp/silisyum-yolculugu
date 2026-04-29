import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Atom, Binary } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import DopingSimulator from "@/components/DopingSimulator";
import TransistorSwitch from "@/components/TransistorSwitch";

export const metadata: Metadata = {
  title: "Yarı İletken Bilimi",
  description:
    "Yarı iletken nedir, doping nasıl çalışır ve transistör 0 ile 1'i nasıl üretir?",
};

export default function YariIletkenPage() {
  return (
    <>
      <PageHeader
        eyebrow="İletken mi, yalıtkan mı?"
        title={
          <>
            Yarı iletken: Akımı{" "}
            <span className="gradient-text">istediğimizde geçiren</span>{" "}
            malzeme
          </>
        }
        description="Yarı iletkenler, belirli koşullar altında elektrik akımını ileten, diğer koşullarda ise yalıtkan davranan özel malzemelerdir. Silisyumun 4 değerlik elektronu ve doğal SiO₂ yalıtkan tabakası, onu bu iş için ideal kılar."
      />

      <Section
        eyebrow="Üç Sınıf"
        title="Malzemeler elektrik karşısında nasıl davranır?"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-silicon-200 bg-white p-6">
            <Zap className="h-7 w-7 text-chip-gold" />
            <div className="mt-3 font-display text-lg font-bold text-silicon-900">
              İletken
            </div>
            <p className="mt-2 text-sm text-silicon-500">
              Bakır, alüminyum gibi metaller. Elektronlar serbestçe akar; akımı
              hep iletirler.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-circuit-500 bg-circuit-500/5 p-6 shadow-md">
            <Atom className="h-7 w-7 text-circuit-600" />
            <div className="mt-3 font-display text-lg font-bold text-silicon-900">
              Yarı İletken
            </div>
            <p className="mt-2 text-sm text-silicon-700">
              Silisyum, germanyum. İletkenliği <strong>kontrol edebiliriz</strong>{" "}
              — bilgisayarların tam istediği özellik.
            </p>
          </div>
          <div className="rounded-2xl border border-silicon-200 bg-white p-6">
            <Binary className="h-7 w-7 text-silicon-500" />
            <div className="mt-3 font-display text-lg font-bold text-silicon-900">
              Yalıtkan
            </div>
            <p className="mt-2 text-sm text-silicon-500">
              Cam, plastik, lastik. Elektronlar geçemez; akımı engellerler.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Doping (Katkılama)"
        title="Saf silisyumu n-tipi veya p-tipiye dönüştürmek"
        description="Saf silisyum aslında pek iletken değildir. Onu kullanışlı kılmak için kafesine eser miktarda 'yabancı' atom eklenir. Aşağıdaki simülatörde doping etkisini canlı görebilirsiniz."
      >
        <DopingSimulator />
      </Section>

      <Section
        eyebrow="Transistör"
        title="Bir kapı, bir akım, iki bit"
        description="Transistör, elektrik akımını açıp kapatan nano boyutlu bir anahtardır. Modern bir mikroçip üzerinde milyarlarca tane bulunur ve hep birlikte 0–1 dilini konuşurlar."
      >
        <TransistorSwitch />
      </Section>

      <Section
        eyebrow="Neden Silisyum?"
        title="Silisyumu yarı iletken endüstrisinin yıldızı yapan beş özellik"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              h: "Doğada Bol Bulunur",
              p: "Yer kabuğunun %27.7'si silisyumdur. Hammadde sorunu yok; başlangıç maliyeti düşük.",
            },
            {
              h: "Mükemmel Doğal Yalıtkan",
              p: "Yüzeyinde kendiliğinden oluşan SiO₂ tabakası, transistör kapısı için olağanüstü yalıtkanlık sağlar.",
            },
            {
              h: "Geniş Sıcaklık Aralığı",
              p: "Silisyum çipler -40 °C ile 125 °C arasında stabil çalışır; mobil cihazlardan otomotive kadar kullanılabilir.",
            },
            {
              h: "Mekanik Dayanıklılık",
              p: "Tek kristal silisyum çelik kadar serttir ve titreşime dayanıklıdır.",
            },
            {
              h: "Olgun Üretim Ekosistemi",
              p: "70 yıllık birikim sayesinde maliyet ve verimlilik tüm rakiplerini geride bırakır.",
            },
            {
              h: "Kontrollü İletkenlik",
              p: "Doping ile iletkenlik 12 kat hassasiyetle ayarlanabilir — başka hiçbir yaygın element bunu sunmaz.",
            },
          ].map((c) => (
            <div
              key={c.h}
              className="rounded-2xl border border-silicon-200 bg-white p-5"
            >
              <div className="font-display text-base font-bold text-silicon-900">
                {c.h}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-silicon-500">
                {c.p}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Link
          href="/temiz-oda"
          className="group flex flex-col items-start justify-between gap-4 rounded-3xl border border-silicon-200 bg-white p-10 transition hover:border-circuit-500 sm:flex-row sm:items-center"
        >
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-circuit-600">
              Sırada
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold text-silicon-900">
              Çip üretimi neden bu kadar hassas?
            </h3>
            <p className="mt-2 text-sm text-silicon-500">
              Tek bir toz zerresinin neden bir transistörü mahvettiğini görelim.
            </p>
          </div>
          <span className="btn-primary">
            Temiz Odayı Keşfet <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </Section>
    </>
  );
}
