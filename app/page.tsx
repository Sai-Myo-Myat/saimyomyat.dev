import Loader from "@/components/Loader";
import CustomCursor from "@/components/base/custom-cursor";
import HeaderNav from "@/components/nav/header-nav";
import BlogsSection from "@/sections/blogs-section";
import ContactSection from "@/sections/contact-section";
import Footer from "@/sections/footer";
import ProfileSection from "@/sections/profile-section";
import ProjectsSection from "@/sections/projects-section";
import SkillsSection from "@/sections/skills-section";

export default function Home() {
  return (
    <div className="relative">
      <CustomCursor />
      <HeaderNav />
      <Loader>saimyomyat.dev</Loader>
      <div className="min-h-screen max-w-screen-lg mx-auto px-4 sm:px-6">
        <ProfileSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}


