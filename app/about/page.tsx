import { fetchPageBySlug } from "@/lib/cms";

export default async function AboutPage() {
  const page = await fetchPageBySlug("about");
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Бидний тухай</span>
          <h1>{page?.name ?? "Бидний тухай"}</h1>
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
