import { BlogType } from "@/types/blogs";
import { useQuery } from "@tanstack/react-query";
import { useQueryFunctionWrapper } from "./base";

const fetchBlogs = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_BASE}/blogs`);
  const result = await response.json();
  return result.data as BlogType[];
};

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
}

const fetchBlog = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE}/blogs?filters[slug][$eq]=${slug}`
  );
  const result = await response.json();
  return result.data[0] as BlogType;
};

export function useBlog(slug: string) {
  return useQuery({
    queryKey: ["blog-detail"],
    queryFn: useQueryFunctionWrapper<string, BlogType>(fetchBlog, slug),
  });
}