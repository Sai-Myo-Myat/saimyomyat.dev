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
    title: "saimyomyat.dev",
    href: `${process.env.NEXT_PUBLIC_URL}/blogs/about-this-site`,
    source: "https://github.com/Sai-Myo-Myat/saimyomyat.dev",
    img: "/saimyomyat-og.jpg",
    description:
      "This is the site you are currently viewing. It is built with Next.js, Tailwind CSS, and Vercel. You can read more about this site by clicking the link iocn.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    target: "_parent",
  },
  {
    id: 2,
    title: "option-select",
    href: `https://www.npmjs.com/package/option-select`,
    source: "https://github.com/Sai-Myo-Myat/option-select",
    img: "/option-select.jpg",
    description:
      "A headless option selection library for JavaScript front-end frameworks like React (and more later). Supports hierarchical data structures and allows selection tracking with full control.",
    tags: ["React", "TypeScript", "Headless UI"],
    target: "_blank",
  },
  {
    id: 3,
    title: "TableTap",
    href: `${process.env.NEXT_PUBLIC_URL}/blogs/table-tap`,
    source: "https://github.com/Tech-Notes/table-tap.console",
    img: "/table-tap-logo.jpg",
    description:
      "TableTap is a self-ordering service designed for modern restaurants. By scanning a QR code, customers can view the menu, place orders directly from their phones, and have those orders sent to the kitchen and counter in real time.",
    tags: ["Nextjs", "TypeScript", "Golang"],
    target: "_parent",
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
