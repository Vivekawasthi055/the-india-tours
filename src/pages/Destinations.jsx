import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Destinations.css";

import rajasthan from "../assets/images/rajasthan.jpg";
import kerala from "../assets/images/kerala.jpg";
import ladakh from "../assets/images/ladakh.jpg";
import goa from "../assets/images/goa.jpg";
import delhi from "../assets/images/delhi.jpg";
import up from "../assets/images/up.jpg";
import mp from "../assets/images/mp.jpg";

const Destinations = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="destinations">
      <h1>{t("destinations.title")}</h1>
      <p className="dest-subtitle">{t("destinations.subtitle")}</p>

      <div className="destination-grid">
        <div className="destination-card">
          <img src={rajasthan} alt="Rajasthan" />
          <div className="overlay">
            <h3>{t("destinations.rajasthan.title")}</h3>
            <p>{t("destinations.rajasthan.desc")}</p>
            <Link to="/tours" className="explore-btn">
              {t("destinations.ctaBtn")}
            </Link>
          </div>
        </div>

        <div className="destination-card">
          <img src={ladakh} alt="Ladakh" />
          <div className="overlay">
            <h3>{t("destinations.ladakh.title")}</h3>
            <p>{t("destinations.ladakh.desc")}</p>
            <Link to="/tours" className="explore-btn">
              {t("destinations.ctaBtn")}
            </Link>
          </div>
        </div>

        <div className="destination-card">
          <img src={kerala} alt="Kerala" />
          <div className="overlay">
            <h3>{t("destinations.kerala.title")}</h3>
            <p>{t("destinations.kerala.desc")}</p>
            <Link to="/tours" className="explore-btn">
              {t("destinations.ctaBtn")}
            </Link>
          </div>
        </div>

        <div className="destination-card">
          <img src={goa} alt="Goa" />
          <div className="overlay">
            <h3>{t("destinations.goa.title")}</h3>
            <p>{t("destinations.goa.desc")}</p>
            <Link to="/tours" className="explore-btn">
              {t("destinations.ctaBtn")}
            </Link>
          </div>
        </div>

        <div className="destination-card">
          <img src={delhi} alt="Delhi" />
          <div className="overlay">
            <h3>{t("destinations.delhi.title")}</h3>
            <p>{t("destinations.delhi.desc")}</p>
            <Link to="/tours" className="explore-btn">
              {t("destinations.ctaBtn")}
            </Link>
          </div>
        </div>

        <div className="destination-card">
          <img src={up} alt="Uttar Pradesh" />
          <div className="overlay">
            <h3>{t("destinations.up.title")}</h3>
            <p>{t("destinations.up.desc")}</p>
            <Link to="/tours" className="explore-btn">
              {t("destinations.ctaBtn")}
            </Link>
          </div>
        </div>

        <div className="destination-card">
          <img src={mp} alt="Madhya Pradesh" />
          <div className="overlay">
            <h3>{t("destinations.mp.title")}</h3>
            <p>{t("destinations.mp.desc")}</p>
            <Link to="/tours" className="explore-btn">
              {t("destinations.ctaBtn")}
            </Link>
          </div>
        </div>
      </div>

      <div className="dest-cta">
        <h2>{t("destinations.ctaTitle")}</h2>
        <p>{t("destinations.ctaText")}</p>
        <Link to="/tours" className="cta-btn">
          {t("destinations.ctaBtn")}
        </Link>
      </div>
    </div>
  );
};

export default Destinations;
