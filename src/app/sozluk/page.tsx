import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Glossary from "@/components/Glossary";

export const metadata: Metadata = {
  title: "Sözlük",
  description:
    "Silisyum ve çip üretimi yolculuğunda karşılaşacağınız teknik terimlerin sade dilde açıklamaları.",
};

export default function SozlukPage() {
  return (
    <>
      <PageHeader
        eyebrow="A → Z"
        title={
          <>
            Yolculukta karşılaşacağın{" "}
            <span className="gradient-text">teknik terimler</span>
          </>
        }
        description="Sayfalar boyunca geçen Czochralski yönteminden EUV ışığına, doping işleminden kovalent bağa kadar tüm önemli kavramların sade Türkçe açıklamalarına bu sözlükten ulaşabilirsin."
      />

      <section className="container-page pb-24">
        <Glossary />
      </section>
    </>
  );
}
