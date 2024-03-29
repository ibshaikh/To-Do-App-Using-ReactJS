import React from 'react';
import { FaSquareXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const DeveloperCard = () => {
  return (
    <div className="card developer-card">
      <h2>About Us</h2>
      <div className="developer-info">
        <p>Developer : Ibram Shaikh</p>
        <div className="developer-icons">
          <a href="https://github.com/ibshaikh" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ibram-shaikh-5a3881191" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/ibshaikh07" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
