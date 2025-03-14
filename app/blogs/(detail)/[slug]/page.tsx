import "./detail.css";
import HydratedBlogDetail from "./hydrated-blog-detail";

interface PageProps {
  params: {
    slug: string;
  };
}

const BlogDetail = ({ params }: PageProps) => {
  return (
    <>
      <HydratedBlogDetail params={params} />
    </>
  );
};

export default BlogDetail;
