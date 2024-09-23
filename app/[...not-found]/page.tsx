import { cn } from "@/lib/utils";
import { BanIcon } from "lucide-react";
import { Playpen_Sans } from "next/font/google";
import GoBack from "./go-back";

const playpen_sans = Playpen_Sans({ weight: "400", subsets: ["latin"] });

export default function NotFound() {
  return (
    <div
      className={cn(playpen_sans.className, "flex flex-col items-center gap-6")}
    >
      <h1 className="text-7xl text-primary">404</h1>
      <div className="flex items-center gap-2">
        <p className="text-lg">Page not found...</p>
        <BanIcon size={16} />
      </div>
      <div>
        <GoBack />
      </div>
    </div>
  );
}
