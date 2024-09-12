import IconGolang from "@/svgs/golang-svg";
import IconNextjs from "@/svgs/nextjs-svg";
import IconReactjsLine from "@/svgs/reactjs-svg";
import IconTailwindcss from "@/svgs/tailwind-svg";
import { PropsWithChildren } from "react";

const SkillsSection = () => {
  return (
    <section id="skills">
      <h1 className="py-1 my-4">Skills</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, quae
        in magnam illo, error tempora placeat beatae nam itaque rem sequi natus
        sit atque, non aut architecto. Tempore, rem placeat!
      </p>
      <div className="md:w-1/2 mx-auto my-8">
        <div className="flex justify-between mb-4">
          <SkillLogo title="Next Js">
            <IconNextjs />
          </SkillLogo>
          <SkillLogo title="React Js">
            <IconReactjsLine />
          </SkillLogo>
          <SkillLogo title="Golang">
            <IconGolang />
          </SkillLogo>
        </div>
        <div className="flex justify-around">
          <SkillLogo title="React Native">
            <IconReactjsLine />
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
