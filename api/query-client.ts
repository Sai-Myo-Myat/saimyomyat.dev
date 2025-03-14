import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

const getQueryClient = cache(() => {
  return new QueryClient();
});

export default getQueryClient;
