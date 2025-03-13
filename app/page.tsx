import Loader from "@/components/Loader";
import HeaderNav from "@/components/nav/header-nav";
import BlogsSection from "@/sections/blogs-section";
import ContactSection from "@/sections/contact-section";
import ProfileSection from "@/sections/profile-section";
import ProjectsSection from "@/sections/projects-section";
import SkillsSection from "@/sections/skills-section";

export default function Home() {
  return (
    <>
      <HeaderNav />
      <Loader>saimyomyat.dev</Loader>
      <ProfileSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogsSection />
      <ContactSection />
    </>
  );
}
