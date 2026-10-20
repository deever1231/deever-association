import { CmsContent } from "@/components/CmsContent";

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Бидний тухай</span>
          <h1>Бидний тухай</h1>
        </div>
      </section>
      <CmsContent slug="about" />
    </main>
  );
}
