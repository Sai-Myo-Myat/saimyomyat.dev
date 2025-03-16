import { fetchBlogs } from "@/api-base/blogs";
import getQueryClient from "@/api-base/query-client";
import { blogKeys } from "@/api-base/query-keys/blogs";
import BlogListView from "@/components/blogs/blog-list-view";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const HydratedBlogList = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: blogKeys.list(),
    queryFn: fetchBlogs,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <BlogListView />
    </HydrationBoundary>
  );
};

export default HydratedBlogList;
