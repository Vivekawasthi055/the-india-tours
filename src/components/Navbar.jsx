import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  // Close menu on link click (BEST PRACTICE)
  const closeMenu = () => setMenuOpen(false);

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
      {/* LOGO + SITE NAME */}
      <Link to="/" className="logo-wrapper" onClick={closeMenu}>
        <img src="/logo.png" alt="The India Tours Logo" className="logo-img" />
        <span className="logo-text">The India Tours</span>
      </Link>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={closeMenu}
          >
            {t("nav.home")}
          </Link>
        </li>

        <li>
          <Link
            to="/destinations"
            className={location.pathname === "/destinations" ? "active" : ""}
            onClick={closeMenu}
          >
            {t("nav.destinations")}
          </Link>
        </li>

        <li>
          <Link
            to="/tours"
            className={location.pathname === "/tours" ? "active" : ""}
            onClick={closeMenu}
          >
            {t("nav.tours")}
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={closeMenu}
          >
            {t("nav.about")}
          </Link>
        </li>

        <li>
          <Link
            to="/gallery"
            className={location.pathname === "/gallery" ? "active" : ""}
            onClick={closeMenu}
          >
            {t("nav.gallery")}
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={closeMenu}
          >
            {t("nav.contact")}
          </Link>
        </li>
      </ul>

      {/* Language Selector */}
      <div className="language-selector">
        <span className="language-icon">🌐</span>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese (Brazil)</option>
          <option value="ru">Russian</option>
        </select>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
