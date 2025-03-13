import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

const ClickableH3: React.FC<Props> = ({ className, children, onClick }) => {
  return (
    <h3
      onClick={onClick}
      className={cn(
        "hover:underline cursor-pointer text-sm md:text-base font-semibold",
        className
      )}
    >
      {children}
    </h3>
  );
};

export default ClickableH3;
