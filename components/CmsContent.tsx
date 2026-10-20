"use client";

import { useEffect, useState } from "react";

type PageContent = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  content?: string;
};

export function CmsContent({ slug }: { slug: string }) {
  const [page, setPage] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const endpoint = process.env.NEXT_PUBLIC_ERXES_ENDPOINT ?? "";
        const token = process.env.NEXT_PUBLIC_ERXES_APP_TOKEN ?? "";
        const language = process.env.NEXT_PUBLIC_ERXES_LANGUAGE ?? "mn";
        const query = `
          query GetPages($language: String) {
            cpPages(language: $language) {
              _id
              name
              slug
              description
              content
            }
          }
        `;
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-app-token": token,
          },
          body: JSON.stringify({ query, variables: { language } }),
        });
        const data = await res.json();
        const pages = data?.data?.cpPages ?? [];
        const found = pages.find((p: PageContent) => p.slug === slug);
        setPage(found ?? null);
      } catch {
        setPage(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) return <section className="section"><div className="container">Ачаалж байна...</div></section>;
  if (!page) return <section className="section"><div className="container">Контент олдсонгүй.</div></section>;

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{page.name}</h2>
        {page.description && <p className="section-subtitle">{page.description}</p>}
        {page.content && <div className="prose" dangerouslySetInnerHTML={{ __html: page.content }} />}
      </div>
    </section>
  );
}
