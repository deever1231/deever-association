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
  { _id: "1", label: "Нүүр", url: "/" },
  { _id: "2", label: "Бидний тухай", url: "/about" },
  { _id: "3", label: "Гишүүнчлэл", url: "/membership" },
  { _id: "4", label: "Сургалт", url: "/training" },
  { _id: "5", label: "Мэдээ", url: "/news" },
  { _id: "6", label: "Арга хэмжээ", url: "/events" },
  { _id: "7", label: "Холбоо барих", url: "/contact" },
];

const footerMenu = [
  { _id: "1", label: "Нүүр", url: "/" },
  { _id: "2", label: "Бидний тухай", url: "/about" },
  { _id: "3", label: "Холбоо барих", url: "/contact" },
];

function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><a href="mailto:info@deever.mn">info@deever.mn</a> · <a href="tel:+97670000000">+976 7000-0000</a></span>
          <div className="topbar-social">
            <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
          </div>
        </div>
      </div>
      <div className="header">
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
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Дээвэр холбоо</h3>
        <p><a href="mailto:info@deever.mn">info@deever.mn</a> · <a href="tel:+97670000000">+976 7000-0000</a> · <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a></p>
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
