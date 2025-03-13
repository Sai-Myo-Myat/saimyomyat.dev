import ContentNotFound from "@/components/content-not-found";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return <ContentNotFound message="Page not found..." />;
}
