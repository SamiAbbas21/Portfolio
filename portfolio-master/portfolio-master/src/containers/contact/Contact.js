import React, { useRef, useState } from "react";
import "./Contact.css";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f8fbxir",
        "template_gm5vadb",
        formRef.current,
        "user_l8s8B8JbKBef0uIaiKcFu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="portfolio__contact contact" id="contact">
      <div className="bg-contact"></div>
      <div className="portfolio__contact-container section__padding">
        <div className="portfolio__contact-container-info">
          <h1 data-aos="fade-up">Let's discuss.</h1>
          <div
            className="portfolio__contact-container-info-item"
            data-aos="fade-right"
          >
            <img src={phone} alt="phone" />
            <p>(+33) 06 27 13 57 23</p>
          </div>
          <div
            className="portfolio__contact-container-info-item"
            data-aos="fade-right"
          >
            <img src={email} alt="email" />
            <p>edtoulet@gmail.com</p>
          </div>
          <div
            className="portfolio__contact-container-info-item"
            data-aos="fade-right"
          >
            <img src={location} alt="location" />
            <p>Paris, 75017</p>
          </div>
        </div>
        <div className="portfolio__contact-container-form">
          <p data-aos="fade-left">
            <strong> Quelle est votre histoire ?</strong> Discutons ensemble.
            Toujours disponible pour des beaux projets ou des opportunités
            professionnelles.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form__group field" data-aos="fade-left">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                name="user_name"
                id="name"
                autoComplete="off"
                required
              />
              <label htmlFor="name" className="form__label">
                Prénom
              </label>
            </div>
            <div className="form__group field" data-aos="fade-left">
              <input
                type="input"
                className="form__field"
                placeholder="Subject"
                autoComplete="off"
                name="user_subject"
                id="subject"
                required
              />
              <label htmlFor="subject" className="form__label">
                Sujet
              </label>
            </div>
            <div className="form__group field" data-aos="fade-left">
              <input
                type="input"
                className="form__field"
                placeholder="Email"
                name="user_email"
                autoComplete="off"
                id="email"
                required
              />
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>
            <textarea
              rows="5"
              name="message"
              id="other_information"
              data-aos="fade-left"
            ></textarea>
            <button className="button-pink" data-aos="fade-left">
              Envoyer
            </button>
            {done && (
              <h2 className="contact__message" data-aos="fade-up">
                Merci {name} ! Je te contact rapidemment.
              </h2>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
