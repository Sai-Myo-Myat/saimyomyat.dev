"use client";

import { useBlog } from "@/api/blogs";
import ContentLoading from "@/components/content-loading";
import ContentNotFound from "@/components/content-not-found";
import { BlogDetailPageProps } from "@/types/blogs";


const BlogDetailView: React.FC<BlogDetailPageProps> = ({ params }) => {
  const slug = params.slug;
  const { data: blog, isLoading, error } = useBlog(slug);

  if (isLoading) {
    return <ContentLoading>Loading...</ContentLoading>;
  }

  if (error || !blog) {
    return <ContentNotFound />;
  }

  return (
    <>
      <h2 className="text-primary">{blog.title}</h2>
      <p className="text-sm text-muted">{`( ${blog.date} )`}</p>
      <div
        className="py-8"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </>
  );
};

export default BlogDetailView;
