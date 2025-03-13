"use client";

import { useBlog } from "@/api/blogs";
import "./detail.css";

interface PageProps {
  params: {
    slug: string;
  };
}

const BlogDetail = ({ params }: PageProps) => {
  const slug = params.slug;
  const { data: blog, isLoading } = useBlog(slug);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h2 className="text-primary">{blog.title}</h2>
      <p className="text-sm text-muted">{`( ${blog.date} )`}</p>
      <div
        className="py-8"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetail;
