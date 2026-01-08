import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Footer.css";

const Footer = () => {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-left">
          <h2>The India Tours</h2>
          <p className="footer-desc">{t("home.subtitle")}</p>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h3>Contact</h3>

          <p>
            📞 <strong>{t("contact.phone")}:</strong>{" "}
            <a className="contact-a" href="tel:+919630382854">
              +91 96303 82854
            </a>
            ,{" "}
            <a className="contact-a" href="tel:+918827573086">
              +91 88275 73086
            </a>
          </p>

          <p className="insta-link">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email"
              className="insta-icon"
            />
            <strong className="footer-insta-text">
              {t("contact.emailLabel")}:
            </strong>{" "}
            <a className="contact-a" href="mailto:theindiatours055@gmail.com">
              theindiatours055@gmail.com
            </a>
          </p>

          {/* INSTAGRAM */}
          <p className="insta-row">
            <a
              href="https://www.instagram.com/the_indiatours/"
              target="_blank"
              rel="noreferrer"
              className="insta-link"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="insta-icon"
              />
              <strong className="footer-insta-text">Instagram:</strong>
              <strong className="insta-username">the_indiatours</strong>
            </a>
          </p>

          <a
            href="https://wa.me/919630382854"
            target="_blank"
            rel="noreferrer"
            className="wsbtn whatsapp-btn"
          >
            {t("contact.whatsappbtn")}
          </a>
        </div>
      </div>

      {/* DIVIDER */}
      <hr className="footer-divider" />

      {/* BOTTOM TEXT */}
      <div className="footer-bottom">
        <p>© 2025 The India Tours</p>
        <p>{t("footer.text")}</p>
      </div>
    </footer>
  );
};

export default Footer;
