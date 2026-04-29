import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Leaf,
  Cpu,
  FlaskConical,
  Microscope,
  Zap,
  Recycle,
} from "lucide-react";
import HeroIllustration from "@/components/HeroIllustration";

const features = [
  {
    icon: Layers,
    title: "Etkileşimli Görselleştirme",
    text: "Silisyumun saflaştırma ve çipe dönüşüm aşamalarını adım adım ilerleyen bir zaman çizelgesi üzerinde keşfedin.",
    href: "/yolculuk",
    color: "from-sand-300 to-sand-500",
  },
  {
    icon: Sparkles,
    title: "Sadeleştirilmiş İçerik",
    text: "Karmaşık teknik kavramları, günlük hayattan örneklerle desteklenmiş anlaşılır bir dille öğrenin.",
    href: "/silisyum",
    color: "from-circuit-400 to-circuit-600",
  },
  {
    icon: Leaf,
    title: "Sürdürülebilirlik Odaklı",
    text: "Çip üretiminin karbon ayak izi, su tüketimi ve elektronik atık geri dönüşümünü sayısal verilerle inceleyin.",
    href: "/surdurulebilirlik",
    color: "from-emerald-400 to-emerald-600",
  },
];

const milestones = [
  { icon: FlaskConical, label: "Kuvars Kumu", sub: "SiO₂" },
  { icon: Zap, label: "Ark Ocağı", sub: "1900 °C" },
  { icon: Microscope, label: "Czochralski", sub: "Tek Kristal" },
  { icon: Cpu, label: "Mikroçip", sub: "Milyarlarca Transistör" },
  { icon: Recycle, label: "Geri Dönüşüm", sub: "Döngüsel Ekonomi" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="container-page pt-12 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="chip mb-6 border-circuit-500/30 bg-circuit-500/10 text-circuit-600">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-circuit-500" />
              Muhammet Çetinalp
            </div>
            <h1 className="heading-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Kumdan Bilgisayar{" "}
              <span className="gradient-text">Çipine</span> Yolculuk
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-silicon-500">
              Yer kabuğunda en bol bulunan ikinci element olan{" "}
              <span className="font-semibold text-silicon-800">silisyum</span>,
              basit bir kum tanesinden yola çıkıp telefonumuzun, bilgisayarımızın
              ve aklınıza gelen her teknolojinin kalbi olan mikroçiplere
              dönüşüyor. Bu yolculuğun her bir adımını birlikte keşfedelim.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/yolculuk" className="btn-primary">
                Yolculuğa Başla <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/silisyum" className="btn-secondary">
                Önce Silisyumu Tanı
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-silicon-200 pt-6 sm:max-w-md">
              <div>
                <div className="font-display text-2xl font-bold text-silicon-900">
                  14
                </div>
                <div className="text-xs uppercase tracking-wider text-silicon-400">
                  Atom No.
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-silicon-900">
                  9N
                </div>
                <div className="text-xs uppercase tracking-wider text-silicon-400">
                  Saflık (%99.9999999)
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-silicon-900">
                  ~3 nm
                </div>
                <div className="text-xs uppercase tracking-wider text-silicon-400">
                  Transistör
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-sand-200/40 via-white/10 to-circuit-500/10 blur-2xl" />
            <div className="relative aspect-[5/4] rounded-[28px] border border-silicon-200/70 bg-white/80 p-6 shadow-xl shadow-silicon-900/5 backdrop-blur">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container-page py-24">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-circuit-600">
            Üç Temel Özellik
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl">
            Bilim, görsellik ve çevre bilinciyle bütünleşen bir öğrenme platformu
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.title}
                href={f.href}
                className="group relative overflow-hidden rounded-2xl border border-silicon-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-silicon-900/5"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow-md`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-xl font-bold text-silicon-900">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silicon-500">
                  {f.text}
                </p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-circuit-600 group-hover:gap-2 transition-[gap]">
                  Keşfet <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MILESTONES */}
      <section className="container-page py-16">
        <div className="rounded-3xl border border-silicon-200 bg-gradient-to-br from-silicon-900 via-silicon-800 to-silicon-900 p-10 text-white shadow-xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-circuit-400">
                Yolculuğun Beş Durağı
              </div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Kumdan başlayıp döngüsel ekonomiye uzanan rota
              </h2>
              <p className="mt-4 max-w-xl text-sm text-silicon-300">
                Her durak, silisyumun fiziksel ve kimyasal dönüşümünün bir
                evresini temsil ediyor. Yolculuk sayfasında 10 adımın tamamını
                detaylı inceleyebilirsiniz.
              </p>
              <Link
                href="/yolculuk"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-silicon-900 hover:bg-sand-100"
              >
                Tüm Adımları Gör <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-5 gap-3 lg:grid-cols-1">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.label}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-silicon-700 bg-silicon-800/60 p-4 text-center lg:flex-row lg:text-left"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-circuit-500/20 text-circuit-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        {String(i + 1).padStart(2, "0")} · {m.label}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-silicon-400">
                        {m.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/yari-iletken"
            className="group rounded-3xl border border-silicon-200 bg-white p-10 transition hover:border-circuit-500"
          >
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-circuit-600">
              Bilim
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold text-silicon-900">
              Yarı iletken nasıl çalışır?
            </h3>
            <p className="mt-3 text-sm text-silicon-500">
              4 değerlik elektronundan başlayıp doping (katkılama) ile
              transistörün "0" ve "1" mantığına nasıl ulaşıldığını inceleyin.
            </p>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-silicon-900 group-hover:gap-2 transition-[gap]">
              İncele <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
          <Link
            href="/temiz-oda"
            className="group rounded-3xl border border-silicon-200 bg-white p-10 transition hover:border-circuit-500"
          >
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-circuit-600">
              Hassasiyet
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold text-silicon-900">
              Tek bir toz zerresi neden devasa bir engeldir?
            </h3>
            <p className="mt-3 text-sm text-silicon-500">
              Nano boyuttaki transistörlerin yanında bir toz zerresi neden dağ
              gibi durur ve neden temiz odaya ihtiyaç duyarız?
            </p>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-silicon-900 group-hover:gap-2 transition-[gap]">
              İncele <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
