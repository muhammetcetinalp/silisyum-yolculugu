"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

interface Entry {
  term: string;
  definition: string;
}

const entries: Entry[] = [
  {
    term: "Bunny Suit",
    definition:
      "Çip fabrikası çalışanlarının temiz odaya girmeden giydiği özel, partikül geçirmez tulum. Tek bir kıl ya da deri parçası bile bir çipi mahvedebileceği için zorunludur.",
  },
  {
    term: "CMP (Kimyasal-Mekanik Parlatma)",
    definition:
      "Wafer'ın yüzeyini ayna parlaklığına gelene kadar düzleştiren işlem. Hem kimyasal aşındırma hem de mekanik sürtme bir arada kullanılır.",
  },
  {
    term: "Czochralski Yöntemi",
    definition:
      "Erimiş silisyumdan dönen bir tohum kristal çekerek tek parça kusursuz bir silisyum külçesi (ingot) elde edilen yöntem. 1916'da Polonyalı bilim insanı Jan Czochralski tarafından geliştirilmiştir.",
  },
  {
    term: "Doping (Katkılama)",
    definition:
      "Saf silisyumun kafesine eser miktarda bor (B) veya fosfor (P) gibi atomların eklenerek iletkenliğinin kontrol edilmesi. n-tipi ve p-tipi yarı iletkenler bu yolla üretilir.",
  },
  {
    term: "EGS (Elektronik Sınıf Silisyum)",
    definition:
      "%99.9999999 (9N) saflıktaki silisyum. Çip üretimi için kullanılan en saf endüstriyel malzemelerden biridir.",
  },
  {
    term: "Etching (Aşındırma)",
    definition:
      "Wafer üzerinde fotorezist ile korunmayan açıkta kalan bölgelerin asitler veya plazma kullanılarak nano boyutlu desenler halinde kazınması.",
  },
  {
    term: "EUV (Ekstrem Ultraviyole)",
    definition:
      "13.5 nm dalga boyunda ışıkla çalışan ve modern çip üretiminin en kritik aşaması olan fotolitografi teknolojisi. Tek bir EUV makinesi 200 milyon dolardan pahalıdır.",
  },
  {
    term: "Fotolitografi",
    definition:
      "Bir 'maske' üzerinden geçirilen UV ya da EUV ışığıyla wafer yüzeyine devre desenlerinin basıldığı süreç. Aslında çok yüksek hassasiyetli bir baskı tekniğidir.",
  },
  {
    term: "Fotorezist",
    definition:
      "Wafer yüzeyine kaplanan, ışığa duyarlı kimyasal madde. Işık aldığı yerlerde kimyasal yapısı değişir ve geliştirme banyosunda yıkandığında devre şablonu açığa çıkar.",
  },
  {
    term: "HEPA Filtre",
    definition:
      "Havadaki 0.3 µm partiküllerin %99.97'sini tutan yüksek verimli partikül filtresi. Temiz odaların temel donanımıdır.",
  },
  {
    term: "Ingot (Külçe)",
    definition:
      "Czochralski yöntemiyle elde edilen, silindir şeklindeki tek kristal silisyum bloğu. Bir ingot 1–2 metre uzunluğunda ve 100 kg ağırlığında olabilir.",
  },
  {
    term: "ISO Sınıfı",
    definition:
      "Temiz odaların hava kalitesini belirleyen uluslararası standart. ISO 1 en temiz, ISO 9 en kirli sınıftır. Çip fabrikaları çoğu zaman ISO 3-4 seviyesindedir.",
  },
  {
    term: "Karbotermik İndirgenme",
    definition:
      "Yüksek sıcaklıkta SiO₂'nin karbon (kömür/kok) ile tepkimeye sokularak silisyuma indirgenmesi: SiO₂ + 2C → Si + 2CO. Metalürjik silisyum bu yöntemle üretilir.",
  },
  {
    term: "Kovalent Bağ",
    definition:
      "Atomların değerlik elektronlarını paylaşarak oluşturduğu güçlü kimyasal bağ. Silisyum atomları 4 değerlik elektronlarıyla 4 komşusuyla kovalent bağ kurar.",
  },
  {
    term: "MG-Si (Metalürjik Sınıf Silisyum)",
    definition:
      "%98–99 saflıkta silisyum. Çelik üretimi, alüminyum alaşımları ve silikon polimerler için yeterli, ancak çip üretimi için yetersizdir.",
  },
  {
    term: "n-tipi Yarı İletken",
    definition:
      "Fosfor gibi 5 değerlik elektronlu atomlarla katkılanmış silisyum. Yük taşıyıcısı serbest elektronlardır.",
  },
  {
    term: "p-tipi Yarı İletken",
    definition:
      "Bor gibi 3 değerlik elektronlu atomlarla katkılanmış silisyum. Yük taşıyıcısı 'delik' (eksik elektron) olarak adlandırılan boşluklardır.",
  },
  {
    term: "Polikristalin Silisyum",
    definition:
      "Çok sayıda küçük kristalin bir araya gelmesiyle oluşan silisyum. Siemens sürecinin çıktısıdır ve Czochralski ile tek kristale dönüştürülür.",
  },
  {
    term: "Siemens Süreci",
    definition:
      "Triklorosilan gazının hidrojenle indirgenerek polikristalin silisyum üretildiği endüstriyel süreç. EGS üretiminin standart yöntemidir.",
  },
  {
    term: "Transistör",
    definition:
      "Elektrik akımını açıp kapatan veya yönlendiren nano boyutlu yarı iletken anahtar. Modern bir mikroçipte milyarlarca tane bulunur ve hep birlikte mantıksal '0' ve '1' değerlerini üretir.",
  },
  {
    term: "Triklorosilan (HSiCl₃)",
    definition:
      "Silisyumun saflaştırılmasında ara ürün olan uçucu gaz. Distilasyon ile çok yüksek saflığa ulaştırılabilmesi nedeniyle Siemens sürecinin başlangıç maddesidir.",
  },
  {
    term: "Ultra Saf Su (UPW)",
    definition:
      "1 ppt (trilyonda 1) saflığa kadar arıtılmış su. Wafer'ları yıkamak için kullanılır; içme suyundan binlerce kat saftır.",
  },
  {
    term: "Wafer",
    definition:
      "Silisyum külçesinden kesilmiş, üzerine yüzlerce çipin üretildiği ince silisyum disk. Modern fabrikalar 300 mm (12 inç) çapındaki wafer'ları kullanır.",
  },
  {
    term: "Yarı İletken",
    definition:
      "Belirli koşullar altında elektrik akımını ileten, diğer koşullarda yalıtkan davranan malzeme. Silisyum, germanyum ve galyum arsenit en bilinen örnekleridir.",
  },
];

export default function Glossary() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    if (!q) return entries;
    return entries.filter(
      (e) =>
        e.term.toLocaleLowerCase("tr").includes(q) ||
        e.definition.toLocaleLowerCase("tr").includes(q)
    );
  }, [query]);

  return (
    <div>
      <div className="relative mx-auto mb-10 max-w-xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-silicon-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Terim ara… (örn. fotolitografi, doping)"
          className="w-full rounded-2xl border border-silicon-300 bg-white py-4 pl-12 pr-4 text-sm font-medium text-silicon-900 outline-none placeholder:text-silicon-400 focus:border-circuit-500 focus:ring-4 focus:ring-circuit-500/10"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-silicon-200 bg-white p-10 text-center text-sm text-silicon-500">
          Aradığın kriterle eşleşen terim bulunamadı.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((e) => (
            <div
              key={e.term}
              className="rounded-2xl border border-silicon-200 bg-white p-6 transition hover:border-circuit-500"
            >
              <div className="font-display text-base font-bold text-silicon-900">
                {e.term}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-silicon-600">
                {e.definition}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-center text-xs text-silicon-400">
        {filtered.length} / {entries.length} terim
      </div>
    </div>
  );
}
