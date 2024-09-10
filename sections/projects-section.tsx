"use client";

import ProjectCard from "@/components/projects/project-card";
import { ProjectType } from "@/types/projects";

const projects: ProjectType[] = [
  {
    id: 1,
    title: "saimyomyat.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit. Officia.",
  },
  {
    id: 2,
    title: "saimyomyat.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit. Officia.",
  },
  {
    id: 3,
    title: "saimyomyat.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, sit? Impedit odio doloremque voluptatum.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10 lg:py-20">
      <h1 className="py-1 mb-2">Featured Projects</h1>
      <p>
        {`"Sai Myo Myat's software development projects that blend creativity with
        technical expertise."`}
      </p>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-12 my-4">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
