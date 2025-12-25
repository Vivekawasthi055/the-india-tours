import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="contact">
      <h1>{t("contact.title")}</h1>
      <p className="contact-sub">{t("contact.subtitle")}</p>

      {/* CONTACT DETAILS */}
      <div className="contact-details">
        <p>
          📞 <strong>{t("contact.phone")}:</strong>{" "}
          <a href="tel:+919630382854">+91 96303 82854</a>,{" "}
          <a href="tel:+33783236654">+33 783236654</a>,{" "}
          <a href="tel:+918827573086">+91 88275 73086</a>
        </p>

        <p>
          ✉️ <strong>{t("contact.emailLabel")}:</strong>{" "}
          <a href="mailto:theindiatours055@gmail.com">
            theindiatours055@gmail.com
          </a>
        </p>
      </div>

      {/* WHATSAPP BUTTON (EMAIL KE NEECHE, FORM KE UPAR) */}
      <a
        href="https://wa.me/919630382854"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        {t("contact.whatsapp")}
      </a>

      {/* CONTACT FORM */}
      <form className="contact-form">
        <input type="text" placeholder={t("contact.name")} />
        <input type="email" placeholder={t("contact.email")} />
        <input type="text" placeholder={t("contact.country")} />
        <textarea placeholder={t("contact.message")}></textarea>

        <button type="submit">{t("contact.send")}</button>
      </form>

      <div>
        <img
          src="/logo.png"
          alt="The India Tours Logo"
          className="logo-contact"
        />
      </div>
    </div>
  );
};

export default Contact;
