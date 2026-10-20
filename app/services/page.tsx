import { fetchPageBySlug } from "@/lib/cms";

export default async function ServicesPage() {
  const page = await fetchPageBySlug("services");
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Үйлчилгээ</span>
          <h1>{page?.name ?? "Үйлчилгээ"}</h1>
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
