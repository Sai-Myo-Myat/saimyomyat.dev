import Loader from "@/components/loader";
import HydratedBlogList from "./hydrated-blog-list";

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
