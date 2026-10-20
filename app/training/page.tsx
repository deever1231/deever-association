import Link from "next/link";
import { fetchPageBySlug } from "@/lib/cms";

export default async function TrainingPage() {
  const page = await fetchPageBySlug("training");
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Сургалт</span>
          <h1>{page?.name ?? "Сургалт"}</h1>
          <p className="lead">{page?.description ?? ""}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="prose" dangerouslySetInnerHTML={{ __html: page?.content ?? "" }} />
          <div className="grid grid-3" style={{ marginTop: 32 }}>
            <div className="card">
              <h3>Брокерын эрх олгох сургалт</h3>
              <p>2026.10.08 · Танхим · 250,000₮</p>
              <Link className="button secondary" href="/training/brokeriin-erh-olgoh-surgalt">Дэлгэрэнгүй</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
