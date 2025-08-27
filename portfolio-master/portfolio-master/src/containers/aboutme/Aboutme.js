import React from "react";
import "./Aboutme.css";
import edouard2 from "../../assets/edouard2.jpg";
import yapero from "../../assets/yapero.svg";

function Aboutme() {
  return (
    <div className="portfolio__aboutme">
      <div
        className="portfolio__aboutme-container section__padding"
        id="aboutme"
      >
        <div
          className="portfolio__aboutme-container-photo"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
        >
          <img src={edouard2} alt="Edouard Toulet portfolio" />
        </div>
        <div className="portfolio__aboutme-container-text">
          <div
            className="portfolio__aboutme-line"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-center"
          >
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          </div>

          <h1 data-aos="fade-left">Mon Histoire</h1>
          <h3 data-aos="fade-left">
            Développeur Front-end React.js & intégrateur web
          </h3>
          <p data-aos="fade-left">
            Entrepreneur et développeur frontend spécialisé en Javascript ES6 et
            React.js avec plus de 2 années d'expérience, je m'occupe de la
            conception de vos projets web jusqu'à la mise en production.
          </p>
          <p data-aos="fade-left">
            Passionné de développement web je suis également très sensible à
            l' ergonomie , la fluidité et l' expérience utilisateur (UX) d'un
            site web.
          </p>
          <p data-aos="fade-left">
            Actuellement en freelance, je serais très heureux de
            discuter avec vous de vos projets ou de belles opportunités
            professionnelles.
          </p>
          <div
            className="portfolio__aboutme-container-yapero"
            data-aos="fade-left"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="portfolio__aboutme-container-yapero-image">
              <img src={yapero} alt="yapero" className="pulsate-fwd" />
            </div>
            <div className="portfolio__aboutme-container-yapero-text">
              <h4>Fondateur & developpeur Front-end Yapero.</h4>
              <p>
                Service de livraison d'alcool à domicile disponible depuis 2016
                à Marseille.{" "}
                <a href="https://yapero.com" target="_blank" rel="noreferrer noopener">
                  Voir le site
                </a>{" "}
                &{" "}
                <a
                  href="https://apps.apple.com/fr/app/yapero-livraison-dalcool/id1366384176"
                  target="_blank" rel="noreferrer noopener"
                >
                  {" "}
                  l'application mobile.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
