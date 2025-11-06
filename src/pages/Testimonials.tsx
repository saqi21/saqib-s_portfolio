import React from 'react';
import Header from '../components/Header/Header';
import TestimonialsFull from '../components/Testimonials/TestimonialsFull';
import Footer from '../components/Footer/Footer';
import FloatingCTA from '../components/CTA/FloatingCTA';
import BackToHome from '../components/BackToHome/BackToHome';
import { personalInfo } from '../data';

const Testimonials: React.FC = () => {
  return (
    <div className="App">
      <Header personalInfo={personalInfo} showHero={false} />
      <div className="page-content">
        <BackToHome />
        <TestimonialsFull />
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
};

export default Testimonials;

