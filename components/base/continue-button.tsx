// create functional component ContinueButton

import { ArrowRight } from "lucide-react";
import React, { HTMLAttributeAnchorTarget } from "react";

interface Props {
  href: string;
  label: string;
  target?: HTMLAttributeAnchorTarget;
}

const ContinueButton: React.FC<Props> = ({
  href,
  label,
  target = "_parent",
}) => {
  return (
    <a
      href={href}
      target={target}
      className="text-sm text-primary font-semibold px-4 py-2 rounded-md flex items-center justify-center gap-2"
    >
      {label}
      <ArrowRight size={20} />
    </a>
  );
};

export default ContinueButton;
