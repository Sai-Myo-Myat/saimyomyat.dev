"use client";

import BlogCard from "@/components/blogs/blog-card";

const BlogsSection = () => {
  return (
    <section id="blogs" className="h-[70vh] py-20">
      <h1 className="border-y-2 py-1 my-2">Blogs</h1>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
        animi fuga possimus pariatur quia itaque quos sapiente eos ad, a
        temporibus consectetur, sed culpa sunt impedit aut nulla laudantium vel.
      </div>
      <div className="my-8 flex flex-col gap-4">
        <BlogCard
          blog={{
            title: "const and let",
            date: "12 / Jul / 2024",
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
