import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Footer.css";

const Footer = () => {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <p>© 2025 Incredible Trails India</p>
      <p>{t("footer.text")}</p>
    </footer>
  );
};

export default Footer;
