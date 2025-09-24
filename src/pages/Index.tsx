import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ResumeSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
