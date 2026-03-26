import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/ui/Loader";
import { useHero } from "@/hooks/useHero";
import { useSocialLinks } from "@/hooks/useSocialLinks";
import { useSkills } from "@/hooks/useSkills";
import { useServices } from "@/hooks/useServices";
import { useTimeline } from "@/hooks/useTimeline";
import { useAbout } from "@/hooks/useAbout";
import { useProjects } from "@/hooks/useProjects";
import { useCategories } from "@/hooks/useCategories";
import { useContactInfo } from "@/hooks/useContactInfo";
import { useContactMessage } from "@/hooks/useContactMessage";
import { useFooter } from "@/hooks/useFooter";

const Index = () => {
  const { isLoading: loadingHero, hero } = useHero();
  const { isLoading: socialLoading, socialLinks } = useSocialLinks();
  // about
  const { isLoading: skillsLoading, skills } = useSkills();
  const { isLoading: servicesLoading, services } = useServices();
  const { isLoading: timelineLoading, timeline } = useTimeline();
  const { isLoading: aboutLoading, aText } = useAbout();
  // project
  const { isLoading: projectsLoading, projects } = useProjects();
  const { isLoading: categoriesLoading, Categories } = useCategories();
  // contact
  const { isLoading: contactInfoLoaded, contactInfo } = useContactInfo();
  const { isLoading: contactLoading, contactMessage } = useContactMessage();
  // footer
  const { isLoading: footerLoading, footerMessage } = useFooter();

  if (
    loadingHero ||
    socialLoading ||
    skillsLoading ||
    servicesLoading ||
    timelineLoading ||
    aboutLoading ||
    projectsLoading ||
    categoriesLoading ||
    contactInfoLoaded ||
    contactLoading ||
    footerLoading
  )
    return <Loader />;
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero hero={hero} socialLinks={socialLinks} />
        <About
          skills={skills}
          services={services}
          timeline={timeline}
          aText={aText}
        />
        <Projects projects={projects} Categories={Categories} />
        <Contact contactMessage={contactMessage} contactInfo={contactInfo} />
      </main>
      <Footer footerMessage={footerMessage} socialLinks={socialLinks} />
    </div>
  );
};

export default Index;
