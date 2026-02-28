import React from 'react';
import './About.css';

const About = () => {
  const experienceData = [
    {
      year: "2024-Now",
      title: "VR Developer",
      company: "Aalto University, CS Department (Motion Lab)",
      description: "Executing VR game and embodied research funded by Business Finland (R2B)."
    },
    {
      year: "2022-2024",
      title: "Research Assistant",
      company: "Taiwan Tech, IUI Lab",
      description: "Conducted research on MR/VR-assisted language learning, relevant published in [CHI’23] (https://doi.org/10.1145/3544549.3583830), [UIST’24] (https://dl.acm.org/doi/10.1145/3675094.3678388)."
    },
    {
      year: "2022-Now",
      title: "Game Director",
      company: "Snowclaw Games LP.",
      description: "\"Wando\" \"Psyqualogy\" Game director & Designer. \n \n Wando was regional featured on App Store, with 4.8 star rating, generating over 7,000+ EUR in profit."
    },
    {
      year: "2022 Summer",
      title: "Design Intern",
      company: "Rayark Inc.",
    }
  ];
  const educationData = [
    {
      year: "2024-Now",
      title: "Master | Game Design",
      company: "Aalto University",
    },
    {
      year: "2022-2024",
      title: "Master | Interaction Design",
      company: "Taiwan Tech",
      description: "Thesis: [FilmVR: Designing an Automated Multi-Camera Recording and Editing Process for Effective VR Tutorials] (https://hdl.handle.net/11296/87gb43)"
    },
    {
      year: "2017-2021",
      title: "Bachelor  | Drama and Theatre",
      company: "National Taiwan University",
    }
  ];

  return (
    <div className="about-wrapper">
      <section className="profile-hero">
        <div className="profile-img-container">
          <img src="assets/photo.jpg" alt="Liu Yu-Jung" />
        </div>
        <div className="profile-info">
          <div className="name-group">
            <h1 className="name-en">Liu Yu-Jung</h1>
            <h2 className="name-zh">劉有容</h2>
          </div>
          <div className="contact-container">
            <p className="profile-description">
              I craft happiness (◍•ᴗ•◍)ゝ
            </p>
            <div className="social-links">
              <a href="mailto:miniQQ.ex@gmail.com" className="social-icon">
                <img src="assets/email.png" alt="Email" />
              </a>
              <a href="https://linkedin.com/..." className="social-icon">
                <img src="assets/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="resume-container">
        <ResumeSection title="Experience" data={experienceData} />
        <ResumeSection title="Education" data={educationData} />
      </div>
    </div>
  );
};

const ResumeItem = ({ year, title, company, description }) => {
  const formatDescription = (text) => {
    return text.split('\n').map((line, i) => {
      // 修正：在 ] 和 ( 之間加上 \s* ，代表可以允許有空格
      const parts = line.split(/(\[.*?\]\s*\(.*?\))/g);
      
      return (
        <span key={i}>
          {parts.map((part, j) => {
            // 同步修正這裡的匹配邏輯
            const match = part.match(/\[(.*?)\]\s*\((.*?)\)/);
            if (match) {
              return (
                <a 
                  key={j} 
                  href={match[2]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="desc-link"
                >
                  {match[1]}
                </a>
              );
            }
            return part;
          })}
          <br />
        </span>
      );
    });
  };

  return (
    <div className="resume-item">
      <div className="item-header">
        <div className="title-group">
          <h3 className="item-title">{title}</h3>
          <span className="item-company">{company}</span>
        </div>
        <span className="item-year">{year}</span>
      </div>
      {description && (
        <p className="item-desc">
          {formatDescription(description)}
        </p>
      )}
    </div>
  );
};

const ResumeSection = ({ title, data }) => (
  <section className="resume-row">
    <h2 className="row-title">{title}</h2>
    <div className="row-content">
      {data.map((item, index) => (
        // 使用 spread operator (...) 確保所有 key (含 company) 都傳進去
        <ResumeItem key={index} {...item} />
      ))}
    </div>
  </section>
);

export default About;