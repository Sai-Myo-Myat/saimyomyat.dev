import { BlogType } from "@/types/blogs";
import { useQuery } from "@tanstack/react-query";

const fetchBlogs = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_BASE}/blogs`);
  const result = await response.json();
  return result.data as BlogType[];
};

export function useBlogs() {
  return useQuery({
    queryKey: ["blogposts"],
    queryFn: fetchBlogs,
  });
}

const fetchBlog = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE}/blogs?filters[slug][$eq]=${slug}&populate=*`
  );
  const result = await response.json();
  return result.data as BlogType;
};
