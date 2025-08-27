import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="hook__footer section__padding">
      <div className="hook__container-text">
        <h1 className="gradient__text" data-aos="fade-up">
          « Le code est comme l’art : il évolue avec celui qui le crée. »
        </h1>
        <a href="#contact">
          <button className="hook__footer_button" data-aos="fade-up">
            Me Contacter
          </button>
        </a>
      </div>

      <div className="hook__container-details">
        {/* Bloc identité */}
        <div className="hook__container-details-1" data-aos="fade-right">
          <a href="#aboutme"><h1>Sami Abbas</h1></a>
          <p>Lyon, Auvergne-Rhône-Alpes</p>
        </div>

        {/* Bloc menu */}
        <div className="hook__container-details-2" data-aos="fade-right">
          <h4>Menu</h4>
          <a href="#aboutme"><p>À propos</p></a>
          <a href="#projet"><p>Projets</p></a>
          <a href="#resume"><p>CV</p></a>
          <a href="#contact"><p>Contact</p></a>
        </div>

        {/* Bloc contact direct */}
        <div className="hook__container-details-4" data-aos="fade-left">
          <h4>Contact</h4>
          <p>(+33) 06 20 99 38 67</p>
          <p>
            <a href="mailto:samiabbas2004@gmail.com" rel="noreferrer noopener">
              samiabbas2004@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div
        className="div"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
      ></div>

      <h5
        className="hook__container-right"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
      >
        © {new Date().getFullYear()} Sami Abbas. Tous droits réservés.
      </h5>
    </div>
  );
}

export default Footer;
