import CustomCursor from "@/components/base/custom-cursor";
import HeaderNav from "@/components/nav/header-nav";
import BlogsSection from "@/sections/blogs-section";
import Footer from "@/sections/footer";
import ProfileSection from "@/sections/profile-section";
import ProjectsSection from "@/sections/projects-section";
import SkillsSection from "@/sections/skills-section";

export default function Home() {
  return (
    <div className="relative">
      <CustomCursor />
      <HeaderNav />
      <div className="min-h-screen max-w-screen-lg mx-auto px-4">
        <ProfileSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogsSection />
        <Footer />
      </div>
    </div>
  );
}


