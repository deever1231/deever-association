"use client";

import { useEffect, useState } from "react";

type PageContent = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  content?: string;
};

export function CmsContent({ slug, fallback }: { slug: string; fallback?: React.ReactNode }) {
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
        // Try multiple slug patterns: exact match, page-* prefix, or original slug
        const patterns = [slug, `page-${slug}`, slug.replace(/^page-/, '')];
        let found = null;
        for (const pattern of patterns) {
          found = pages.find((p: PageContent) => p.slug === pattern);
          if (found) break;
        }
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
  if (!page) return <>{fallback}</>;
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
