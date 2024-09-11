"use client";

import BlogCard from "@/components/blogs/blog-card";
import { cn } from "@/lib/utils";

import { Playpen_Sans } from "next/font/google";

const playpen_sans = Playpen_Sans({ weight: "400", subsets: ["latin"] });

const BlogsSection = () => {
  return (
    <section id="blogs" className="h-[70vh] py-20">
      <h1 className="py-1">Featured Blogs</h1>
      <p className={cn(playpen_sans.className, "xs:text-xl py-2")}>
        {`"Sharing is not about giving up something, it’s about gaining more." — Unknown`}
      </p>
      <div className="my-4 flex flex-col gap-4">
        <BlogCard
          blog={{
            title: "const and let",
            date: "12 /Jul / 2024",
            tags: ["javascript"],
          }}
        />
        <BlogCard
          blog={{
            title: "Dynamic and Static",
            date: "4 / Jul / 2023",
            tags: ["javascript", "programming"],
          }}
        />
      </div>
    </section>
  );
};

export default BlogsSection;
