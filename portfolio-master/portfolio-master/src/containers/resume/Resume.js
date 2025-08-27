import React from "react";
import "./Resume.css";
import cv_abbassami from "../../assets/CV-AbbasSami.pdf";

function Resume() {
  return (
    <div
      className="portfolio__resume section__margin gradient__bg-resume"
      data-aos="fade-up"
      id="resume"
    >
      <div className="portfolio__resume-container">
        <div className="portfolio__resume-container-title">
          <p>Vous voulez en savoir plus sur Sami Abbas&nbsp;?</p>
          <h2>Téléchargez directement mon CV ici 👉</h2>
        </div>
        <div>
          <a
            href={cv_abbassami}
            download="CV_Sami_Abbas.pdf"
            aria-label="Télécharger le CV de Sami Abbas"
          >
            <button className="portfolio__resume-container-buttone button-pink">
              Télécharger
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
