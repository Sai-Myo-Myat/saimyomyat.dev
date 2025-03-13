import Loader from "@/components/Loader";
import CustomCursor from "@/components/base/custom-cursor";
import GoBack from "@/components/base/go-back-button";
import NavLayout from "@/components/nav/nav-layout";
import { ArrowLeftCircle } from "lucide-react";
import { PropsWithChildren } from "react";

export default function BlogListLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <CustomCursor />
      <Loader>
        <span>{`saimyomyat.blogs`}</span>
      </Loader>
      <NavLayout>
        <GoBack>
          <ArrowLeftCircle size={24} />
        </GoBack>
      </NavLayout>
      <div className="min-h-screen max-w-screen-lg mx-auto px-4 sm:px-6">
        {children}
      </div>
    </div>
  );
}
