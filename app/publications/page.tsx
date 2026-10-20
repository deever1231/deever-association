import { fetchPageBySlug } from "@/lib/cms";

export default async function PublicationsPage() {
  const page = await fetchPageBySlug("publications");
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Нийтлэл</span>
          <h1>{page?.name ?? "Нийтлэл"}</h1>
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
