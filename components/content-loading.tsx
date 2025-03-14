"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const ContentLoading: React.FC<Props> = ({ children }) => {
  const loadingRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(loadingRef);

    const tl = gsap.timeline({
      defaults: { duration: 0.7 },
    });
    tl.fromTo(
      q(".loading-border"),
      { border: "none" },
      { border: "1px solid", borderRadius: "10px" }
    );
    tl.fromTo(
      q(".loading-text"),
      { y: "0%", opacity: 100 },
      { opacity: 0, y: "100%", repeat: -1, repeatDelay: 1, yoyo: true }
    );
  }, []);

  return (
    <div ref={loadingRef} aria-hidden="true">
      <div className="primary-bg fixed top-0 left-0 w-full h-screen bg-background z-[9999] flex justify-center items-center">
        <div className="loading-border overflow-hidden">
          <h2 className="loading-text opacity-0 px-6 py-2 inline-block">
            {children}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContentLoading;
