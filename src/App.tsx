import React, { useEffect } from 'react';
import './App.css';
import './styles/modern-theme.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Services from './components/Services/Services';
import Articles from './components/Articles/Articles';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { 
  personalInfo, 
  experiences, 
  education, 
  skills, 
  languages, 
  services, 
  articles, 
  statistics 
} from './data';
import { initSmoothScrolling } from './utils/smoothScroll';
import './utils/maps';

function App() {
  useEffect(() => {
    initSmoothScrolling();
  }, []);

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
      <Articles articles={articles} />
      <Contact personalInfo={personalInfo} />
      <Footer />
    </div>
  );
}

export default App;