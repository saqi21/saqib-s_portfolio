import React from 'react';
import Header from '../components/Header/Header';
import Articles from '../components/Articles/Articles';
import Footer from '../components/Footer/Footer';
import FloatingCTA from '../components/CTA/FloatingCTA';
import BackToHome from '../components/BackToHome/BackToHome';
import { personalInfo, articles } from '../data';

const ArticlesPage: React.FC = () => {
  return (
    <div className="App">
      <Header personalInfo={personalInfo} showHero={false} />
      <div className="page-content">
        <BackToHome />
        <Articles articles={articles} useSlider={false} />
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
};

export default ArticlesPage;

