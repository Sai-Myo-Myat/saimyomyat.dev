"use client";
import { useBlogs } from "@/api/blogs";
import ContinueButton from "@/components/base/continue-button";
import BlogCard from "@/components/blogs/blog-card";
import NoData from "@/components/no-data";
import { cn } from "@/lib/utils";

import { Playpen_Sans } from "next/font/google";

const playpen_sans = Playpen_Sans({ weight: "400", subsets: ["latin"] });

const BlogsSection = () => {
  const { data: blogs } = useBlogs();
  return (
    <section id="blogs" className="h-[70vh] py-20">
      <h1 className="py-1">Featured Blogs</h1>
      <p className={cn(playpen_sans.className, "xs:text-xl py-2")}>
        {`"Sharing is not about giving up something, it’s about gaining more." — Unknown`}
      </p>
      <div className="my-4 flex flex-col gap-4">
        {blogs?.length ? (
          blogs
            ?.slice(0, 3)
            ?.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                href={`/blogs/${blog.slug}`}
              />
            ))
        ) : (
          <NoData />
        )}
      </div>
      <ContinueButton href="/blogs" label="Read more blogs" />
    </section>
  );
};

export default BlogsSection;
