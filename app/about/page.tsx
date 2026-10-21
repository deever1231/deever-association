import { CmsContent } from "@/components/CmsContent";

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Бидний тухай</span>
          <h1>Холбооны зорилго, хөгжил, удирдлагын бүтэц</h1>
          <p className="lead">Салбарын ёс зүй, стандарт, мэдлэг, хамтын ажиллагааг зөөлөн боловч мэргэжлийн байдлаар хөгжүүлнэ.</p>
        </div>
      </section>
      <CmsContent slug="about" fallback={
        <section className="section">
          <div className="container grid grid-2">
            <article className="card">
              <span className="eyebrow">Зорилго</span>
              <h3>Холбооны зорилго</h3>
              <p>Үл хөдлөх хөрөнгийн бизнес эрхлэгчдийг нэгтгэж, салбарын мэргэжлийн түвшинг дээшлүүлэх.</p>
            </article>
            <article className="card">
              <span className="eyebrow">Зорилт</span>
              <h3>Холбооны зорилт</h3>
              <p>Гишүүнчлэл, сургалт, ёс зүй, стандарт, салбарын мэдээлэл судалгааг олон нийтэд хүргэх.</p>
            </article>
          </div>
        </section>
      } />
      <section className="section soft">
        <div className="container">
          <h2 className="section-title">Удирдлагын бүтэц</h2>
          <div className="grid grid-3">
            <article className="card"><div className="card-image"></div><h3>Удирдах зөвлөлийн дарга</h3><p>Нэр, албан тушаал, товч танилцуулга.</p></article>
            <article className="card"><div className="card-image"></div><h3>Гүйцэтгэх захирал</h3><p>Захирлын мэндчилгээ болон өдөр тутмын удирдлага.</p></article>
            <article className="card"><div className="card-image"></div><h3>Сургалт, бодлогын хороо</h3><p>Сургалт, судалгаа, стандартын чиглэл хариуцна.</p></article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          <div>
            <h2 className="section-title">Захирлын мэндчилгээ</h2>
            <p className="section-subtitle">Манай холбоо нь гишүүн байгууллагуудынхаа эрх ашгийг хамгаалж, салбарын мэргэжлийн нэр хүнд, ёс зүй, хамтын ажиллагааг дээшлүүлэхийн төлөө ажиллаж байна. Та бүхнийг нэгдсэн дуу хоолой, хариуцлагатай оролцоотойгоор хамтран ажиллахыг урьж байна.</p>
          </div>
          <div className="card">
            <div className="card-image"></div>
            <h3>Гүйцэтгэх захирал</h3>
            <p>Зураг, нэр, албан тушаал байрлах хэсэг.</p>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <h2 className="section-title">Бидний үүсэл хөгжил</h2>
          <p className="section-subtitle">Холбоо нь салбарын байгууллагуудын хамтын санаачилга, мэргэжлийн оролцоонд тулгуурлан хөгжиж байна.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Үйл ажиллагааны чиглэл</h2>
          <div className="grid grid-4">
            <div className="card"><h3>Гишүүнчлэл</h3><p>Гишүүн байгууллагуудыг идэвхжүүлэх.</p></div>
            <div className="card"><h3>Сургалт</h3><p>Мэргэжлийн сургалт зохион байгуулах.</p></div>
            <div className="card"><h3>Судалгаа</h3><p>Салбарын мэдээлэл түгээх.</p></div>
            <div className="card"><h3>Төлөөлөл</h3><p>Салбараа төлөөлөх.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
