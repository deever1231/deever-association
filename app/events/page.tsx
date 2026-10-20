import { CmsContent } from "@/components/CmsContent";

export default function EventsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Арга хэмжээ</span>
          <h1>Арга хэмжээ</h1>
        </div>
      </section>
      <CmsContent slug="events" />
    </main>
  );
}
