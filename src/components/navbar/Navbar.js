import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div
      className="portfolio__navbar"
      data-aos="fade-left"
      data-aos-duration="1300"
    >
      <p>
        <strong> (+33) 06 20 99 38 67 </strong> |{" "}
        <a
          href="mailto:samiabbas2004@gmail.com"
          className="navbar-email"
          rel="noreferrer noopener"
        >
           samiabbas2004@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Navbar;
