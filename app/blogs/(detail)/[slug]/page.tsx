import { fetchBlog } from "@/api-base/blogs";
import { BlogDetailPageProps } from "@/types/blogs";
import "./detail.css";
import HydratedBlogDetail from "./hydrated-blog-detail";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: BlogDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  const blog = await fetchBlog(slug);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const previousKeywords = (await parent).keywords || [];
  const previousDescription = (await parent).description || "";

  return {
    title: blog.title,
    description: blog.description || previousDescription,
    keywords: [blog.title, ...previousKeywords],
    openGraph: {
      siteName: blog.title,
      title: blog.title,
      type: "website",
      url: `${process.env.NEXT_PUBLIC_URL}/blogs/${blog.slug}`,
      description: blog.description || previousDescription,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/${blog.image}`,
          width: "300px",
          height: "300px",
          alt: `${blog.title}'s thumbnail`,
        },
        ...previousImages,
      ],
    },
    twitter: {
      site: blog.title,
      title: blog.title,
      description: blog.description || previousDescription,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/${blog.image}`,
          width: "300px",
          height: "300px",
          alt: `${blog.title}'s thumbnail`,
        },
        ...previousImages,
      ],
    },
  };
}

const BlogDetail = async ({ params }: BlogDetailPageProps) => {
  const { slug } = await params;
  return (
    <>
      <HydratedBlogDetail params={{ slug }} />
    </>
  );
};

export default BlogDetail;
