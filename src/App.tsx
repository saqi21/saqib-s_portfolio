import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/modern-theme.css';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Services from './pages/Services';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import ProjectsDetail from './pages/ProjectsDetail';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router basename="/saqib-s_portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Services />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/projects/:id" element={<ProjectsDetail />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;