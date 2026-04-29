import Link from "next/link";
import { Atom, Github, Mail, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-silicon-200/60 bg-silicon-900 text-silicon-100">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sand-300 via-silicon-400 to-circuit-500">
                <Atom className="h-5 w-5 text-white" strokeWidth={2.2} />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-white">
                  Silisyumun Yolculuğu
                </div>
                <div className="text-xs uppercase tracking-widest text-silicon-300">
                  Kumdan Bilgisayar Çipine
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-silicon-300">
              Yer kabuğunda en bol bulunan ikinci element olan silisyumun, basit
              bir kum tanesinden başlayıp bilgisayarımızın kalbi olan
              mikroçipe dönüşüm yolculuğunu keşfedin. Bu site, bireysel
              proje çalışması olarak hazırlanmıştır.
            </p>
          </div>

          <div>
            <div className="font-display text-sm font-semibold text-white">
              Keşfet
            </div>
            <ul className="mt-4 space-y-2 text-sm text-silicon-300">
              <li>
                <Link href="/silisyum" className="hover:text-white">
                  Silisyum Nedir?
                </Link>
              </li>
              <li>
                <Link href="/yolculuk" className="hover:text-white">
                  Kumdan Çipe Yolculuk
                </Link>
              </li>
              <li>
                <Link href="/yari-iletken" className="hover:text-white">
                  Yarı İletken Bilimi
                </Link>
              </li>
              <li>
                <Link href="/surdurulebilirlik" className="hover:text-white">
                  Sürdürülebilirlik
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-display text-sm font-semibold text-white">
              Proje
            </div>
            <ul className="mt-4 space-y-2 text-sm text-silicon-300">
              <li>
                <Link href="/sozluk" className="hover:text-white">
                  Sözlük
                </Link>
              </li>
              <li>
                <Link href="/hakkinda" className="hover:text-white">
                  Hakkında
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5" /> Bireysel Proje
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" /> Muhammet Çetinalp
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-silicon-700 pt-6 text-xs text-silicon-400 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} Muhammet Çetinalp · Tüm
            hakları saklıdır.
          </div>
          <div className="flex items-center gap-2">
            <span>Si · 14 · 28.085 u</span>
            <span className="h-1 w-1 rounded-full bg-silicon-600" />
            <span>Yarı iletken / Metaloid</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
