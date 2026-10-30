import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero hero-with-slider">
        <div className="hero-slider">
          <div className="hero-slide slide-one"></div>
          <div className="hero-slide slide-two"></div>
          <div className="hero-slide slide-three"></div>
        </div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text-panel">
            <span className="eyebrow">Дээвэр нэгдсэн холбоо</span>
            <h1>Үл хөдлөх хөрөнгийн салбарын нэгдсэн дуу хоолой</h1>
            <p className="lead">Бид салбарын бизнес эрхлэгчдийг нэгтгэж, мэргэжлийн ёс зүй, стандарт, хөгжлийг дэмжин, төр болон хувийн хэвшлийн хамтын ажиллагааг бэхжүүлнэ.</p>
            <div className="hero-actions">
              <Link className="button" href="/join">Гишүүн болох</Link>
              <Link className="button secondary" href="/training">Сургалт</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          <div>
            <span className="eyebrow">Товч танилцуулга</span>
            <h2 className="section-title"><span className="section-title-accent" />Манай холбооны тухай</h2>
            <p className="section-subtitle">Үл хөдлөх хөрөнгийн бизнес эрхлэгчдийн Дээвэр нэгдсэн холбоо нь салбарын байгууллагуудыг нэгтгэж, сургалт, мэдээлэл, хамтын ажиллагаа, мэргэжлийн төлөөллийг хөгжүүлдэг төв портал юм.</p>
            <Link className="button" href="/about">Дэлгэрэнгүй</Link>
          </div>
          <div className="grid grid-3">
            <div className="card"><div className="card-image" style={{height:260,display:"grid",placeItems:"center"}}><span>Зураг байрлуулах</span></div></div>
            <div className="card"><div className="card-image" style={{height:260,display:"grid",placeItems:"center"}}><span>Зураг байрлуулах</span></div></div>
            <div className="card"><div className="card-image" style={{height:260,display:"grid",placeItems:"center"}}><span>Зураг байрлуулах</span></div></div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="container">
          <span className="section-title-accent" />
          <h2 className="section-title">Тоон үзүүлэлт</h2>
          <p className="section-subtitle">Холбооны үйл ажиллагаа, гишүүнчлэл, сургалт, хамтын ажиллагааны гол үзүүлэлтүүд.</p>
          <div className="grid grid-4">
            <div className="stat-card"><h3>750+</h3><p>Сургалтад хамрагдсан</p></div>
            <div className="stat-card"><h3>80+</h3><p>Гишүүн байгууллага</p></div>
            <div className="stat-card"><h3>120+</h3><p>Мэдээ, нийтлэл</p></div>
            <div className="stat-card"><h3>25+</h3><p>Хамтын ажиллагаа</p></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title"><span className="section-title-accent" />Календарчилсан төлөвлөгөө</h2>
          <p className="section-subtitle">Энэ хэсэгт календарчилсан төлөвлөгөөг зургаар оруулахад бэлэн placeholder байршуулсан.</p>
          <Link className="card" href="/events/" style={{minHeight:360,display:"grid",placeItems:"center",background:"linear-gradient(135deg,#eef3f9,#ffffff)"}}>
            <div style={{textAlign:"center"}}>
              <h3>Calendar image placeholder</h3>
              <p>Төлөвлөгөөний зураг энд байрлана. Дарж орвол томоор харагдана.</p>
              <span className="button secondary">Томоор харах</span>
            </div>
          </Link>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <h2 className="section-title"><span className="section-title-accent" />Гишүүн байгууллагууд</h2>
          <p className="section-subtitle">Лого дээр дарахад тухайн байгууллагын вэб хуудас руу шилжинэ.</p>
          <div className="logo-wall">
            <a className="member-logo" href="https://example.com" target="_blank" rel="noopener">DEEVER</a>
            <a className="member-logo" href="https://example.com" target="_blank" rel="noopener">REALTY</a>
            <a className="member-logo" href="https://example.com" target="_blank" rel="noopener">HOME</a>
            <a className="member-logo" href="https://example.com" target="_blank" rel="noopener">ESTATE</a>
            <a className="member-logo" href="https://example.com" target="_blank" rel="noopener">BROKER</a>
            <a className="member-logo" href="https://example.com" target="_blank" rel="noopener">CAPITAL</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title"><span className="section-title-accent" />Манай байршил</h2>
          <p className="section-subtitle">Гишүүн байгууллагуудын хэсгийн доор шууд харагдах том газрын зураг болон байршлын мэдээлэл.</p>
          <div className="card location-card" style={{minHeight:620,display:"grid",gridTemplateColumns:"0.85fr 1.4fr",gap:32,alignItems:"stretch",background:"linear-gradient(135deg,#eef3f9,#ffffff)"}}>
            <div style={{padding:20}}>
              <span className="eyebrow">Байршил</span>
              <h3>Улаанбаатар хот</h3>
              <p>Дээвэр холбооны оффисын байршил</p>
              <p><strong>Утас:</strong> +976 7000-0000</p>
              <p><strong>И-мэйл:</strong> info@deever.mn</p>
              <p><strong>Ажлын цаг:</strong> Даваа–Баасан 09:00–18:00</p>
              <Link className="button secondary" href="/contact/">Холбоо барих</Link>
            </div>
            <div className="large-map" style={{minHeight:520,borderRadius:8,background:"linear-gradient(135deg,#dce6f1,#ffffff)",display:"grid",placeItems:"center",border:"1px solid var(--line)",boxShadow:"var(--shadow)"}}>
              <div style={{textAlign:"center"}}>
                <h2>Газрын зураг</h2>
                <p>Том map placeholder · Энд бодит Google Map эсвэл зураг байршуулна</p>
                <span className="button">Байршил томоор харах</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section cta-band">
        <div className="container">
          <h2 className="section-title"><span className="section-title-accent" />Холбоонд нэгдээрэй</h2>
          <p>Салбарын хамгийн том мэргэжлийн сүлжээнд нэгдэж, сургалт, мэдээлэл, хамтын ажиллагааны давуу эрхүүдийг хүртээрэй.</p>
          <Link className="button" href="/join">Гишүүн болох</Link>
        </div>
      </section>
    </main>
  );
}
