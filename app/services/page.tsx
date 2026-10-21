import Link from "next/link";
import { CmsContent } from "@/components/CmsContent";

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Үйлчилгээ</h1>
          <p className="lead">Энэ хэсэг гишүүнчлэл дотор нэгтгэгдсэн.</p>
          <Link className="button" href="/membership">Гишүүнчлэл рүү очих</Link>
        </div>
      </section>
      <CmsContent slug="services" fallback={<section className="section"><div className="container"></div></section>} />
    </main>
  );
}