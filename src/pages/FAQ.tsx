import React from 'react';
import Header from '../components/Header/Header';
import FAQFull from '../components/FAQ/FAQFull';
import Footer from '../components/Footer/Footer';
import FloatingCTA from '../components/CTA/FloatingCTA';
import BackToHome from '../components/BackToHome/BackToHome';
import { personalInfo } from '../data';

const FAQ: React.FC = () => {
  return (
    <div className="App">
      <Header personalInfo={personalInfo} showHero={false} />
      <div className="page-content">
        <BackToHome />
        <FAQFull />
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
};

export default FAQ;

