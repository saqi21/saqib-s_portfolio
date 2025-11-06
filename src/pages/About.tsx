import React from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import FloatingCTA from '../components/CTA/FloatingCTA';
import BackToHome from '../components/BackToHome/BackToHome';
import { personalInfo, skills } from '../data';

const AboutPage: React.FC = () => {
  return (
    <div className="App">
      <Header personalInfo={personalInfo} showHero={false} />
      <div className="page-content">
        <BackToHome />
        <About personalInfo={personalInfo} skills={skills} />
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
};

export default AboutPage;

