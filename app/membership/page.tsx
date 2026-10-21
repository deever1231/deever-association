import Link from "next/link";
import { CmsContent } from "@/components/CmsContent";

export default function MembershipPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Гишүүнчлэл</span>
          <h1>Гишүүн байгууллагын нэгдсэн орчин</h1>
          <p className="lead">Гишүүн болох нөхцөл, эрх үүрэг, давуу тал, гишүүдэд үзүүлэх үйлчилгээ болон онлайн бүртгэлийн мэдээлэл.</p>
          <Link className="button" href="/join">Онлайн гишүүний бүртгэл</Link>
        </div>
      </section>
      <CmsContent slug="membership" fallback={
        <section className="section">
          <div className="container grid grid-3">
            <div className="card"><h3>Гишүүн болох нөхцөл</h3><p>Салбарын үйл ажиллагаа эрхэлдэг, холбооны дүрэм, ёс зүйг зөвшөөрсөн байгууллага бүртгүүлнэ.</p></div>
            <div className="card"><h3>Гишүүний эрх, үүрэг</h3><p>Холбооны үйл ажиллагаанд оролцох, мэдээлэл авах, дүрэм журмыг мөрдөх.</p></div>
            <div className="card"><h3>Гишүүний давуу тал</h3><p>Сургалтын хөнгөлөлт, мэдээлэл, хамтын ажиллагааны боломж.</p></div>
          </div>
        </section>
      } />
      <section className="section soft">
        <div className="container">
          <h2 className="section-title">Гишүүдэд үзүүлэх үйлчилгээ</h2>
          <div className="grid grid-4">
            <div className="card"><h3>Зөвлөгөө</h3><p>Гишүүнчлэл, ёс зүй, стандартын зөвлөмж.</p></div>
            <div className="card"><h3>Сургалт</h3><p>Гишүүдэд зориулсан мэргэжлийн сургалт.</p></div>
            <div className="card"><h3>Мэдээлэл</h3><p>Мэдээ, нийтлэл, мэдээллийн товхимол.</p></div>
            <div className="card"><h3>Хамтын ажиллагаа</h3><p>Салбарын байгууллагуудын холболт.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}