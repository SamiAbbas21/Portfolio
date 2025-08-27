import React, { useState } from "react";
import "./Product.css";
import { Popup } from "../../components";

function Product({ name, img, link, description, imgcut}) {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev) 
  }

  return (
    <div className="product">
      <div className="portfolio__product">
        <div className="portfolio__product-browser">
          <div className="portfolio__product-browser-circle red circle__left"></div>
          <div className="portfolio__product-browser-circle black"></div>
          <div className="portfolio__product-browser-circle green"></div>
        </div>
        <div className="portfolio__product-image" data-aos="fade-up" data-aos-duration="800">
            <img src={img} loading="eager" alt={name} onClick={openModal}/>
        </div>
      </div>
      <button className="portfolio__product-button" onClick={openModal}>{name}</button>
      <Popup description={description} img={img} name={name} showModal={showModal} imgcut={imgcut} link={link} setShowModal={setShowModal}/>
    </div>
  );
}

export default Product;
