import React from 'react';
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import FloatingCTA from '../components/CTA/FloatingCTA';
import BackToHome from '../components/BackToHome/BackToHome';
import { personalInfo, services } from '../data';

const ServicesPage: React.FC = () => {
  return (
    <div className="App">
      <Header personalInfo={personalInfo} showHero={false} />
      <div className="page-content">
        <BackToHome />
        <Services services={services} />
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
};

export default ServicesPage;

