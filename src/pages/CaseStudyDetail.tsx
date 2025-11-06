import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import CaseStudyDetail from '../components/CaseStudies/CaseStudyDetail';
import Footer from '../components/Footer/Footer';
import FloatingCTA from '../components/CTA/FloatingCTA';
import BackToHome from '../components/BackToHome/BackToHome';
import { personalInfo } from '../data';

const CaseStudyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="App">
      <Header personalInfo={personalInfo} showHero={false} />
      <div className="page-content">
        <BackToHome />
        <CaseStudyDetail caseStudyId={id} />
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;

