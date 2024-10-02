import React, {
  HTMLAttributeAnchorTarget,
  HtmlHTMLAttributes,
  ReactNode,
} from "react";

interface Props extends HtmlHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode;
  url: string;
  target?: HTMLAttributeAnchorTarget;
}

const LinkIcon: React.FC<Props> = ({
  icon,
  url,
  target = "_blank",
  ...props
}) => {
  return (
    <a href={url} target={target} {...props}>
      {icon}
    </a>
  );
};

export default LinkIcon;
