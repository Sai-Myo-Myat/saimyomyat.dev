"use client";

import { fetchBlogs } from "@/api-base/blogs";
import { blogKeys } from "@/api-base/query-keys/blogs";
import BlogCard from "@/components/blogs/blog-card";
import ContentLoading from "@/components/content-loading";
import ContentNotFound from "@/components/content-not-found";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Bree_Serif } from "next/font/google";
import NoData from "../no-data";

const bree_serif = Bree_Serif({ weight: "400", subsets: ["latin"] });

export default function BlogListView() {
  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({ queryKey: blogKeys.list(), queryFn: fetchBlogs });

  if (isLoading) {
    return <ContentLoading>Loading...</ContentLoading>;
  }

  if (error) {
    return <ContentNotFound />;
  }

  return (
    <>
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
        {blogs?.length ? (
          blogs?.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} href={`/blogs/${blog.slug}`} />
          ))
        ) : (
          <NoData />
        )}
      </div>
    </>
  );
}
