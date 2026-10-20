import { fetchPageBySlug } from "@/lib/cms";

export default async function MembershipPage() {
  const page = await fetchPageBySlug("membership");
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Гишүүнчлэл</span>
          <h1>{page?.name ?? "Гишүүнчлэл"}</h1>
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
