import { cn } from "@/lib/utils";
import { BanIcon } from "lucide-react";
import { Playpen_Sans } from "next/font/google";
import GoBack from "./base/go-back-button";

const playpen_sans = Playpen_Sans({ weight: "400", subsets: ["latin"] });

interface Props {
  message?: string;
}

const ContentNotFound: React.FC<Props> = ({ message }) => {
  return (
    <div
      className={cn(
        playpen_sans.className,
        "flex flex-col items-center justify-center gap-6 min-h-screen"
      )}
    >
      <h1 className="text-7xl text-primary">404</h1>
      <div className="flex items-center gap-2">
        <p className="text-lg">{message || "Content not found..."}</p>
        <BanIcon size={16} />
      </div>
      <div>
        <GoBack />
      </div>
    </div>
  );
};

export default ContentNotFound;
