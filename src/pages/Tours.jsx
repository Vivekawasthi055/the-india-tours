import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import tours from "../data/tours";
import "../styles/Tours.css";

const Tours = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="tours">
      <h1>{t("tours.heading")}</h1>

      {/* --- Small Customize Card --- */}
      <div className="customize-card">
        <p>{t("tours.customize")}</p>
        <a
          href="https://wa.me/919630382854"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          {t("contact.whatsapp")}
        </a>
      </div>

      {/* --- Existing Tours Grid --- */}
      <div className="tour-grid">
        {tours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <img src={tour.image} alt={tour.title} />

            <div className="tour-content">
              <h3>{t(tour.titleKey)}</h3>
              <p>{t(tour.durationKey)}</p>
              <p>{t(tour.descKey)}</p>

              <Link to={`/itinerary/${tour.id}`}>
                <button>{t("tours.itinerary")}</button>
              </Link>

              <Link to="/contact">
                <button className="contact-btn">{t("tours.contact")}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
