import Loader from "@/components/loader";
import { Metadata } from "next";
import HydratedBlogList from "./hydrated-blog-list";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogListPage() {
  return (
    <>
      <Loader>
        <span>{`saimyomyat.blogs`}</span>
      </Loader>
      <HydratedBlogList />
    </>
  );
}
