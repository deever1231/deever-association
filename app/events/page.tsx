import { fetchPageBySlug } from "@/lib/cms";

export default async function EventsPage() {
  const page = await fetchPageBySlug("events");
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Арга хэмжээ</span>
          <h1>{page?.name ?? "Арга хэмжээ"}</h1>
          <p className="lead">{page?.description ?? ""}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="prose" dangerouslySetInnerHTML={{ __html: page?.content ?? "" }} />
        </div>
      </section>
    </main>
  );
}
