import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 這裡使用 smooth，因為是在同頁面內的導覽
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project || !project.details) return <div className="loading">Loading Project...</div>;

  const { details } = project;

  return (
    <div className="project-detail-container">
      <div className="gradient-background-overlay" />

      <div className="project-detail-content-wrapper">
        <div className="detail-hero">
          <img src={details.coverImg} alt={project.title} className="hero-img" />
        </div>

      <header className="detail-header-section">
        <h1 className="hero-title">
          {details.externalLink ? (
            <a 
              href={details.externalLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="title-link"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h1>
        <p className="hero-subtitle">{details.subtitle}</p>
        {details.year && <p className="hero-year">{details.year}</p>}
      </header>

        <section className="detail-meta-section">
          <div className="meta-grid">
            {/* <div className="meta-item">
              <span className="meta-label">Individual Contribution</span>
              <p className="meta-value">{details.contribution}</p>
            </div> */}
            <div className="meta-item">
              <span className="meta-label">Credits</span>
              <p className="meta-value">{details.credits}</p>
            </div>
          </div>
        </section>

        <main className="detail-main-content">
          {details.videoUrl && (
            <div className="detail-video-box">
              <iframe 
                src={details.videoUrl} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* --- 重點：更新後的描述渲染邏輯 --- */}
          <div className="detail-description">
            {details.description.split('\n\n').map((paragraph, i) => (
              <p key={i}>
                {paragraph.split('\n').map((line, j) => (
                  <React.Fragment key={j}>
                    {line}
                    {j !== paragraph.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            ))}
          </div>

          <div className="detail-gallery">
            {details.screenshots.map((img, idx) => (
              <img key={idx} src={img} alt={`Work ${idx}`} className="gallery-img" />
            ))}
          </div>
          <div className="back-to-top-container">
            <button className="back-to-top-btn" onClick={handleScrollToTop}>
              Back to Top
              <span className="arrow-up">↑</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetail;