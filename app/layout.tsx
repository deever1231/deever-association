import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { fetchHeaderMenu, fetchFooterMenu } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Дээвэр холбоо",
  description: "Үл хөдлөх хөрөнгийн салбарын мэргэжлийн байгууллагын төв портал",
  robots: { index: true, follow: true },
};

function toHref(url: string) {
  if (!url) return "/";
  return url.startsWith("http") ? url : url;
}

async function Header() {
  const menu = await fetchHeaderMenu();
  const sorted = [...menu].sort((a: { order: number }, b: { order: number }) => a.order - b.order);
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo"><span className="logo-mark" /> Дээвэр холбоо</Link>
        <nav className="nav">
          {sorted.map((item: { _id: string; label: string; url: string }) => (
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

async function Footer() {
  const menu = await fetchFooterMenu();
  const sorted = [...menu].sort((a: { order: number }, b: { order: number }) => a.order - b.order);
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
          {sorted.map((item: { _id: string; label: string; url: string }) => (
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
