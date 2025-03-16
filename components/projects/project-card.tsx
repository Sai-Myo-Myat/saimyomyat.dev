import { ProjectType } from "@/types/projects";
import { ExternalLink, GithubIcon } from "lucide-react";
import Image from "next/image";
import Tag from "../base/Tag";

interface Props {
  project: ProjectType;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="px-2">
      <div className="w-full h-44 rounded-md border">
        <Image
          src={project.img}
          alt={project.title}
          className="object-fill w-full h-full rounded-md"
          width={200}
          height={200}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="cursor-pointer my-4 flex gap-2">
          <h4 className="font-bold">{project.title}</h4>
          <a href={project.href} target={project.target}>
            <ExternalLink size={18} className="text-blue-500" />
          </a>
        </div>
        <a
          href={project.source}
          target="_blank"
          className="hover:opacity-100 opacity-80"
        >
          <GithubIcon size={20} />
        </a>
      </div>
      <p className="whitespace-pre-wrap">{project.description}</p>
      <div className="flex flex-wrap gap-2 my-4">
        {project.tags?.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
