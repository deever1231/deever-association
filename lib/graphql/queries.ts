import { gql } from "@apollo/client";

export const GET_PAGES = gql`
  query GetPages($language: String) {
    cpPages(language: $language) {
      _id
      name
      slug
      status
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!, $language: String) {
    cpPage(slug: $slug, language: $language) {
      _id
      name
      slug
      description
      content
      status
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts($language: String) {
    cpPosts(language: $language, status: published) {
      _id
      title
      slug
      description
      excerpt
      createdAt
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!, $language: String) {
    cpPost(slug: $slug, language: $language) {
      _id
      title
      slug
      content
      description
      excerpt
      createdAt
    }
  }
`;

export const GET_HEADER_MENU = gql`
  query GetHeaderMenu($language: String) {
    cpMenus(language: $language, kind: "header") {
      _id
      label
      url
      order
    }
  }
`;

export const GET_FOOTER_MENU = gql`
  query GetFooterMenu($language: String) {
    cpMenus(language: $language, kind: "footer") {
      _id
      label
      url
      order
    }
  }
`;
