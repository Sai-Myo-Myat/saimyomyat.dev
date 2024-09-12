import IconGolang from "@/svgs/golang-svg";
import IconNextjs from "@/svgs/nextjs-svg";
import IconBxlPostgresql from "@/svgs/postgresql-svg";
import IconReactjsFill from "@/svgs/reactjs-svg";
import IconTailwindcss from "@/svgs/tailwind-svg";
import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import { Playpen_Sans } from "next/font/google";

const playpen_sans = Playpen_Sans({ weight: "400", subsets: ["latin"] });

const SkillsSection = () => {
  return (
    <section id="skills">
      <h1 className="py-1 my-4">Skills</h1>
      <p className={cn(playpen_sans.className, "sm:text-lg")}>
        The following are the core tools, libraries, and frameworks I use to
        develop websites and mobile applications. These technologies help me
        create efficient, scalable, and user-friendly solutions tailored to meet
        project needs.
      </p>
      <div className="md:w-1/2 mx-auto my-8">
        <div className="flex justify-between mb-4">
          <SkillLogo title="Next Js">
            <IconNextjs />
          </SkillLogo>
          <SkillLogo title="React Native">
            <IconReactjsFill />
          </SkillLogo>
          <SkillLogo title="Golang">
            <IconGolang />
          </SkillLogo>
        </div>
        <div className="flex justify-around">
          <SkillLogo title="Postgresql">
            <IconBxlPostgresql />
          </SkillLogo>
          <SkillLogo title="Tailwind Css">
            <IconTailwindcss />
          </SkillLogo>
        </div>
      </div>
    </section>
  );
};

interface Props {
  title: string;
}
const SkillLogo: React.FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {children}
      <span className="text-sm font-semibold">{title}</span>
    </div>
  );
};

export default SkillsSection;
