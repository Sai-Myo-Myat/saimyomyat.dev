import { markdownToHtml } from "@/lib/markdownToHtml";
import { BlogType } from "@/types/blogs";
import { useQuery } from "@tanstack/react-query";
import { useQueryFunctionWrapper } from "./base";
import { blogKeys } from "./query-keys/blogs";

export const fetchBlogs = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_BASE}/blogs`);
  const result = await response.json();
  return result.data as BlogType[];
};

export function useBlogs() {
  return useQuery({
    queryKey: blogKeys.list(),
    queryFn: fetchBlogs,
  });
}

export const fetchBlog = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE}/blogs?filters[slug][$eq]=${slug}`
  );
  const result = await response.json();
  const data = {
    ...result.data[0],
    content: await markdownToHtml(result.data[0].content),
  };
  return data as BlogType;
};

export function useBlog(slug: string) {
  return useQuery({
    queryKey: blogKeys.detail(slug),
    queryFn: useQueryFunctionWrapper<string, BlogType>(fetchBlog, slug),
  });
}