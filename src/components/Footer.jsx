import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="contact">
            <a href="mailto:snowclaw.game@gmail.com" target="_blank" rel="noreferrer">Email</a>
            {/* <a href="https://www.linkedin.com/in/yu-jung-liu/" target="_blank" rel="noreferrer">Linkedin</a> */}
            {/* <a href="https://github.com/YuJungLiu" target="_blank" rel="noreferrer">Github</a> */}
          </div>
          <div className="copyright">
            Snowclaw Games © 2026 All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;