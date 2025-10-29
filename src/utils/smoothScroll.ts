// Smooth scrolling functionality
export const initSmoothScrolling = () => {
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(this: HTMLAnchorElement, event: Event) {
      const target = this.getAttribute('href');
      
      if (target && target.startsWith('#')) {
        event.preventDefault();
        
        const targetElement = document.querySelector(target);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL hash
          window.history.pushState(null, '', target);
        }
      }
    });
  });
};
