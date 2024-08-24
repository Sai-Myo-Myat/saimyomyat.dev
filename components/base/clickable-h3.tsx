import React, { PropsWithChildren } from "react";

const ClickableH3: React.FC<PropsWithChildren> = ({ children }) => {
  return <h3 className="hover:underline cursor-pointer text-sm md:text-base">{children}</h3>;
};

export default ClickableH3;
