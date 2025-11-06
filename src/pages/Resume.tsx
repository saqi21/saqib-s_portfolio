import React from 'react';
import Header from '../components/Header/Header';
import Resume from '../components/Resume/Resume';
import Footer from '../components/Footer/Footer';
import FloatingCTA from '../components/CTA/FloatingCTA';
import BackToHome from '../components/BackToHome/BackToHome';
import { personalInfo, experiences, education, skills, languages, statistics } from '../data';

const ResumePage: React.FC = () => {
  return (
    <div className="App">
      <Header personalInfo={personalInfo} showHero={false} />
      <div className="page-content">
        <BackToHome />
        <Resume 
          experiences={experiences}
          education={education}
          skills={skills}
          languages={languages}
          statistics={statistics}
        />
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
};

export default ResumePage;

