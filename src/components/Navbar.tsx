"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Atom } from "lucide-react";

const navLinks = [
  { href: "/silisyum", label: "Silisyum Nedir?" },
  { href: "/yolculuk", label: "Yolculuk" },
  { href: "/yari-iletken", label: "Yarı İletken" },
  { href: "/temiz-oda", label: "Temiz Oda" },
  { href: "/surdurulebilirlik", label: "Sürdürülebilirlik" },
  { href: "/sozluk", label: "Sözlük" },
  { href: "/hakkinda", label: "Hakkında" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-silicon-200/60 bg-sand-50/80 backdrop-blur-lg">
      <nav className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sand-300 via-silicon-400 to-circuit-500 text-white shadow-sm transition group-hover:scale-105">
            <Atom className="h-5 w-5" strokeWidth={2.2} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold text-silicon-900">
              Silisyumun Yolculuğu
            </div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-silicon-400">
              Kumdan Çipe
            </div>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-silicon-900 text-white"
                      : "text-silicon-600 hover:bg-white hover:text-silicon-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          aria-label="Menüyü aç/kapat"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-silicon-200 bg-white/80 p-2 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-silicon-200/60 bg-sand-50/95 lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-silicon-900 text-white"
                        : "text-silicon-700 hover:bg-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
