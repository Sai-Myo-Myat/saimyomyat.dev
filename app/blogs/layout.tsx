import ClickableH3 from "@/components/base/clickable-h3";
import GoBack from "@/components/base/go-back-button";
import NavLayout from "@/components/nav/nav-layout";
import { ArrowLeftCircle, Home } from "lucide-react";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Blogs",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/blogs`,
  },
};

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <NavLayout>
        <GoBack>
          <ArrowLeftCircle size={24} />
        </GoBack>
        <ClickableH3 className="mt-0">
          <a href="/" className="text-primary flex items-center gap-2">
            <Home size={16} />
            Home
          </a>
        </ClickableH3>
      </NavLayout>
      {children}
    </>
  );
}
export default Layout;
