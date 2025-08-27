import React from "react";
import "./Aboutme.css";
import samiAbout from "../../assets/photo2.jpg";

function Aboutme() {
  return (
    <div className="portfolio__aboutme">
      <div className="portfolio__aboutme-container section__padding" id="aboutme">
        {/* Photo */}
        <div
          className="portfolio__aboutme-container-photo"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
        >
          <img src={samiAbout} alt="Sami Abbas — portrait" />
        </div>

        {/* Texte */}
        <div className="portfolio__aboutme-container-text">
          <div
            className="portfolio__aboutme-line"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-center"
          >
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          </div>

          {/* ---- Qui je suis ---- */}
          <h1 data-aos="fade-left">À propos</h1>
          <h4 data-aos="fade-left" style={{ marginTop: "1rem" }}>Qui je suis</h4>
          <p data-aos="fade-left">
            Je m’appelle Sami Abbas, étudiant Franco-Libanais en Mastère Lead Designer UI/UX à Digital Campus Lyon, après avoir obtenu un BUT Informatique (spécialisation développement web full-stack).
          </p>
          <p data-aos="fade-left">
            Passionné par le design et le code, j’aime donner vie à des interfaces élégantes et fonctionnelles où l’expérience utilisateur est au centre. 
            En dehors de l’écran, je trouve mon équilibre dans le basket et ma passion pour l’automobile, symboles de rythme et de performance qui m’inspirent aussi dans mon travail.
          </p>
          {/* ---- Mes compétences clés ---- */}
          <h4 data-aos="fade-left" style={{ marginTop: "1rem" }}>Mes compétences clés</h4>
          <ul className="about-list" data-aos="fade-left">
            <li><strong>Développement web :</strong> React, TypeScript, Node.js, Vue.js, Angular</li>
            <li><strong>Design & UI/UX :</strong> création de maquettes et prototypage (Figma), intégration pixel-perfect</li>
            <li><strong>Langages maîtrisés :</strong> C, Java, HTML, CSS, JavaScript, Python</li>
            <li><strong>Optimisation :</strong> amélioration des performances, simplification du code, réactivité des interfaces</li>
            <li><strong>Systèmes :</strong> installation, configuration et administration de plateformes</li>
          </ul>

          {/* ---- Expériences marquantes ---- */}
          <h4 data-aos="fade-left" style={{ marginTop: "1rem" }}>Expériences marquantes</h4>
          <ul className="about-list" data-aos="fade-left">
            <li>
              Stage chez Cousbeldi : développement d’une application web complète (React/Node/PostgreSQL) pour la gestion de restaurant, accompagné d’un cahier de passation pour assurer la continuité du projet.
            </li>
            <li>
              Stage chez Waidev : expérience front-end et web design, où j’ai contribué à des interfaces modernes et soignées, tout en renforçant ma sensibilité UI/UX.
            </li>
            <li>
              Stage à l’Institut de Recherche pour le Développement (IRD) : création d’un composant de visualisation de données environnementales avec Vue.js, Quasar et Apache ECharts, en collaboration avec une équipe de chercheurs.
            </li>
          </ul>
          <p data-aos="fade-left">
            Ces projets m’ont permis d’allier rigueur technique et créativité, mais aussi de travailler efficacement en équipe sur des problématiques concrètes.
          </p>

          {/* ---- Ma vision ---- */}
          <h4 data-aos="fade-left" style={{ marginTop: "1rem" }}>Ma vision</h4>
          <p data-aos="fade-left">
            Toujours curieux, je cherche à progresser en explorant l’équilibre entre design et technologie.
          </p>
          <p data-aos="fade-left">
            Mon objectif est de contribuer à des projets innovants en alternance ou en freelance, où je peux mettre à profit mes compétences en développement front-end et en UI/UX design.
          </p>

          {/* ---- CTA ---- */}
          <div
            className="about-cta"
            data-aos="fade-left"
            style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px" }}
          >
            <a href="#projet"><button>Voir mes projets</button></a>
            <a href="#contact"><button>Me contacter</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
