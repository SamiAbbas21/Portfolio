import React, { useRef, useState } from "react";
import "./Contact.css";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // ⚙️ Clés EmailJS via variables d'environnement (à définir dans .env.local)
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSending(false);
      setError(
        "Configuration EmailJS manquante. Ajoutez vos variables dans .env.local puis relancez le serveur."
      );
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setDone(true);
      e.target.reset();
      setName("");
    } catch (err) {
      console.error(err);
      setError("Oups, l’envoi a échoué. Réessayez ou contactez-moi par email.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="portfolio__contact contact" id="contact">
      <div className="bg-contact"></div>
      <div className="portfolio__contact-container section__padding">
        {/* Infos de contact (à gauche) */}
        <div className="portfolio__contact-container-info">
          <h1 data-aos="fade-up">On échange&nbsp;?</h1>

          <div className="portfolio__contact-container-info-item" data-aos="fade-right">
            <img src={phone} alt="phone" />
            <p>(+33) 06 20 99 38 67</p>
          </div>

          <div className="portfolio__contact-container-info-item" data-aos="fade-right">
            <img src={email} alt="email" />
            <p>
              <a href="mailto:samiabbas2004@gmail.com" rel="noreferrer noopener">
                samiabbas2004@gmail.com
              </a>
            </p>
          </div>

          <div className="portfolio__contact-container-info-item" data-aos="fade-right">
            <img src={location} alt="location" />
            <p>Lyon, Auvergne-Rhône-Alpes</p>
          </div>
        </div>

        {/* Formulaire (à droite) */}
        <div className="portfolio__contact-container-form">
          <p data-aos="fade-left">
            <strong>Quelle est votre histoire&nbsp;?</strong> Discutons ensemble.
            Ouvert aux opportunités d’alternance et aux projets freelance.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form__group field" data-aos="fade-left">
              <input
                type="text"
                className="form__field"
                placeholder="Prénom"
                onChange={(e) => setName(e.target.value)}
                name="user_name"
                id="name"
                autoComplete="off"
                required
              />
              <label htmlFor="name" className="form__label">Prénom</label>
            </div>

            <div className="form__group field" data-aos="fade-left">
              <input
                type="text"
                className="form__field"
                placeholder="Sujet"
                autoComplete="off"
                name="user_subject"
                id="subject"
                required
              />
              <label htmlFor="subject" className="form__label">Sujet</label>
            </div>

            <div className="form__group field" data-aos="fade-left">
              <input
                type="email"
                className="form__field"
                placeholder="Email"
                name="user_email"
                autoComplete="off"
                id="email"
                required
              />
              <label htmlFor="email" className="form__label">Email</label>
            </div>

            <textarea
              rows="5"
              name="message"
              id="other_information"
              placeholder="Votre message…"
              data-aos="fade-left"
              required
            ></textarea>

            <button className="button-pink" data-aos="fade-left" disabled={sending}>
              {sending ? "Envoi…" : "Envoyer"}
            </button>

            {done && (
              <h2 className="contact__message" data-aos="fade-up">
                Merci {name || "!"} Je vous contacte rapidement.
              </h2>
            )}

            {error && (
              <p className="contact__error" data-aos="fade-up">
                {error} <br />
                <a href="mailto:samiabbas2004@gmail.com" className="underline" rel="noreferrer noopener">
                  Envoyer un email direct
                </a>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
