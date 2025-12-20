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
          <h2>Incredible Trails India</h2>
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

          <p>
            ✉️ <strong>{t("contact.emailLabel")}:</strong>{" "}
            <a
              className="contact-a"
              href="mailto:travel@incredibletrailsindia.com"
            >
              travel@incredibletrailsindia.com
            </a>
          </p>
          <a
            href="https://wa.me/919630382854"
            target="_blank"
            rel="noreferrer"
            className="wsbtn whatsapp-btn"
          >
            {t("contact.whatsapp")}
          </a>
        </div>
      </div>

      {/* DIVIDER */}
      <hr className="footer-divider" />

      {/* BOTTOM TEXT */}
      <div className="footer-bottom">
        <p>© 2025 Incredible Trails India</p>
        <p>{t("footer.text")}</p>
      </div>
    </footer>
  );
};

export default Footer;
