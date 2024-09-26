"use client";

import ProjectCard from "@/components/projects/project-card";
import { cn } from "@/lib/utils";
import { ProjectType } from "@/types/projects";
import gsap from "gsap";

import { Playpen_Sans } from "next/font/google";
import { useEffect, useRef } from "react";

const playpen_sans = Playpen_Sans({ weight: "400", subsets: ["latin"] });

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
  const projectRef = useRef(null);
  useEffect(() => {
    const q = gsap.utils.selector(projectRef);

    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
    });

    tl.fromTo(q(".projects-section"), { y: 100 }, { y: 0, delay: 1.5 });
  }, []);

  return (
    <section
      id="projects"
      className="relative py-10 lg:py-20 "
      ref={projectRef}
    >
      <div className="projects-section">
        <h1 className="py-1">Featured Projects</h1>
        <p className={cn(playpen_sans.className, "xs:text-xl py-2")}>
          {`"Projects are blended with creativity &
        technical expertise."`}
        </p>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-12 my-4">
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
