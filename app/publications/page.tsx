import { CmsContent } from "@/components/CmsContent";

export default function PublicationsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Нийтлэл</span>
          <h1>Нийтлэл</h1>
        </div>
      </section>
      <CmsContent slug="publications" />
    </main>
  );
}
