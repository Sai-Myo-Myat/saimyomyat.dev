"use client";

import { useBlog } from "@/api/blogs";

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
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogDetail;
