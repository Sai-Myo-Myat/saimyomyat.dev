"use client";

import { cn } from "@/lib/utils";
import { HardDriveDownload } from "lucide-react";

import { Bree_Serif } from "next/font/google";

const bree_serif = Bree_Serif({ weight: "400", subsets: ["latin"] });

const ProfileSection = () => {
  return (
    <section id="profile" className="pt-10 lg:pt-20">
      <div className="flex flex-wrap gap-4 justify-between py-4">
        <div className="flex-1 flex flex-col gap-2 border-x-2 border-black px-2">
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
              developing createive websites and mobile apps
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
        <div className="sm:flex-1 w-full h-[30vh]"></div>
      </div>
    </section>
  );
};

export default ProfileSection;
