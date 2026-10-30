"use client";

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Холбоо барих</h1>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <p>Хаяг · Утас · И-мэйл · Facebook · Газрын зураг</p>
            <div className="card-image"></div>
          </div>
          <form className="form" onSubmit={(e) => { e.preventDefault(); alert('Энэ нь загварын туршилт'); }}>
            <input className="input" required placeholder="Нэр" />
            <input className="input" type="email" required placeholder="И-мэйл" />
            <input className="input" required placeholder="Сэдэв" />
            <textarea className="textarea" required placeholder="Зурвас"></textarea>
            <button className="button">Илгээх</button>
          </form>
        </div>
      </section>
    </main>
  );
}