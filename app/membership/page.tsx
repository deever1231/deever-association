import { CmsContent } from "@/components/CmsContent";

export default function MembershipPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Гишүүнчлэл</span>
          <h1>Гишүүнчлэл</h1>
        </div>
      </section>
      <CmsContent slug="membership" />
    </main>
  );
}
