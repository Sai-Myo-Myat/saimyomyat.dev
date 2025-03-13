"use client";

import BlogCard from "@/components/blogs/blog-card";
import { cn } from "@/lib/utils";
import { Bree_Serif } from "next/font/google";
import { useBlogs } from "../../api/blogs";

const bree_serif = Bree_Serif({ weight: "400", subsets: ["latin"] });

export default function BlogListPage() {
  const { data: blogs, isLoading, error } = useBlogs();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <div className="flex gap-2">
        <h1 className={cn(bree_serif.className, "text-primary font-extrabold")}>
          {`Sai Myo Myat's Blogs`}
        </h1>
      </div>
      <div className="flex flex-col gap-2 py-8">
        <p>Welcome to my personal blog.</p>
        <p className="my-1">
          Here are some of the blog posts that I have written over the years.
          Feel free to check them out! 🚀
        </p>
      </div>
      <div className="my-4 flex flex-col gap-4">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} href={`/blogs/${blog.slug}`} />
        ))}
      </div>
    </div>
  );
}
