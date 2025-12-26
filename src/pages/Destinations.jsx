import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Destinations.css";

const Destinations = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="destinations">
      <h1>{t("destinations.title")}</h1>
      <p className="dest-subtitle">{t("destinations.subtitle")}</p>

      <div className="destination-grid">
        <div className="destination-card">
          <img
            src="https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744130/rajasthan_smjmfn.jpg
"
            alt="Rajasthan"
          />
          <div className="overlay">
            <h3>{t("destinations.rajasthan.title")}</h3>
            <p>{t("destinations.rajasthan.desc")}</p>
            <Link to="/tours" className="explore-btn">
              {t("destinations.ctaBtn")}
            </Link>
          </div>
        </div>

        <div className="destination-card">
          <img
            src="https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744127/ladakh_n9sb9v.jpg
"
            alt="Ladakh"
          />
          <div className="overlay">
            <h3>{t("destinations.ladakh.title")}</h3>
            <p>{t("destinations.ladakh.desc")}</p>
            <Link to="/tours" className="explore-btn">
              {t("destinations.ctaBtn")}
            </Link>
          </div>
        </div>

        <div className="destination-card">
          <img
            src="https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744120/kerala_rhnzbu.jpg
"
            alt="Kerala"
          />
          <div className="overlay">
            <h3>{t("destinations.kerala.title")}</h3>
            <p>{t("destinations.kerala.desc")}</p>
            <Link to="/tours" className="explore-btn">
              {t("destinations.ctaBtn")}
            </Link>
          </div>
        </div>

        <div className="destination-card">
          <img
            src="https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744119/goa_mo1p5v.jpg
"
            alt="Goa"
          />
          <div className="overlay">
            <h3>{t("destinations.goa.title")}</h3>
            <p>{t("destinations.goa.desc")}</p>
            <Link to="/tours" className="explore-btn">
              {t("destinations.ctaBtn")}
            </Link>
          </div>
        </div>

        <div className="destination-card">
          <img
            src="https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744117/delhi_oxfm3f.jpg
"
            alt="Delhi"
          />
          <div className="overlay">
            <h3>{t("destinations.delhi.title")}</h3>
            <p>{t("destinations.delhi.desc")}</p>
            <Link to="/tours" className="explore-btn">
              {t("destinations.ctaBtn")}
            </Link>
          </div>
        </div>

        <div className="destination-card">
          <img
            src="https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744134/up_vlhzxd.jpg
"
            alt="Uttar Pradesh"
          />
          <div className="overlay">
            <h3>{t("destinations.up.title")}</h3>
            <p>{t("destinations.up.desc")}</p>
            <Link to="/tours" className="explore-btn">
              {t("destinations.ctaBtn")}
            </Link>
          </div>
        </div>

        <div className="destination-card">
          <img
            src="https://res.cloudinary.com/dvnu9vblx/image/upload/f_auto,q_auto,c_scale,w_1600/v1766744127/mp_kduesm.jpg
"
            alt="Madhya Pradesh"
          />
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
