import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Layers,
  Calendar,
  CheckCircle2,
  BookMarked,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Proje Hakkında",
  description:
    "Bu projenin amaçları, ele aldığı sorular, değerlendirme ölçütleri ve çalışma takvimi.",
};

const subQuestions = [
  "Silisyum nedir ve doğada ne şekilde bulunur?",
  "Kum (SiO₂) içindeki diğer maddelerden ayrılarak nasıl saf silisyuma dönüştürülür?",
  "Bilgisayar çipleri için gereken kusursuz, tek parça kristal yapı nasıl elde edilir?",
  "Yarı iletken ne demektir ve silisyum bu iş için neden ideal bir malzemedir?",
  "Saf bir silisyum dilimi nasıl olup da bilgiyi işleyen bir mikroçipe dönüşür?",
  "Çiplerin üzerine gözle görülmeyen minik devre yolları nasıl çizilir?",
  "Tek bir toz zerresinin bile olmadığı 'temiz odalara' neden ihtiyaç duyarız?",
  "Tüm bu çip üretim sürecinin doğaya, su tüketimine ve çevreye etkisi nedir?",
  "Eski elektronik eşyalarımızı geri dönüştürmek neden çok önemlidir?",
];

const milestones = [
  {
    month: "Mart — Araştırma ve Planlama",
    items: [
      "26 Mart: Alt soruların netleştirilmesi ve literatür araştırması",
    ],
  },
  {
    month: "Nisan — Tasarım ve Görselleştirme",
    items: [
      "2 Nisan: Akış diyagramları ve 'Kumdan Çipe' zaman çizelgesi taslağı",
      "9 Nisan: Menü/içerik yapısının belirlenmesi",
      "16 Nisan: Saflaştırma görsel şemalarının tasarlanması",
      "23 Nisan: Çipe dönüşüm ve devre çizimi görselleri",
      "30 Nisan: Görsellerin web formatına getirilmesi",
    ],
  },
  {
    month: "Mayıs — Geliştirme ve İçerik Entegrasyonu",
    items: [
      "7 Mayıs: Web sitesi altyapısının kurulması",
      "14 Mayıs: Saflaştırma ve çip üretim aşamalarının siteye eklenmesi",
      "21 Mayıs: Sürdürülebilirlik içeriklerinin entegrasyonu",
      "28 Mayıs: Son kontrol ve testler",
    ],
  },
  {
    month: "Haziran — Raporlama ve Sunum",
    items: [
      "4 Haziran: Sonuç raporunun yazılması",
      "11 Haziran: Final sunumu ve teslim öncesi son kontrol",
    ],
  },
];

const evaluation = [
  { label: "Adım Hiyerarşisi", weight: 10 },
  { label: "Farklı Kaynaklarla Araştırma", weight: 10 },
  { label: "Kreatif Sunum", weight: 15 },
  { label: "Bilginin Dijital Ortama Aktarımı", weight: 55 },
  { label: "Proje Sunumu", weight: 10 },
];

export default function HakkindaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bireysel Proje"
        title={
          <>
            Doğanın <span className="gradient-text">dijital kalbi</span>:
            Silisyumun Serüveni
          </>
        }
        description="Bu web sitesi, silisyum elementinin atomik yapısından bilgisayar çipine dönüşümüne kadar olan yolculuğu etkileşimli bir öğrenme platformu olarak sunmak amacıyla Muhammet Çetinalp tarafından bireysel proje çalışması olarak hazırlanmıştır."
      />

      {/* Goals */}
      <Section eyebrow="Aşama 1" title="Projenin Hedefleri">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card">
            <Target className="h-7 w-7 text-circuit-500" />
            <h3 className="mt-4 font-display text-lg font-bold text-silicon-900">
              Etkileşimli Sunum
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-silicon-500">
              Silisyumun ham halinden çipe dönüşüm sürecini etkileşimli görsellerle
              somut hale getirmek.
            </p>
          </div>
          <div className="card">
            <Lightbulb className="h-7 w-7 text-chip-gold" />
            <h3 className="mt-4 font-display text-lg font-bold text-silicon-900">
              Anlamlı Bağlantılar
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-silicon-500">
              Kullanıcıların temel kimya bilgilerini günlük hayattaki teknolojik
              cihazlarla pekiştirmesini sağlamak.
            </p>
          </div>
          <div className="card">
            <Layers className="h-7 w-7 text-emerald-500" />
            <h3 className="mt-4 font-display text-lg font-bold text-silicon-900">
              Bütünsel Bakış
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-silicon-500">
              Saflaştırma süreçlerini, çevresel etkileri ve sürdürülebilirlik
              boyutunu kapsayan bütüncül bir bakış sunmak.
            </p>
          </div>
        </div>
      </Section>

      {/* Sub questions */}
      <Section
        eyebrow="Aşama 6"
        title="Projenin yanıtladığı alt sorular"
        description="Web sitesi, aşağıdaki dokuz temel soruyu mantıksal bir akışla, görsel destekli ve sade bir dille yanıtlamaktadır."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {subQuestions.map((q, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-silicon-200 bg-white p-5"
            >
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-circuit-500/10 font-display text-sm font-bold text-circuit-600">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-sm leading-relaxed text-silicon-700">{q}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Evaluation */}
      <Section
        eyebrow="Aşama 4"
        title="Değerlendirme Ölçütleri"
        description="Proje, aşağıdaki ağırlıklarla beş ana ölçüt üzerinden değerlendirilmektedir."
      >
        <div className="rounded-3xl border border-silicon-200 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            {evaluation.map((e) => (
              <div key={e.label}>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-silicon-700">
                    {e.label}
                  </span>
                  <span className="font-mono text-sm font-bold text-silicon-900">
                    %{e.weight}
                  </span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-silicon-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sand-400 via-circuit-500 to-silicon-700"
                    style={{ width: `${e.weight}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section
        eyebrow="Aşama 7"
        title="Çalışma Takvimi"
        description="Mart–Haziran ayları boyunca sürdürülen çalışmanın haftalık dökümü."
      >
        <div className="space-y-6">
          {milestones.map((m) => (
            <div
              key={m.month}
              className="rounded-2xl border border-silicon-200 bg-white p-6"
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-circuit-600" />
                <h3 className="font-display text-base font-bold text-silicon-900">
                  {m.month}
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {m.items.map((it, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-silicon-600"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Sources */}
      <Section eyebrow="Aşama 9" title="Faydalanılan Kaynaklar">
        <div className="rounded-3xl border border-silicon-200 bg-white p-8 shadow-sm">
          <ul className="space-y-3 text-sm text-silicon-600">
            {[
              "ASML — How does EUV lithography work? (asml.com)",
              "Intel Newsroom — From Sand to Silicon: The Making of a Microchip",
              "TSMC Sustainability Report (2023)",
              "SEMI — Semiconductor Industry Environmental Data",
              "Global E-Waste Monitor 2024 — UN International Telecommunication Union",
              "American Chemical Society — Silicon: The Element That Powers the Digital Age",
              "Britannica — Czochralski Process",
              "TÜBİTAK Bilim ve Teknik Dergisi — Yarı İletkenlerin Tarihi",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <BookMarked className="mt-0.5 h-4 w-4 shrink-0 text-circuit-600" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Author */}
      <Section>
        <div className="rounded-3xl border border-silicon-200 bg-gradient-to-br from-silicon-900 to-silicon-700 p-10 text-white">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <div className="grid h-28 w-28 place-items-center rounded-3xl bg-gradient-to-br from-sand-300 via-circuit-500 to-silicon-900 font-display text-3xl font-bold shadow-xl">
              MÇ
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-circuit-400">
                Proje Sahibi
              </div>
              <h3 className="mt-2 font-display text-3xl font-bold">
                Muhammet Çetinalp
              </h3>
              <div className="mt-1 font-mono text-sm text-silicon-300">
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-silicon-200">
                Bu proje, bireysel olarak hazırlanmış olup,
                bilimsel literatür taraması, görsel tasarım ve web geliştirme
                süreçlerinin tamamı tek bir kişi tarafından yürütülmüştür.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/yolculuk" className="btn-primary bg-white text-silicon-900 hover:bg-sand-100">
                  Yolculuğu Dene <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-silicon-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-silicon-700"
                >
                  Ana Sayfa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
