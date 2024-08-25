import { ProjectType } from "@/types/projects";

interface Props {
  project: ProjectType;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="border-x px-2">
      <h2 className="underline cursor-pointer mb-2">{`"${project.title}"`}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
