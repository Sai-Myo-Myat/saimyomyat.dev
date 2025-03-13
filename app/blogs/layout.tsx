import GoBack from "@/components/base/go-back-button";
import NavLayout from "@/components/nav/nav-layout";
import { ArrowLeftCircle } from "lucide-react";
import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <NavLayout>
        <GoBack>
          <ArrowLeftCircle size={24} />
        </GoBack>
      </NavLayout>
      {children}
    </>
  );
}
export default Layout;
