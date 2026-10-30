import Link from "next/link";
import { NewsList } from "@/components/NewsList";

export default function NewsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Мэдээ, мэдээлэл</span>
          <h1>Салбарын болон холбооны мэдээ</h1>
          <p className="lead">Салбарын мэдээ, холбооны мэдээ, хууль эрх зүйн мэдээлэл, зарлал.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="filters">
            <span className="chip">Салбарын мэдээ</span>
            <span className="chip">Холбооны мэдээ</span>
            <span className="chip">Хууль, эрх зүйн мэдээлэл</span>
            <span className="chip">Зарлал</span>
          </div>
          <div className="grid grid-4">
            <div className="card"><div className="card-image"></div><h3>Салбарын мэдээ</h3><p>Үл хөдлөх хөрөнгийн салбарын шинэ мэдээлэл.</p><Link className="button secondary" href="/news/detail">Унших</Link></div>
            <div className="card"><div className="card-image"></div><h3>Холбооны мэдээ</h3><p>Холбооны үйл ажиллагаа, гишүүнчлэлийн мэдээлэл.</p><Link className="button secondary" href="/news/detail">Унших</Link></div>
            <div className="card"><div className="card-image"></div><h3>Хууль, эрх зүйн мэдээлэл</h3><p>Зохицуулалт, дүрэм, эрх зүйн тайлбар.</p><Link className="button secondary" href="/news/detail">Унших</Link></div>
            <div className="card"><div className="card-image"></div><h3>Зарлал</h3><p>Сургалт, уулзалт, бүртгэлийн зар.</p><Link className="button secondary" href="/news/detail">Унших</Link></div>
          </div>
        </div>
      </section>
      <NewsList />
    </main>
  );
}