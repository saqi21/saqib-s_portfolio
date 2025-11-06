import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../data';
import { getAssetPath } from '../../utils/assets';
import './Projects.css';

const ProjectDetail: React.FC<{ projectId?: string }> = ({ projectId }) => {
  const { id } = useParams<{ id: string }>();
  const projId = projectId || id;
  const project = projects.find(p => p.id === projId || p.name.toLowerCase().replace(/\s+/g, '-') === projId);

  if (!project) {
    return (
      <section className="section project-detail">
        <div className="container">
          <div className="error-message">
            <h2>Project Not Found</h2>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section project-detail" id="project-detail">
      <div className="container">
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Projects
        </Link>

        <div className="project-detail-header">
          <div className="project-detail-logo">
            {project.logo ? (
              <img src={getAssetPath(project.logo)} alt={project.name} />
            ) : (
              <div className="project-icon-large">
                <i className="fas fa-code"></i>
              </div>
            )}
          </div>
          <div className="project-detail-info">
            <h1 className="project-detail-title">{project.name}</h1>
            {project.description && (
              <p className="project-detail-description">{project.description}</p>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fas fa-external-link-alt"></i> Visit Website
              </a>
            )}
          </div>
        </div>

        {project.technologies && project.technologies.length > 0 && (
          <div className="project-detail-section">
            <h2 className="section-heading">Technologies Used</h2>
            <div className="project-tech-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <div className="project-detail-section">
            <h2 className="section-heading">Challenges</h2>
            <ul className="project-list">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}

        {project.results && project.results.length > 0 && (
          <div className="project-detail-section">
            <h2 className="section-heading">Results</h2>
            <ul className="project-list project-results">
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-detail-actions">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fas fa-external-link-alt"></i> View Live Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="fab fa-github"></i> View Code
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;

