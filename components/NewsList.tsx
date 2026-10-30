"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  createdAt?: string;
};

export function NewsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const endpoint = process.env.NEXT_PUBLIC_ERXES_ENDPOINT ?? "";
        const token = process.env.NEXT_PUBLIC_ERXES_APP_TOKEN ?? "";
        const language = process.env.NEXT_PUBLIC_ERXES_LANGUAGE ?? "mn";
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-app-token": token },
          body: JSON.stringify({
            query: `query($language: String) {
              cpPosts(language: $language, status: published) {
                _id title slug excerpt createdAt
              }
            }`,
            variables: { language },
          }),
        });
        const data = await res.json();
        const all: Post[] = data?.data?.cpPosts ?? [];
        setPosts(
          all.filter(
            (p) => ![p.title, p.excerpt, p.content].some((t) => t && t.includes("??"))
          )
        );
      } catch {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return null;
  if (!posts.length) return null;

  return (
    <section className="section soft">
      <div className="container">
        <h2 className="section-title"><span className="section-title-accent" />Сүүлийн мэдээ</h2>
        <div className="grid grid-3">
          {posts.map((p) => (
            <Link key={p._id} className="card" href={`/news/${p.slug}`} style={{ display: "block", color: "inherit" }}>
              <div className="card-image" />
              <h3>{p.title}</h3>
              {p.excerpt && <p>{p.excerpt}</p>}
              <span className="meta">{p.createdAt ? new Date(p.createdAt).toLocaleDateString("mn-MN") : ""}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
