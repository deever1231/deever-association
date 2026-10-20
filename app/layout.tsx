import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Дээвэр холбоо",
  description: "Үл хөдлөх хөрөнгийн салбарын мэргэжлийн байгууллагын төв портал",
  robots: { index: true, follow: true },
};

function toHref(url: string) {
  if (!url) return "/";
  return url.startsWith("http") ? url : url;
}

const headerMenu = [
  { _id: "1", label: "Нүүр", url: "/", order: 1 },
  { _id: "2", label: "Бидний тухай", url: "/about", order: 2 },
  { _id: "3", label: "Гишүүнчлэл", url: "/membership", order: 3 },
  { _id: "4", label: "Сургалт", url: "/training", order: 4 },
  { _id: "5", label: "Мэдээ", url: "/news", order: 5 },
  { _id: "6", label: "Арга хэмжээ", url: "/events", order: 6 },
  { _id: "7", label: "Холбоо барих", url: "/contact", order: 7 },
];

const footerMenu = [
  { _id: "1", label: "Нүүр", url: "/", order: 1 },
  { _id: "2", label: "Бидний тухай", url: "/about", order: 2 },
  { _id: "3", label: "Холбоо барих", url: "/contact", order: 3 },
];

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo"><span className="logo-mark" /> Дээвэр холбоо</Link>
        <nav className="nav">
          {headerMenu.map((item) => (
            <Link key={item._id} href={toHref(item.url)}>{item.label}</Link>
          ))}
        </nav>
        <div className="actions">
          <Link className="button secondary" href="/login">Нэвтрэх</Link>
          <Link className="button" href="/join">Гишүүн болох</Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Дээвэр холбоо</h3>
          <p>Цэнхэр-цагаан брэндтэй, зөөлөн хөдөлгөөнтэй erxes CMS portal.</p>
          <p><a href="mailto:info@deever.mn">info@deever.mn</a> · <a href="tel:+97670000000">+976 7000-0000</a></p>
        </div>
        <div>
          <h4>Цэс</h4>
          {footerMenu.map((item) => (
            <p key={item._id}><Link href={toHref(item.url)}>{item.label}</Link></p>
          ))}
        </div>
        <div>
          <h4>Систем</h4>
          <p><Link href="/member">Гишүүний кабинет</Link></p>
          <p><Link href="/admin">Админы удирдлага</Link></p>
        </div>
        <div>
          <h4>Холбоо</h4>
          <p>Facebook</p>
          <p>Map</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
