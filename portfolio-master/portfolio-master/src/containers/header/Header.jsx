import React from "react";
import "./Header.css";
import samiPhoto from "../../assets/photosansbg.png"; // ta photo importée

function Header() {
  return (
    <div className="portfolio__header section__padding">
      <div className="portfolio__header-container">
        <div
          className="portfolio__header-container-title"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h1 className="container">
            Sami
            <a href="#aboutme">
              <p className="highlight"> Abbas </p>
            </a>
          </h1>
          <h2>Développeur Web & Designer UI/UX</h2>
        </div>

        <div
          className="portfolio__header-container-menu"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <a href="#aboutme">
            <button>À propos</button>
          </a>
          <a href="#projet">
            <button>Projets</button>
          </a>
          <a href="#resume">
            <button>CV</button>
          </a>
          <a href="#contact">
            <button>Contact</button>
          </a>
        </div>
      </div>

      <div
        className="portfolio__header-image"
        data-aos="zoom-in-left"
        data-aos-duration="1000"
      >
        <img
          src={samiPhoto}
          loading="eager"
          alt="Sami Abbas - Portfolio"
          className="portfolio__header-photo"
        />
      </div>
    </div>
  );
}

export default Header;
