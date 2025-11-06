import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import ProjectDetail from '../components/Projects/ProjectDetail';
import Footer from '../components/Footer/Footer';
import FloatingCTA from '../components/CTA/FloatingCTA';
import BackToHome from '../components/BackToHome/BackToHome';
import { personalInfo } from '../data';

const ProjectsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="App">
      <Header personalInfo={personalInfo} showHero={false} />
      <div className="page-content">
        <BackToHome />
        <ProjectDetail projectId={id} />
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
};

export default ProjectsDetail;

