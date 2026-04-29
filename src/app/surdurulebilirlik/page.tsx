import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Droplet,
  Zap,
  Cloud,
  Recycle,
  AlertTriangle,
  TreePine,
  Factory,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import StatCard from "@/components/StatCard";
import BarChart from "@/components/BarChart";

export const metadata: Metadata = {
  title: "Sürdürülebilirlik",
  description:
    "Çip üretiminin karbon ayak izi, su tüketimi, enerji kullanımı ve elektronik atık geri dönüşümü.",
};

export default function SurdurulebilirlikPage() {
  const waterData = [
    { label: "1 düzine yumurta üretimi", value: 200, color: "#10B981", suffix: " litre" },
    { label: "1 kot pantolon üretimi", value: 7600, color: "#3FA9FF", suffix: " litre" },
    { label: "1 araba üretimi", value: 39000, color: "#A2714A", suffix: " litre" },
    { label: "1 wafer üretimi (300mm)", value: 8000, color: "#0A84FF", suffix: " litre" },
    { label: "1 büyük çip fab. günlük", value: 19000000, color: "#0F131A", suffix: " litre" },
  ];

  const carbonData = [
    { label: "Bisiklet sürmek (1 saat)", value: 0, color: "#10B981", suffix: " kg CO₂" },
    { label: "Akıllı telefon (1 yıl kullanım)", value: 70, color: "#3FA9FF", suffix: " kg CO₂" },
    { label: "1 mikroçip üretimi (5nm)", value: 100, color: "#0A84FF", suffix: " kg CO₂" },
    { label: "İstanbul–Ankara uçak (1 kişi)", value: 130, color: "#E0B83A", suffix: " kg CO₂" },
    { label: "1 dizüstü bilgisayar üretimi", value: 320, color: "#E11D48", suffix: " kg CO₂" },
  ];

  const ewasteData = [
    { label: "2014", value: 41.8, color: "#3FA9FF", suffix: " Mt" },
    { label: "2019", value: 53.6, color: "#0A84FF", suffix: " Mt" },
    { label: "2022", value: 62, color: "#E0B83A", suffix: " Mt" },
    { label: "2030 (tahmini)", value: 82, color: "#E11D48", suffix: " Mt" },
  ];

  const recyclableMetals = [
    { label: "Altın", per: "350 g", note: "1 ton e-atıktan", color: "bg-chip-gold" },
    { label: "Bakır", per: "190 kg", note: "1 ton e-atıktan", color: "bg-orange-500" },
    { label: "Gümüş", per: "1 kg", note: "1 ton e-atıktan", color: "bg-silicon-300" },
    { label: "Paladyum", per: "120 g", note: "1 ton e-atıktan", color: "bg-purple-500" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Teknoloji & Doğa"
        title={
          <>
            Çipin gizli{" "}
            <span className="gradient-text">çevresel maliyeti</span>
          </>
        }
        description="Yarı iletken endüstrisi son derece yoğun enerji ve kaynak tüketir. Cebimizdeki telefonun arkasında milyonlarca galon su, yüksek karbon emisyonu ve toksik kimyasalların kullanıldığı bir üretim zinciri vardır. Şeffaf veriler ve döngüsel ekonomi çözümleriyle bu boyuta birlikte bakalım."
      />

      <Section eyebrow="Genel Bakış" title="Çip endüstrisinin doğaya etkisi rakamlarla">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<Droplet className="h-5 w-5" />}
            value="19M L"
            label="Günlük Su"
            description="Büyük bir çip fabrikasının günlük ultra saf su tüketimi — ortalama 60.000 evin günlük su ihtiyacına eşit."
            color="from-cyan-400 to-cyan-600"
          />
          <StatCard
            icon={<Zap className="h-5 w-5" />}
            value="100 kWh"
            label="Tek çip için enerji"
            description="Modern bir 5nm akıllı telefon işlemcisinin üretimi sırasında harcanan ortalama elektrik enerjisi."
            color="from-yellow-400 to-orange-500"
          />
          <StatCard
            icon={<Cloud className="h-5 w-5" />}
            value="0.3%"
            label="Küresel CO₂"
            description="Yarı iletken endüstrisinin küresel sera gazı salımındaki payı — havacılık endüstrisinin %20'si kadar."
            color="from-silicon-400 to-silicon-600"
          />
          <StatCard
            icon={<Recycle className="h-5 w-5" />}
            value="22.3%"
            label="Geri dönüşüm"
            description="Dünyada üretilen elektronik atığın yalnızca %22.3'ü kayıt altına alınarak geri dönüştürülüyor."
            color="from-emerald-400 to-emerald-600"
          />
        </div>
      </Section>

      <Section
        eyebrow="Su Tüketimi"
        title="Bir wafer kaç litre suya mâl olur?"
        description="Çip üretiminin her aşamasında, elektronik kalitesinde 'ultra saf su' (UPW) kullanılır. Şehir suyundan binlerce kat saf bu suyun üretimi de ayrıca enerji ister."
      >
        <div className="rounded-3xl border border-silicon-200 bg-white p-8 shadow-sm">
          <BarChart data={waterData} max={20000000} />
          <div className="mt-6 rounded-xl bg-cyan-500/10 p-4 text-sm text-cyan-900">
            <strong>Tayvan Krizi (2021):</strong> TSMC fabrikalarının bulunduğu
            Tayvan, 56 yılın en kuru dönemini yaşadığında çip endüstrisi su
            kuyruklarını oluşturarak tankerlerle su getirmek zorunda kaldı.
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Karbon Ayak İzi"
        title="Tek bir çip üretmek için ne kadar CO₂ açığa çıkar?"
        description="Çip üretimi yüksek sıcaklıklı fırınlar, sürekli iklimlendirme ve enerji yoğun saflaştırma süreçleri içerir. Bunların büyük bir kısmı hâlâ fosil yakıtlardan elde edilen elektrikle çalışmaktadır."
      >
        <div className="rounded-3xl border border-silicon-200 bg-white p-8 shadow-sm">
          <BarChart data={carbonData} max={350} />
          <div className="mt-6 rounded-xl bg-amber-500/10 p-4 text-sm text-amber-900">
            <strong>Florlu Sera Gazları:</strong> Çip üretiminde kullanılan
            SF₆, NF₃ ve CF₄ gibi gazlar, CO₂'den 7.000–25.000 kat daha fazla
            sera etkisine sahiptir. Atmosfere salındıklarında binlerce yıl
            boyunca kalıcıdırlar.
          </div>
        </div>
      </Section>

      <Section
        eyebrow="E-Atık"
        title="Elektronik atık dünyanın en hızlı büyüyen atık akımı"
        description="Atılan eski telefonlar, dizüstü bilgisayarlar, televizyonlar… Ne yazık ki bu cihazların çok az bir kısmı geri dönüştürülüyor."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-silicon-200 bg-white p-8 shadow-sm">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-circuit-600">
              Yıllık E-Atık Üretimi (Milyon Ton)
            </div>
            <BarChart data={ewasteData} max={90} />
          </div>

          <div className="rounded-3xl border border-silicon-200 bg-gradient-to-br from-silicon-900 to-silicon-700 p-8 text-white">
            <AlertTriangle className="h-8 w-8 text-chip-gold" />
            <h3 className="mt-4 font-display text-2xl font-bold">
              Saklı bir cevher
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-silicon-300">
              E-atık doğaya bırakıldığında ağır metaller toprağı ve suyu
              zehirler. Ancak doğru şekilde geri dönüştürüldüğünde, yeni
              madencilikten <strong className="text-chip-neon">10 kat daha az</strong>{" "}
              karbon emisyonuyla değerli metaller geri kazanılabilir.
            </p>
            <div className="mt-6 space-y-3">
              {recyclableMetals.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between rounded-xl border border-silicon-700 bg-silicon-800/40 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${m.color}`} />
                    <span className="text-sm font-semibold text-white">
                      {m.label}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-base font-bold text-white">
                      {m.per}
                    </div>
                    <div className="text-[10px] uppercase text-silicon-400">
                      {m.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Döngüsel Ekonomi"
        title="Çözüm: Üret → Kullan → Geri kazan"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Factory,
              title: "Yenilenebilir Enerji",
              text: "Apple, TSMC ve Intel gibi devler, fabrikalarını 2030'a kadar %100 yenilenebilir enerjiyle çalıştırma sözü verdi.",
            },
            {
              icon: Recycle,
              title: "Kapalı Su Döngüsü",
              text: "TSMC fabrikaları, kullandığı suyun %87'sini yeniden işleyerek tekrar kullanıyor.",
            },
            {
              icon: TreePine,
              title: "Daha Uzun Ömür",
              text: "Cihazları onarılabilir tasarlamak ve yazılım desteklemek, üretilen her çipin doğaya etkisini azaltır.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-silicon-200 bg-white p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-lg font-bold text-silicon-900">
                  {item.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-silicon-500">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-silicon-200 bg-gradient-to-br from-emerald-50 via-white to-circuit-500/5 p-10">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            Bireysel Eylem
          </div>
          <h3 className="mt-3 font-display text-2xl font-bold text-silicon-900 sm:text-3xl">
            Eski telefonunuzu çekmecede tutmayın
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-silicon-600">
            Türkiye'de elektronik atıkların toplandığı belediye merkezleri,
            operatör mağazaları ve teknoloji marketleri bulunuyor. Eski
            cihazınızı geri dönüşüme vermek; içindeki saflaştırılmış silisyumun,
            altının ve bakırın yeniden hayata kazandırılmasını sağlar. Bu, yeni
            kum madenciliği yapmaktan ve yüksek enerjili saflaştırma süreçlerini
            tekrarlamaktan çok daha düşük çevresel maliyettir.
          </p>
          <Link href="/sozluk" className="mt-6 btn-primary inline-flex">
            Sözlüğe Göz At <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
