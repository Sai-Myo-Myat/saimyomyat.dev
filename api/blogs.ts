import { BlogType } from "@/types/blogs";

export const fetchBlog = async (slug: string): Promise<BlogType> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs/${slug}`);
  console.log("res from reading blog", res);
  if (!res.ok) throw new Error("Failed to load blog");
  return res.json();
};

export const fetchBlogs = async (): Promise<BlogType[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs`);
  console.log("res from reading blogs", res);
  if (!res.ok) throw new Error("Failed to load blogs");
  return res.json();
};
