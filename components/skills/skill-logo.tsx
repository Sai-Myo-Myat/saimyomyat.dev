"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { PropsWithChildren, useEffect, useRef } from "react";

interface Props {
  title: string;
}
const SkillLogo: React.FC<PropsWithChildren<Props>> = ({ title, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(containerRef);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: `80% bottom`,
      },
    });

    tl.fromTo(
      q(".logo"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
        duration: 1,
      }
    ).fromTo(
      q(".title"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2 },
      "<80%"
    );
  }, []);

  return (
    <div className="flex flex-col items-center gap-2" ref={containerRef}>
      <span className="logo">{children}</span>
      <span className="text-sm font-semibold title">{title}</span>
    </div>
  );
};

export default SkillLogo;
