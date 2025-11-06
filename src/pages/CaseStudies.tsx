import React from 'react';
import Header from '../components/Header/Header';
import CaseStudiesFull from '../components/CaseStudies/CaseStudiesFull';
import Footer from '../components/Footer/Footer';
import FloatingCTA from '../components/CTA/FloatingCTA';
import BackToHome from '../components/BackToHome/BackToHome';
import { personalInfo } from '../data';

const CaseStudies: React.FC = () => {
  return (
    <div className="App">
      <Header personalInfo={personalInfo} showHero={false} />
      <div className="page-content">
        <BackToHome />
        <CaseStudiesFull />
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
};

export default CaseStudies;

