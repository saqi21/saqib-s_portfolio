import { useNavigate, useLocation } from 'react-router-dom';

export const useSectionNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = (sectionId: string) => {
    // Remove # if present
    const cleanSectionId = sectionId.replace('#', '');
    
    // If we're on the home page, just scroll to section
    if (location.pathname === '/' || location.pathname === '/saqib-s_portfolio') {
      const element = document.getElementById(cleanSectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page with hash
      navigate(`/#${cleanSectionId}`);
      // Scroll after navigation
      setTimeout(() => {
        const element = document.getElementById(cleanSectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return { navigateToSection };
};

