"use client";

import { useBlog } from "@/api/blogs";
import Loader from "@/components/Loader";
import ContentNotFound from "@/components/content-not-found";
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
    return <Loader>Loading...</Loader>;
  }

  if (!blog) {
    return <ContentNotFound />;
  }

  return (
    <>
      <Loader>{blog.title}</Loader>
      <h2 className="text-primary">{blog.title}</h2>
      <p className="text-sm text-muted">{`( ${blog.date} )`}</p>
      <div
        className="py-8"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </>
  );
};

export default BlogDetail;
