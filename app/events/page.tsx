import Link from "next/link";

export default function EventsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Арга хэмжээ</span>
          <h1>Гишүүн байгууллагад зориулсан арга хэмжээ</h1>
          <p className="lead">Уулзалт, хурал, форум зэрэг арга хэмжээнүүд зөвхөн гишүүн байгууллага нэвтэрсний дараа харагдана.</p>
          <Link className="button" href="/login">Гишүүнээр нэвтрэх</Link>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          <div className="card"><h3>Уулзалт</h3><p>Гишүүн байгууллагуудад зориулсан хаалттай уулзалт. Нэвтэрсний дараа дэлгэрэнгүй харагдана.</p></div>
          <div className="card"><h3>Хурал</h3><p>Гишүүдийн хурал, хэлэлцүүлгийн мэдээлэл. Нэвтрэх шаардлагатай.</p></div>
          <div className="card"><h3>Форум</h3><p>Салбарын форум, хамтын ажиллагааны арга хэмжээ. Нэвтэрсэн гишүүдэд харагдана.</p></div>
        </div>
      </section>
    </main>
  );
}