"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  createdAt?: string;
};

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const endpoint = process.env.NEXT_PUBLIC_ERXES_ENDPOINT ?? "";
        const token = process.env.NEXT_PUBLIC_ERXES_APP_TOKEN ?? "";
        const language = process.env.NEXT_PUBLIC_ERXES_LANGUAGE ?? "mn";
        const query = `
          query GetPosts($language: String) {
            cpPosts(language: $language, status: published) {
              _id
              title
              slug
              excerpt
              content
              createdAt
            }
          }
        `;
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-app-token": token },
          body: JSON.stringify({ query, variables: { language } }),
        });
        const data = await res.json();
        const posts = data?.data?.cpPosts ?? [];
        const found = posts.find((p: Post) =>
          p.slug === slug &&
          ![p.title, p.excerpt, p.content].some((t) => t && t.includes("??"))
        );
        setPost(found ?? null);
      } catch {
        setPost(null);
      } finally {
        setLoading(false);
      }
    }
    if (slug) load();
  }, [slug]);

  if (loading) return <main><section className="section"><div className="container">Ачаалж байна...</div></section></main>;
  if (!post) return <main><section className="page-hero"><div className="container"><h1>Олдсонгүй</h1></div></section></main>;

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Мэдээ</span>
          <h1>{post.title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container detail">
          {post.excerpt && <p className="lead">{post.excerpt}</p>}
          {post.content && <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />}
        </div>
      </section>
    </main>
  );
}
