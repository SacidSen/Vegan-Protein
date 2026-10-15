import axios from "axios";

const wordpress = axios.create({
  baseURL: "http://first-site.local/wp-json/wp/v2",
});

export interface WordPressPost {
  id: number;
  date: string;
  slug: string;

  title: {
    rendered: string;
  };

  content: {
    rendered: string;
  };

  excerpt: {
    rendered: string;
  };
}

export interface WordPressPage {
  id: number;
  date: string;
  slug: string;

  title: {
    rendered: string;
  };

  content: {
    rendered: string;
  };
}

export const getPages = () => {
  return wordpress.get<WordPressPage[]>("/pages");
};

export const getPosts = () => {
  return wordpress.get<WordPressPost[]>("/posts");
};

export const getPageBySlug = (slug: string) => {
  return wordpress.get<WordPressPage[]>(
    `/pages?slug=${slug}`
  );
};