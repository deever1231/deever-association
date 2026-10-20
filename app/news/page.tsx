import Link from "next/link";
import { fetchPosts } from "@/lib/cms";
import { CardGrid } from "@/components/CardGrid";

export default async function NewsPage() {
  const posts = await fetchPosts();
  const items = posts.map((post: { _id: string; title: string; excerpt?: string; slug: string; createdAt?: string }) => ({
    title: post.title,
    description: post.excerpt ?? "",
    href: `/news/${post.slug}`,
    meta: post.createdAt ? new Date(post.createdAt).toLocaleDateString("mn-MN") : undefined,
  }));

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Мэдээ</span>
          <h1>Мэдээ</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CardGrid items={items} columns={3} />
        </div>
      </section>
    </main>
  );
}
