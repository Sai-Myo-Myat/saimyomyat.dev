"use client";

import ProjectCard from "@/components/projects/project-card";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10 lg:py-20">
      <h1 className="border-y-2 py-1 mb-2">Featured Projects</h1>
      <p>
        {`"Sai Myo Myat's software development projects that blend creativity with
        technical expertise."`}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4">
        <ProjectCard
          project={{
            title: "saimyomyat.dev",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis dolor vitae omnis quasi veritatis, nemo placeat nesciunt, at corporis necessitatibus adipisci eius tempora magnam dicta autem maiores quibusdam reprehenderit",
          }}
        />
        {/* <ProjectCard
          project={{
            title: "Ecommerce.com",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis dolor vitae omnis quasi veritatis, nemo placeat nesciunt, at corporis necessitatibus adipisci eius tempora magnam dicta autem maiores quibusdam reprehenderit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis dolor vitae omnis quasi veritatis, nemo placeat nesciunt, at corporis necessitatibus adipisci eius tempora magnam dicta autem maiores quibusdam reprehenderit ",
          }}
        />
        <ProjectCard
          project={{
            title: "saimyomyat.dev",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis dolor vitae omnis quasi veritatis, nemo placeat nesciunt, at corporis necessitatibus adipisci eius tempora magnam dicta autem maiores quibusdam reprehenderit",
          }}
        /> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
