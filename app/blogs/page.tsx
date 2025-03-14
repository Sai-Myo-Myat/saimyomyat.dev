import Loader from "@/components/Loader";
import BlogListView from "@/components/blogs/blog-list-view";
export default function BlogListPage() {
  return (
    <>
      <Loader>
        <span>{`saimyomyat.blogs`}</span>
      </Loader>
      <BlogListView />
    </>
  );
}
