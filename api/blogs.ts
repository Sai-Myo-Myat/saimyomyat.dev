export const fetchBlog = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs/${slug}`);
  if (!res.ok) throw new Error("Failed to load post");
  return res.json();
};
