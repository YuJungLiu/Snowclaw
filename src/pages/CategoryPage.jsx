import React, { useEffect } from 'react'; // 合併後的唯一導入
import SubNav from '../components/SubNav';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import './CategoryPage.css';

const CategoryPage = ({ categoryType }) => {
  const data = projectsData[categoryType];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryType]);

  if (!data) return <div className="loading">Loading...</div>;

return (
    <div className={`category-page-container ${categoryType}-theme`}>
      <div className="gradient-background-overlay" />
      <SubNav sections={data.sections} />
      
      <main className="category-content-wrapper">
        {data.sections.map((section) => (
          <section key={section.id} id={section.id} className="page">
            <p className="page-title">{section.label}</p>
            <p className="page-quote">{section.quote}</p>
            
            {/* 這裡統一使用 project-row 即可 */}
            <div className="project-row">
              {section.projects.map(proj => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default CategoryPage;