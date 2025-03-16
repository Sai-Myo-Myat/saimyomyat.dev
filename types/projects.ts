import { HTMLAttributeAnchorTarget } from "react";

export interface ProjectType {
  id: number;
  title: string;
  href: string;
  source: string;
  img: string;
  description: string;
  tags?: string[];
  target?: HTMLAttributeAnchorTarget;
}
