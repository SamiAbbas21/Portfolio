import React, { useState } from "react";
import "./Minproduct.css";
import { Popup } from "../../components";



function Minproduct({ name, img, description, imgcut, link}) {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev) 
  }
  return (
    <div className="portfolio__minproducts" 
    >
      <div className="portfolio__product-browser">
        <div className="portfolio__product-browser-circle red circle__left"></div>
        <div className="portfolio__product-browser-circle black"></div>
        <div className="portfolio__product-browser-circle green"></div>
      </div>
      <div className="portfolio__product-image-min" data-aos="fade-up" data-aos-duration="800">
        <img src={img} loading="eager" alt={name} onClick={openModal}/>
      </div>
        <Popup description={description} img={img} name={name} imgcut={imgcut} link={link} showModal={showModal} setShowModal={setShowModal}/>
    </div>
  );
}

export default Minproduct;
