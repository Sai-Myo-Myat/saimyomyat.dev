"use client";

import lottie from "lottie-web";
import { useEffect, useRef } from "react";

export default function LottieEmailIcon({ data }: { data: any }) {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: data,
    });
  }, [data]);

  return <div className="w-12 h-12" ref={animationContainer}></div>;
}
