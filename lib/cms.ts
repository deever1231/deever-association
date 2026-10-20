import { getClient } from "./apollo-client";
import {
  GET_PAGES,
  GET_PAGE_CONTENT,
  GET_POSTS,
  GET_POST_CONTENT,
  GET_HEADER_MENU,
  GET_FOOTER_MENU,
} from "./graphql/queries";

const LANGUAGE = process.env.NEXT_PUBLIC_ERXES_LANGUAGE ?? "mn";

export async function fetchPages() {
  const { data } = await getClient().query({
    query: GET_PAGES,
    variables: { language: LANGUAGE },
    context: { fetchOptions: { revalidate: 60 } },
  });
  return data.cpPages ?? [];
}

export async function fetchPageBySlug(slug: string) {
  const { data } = await getClient().query({
    query: GET_PAGE_CONTENT,
    variables: { language: LANGUAGE },
    context: { fetchOptions: { revalidate: 60 } },
  });
  const pages = data.cpPages ?? [];
  return pages.find((page: { slug: string }) => page.slug === slug) ?? null;
}

export async function fetchPosts() {
  const { data } = await getClient().query({
    query: GET_POSTS,
    variables: { language: LANGUAGE },
    context: { fetchOptions: { revalidate: 60 } },
  });
  return data.cpPosts ?? [];
}

export async function fetchPostBySlug(slug: string) {
  const { data } = await getClient().query({
    query: GET_POST_CONTENT,
    variables: { language: LANGUAGE },
    context: { fetchOptions: { revalidate: 60 } },
  });
  const posts = data.cpPosts ?? [];
  return posts.find((post: { slug: string }) => post.slug === slug) ?? null;
}

export async function fetchHeaderMenu() {
  const { data } = await getClient().query({
    query: GET_HEADER_MENU,
    variables: { language: LANGUAGE },
    context: { fetchOptions: { revalidate: 60 } },
  });
  return data.cpMenus ?? [];
}

export async function fetchFooterMenu() {
  const { data } = await getClient().query({
    query: GET_FOOTER_MENU,
    variables: { language: LANGUAGE },
    context: { fetchOptions: { revalidate: 60 } },
  });
  return data.cpMenus ?? [];
}
