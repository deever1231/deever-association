import { CmsContent } from "@/components/CmsContent";

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Үйлчилгээ</span>
          <h1>Үйлчилгээ</h1>
        </div>
      </section>
      <CmsContent slug="services" />
    </main>
  );
}
