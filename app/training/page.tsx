import Link from "next/link";

export default function TrainingPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Сургалт</h1>
          <p className="lead">Мэргэжлийн сургалтууд</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="filters">
            <span className="chip">Хайлт</span>
            <span className="chip">Огноо</span>
            <span className="chip">Үнэ</span>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-image"></div>
              <h3>Брокерын эрх олгох сургалт</h3>
              <p>2026.10.08 · Танхим · 250,000₮</p>
              <Link className="button secondary" href="/training/detail">Дэлгэрэнгүй</Link>
            </div>
            <div className="card">
              <div className="card-image"></div>
              <h3>Миний сургалтын цонх</h3>
              <p>Бүртгүүлсэн сургалтын процесс, төлбөр, байршил, материал</p>
              <Link className="button secondary" href="/training/window">Нэвтрэх</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}