import React, { PropsWithChildren } from "react";

const NavLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className="bg-background sticky top-0 z-10">
      <div className="flex flex-wrap justify-between py-6">{children}</div>
    </nav>
  );
};

export default NavLayout;
