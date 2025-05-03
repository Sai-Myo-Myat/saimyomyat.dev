"use client";
import { fetchBlogs } from "@/api-base/blogs";
import { blogKeys } from "@/api-base/query-keys/blogs";
import ContinueButton from "@/components/base/continue-button";
import BlogCard from "@/components/blogs/blog-card";
import NoData from "@/components/no-data";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

import { Playpen_Sans } from "next/font/google";

const playpen_sans = Playpen_Sans({ weight: "400", subsets: ["latin"] });

const BlogsSection = () => {
  const { data: blogs } = useQuery({
    queryKey: blogKeys.list(),
    queryFn: fetchBlogs,
  });

  return (
    <section id="blogs" className="min-h-[70vh] py-20">
      <h1 className="py-1">Featured Blogs</h1>
      <p className={cn(playpen_sans.className, "xs:text-xl py-2")}>
        {`"Sharing is not about giving up something, it’s about gaining more." — Unknown`}
      </p>
      <div className="my-4 flex flex-col gap-4">
        {blogs?.length ? (
          blogs
            ?.slice(0, 2)
            ?.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
                href={`/blogs/${blog.slug}`}
              />
            ))
        ) : (
          <NoData />
        )}
      </div>
      {blogs && blogs?.length > 1 && (
        <ContinueButton href="/blogs" label="Read more blogs" />
      )}
    </section>
  );
};

export default BlogsSection;
