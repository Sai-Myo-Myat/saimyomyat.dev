import { BlogType } from "@/types/blogs";
import { useQuery } from "@tanstack/react-query";

const fetchBlogs = async () => {
  const response = await fetch("http://localhost:1337/api/blogs");
  const result = await response.json();
  return result.data as BlogType[];
};

export function useBlogs() {
  return useQuery({
    queryKey: ["blogposts"],
    queryFn: fetchBlogs,
  });
}
