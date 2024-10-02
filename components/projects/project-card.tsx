import { ProjectType } from "@/types/projects";
import { ExternalLink, GithubIcon } from "lucide-react";
import Tag from "../base/Tag";

interface Props {
  project: ProjectType;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="px-2">
      <div className="bg-primary w-full h-44 rounded-md"></div>
      <div className="flex items-center justify-between">
        <div className="cursor-pointer my-4 flex gap-2">
          <h4 className="font-bold">{project.title}</h4>
          <ExternalLink size={18} className="text-blue-500" />
        </div>
        <GithubIcon size={20} />
      </div>
      <p className="whitespace-pre-wrap">{project.description}</p>
      <div className="flex flex-wrap gap-2 my-4">
        <Tag text="JavaScript" />
        <Tag text="Golang" />
      </div>
    </div>
  );
};

export default ProjectCard;
