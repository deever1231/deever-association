"use client";

export default function JoinPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Гишүүн болох</span>
          <h1>Гишүүний бүртгэл үүсгэх</h1>
          <p className="lead">Бүрдүүлэх материалаа бүрэн хавсаргасны дараа төлбөрийг шууд вэбээр төлөх mock хэсэг харагдана.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          <form className="form card" onSubmit={(e) => { e.preventDefault(); alert('Энэ нь загварын туршилт'); }}>
            <h2>Байгууллагын мэдээлэл</h2>
            <input className="input" required placeholder="Байгууллагын нэр" />
            <input className="input" required placeholder="РД дугаар" />
            <input className="input" required placeholder="Үйл ажиллагааны чиглэл" />
            <input className="input" required placeholder="Төлөөлөгчийн нэр" />
            <input className="input" required placeholder="Утас" />
            <input className="input" type="email" required placeholder="И-мэйл" />
            <h3>Бүрдүүлэх материал</h3>
            <input className="input" type="file" required />
            <input className="input" type="file" required />
            <input className="input" type="file" required />
            <label><input type="checkbox" required /> Нөхцөл зөвшөөрөх</label>
            <button className="button" type="submit">Материал илгээх</button>
          </form>
          <aside className="card">
            <span className="eyebrow">Төлбөр</span>
            <h2>Материал бүрэн болсны дараах төлбөр</h2>
            <p>Гишүүний бүртгэлийн хураамжийг вэбээр төлөх mock хэсэг.</p>
            <div className="card" style={{background:"#f7f9fc",boxShadow:"none"}}>
              <h3>Гишүүнчлэлийн хураамж</h3>
              <p className="meta">500,000₮</p>
              <p>QPay / карт / банкны mock сонголт</p>
            </div>
            <button className="button" onClick={() => alert('Энэ нь загварын туршилт')}>Вэбээр төлөх</button>
          </aside>
        </div>
      </section>
    </main>
  );
}
