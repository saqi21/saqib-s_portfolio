import React from 'react';
import { Project } from '../../types';
import { getAssetPath } from '../../utils/assets';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  // Duplicate projects for seamless infinite scroll
  // We need at least 2 sets for seamless looping (when one set scrolls out, another is ready)
  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

  // Calculate the exact distance for seamless loop
  // Each card is 200px + 1.5rem gap (24px) = 224px per card
  // For 6 projects: 6 * 224 - 24 (last gap doesn't count) = 1320px
  const cardWidth = 200; // px
  const gap = 24; // 1.5rem = 24px
  const oneSetWidth = projects.length * (cardWidth + gap) - gap;

  const renderProjectCard = (project: Project, index: number) => {
    const cardContent = (
      <>
        {project.logo ? (
          <div className="project-logo">
            <img
              src={getAssetPath(project.logo)}
              alt={project.name}
              onError={(e) => {
                // Fallback to icon if image fails to load
                const target = e.target as HTMLImageElement;
                const logoContainer = target.parentElement;
                if (logoContainer) {
                  logoContainer.innerHTML = '<div class="project-icon"><i class="fas fa-code"></i></div>';
                }
              }}
            />
          </div>
        ) : (
          <div className="project-icon">
            <i className="fas fa-code"></i>
          </div>
        )}
        <div className="project-name">{project.name}</div>
      </>
    );

    if (project.url) {
      return (
        <a
          key={`${project.name}-${index}`}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card project-card-link"
          aria-label={`Visit ${project.name}`}
        >
          {cardContent}
        </a>
      );
    }

    return (
      <div key={`${project.name}-${index}`} className="project-card">
        {cardContent}
      </div>
    );
  };

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Projects I've worked on and currently working on</p>
        </div>

        <div className="projects-carousel-wrapper">
          <div className="projects-carousel">
            <div
              className="projects-track"
              style={{
                '--one-set-width': `${oneSetWidth}px`,
              } as React.CSSProperties}
            >
              {duplicatedProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;