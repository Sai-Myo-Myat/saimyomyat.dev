import Loader from "@/components/Loader";
import CustomCursor from "@/components/base/custom-cursor";
import NavLayout from "@/components/nav/nav-layout";
import { ArrowLeftCircle, SearchIcon } from "lucide-react";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <CustomCursor />
      <Loader>
        <span>{`saimyomyat.blogs`}</span>
      </Loader>
      <NavLayout>
        <h1 className="font-bold sm:text-lg">
          <ArrowLeftCircle size={26} />
        </h1>
        <SearchIcon />
      </NavLayout>
      <div className="min-h-screen max-w-screen-lg mx-auto px-4 sm:px-6">
        {children}
      </div>
    </div>
  );
}
