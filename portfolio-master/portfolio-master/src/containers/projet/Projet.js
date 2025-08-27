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
    name: "ERP Universitaire - RAmses",
    img: imgRAmses,
    imgcut: imgRAmsescut,
    link: "https://github.com/SamiAbbas21/RAmses",
    description:
      "Projet ERP universitaire en Angular pour le front-end et Nest.js pour le back-end : gestion des entités clés (utilisateurs, ressources, flux), logique métier et organisation modulaire du code.",
  },
  {
    id: 2,
    name: "ERP Universitaire - IUT Lyon 1",
    img: imgERP,
    imgcut: imgERPcut,
    link: "https://github.com/SamiAbbas21/ERP",
    description:
      "Travail de groupe (ERP pour l’IUT Lyon 1). Architecture Angular pour le front-end et springboot pour le back-end, composants réutilisables et pratiques de collaboration (issues/branches).",
  },
  {
    id: 3,
    name: "Unifree — E-learning web site",
    img: imgUnifree,
    imgcut: imgUnifreecut,
    link: "https://github.com/SamiAbbas21/Unifree",
    description:
      "Site e-learning React pour le front et nodejs pour le back : pages publiques, organisation des contenus pédagogiques et base pour un parcours utilisateur.",
  },
  {
    id: 4,
    name: "Cousbeldi - Front-end",
    img: imgCousbeldi,
    imgcut: imgCousbeldicut,
    link: "https://github.com/cousbeldi/Cousbeldi-Client",
    description:
      "site"  
  },
  {
    id: 5,
    name: "Waidev",
    img: imgWaidev,
    imgcut: imgWaidevcut,
    link: "https://github.com/xegulon/waidev-website",
    description:
      "Site",
  },
  {
    id: 6,
    name: "IRD",
    img: imgIrd,
    imgcut: imgIrdcut,
    link: "#",
    description:
      "Site",
  },
];

// ===== Mini-projets (6) =====
const minProducts = [
  {
    id: 1,
    name: "LS-santer — Java",
    img: thumbLSsanter,
    imgcut: thumbLSsantercut,
    link: "https://github.com/SamiAbbas21/LS-santer",
    description:
      "Projet Java pour hôpitaux (algo d’aide) : structures de données, logique métier et tests.",
  },
  {
    id: 2,
    name: "C_project — C",
    img: thumbC,
    imgcut: thumbCcut,
    link: "https://github.com/SamiAbbas21/C_project",
    description:
      "Petit projet en C : gestion mémoire, fonctions utilitaires et compilation multi-fichiers.",
  },
  {
    id: 3,
    name: "Mobile App — Kotlin",
    img: imgMobileApp,
    imgcut: imgMobileAppcut,
    link: "https://github.com/SamiAbbas21/mobile_app",
    description:
      "Application Android (Kotlin) orientée bien-être alimentaire : navigation, vues, gestion d’état et composants natifs.",
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
