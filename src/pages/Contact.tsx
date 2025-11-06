import React from 'react';
import Header from '../components/Header/Header';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import FloatingCTA from '../components/CTA/FloatingCTA';
import BackToHome from '../components/BackToHome/BackToHome';
import { personalInfo } from '../data';
import '../utils/maps';

const ContactPage: React.FC = () => {
  return (
    <div className="App">
      <Header personalInfo={personalInfo} showHero={false} />
      <div className="page-content">
        <BackToHome />
        <Contact personalInfo={personalInfo} />
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
};

export default ContactPage;

