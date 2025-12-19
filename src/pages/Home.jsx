import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Home.css";
import heroVideo from "../assets/videos/india.mp4";

const Home = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="home">
      <video className="hero-video" autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>

      <div className="hero-content">
        <h1>{t("home.title")}</h1>
        <p>{t("home.subtitle")}</p>
        <Link to="/tours" className="explore-btn">
          {t("home.explore")}
        </Link>
      </div>
    </div>
  );
};

export default Home;
