import { useQueryFunctionWrapper } from "@/api-base/base";
import { fetchBlog } from "@/api-base/cms-blogs";
import getQueryClient from "@/api-base/query-client";
import { blogKeys } from "@/api-base/query-keys/blogs";
import BlogDetailView from "@/components/blogs/blog-detail-view";
import { BlogDetailPageProps, BlogType } from "@/types/blogs";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

const HydratedBlogDetail: React.FC<BlogDetailPageProps> = async ({
  params,
}) => {
  const queryClient = getQueryClient();
  const slug = params.slug;

  await queryClient.prefetchQuery({
    queryKey: blogKeys.detail(slug),
    queryFn: useQueryFunctionWrapper<string, BlogType>(fetchBlog, slug),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <BlogDetailView params={params} />
    </HydrationBoundary>
  );
};

export default HydratedBlogDetail;
