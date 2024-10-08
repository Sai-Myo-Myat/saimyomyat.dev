"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { HardDriveDownload } from "lucide-react";

import { Bree_Serif } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef } from "react";

const bree_serif = Bree_Serif({ weight: "400", subsets: ["latin"] });

const ProfileSection = () => {
  const profileRef = useRef(null);
  useEffect(() => {
    const q = gsap.utils.selector(profileRef);

    const tl = gsap.timeline({
      defaults: { duration: 0.7 },
    });

    tl.fromTo(q(".profile-intro"), { x: -100 }, { x: 0, delay: 1.3 });
  }, []);
  return (
    <section id="profile" className="pt-10 lg:pt-20">
      <div
        className="flex flex-wrap gap-4 justify-between py-4"
        ref={profileRef}
      >
        <div className="relative flex-1 flex flex-col gap-2 border-x-2 border-black px-2 profile-intro">
          <div className="flex gap-2">
            <h1
              className={cn(
                bree_serif.className,
                "text-primary font-extrabold"
              )}
            >
              Sai Myo Myat
            </h1>
          </div>
          <h2>Full-stack Developer</h2>
          <h3>__About</h3>
          <p className="my-1">
            I am a full-stack developer with over two years of experiences in
            <span className="font-semibold">
              {" "}
              developing creative websites and mobile apps
            </span>
            .
          </p>
          <a href="/cv.pdf" target="_blank" className="max-w-max">
            <div className="flex items-center gap-2 my-2">
              <span className="hover:underline hover:text-primary font-semibold">
                Download CV.
              </span>
              <HardDriveDownload
                size={18}
                className="text-primary cursor-pointer"
              />
            </div>
          </a>
        </div>
        <div className="sm:flex-1 w-full min:h-[30vh] flex items-center justify-center sm:justify-end">
          <Image
            src={"/me.jpg"}
            alt="This is a picture of me!"
            width={400}
            height={340}
            className="rounded-md w-4/5 sm:w-3/4 aspect-auto border-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
