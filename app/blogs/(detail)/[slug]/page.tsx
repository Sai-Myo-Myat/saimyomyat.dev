import { fetchBlog } from "@/api-base/blogs";
import { BlogDetailPageProps } from "@/types/blogs";
import "./detail.css";
import HydratedBlogDetail from "./hydrated-blog-detail";

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const slug = params.slug;
  const blog = await fetchBlog(slug);

  if (blog) {
    return {
      title: `${blog.title}`,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_URL}/blogs/${blog.slug}`,
      },
    };
  }
}

const BlogDetail = ({ params }: BlogDetailPageProps) => {
  return (
    <>
      <HydratedBlogDetail params={params} />
    </>
  );
};

export default BlogDetail;
