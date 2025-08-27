import React from "react";
import "./Popup.css";


function Popup({ description, showModal, setShowModal, name, img, imgcut, link, block, setBlock}) {
  return (
    <>
      <p>{showModal}</p>
      {showModal ? (
        <div className="portfolio__popup" onClick={() => setShowModal((prev) => !prev)}>
          <div className="portfolio__popup-container" data-aos="zoom-in" data-aos-duration="500" showModal={showModal} onClick={() => setShowModal((prev) => !prev)}>
            <div className="portfolio__popup-container-close">
              <div className="portfolio__popup-browser">
                <div className="portfolio__product-browser-circle red circle__left pointer" onClick={() => setShowModal((prev) => !prev)}></div>
                <div className="portfolio__product-browser-circle black"></div>
                <div className="portfolio__product-browser-circle green"></div>
              </div>
              <div className="portfolio__popup-container-closebutton pulsate-fwd" onClick={() => setShowModal((prev) => !prev)}><strong>⤬</strong></div>
            </div>

            <div className="portfolio-container-img" data-aos="fade-down">
              <img src={imgcut} alt={name} />
            </div>
            <div className="portfolio-container-text">
              <h1>{name}</h1>
              <p>{description}</p>
              {link ? <a href={link} target="_blank" rel="noreferrer noopener"><button className="button-pink">Visiter le site</button></a> : ""}
              
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Popup;
