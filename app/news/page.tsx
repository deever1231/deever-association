import { CmsContent } from "@/components/CmsContent";

export default function NewsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Мэдээ</span>
          <h1>Мэдээ</h1>
        </div>
      </section>
      <CmsContent slug="news" />
    </main>
  );
}
