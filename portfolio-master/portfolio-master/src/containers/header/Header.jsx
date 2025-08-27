import React from "react";
import "./Header.css";
import edouard1 from "../../assets/edouard1.png";
import edouard from "../../assets/edouard.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

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
            Edouard
            <a href="#aboutme">
              <p className="highlight"> Toulet </p>
            </a>
          </h1>
          <h2> Développeur React.js / Javascript </h2>
        </div>
        <div
          className="portfolio__header-container-menu"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <a href="#aboutme">
            <button> Mon Histoire </button>
          </a>
          <a href="#projet">
            <button> Mes Projets </button>
          </a>
          <a href="#resume">
            <button> Mon Cv </button>
          </a>
          <a href="#contact">
            <button> Me Contacter </button>
          </a>
        </div>
      </div>
      <div
        className="portfolio__header-image"
        data-aos="zoom-in-left"
        data-aos-duration="1000"
      >
        <div className="portfolio__header-blob">
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.5}>
              <MeshDistortMaterial
                color="#667bf3"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
        </div>
        <div className="portfolio__header-blob">
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1}>
              <MeshDistortMaterial
                color="#4cf196"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
        </div>
        <a
        className="portfolio__header-desk"
          href="https://instagram.com/kpudessine?utm_medium=copy_link"
          target="_blank" rel="noreferrer noopener"
        >
          <img
            src={edouard1}
            loading="eager"
            alt="Edouard Toulet portfolio kpudessine"
          />
          </a>
          <a className="portfolio__header-img__mobile"
          href="https://instagram.com/kpudessine?utm_medium=copy_link"
          target="_blank" rel="noreferrer noopener"
        >
          <img
          
            src={edouard}
            loading="eager"
            alt="Edouard Toulet portfolio kpudessine"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
