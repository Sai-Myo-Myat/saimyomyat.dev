import { PropsWithChildren } from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogLayout({ children }: PropsWithChildren<PageProps>) {
  return (
    <div className="relative">
      <div className="min-h-screen max-w-screen-lg mx-auto px-4 sm:px-6">
        {children}
      </div>
    </div>
  );
}
