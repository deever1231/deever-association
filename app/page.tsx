import Link from "next/link";
import { fetchPageBySlug, fetchPosts } from "@/lib/cms";
import { CardGrid } from "@/components/CardGrid";

export default async function HomePage() {
  const [homePage, posts] = await Promise.all([
    fetchPageBySlug("home"),
    fetchPosts(),
  ]);

  const newsItems = posts.slice(0, 3).map((post: { _id: string; title: string; excerpt?: string; slug: string; createdAt?: string }) => ({
    title: post.title,
    description: post.excerpt ?? "",
    href: `/news/${post.slug}`,
  }));

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Blue / White Institutional Portal</span>
            <h1>Үл хөдлөх хөрөнгийн салбарын нэгдсэн дуу хоолой</h1>
            <p className="lead">Бид салбарын бизнес эрхлэгчдийг нэгтгэж, мэргэжлийн ёс зүй, стандарт, хөгжлийг дэмжин, төр болон хувийн хэвшлийн хамтын ажиллагааг бэхжүүлнэ.</p>
            <div className="hero-actions">
              <Link className="button" href="/join">Гишүүн болох</Link>
              <Link className="button secondary" href="/training">Сургалт</Link>
            </div>
          </div>
          <div className="skyline">
            <div className="buildings">{[120,170,90,210,150,190,110].map((height, index) => <span key={index} className="building" style={{ height }} />)}</div>
            <h3>Зөөлөн цэнхэр-цагаан digital portal</h3>
            <p>Сургалт · Гишүүнчлэл · Мэдээ · Нийтлэл</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">{homePage?.name ?? "Тавтай морилно уу"}</h2>
          <div className="prose" dangerouslySetInnerHTML={{ __html: homePage?.content ?? "" }} />
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <h2 className="section-title">Шинэ мэдээ</h2>
          <CardGrid items={newsItems} />
        </div>
      </section>
    </main>
  );
}
