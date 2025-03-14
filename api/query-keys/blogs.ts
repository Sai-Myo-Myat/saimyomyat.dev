export const blogKeys = {
  all: ["blog-list"] as const,
  list: () => [...blogKeys.all, "list"] as const,
};
