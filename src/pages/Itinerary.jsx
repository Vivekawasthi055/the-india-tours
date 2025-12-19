import { useParams } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import tours from "../data/tours";
import "../styles/Itinerary.css";

const Itinerary = () => {
  const { id } = useParams();
  const { t } = useContext(LanguageContext);

  const tour = tours.find((tour) => tour.id === id);

  if (!tour) {
    return <h2 style={{ padding: "120px" }}>Itinerary Not Found</h2>;
  }

  return (
    <div className="itinerary">
      {/* Main Heading */}
      <h1>{t("itinerary.title")}</h1>

      {/* Tour Name */}
      <h2 className="tour-name">{t(tour.titleKey)}</h2>

      {/* Image Gallery */}
      <div className="itinerary-gallery">
        {tour.gallery.map((img, index) => (
          <img key={index} src={img} alt="tour" />
        ))}
      </div>

      {/* Timeline */}
      <div className="timeline">
        {tour.itinerary.map((dayKey, index) => (
          <div key={index} className="day-card">
            <h3>
              {t("itinerary.day")} {index + 1}
            </h3>
            <p>{t(dayKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
