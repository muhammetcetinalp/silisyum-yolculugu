export interface JourneyStep {
  id: number;
  title: string;
  subtitle: string;
  short: string;
  body: string;
  facts: { label: string; value: string }[];
  formula?: string;
  color: string;
  icon: string;
}

export const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: "Kuvars Kumu",
    subtitle: "Hammadde · SiO₂",
    short:
      "Yolculuk, yüksek saflıkta SiO₂ içeren özel kuvars kumunun çıkarılmasıyla başlar.",
    body: "Plajdan tanıdığımız sıradan kum yetersiz kalır; çip üretimi için %95 üzerinde silisyum dioksit içeren özel kuvars yatakları kullanılır. Bu yataklar dünya üzerinde ABD (Spruce Pine), Rusya, Brezilya ve Çin'de yoğunlaşmıştır.",
    facts: [
      { label: "Saflık", value: "%95+ SiO₂" },
      { label: "Kaynak", value: "Spruce Pine (ABD)" },
      { label: "Form", value: "Kristal kuvars" },
    ],
    formula: "SiO₂",
    color: "from-sand-300 to-sand-500",
    icon: "mountain",
  },
  {
    id: 2,
    title: "Karbotermik İndirgeme",
    subtitle: "Ark Ocağı · ~1900 °C",
    short:
      "Kuvars, devasa elektrik ark ocaklarında karbon (kömür/kok) ile tepkimeye sokulur.",
    body: "Yüksek sıcaklıkta gerçekleşen bu kimyasal reaksiyon, oksijeni karbon monoksit gazı olarak uzaklaştırır ve geriye %98–99 saflıkta 'Metalürjik Sınıf Silisyum' (MG-Si) bırakır. Bu silisyum çelik, alüminyum alaşımları ve silikon polimerler için yeterlidir; ama çip için değil.",
    facts: [
      { label: "Sıcaklık", value: "~1900 °C" },
      { label: "Saflık", value: "%98–99 (MG-Si)" },
      { label: "Yan ürün", value: "CO gazı" },
    ],
    formula: "SiO₂ + 2C → Si + 2CO",
    color: "from-orange-400 to-red-500",
    icon: "flame",
  },
  {
    id: 3,
    title: "Triklorosilan Üretimi",
    subtitle: "Gaz Faz Saflaştırma",
    short:
      "Metalürjik silisyum, hidrojen klorür (HCl) ile tepkimeye sokularak triklorosilan gazına dönüştürülür.",
    body: "MG-Si tozu, yatak reaktöründe HCl gazıyla yakılır ve uçucu HSiCl₃ (triklorosilan) oluşur. Bu gaz, distilasyon (damıtma) ile yüzlerce defa saflaştırılarak demir, alüminyum ve bor gibi yabancı atomlardan ayrılır.",
    facts: [
      { label: "Reaktif", value: "HCl gazı" },
      { label: "Yöntem", value: "Fraksiyonel distilasyon" },
      { label: "Hedef", value: "Yabancı atom < 1 ppb" },
    ],
    formula: "Si + 3HCl → HSiCl₃ + H₂",
    color: "from-emerald-400 to-teal-500",
    icon: "beaker",
  },
  {
    id: 4,
    title: "Elektronik Sınıf Silisyum",
    subtitle: "Siemens Süreci · %99.9999999 (9N)",
    short:
      "Saflaştırılmış HSiCl₃, Siemens reaktörlerinde hidrojenle indirgenerek son derece saf silisyum çubuklara dönüşür.",
    body: "Reaktör içerisindeki sıcak silisyum tohum çubukları üzerine, gaz fazından silisyum atom atom çöker. Bu süreç sonunda elde edilen Elektronik Sınıf Silisyum (EGS), 1 milyar atomda yalnızca 1 yabancı atom içerecek kadar saftır — dünyanın en saf üretilen malzemelerinden biri.",
    facts: [
      { label: "Saflık", value: "%99.9999999 (9N)" },
      { label: "Süreç", value: "Siemens (CVD)" },
      { label: "Form", value: "Polikristalin" },
    ],
    formula: "HSiCl₃ + H₂ → Si + 3HCl",
    color: "from-circuit-400 to-circuit-600",
    icon: "sparkles",
  },
  {
    id: 5,
    title: "Czochralski Yöntemi",
    subtitle: "Tek Kristal Külçe · 1420 °C",
    short:
      "Polikristalin silisyum, kuvars potada eritilir ve dönen bir tohum kristalle yavaşça yukarı çekilerek dev bir tek kristale dönüştürülür.",
    body: "Erimiş silisyum, batırılan minik tohum kristalin atomik dizilimini kopyalayarak soğur. Saatlerce süren bu yavaş çekme işlemi sonunda 1–2 metre boyunda, kusursuz tek kristal bir silisyum külçesi (ingot) elde edilir.",
    facts: [
      { label: "Sıcaklık", value: "1420 °C" },
      { label: "Süre", value: "1–2 gün" },
      { label: "Çap", value: "300 mm (12 inç)" },
    ],
    color: "from-purple-400 to-purple-600",
    icon: "rotate",
  },
  {
    id: 6,
    title: "Wafer Dilimleme",
    subtitle: "Elmas Testere · ~775 µm",
    short:
      "Silindirik silisyum külçesi, elmas tel testerelerle kâğıt inceliğindeki disklere — wafer'lara — kesilir.",
    body: "Kesim sonrası her wafer, kimyasal-mekanik parlatma (CMP) ile ayna parlaklığına ulaşana kadar düzleştirilir. Yüzeydeki en küçük çiziği bile transistörler için bir uçurum olduğundan bu adım nanometre hassasiyeti gerektirir.",
    facts: [
      { label: "Çap", value: "300 mm" },
      { label: "Kalınlık", value: "775 µm" },
      { label: "Yüzey", value: "Ayna parlaklığında" },
    ],
    color: "from-silicon-400 to-silicon-600",
    icon: "disc",
  },
  {
    id: 7,
    title: "Oksidasyon & İnce Film",
    subtitle: "SiO₂ Yalıtkan Tabakası",
    short:
      "Wafer yüzeyi yüksek sıcaklıkta oksitlenerek doğal bir SiO₂ yalıtkan tabaka oluşturulur; ardından çeşitli ince filmler kaplanır.",
    body: "Silisyumun en büyük avantajlarından biri, yüzeyinde kendiliğinden oluşan mükemmel bir SiO₂ yalıtkan tabakaya sahip olmasıdır. Bu tabaka, transistörlerin kapı (gate) bölgesinde elektrik akımını yalıtarak çipin çalışmasına olanak tanır.",
    facts: [
      { label: "Yöntem", value: "Termal oksidasyon" },
      { label: "Tabaka", value: "SiO₂, Si₃N₄, metal" },
      { label: "Kalınlık", value: "Birkaç nm" },
    ],
    color: "from-cyan-400 to-cyan-600",
    icon: "layers",
  },
  {
    id: 8,
    title: "Fotolitografi",
    subtitle: "EUV Işık · 13.5 nm",
    short:
      "Wafer ışığa duyarlı kimyasalla kaplanır; üzerinde devre haritası bulunan maskeden geçen UV/EUV ışığı şablonu wafer'a basar.",
    body: "Bugün kullanılan EUV (Ekstrem Ultraviyole) sistemleri 13.5 nm dalga boyunda ışıkla çalışır. Tek bir EUV makinesi 200 milyon dolardan pahalıdır ve dünyada bunu üreten yalnızca tek bir şirket (ASML) vardır. Bu adım, çip üretiminin teknolojik darboğazıdır.",
    facts: [
      { label: "Dalga boyu", value: "13.5 nm (EUV)" },
      { label: "Üretici", value: "ASML (NL)" },
      { label: "Hassasiyet", value: "<3 nm desen" },
    ],
    color: "from-indigo-400 to-violet-600",
    icon: "lightbulb",
  },
  {
    id: 9,
    title: "Doping & Etching",
    subtitle: "Devrelerin Kazınması",
    short:
      "Açıkta kalan kısımlar plazma ve asitle aşındırılır (etching); belirli bölgelere bor veya fosfor atomları eklenerek (doping) iletkenlik kontrol edilir.",
    body: "Bor eklemek 'p-tipi' (delik baskın), fosfor eklemek 'n-tipi' (elektron baskın) silisyum üretir. Bu iki bölgenin yan yana getirilmesiyle transistörler doğar. Bir wafer üzerinde bu işlemler 100'ün üzerinde tekrar edilebilir.",
    facts: [
      { label: "p-tipi", value: "Bor (B)" },
      { label: "n-tipi", value: "Fosfor (P)" },
      { label: "Toplam adım", value: "500–1000+" },
    ],
    color: "from-rose-400 to-rose-600",
    icon: "scissors",
  },
  {
    id: 10,
    title: "Test, Kesim & Paketleme",
    subtitle: "Bitmiş Mikroçip",
    short:
      "Wafer üzerindeki yüzlerce bağımsız çip elmas testereyle kesilir, test edilir ve plastik/seramik gövdeye paketlenerek son ürün ortaya çıkar.",
    body: "Her wafer üzerinde, modeline göre 100 ile 1000 arasında bağımsız çip bulunur. Hatalı olanlar elenir, sağlamlar kesilip pinleriyle birleştirilir ve kullanıma hazır mikroçipler olarak fabrikadan çıkar. Yolculuğun sonunda bir avuç kum, milyarlarca transistörlü bir hesaplama mucizesine dönüşmüştür.",
    facts: [
      { label: "Verim", value: "%70–95 başarı" },
      { label: "Transistör", value: "Milyarlarca" },
      { label: "Boyut", value: "1–600 mm²" },
    ],
    color: "from-silicon-700 to-silicon-900",
    icon: "cpu",
  },
];
