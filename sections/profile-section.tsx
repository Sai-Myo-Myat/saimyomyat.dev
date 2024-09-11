"use client";

import { HardDriveDownload } from "lucide-react";

const ProfileSection = () => {
  return (
    <section id="profile" className="pt-10 lg:pt-20">
      <div className="flex flex-wrap gap-4 justify-between py-4">
        <div className="flex-1 flex flex-col gap-2 border-x-2 border-black px-2">
          <div className="flex gap-2 items-center">
            <p>{`I'm`}</p>
            <h1 className="text-primary">Sai Myo Myat</h1>
          </div>
          <h2>Software Developer</h2>
          <h3>__About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            animi, totam dolorem, excepturi quas fugit.
            <a href="#contacts" className="text-primary">
              Contact him.
            </a>
          </p>
          <a href="/cv.pdf" target="_blank" className="max-w-max">
            <div className="flex items-center gap-2">
              <span className="hover:underline hover:text-primary font-semibold">Download CV.</span>
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
