import React from "react";
import "./Ocean.css";

function Ocean() {
  return (
    <div
      className="portfolio__container"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div className="portfolio__container-img bounce-top"></div>

      <div className="footer-social-links">
        <a
          href="https://www.linkedin.com/in/sami-a-883b941a9"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa fa-linkedin"></i>
        </a>

        <a
          href="https://github.com/SamiAbbas21"
          title="GitHub"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Ocean;
