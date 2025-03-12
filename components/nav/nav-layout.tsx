import React, { PropsWithChildren } from "react";

const NavLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className="bg-background sticky top-0 z-10">
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-between p-4">
        {children}
      </div>
    </nav>
  );
};

export default NavLayout;
