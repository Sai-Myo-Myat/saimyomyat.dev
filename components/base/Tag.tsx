import React from "react";

interface Props {
  text: string;
}

const Tag: React.FC<Props> = ({ text }) => {
  return (
    <div className="border border-primary text-primary text-center text-xs py-1 px-2 rounded-md">
      {text}
    </div>
  );
};

export default Tag;
