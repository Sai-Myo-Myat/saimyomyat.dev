import React, { HTMLAttributeAnchorTarget, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  url: string;
  target?: HTMLAttributeAnchorTarget;
}

const LinkIcon: React.FC<Props> = ({ icon, url, target = "_blank" }) => {
  return (
    <a href={url} target={target}>
      {icon}
    </a>
  );
};

export default LinkIcon;
