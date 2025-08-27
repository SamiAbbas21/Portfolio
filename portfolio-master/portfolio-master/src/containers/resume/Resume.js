import React from 'react'
import "./Resume.css"
import cv_edouard_toulet from "../../assets/cv_edouard_toulet.pdf";


function Resume() {
    return (
        <div className="portfolio__resume section__margin gradient__bg-resume " data-aos="fade-up" id="resume">
        <div className="portfolio__resume-container">
          <div className="portfolio__resume-container-title">
            <p>Vous voulez en savoir plus sur Edouard Toulet ?</p>
            <h2>Téléchargez directement mon CV ici 👉 </h2>
          </div>
          <div>
            <a href={cv_edouard_toulet} download="Cv Edouard Toulet"><button className="portfolio__resume-container-buttone button-pink">Télécharger</button></a>
          </div>
        </div>
      </div>
    )
}

export default Resume
