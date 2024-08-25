"use client";

import Divider from "@/components/base/divider";
import { HardDriveDownload } from "lucide-react";

const ProfileSection = () => {
  return (
    <section id="profile" className="pt-10 lg:pt-20">
      <div className="flex flex-wrap gap-4 justify-between py-4">
        <div className="bg-black sm:flex-1 w-full h-[30vh]"></div>
        <div className="flex-1 flex flex-col gap-2 border-x-2 border-black px-2">
          <Divider />
          <h2>About</h2>
          <h1 className="text-primary">{`"Sai Myo Myat",`}</h1>
          <p>
            {`"He is active in the creation of seamless web experiences using
            Next.js and developing mobile applications with React Native. With a
            strong focus on performance and reliability, his passion extends to
            backend development with GOLANG. Constantly driven by a love for
            technology, he eagerly seeks new challenges and learning
            opportunities to elevate his skills and enhance your development
            processes. He is always ready to connect and collaborate on
            groundbreaking projects." `}
            <a href="#contacts" className="text-primary">
              Contact him.
            </a>
          </p>
          <Divider />
          <div className="flex items-center gap-1">
            <span>Download CV.</span>
            <HardDriveDownload
              size={17}
              className="text-primary cursor-pointer"
            />
          </div>
          <Divider />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
