import { fetchPageBySlug } from "@/lib/cms";

export default async function ContactPage() {
  const page = await fetchPageBySlug("contact");
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Холбоо барих</span>
          <h1>{page?.name ?? "Холбоо барих"}</h1>
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
