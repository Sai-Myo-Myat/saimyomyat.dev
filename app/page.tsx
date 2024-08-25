import CustomCursor from "@/components/base/custom-cursor";
import HeaderNav from "@/components/nav/header-nav";
import BlogsSection from "@/sections/blogs-section";
import Footer from "@/sections/footer";
import ProfileSection from "@/sections/profile-section";
import ProjectsSection from "@/sections/projects-section";

export default function Home() {
  return (
    <div>
      <CustomCursor />
      <HeaderNav />
      <div className="min-h-screen max-w-screen-lg mx-auto px-4">
        <ProfileSection />
        <ProjectsSection />
        <BlogsSection />
      </div>
      <Footer />
    </div>
  );
}
