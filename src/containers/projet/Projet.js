import React from "react";
import "./Projet.css";
import { Product, Minproduct } from "../../components";

// 👉 Image "plus"
import plus from "../../assets/plus.png";

// 👉 Mets tes visuels dans /src/assets et adapte les noms ci-dessous
import imgERP from "../../assets/projet-erp.jpg";
import imgERPcut from "../../assets/projet-erpcut.jpg";
import imgRAmses from "../../assets/projet-ramses.jpg";
import imgRAmsescut from "../../assets/projet-ramsescut.jpg";
import imgUnifree from "../../assets/projet-unifree.jpg";
import imgUnifreecut from "../../assets/projet-unifreecut.jpg";
import imgCousbeldi from "../../assets/imgCousbeldi.jpg";
import imgCousbeldicut from "../../assets/imgCousbeldicut.jpg";
import imgWaidev from "../../assets/imgWaidev.jpg";
import imgWaidevcut from "../../assets/imgWaidevcut.jpg";
import imgIrd from "../../assets/imgIrd.jpg";
import imgIrdcut from "../../assets/imgIrdcut.jpg";

import thumbLSsanter from "../../assets/thumb-lssanter.jpg";
import thumbLSsantercut from "../../assets/thumb-lssanter.jpg";
import thumbC from "../../assets/thumb-cproject.jpg";
import thumbCcut from "../../assets/thumb-cproject.jpg";
import imgMobileApp from "../../assets/projet-mobileapp.jpg";
import imgMobileAppcut from "../../assets/projet-mobileappcut.jpg";

// ===== Projets principaux (6) =====
const products = [
  {
    id: 1,
    name: "RAmses — ERP Universitaire",
    img: imgRAmses,
    imgcut: imgRAmsescut,
    link: "https://github.com/SamiAbbas21/RAmses",
    description:
      "Développement d’un ERP universitaire complet avec Angular (front-end) et Nest.js (back-end). Conception de modules pour la gestion des utilisateurs, des ressources pédagogiques et des flux académiques. Mise en place d’une architecture modulaire et maintenable, intégrant à la fois logique métier et bonnes pratiques de collaboration en équipe.",
  },
  {
    id: 2,
    name: "ERP Universitaire — IUT Lyon 1",
    img: imgERP,
    imgcut: imgERPcut,
    link: "https://github.com/SamiAbbas21/ERP",
    description:
      "Développement collaboratif d’un ERP universitaire pour l’IUT Lyon 1. Front-end en Angular et back-end en Spring Boot, avec une architecture modulaire, des composants réutilisables et une gestion de projet basée sur GitHub (issues, branches et merges).",
  },
  {
    id: 3,
    name: "Unifree — E-learning web site",
    img: imgUnifree,
    imgcut: imgUnifreecut,
    link: "https://github.com/SamiAbbas21/Unifree",
    description:
      "Développement d’une plateforme e-learning avec React (front-end) et Node.js (back-end). Mise en place des pages publiques, structuration des contenus pédagogiques et conception d’un parcours utilisateur fluide et évolutif.",
  },
  {
    id: 4,
    name: "Cousbeldi — Application web complète pour restaurant",
    img: imgCousbeldi,
    imgcut: imgCousbeldicut,
    link: "https://github.com/cousbeldi/Cousbeldi-Client",
    description:
      "Développement d’une application web complète pour le restaurant Cousbeldi. • Front-end : React + TypeScript avec un design system cohérent et des composants réutilisables pour gérer le menu, les commandes et le suivi client. • Back-end : Node.js + PostgreSQL (API REST disponible ici : https://github.com/cousbeldi/Cousbeldi-api), assurant la gestion des données et l’intégration avec les fonctionnalités métiers. Projet mené dans un cadre professionnel avec mise en place d’un cahier de passation."
  },
  {
    id: 5,
    name: "Waidev — Site vitrine professionnel",
    img: imgWaidev,
    imgcut: imgWaidevcut,
    link: "https://waidev.fr",
    description:
      "Développement front-end et intégration UI/UX du site vitrine de Waidev. Interfaces modernes, responsive design et optimisation des composants pour une expérience utilisateur fluide. 🔗 Code source disponible sur GitHub : https://github.com/xegulon/waidev-website"
  },
  {
    id: 6,
    name: "Institut de Recherche pour le Développement (IRD) — Theia Ozcar",
    img: imgIrd,
    imgcut: imgIrdcut,
    link: "https://www.ird.fr",
    description:
      "Conception et intégration d’un composant de visualisation de données environnementales pour la plateforme Theia Ozcar. Développé avec Vue.js, Quasar et Apache ECharts, ce module interactif permet aux chercheurs de comparer et analyser efficacement des séries temporelles."
  }
];

// ===== Mini-projets (6) =====
const minProducts = [
  {
    id: 1,
    name: "LS-Santer — Application Java",
    img: thumbLSsanter,
    imgcut: thumbLSsantercut,
    link: "https://github.com/SamiAbbas21/LS-santer",
    description:
      "Application Java orientée santé, développée pour la gestion d’hôpitaux. Mise en place d’algorithmes d’aide à la décision, utilisation avancée des structures de données et réalisation de tests unitaires pour garantir fiabilité et performance.",
  },
  {
    id: 2,
    name: "Projet en C — Gestion mémoire & structures",
    img: thumbC,
    imgcut: thumbCcut,
    link: "https://github.com/SamiAbbas21/C_project",
    description:
      "Développement d’un projet académique en langage C mettant en œuvre la gestion mémoire, la manipulation de structures de données et la compilation multi-fichiers. Ce projet m’a permis de renforcer ma maîtrise des fondamentaux bas-niveau et des bonnes pratiques de programmation en C."
  },
  {
    id: 3,
    name: "Application mobile — Bien-être alimentaire (Kotlin)",
    img: imgMobileApp,
    imgcut: imgMobileAppcut,
    link: "https://github.com/SamiAbbas21/mobile_app",
    description:
      "Développement d’une application Android en Kotlin dédiée au suivi et à l’amélioration du bien-être alimentaire. Mise en place d’une navigation fluide entre les vues, gestion d’état, et intégration de composants natifs pour offrir une expérience utilisateur claire et intuitive.",
  },
];

function Projet() {
  return (
    <div className="portfolio__projet section__margin" id="projet">
      <div className="portfolio__projet-container">
        {/* Intro */}
        <div
          className="portfolio__projet-container-text"
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="800"
        >
          <h1>Créer & Inspirer — Projets de Sami Abbas</h1>
          <p>
            Sélection de projets (universitaires & persos) mêlant développement front-end,
            UI/UX et back-end. Cliquez pour les détails et les dépôts GitHub.
          </p>
        </div>

        {/* Projets principaux */}
        <div className="portfolio__projet-container-projets">
          {products.map((item) => (
            <Product
              key={item.id}
              name={item.name}
              img={item.img}
              link={item.link}
              description={item.description}
              imgcut={item.imgcut}
            />
          ))}
        </div>

        {/* Mini-projets */}
        <div className="portfolio__projet-container-minprojets">
          {minProducts.map((item) => (
            <Minproduct
              key={item.id}
              name={item.name}
              img={item.img}
              description={item.description}
              imgcut={item.imgcut}
              link={item.link}
            />
          ))}
        </div>

        {/* Lien vers tous les repos */}
        <div className="portfolio__projet-container-info" data-aos="fade-left">
          <img
            src={plus}
            loading="eager"
            alt="Plus de projets — Sami Abbas"
            className="pulsate-fwd"
          />
          <h4>
            <a
              href="https://github.com/SamiAbbas21?tab=repositories"
              target="_blank"
              rel="noreferrer noopener"
            >
              Voir tous mes dépôts GitHub
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Projet;
