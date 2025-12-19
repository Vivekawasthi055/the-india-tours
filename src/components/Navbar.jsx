import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scroll ? "scrolled" : ""}`}>
      <Link to="/" className="logo">
        Incredible Trails India
      </Link>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            {t("nav.home")}
          </Link>
        </li>
        <li>
          <Link
            to="/destinations"
            className={location.pathname === "/destinations" ? "active" : ""}
          >
            {t("nav.destinations")}
          </Link>
        </li>
        <li>
          <Link
            to="/tours"
            className={location.pathname === "/tours" ? "active" : ""}
          >
            {t("nav.tours")}
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            {t("nav.about")}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            {t("nav.contact")}
          </Link>
        </li>
      </ul>

      <div className="language-selector">
        <span className="language-icon">🌐</span>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="it">Italian</option>
          <option value="fr">French</option>
          <option value="pt">Portuguese (Brazil)</option>
        </select>
      </div>

      {/* Hamburger button */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
