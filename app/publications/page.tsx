import Link from "next/link";
import { CmsContent } from "@/components/CmsContent";

export default function PublicationsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Нийтлэл</h1>
        </div>
      </section>
      <CmsContent slug="publications" fallback={
        <section className="section">
          <div className="container">
            <div className="grid grid-3">
              <div className="card">
                <div className="card-image"></div>
                <h3>Агентын зөвлөмж</h3>
                <p>Зохиогч: Дээвэр холбоо</p>
                <Link href="/publications/detail" className="button secondary">Унших</Link>
              </div>
            </div>
          </div>
        </section>
      } />
    </main>
  );
}