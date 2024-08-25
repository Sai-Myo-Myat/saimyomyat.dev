import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  type?: "default" | "dashed";
  className?: string;
}

const Divider: React.FC<Props> = ({ type, className }) => {
  return (
    <div
      className={cn(
        "border-t-2",
        className,
        type === "dashed" && "border-dashed"
      )}
    ></div>
  );
};

export default Divider;
