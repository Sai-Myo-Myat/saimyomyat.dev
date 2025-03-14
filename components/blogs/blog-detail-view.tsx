"use client";

import { useQueryFunctionWrapper } from "@/api/base";
import { fetchBlog } from "@/api/blogs";
import { blogKeys } from "@/api/query-keys/blogs";
import ContentLoading from "@/components/content-loading";
import ContentNotFound from "@/components/content-not-found";
import { BlogDetailPageProps } from "@/types/blogs";
import { useQuery } from "@tanstack/react-query";


const BlogDetailView: React.FC<BlogDetailPageProps> = ({ params }) => {
  const slug = params.slug;
  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: blogKeys.detail(slug),
    queryFn: useQueryFunctionWrapper(fetchBlog, slug),
  });

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
