import React from 'react';
import './SubNav.css';

const SubNav = ({ sections }) => {
  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 80; // 預留 Header 空間
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
      <nav className="sticky-nav">
        <ul className="nav-list">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} onClick={(e) => handleAnchorClick(e, section.id)}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-line"></div>
      </nav>
  );
};

export default SubNav;