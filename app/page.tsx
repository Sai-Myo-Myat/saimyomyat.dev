import CustomCursor from "@/components/base/custom-cursor";
import HeaderNav from "@/components/nav/header-nav";
import BlogsSection from "@/sections/blogs-section";
import ProfileSection from "@/sections/profile-section";
import ProjectsSection from "@/sections/projects-section";

export default function Home() {
  return (
    <div>
      <CustomCursor />
      <HeaderNav />
      <div>
        <ProfileSection />
        <ProjectsSection />
        <BlogsSection />
      </div>
    </div>
  );
}
