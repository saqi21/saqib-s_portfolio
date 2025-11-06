import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Resume from '../components/Resume/Resume';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import Articles from '../components/Articles/Articles';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import CaseStudiesPreview from '../components/CaseStudies/CaseStudiesPreview';
import FAQPreview from '../components/FAQ/FAQPreview';
import FloatingCTA from '../components/CTA/FloatingCTA';
import { 
  personalInfo, 
  experiences, 
  education, 
  skills, 
  languages, 
  services, 
  projects,
  articles, 
  statistics 
} from '../data';
import { initSmoothScrolling } from '../utils/smoothScroll';
import '../utils/maps';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    initSmoothScrolling();
    
    // Handle hash navigation on mount or hash change
    const handleHashNavigation = () => {
      if (location.hash) {
        const sectionId = location.hash.replace('#', '');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    handleHashNavigation();
  }, [location.hash]);

  return (
    <div className="App">
      <Header personalInfo={personalInfo} />
      <About personalInfo={personalInfo} skills={skills} />
      <Resume 
        experiences={experiences}
        education={education}
        skills={skills}
        languages={languages}
        statistics={statistics}
      />
      <Services services={services} />
      <Projects projects={projects} />
      <CaseStudiesPreview />
      <Articles articles={articles} />
      <FAQPreview />
      <Contact personalInfo={personalInfo} />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Home;
