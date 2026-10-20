import Link from "next/link";
import { CmsContent } from "@/components/CmsContent";

export default function TrainingPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Сургалт</span>
          <h1>Сургалт</h1>
        </div>
      </section>
      <CmsContent slug="training" />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
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
