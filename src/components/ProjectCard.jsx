import React from 'react';
import './ProjectCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  // 內部重複使用的結構
  const cardContent = (
    <>
      <div className="project-image-wrapper">
        <img src={project.img} alt={project.title} loading="lazy" />
        {/* 如果是製作中，可以多顯示一個小標籤 */}
        {project.isComingSoon && (
          <div className="coming-soon-overlay">
            <span>Coming Soon</span>
          </div>
        )}
      </div>
      <div className="project-info">
        <p className="category">{project.tag}</p>
        <p className="name">{project.title}</p>
      </div>
    </>
  );

  // 如果是製作中，回傳一般 div，不帶連結
  if (project.isComingSoon) {
    return (
      <div className={`project-item coming-soon ${project.fullWidth ? 'full-width' : ''}`}>
        {cardContent}
      </div>
    );
  }

  // 正常的專案，維持 Link 跳轉
  return (
    <Link to={`/project/${project.id}`} className={`project-item ${project.fullWidth ? 'full-width' : ''}`}>
      {cardContent}
    </Link>
  );
};

export default ProjectCard;