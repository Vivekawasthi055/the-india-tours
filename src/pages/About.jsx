import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/About.css";

const About = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="about">
      <h1>{t("about.title")}</h1>

      <p className="about-text">{t("about.description")}</p>

      <div className="about-cards">
        <div className="about-card">
          <h3>🌍{t("about.missionTitle")}</h3>
          <p>{t("about.missionText")}</p>
        </div>

        <div className="about-card">
          <h3>🤝{t("about.promiseTitle")}</h3>
          <p>{t("about.promiseText")}</p>
        </div>

        <div className="about-card">
          <h3>⭐{t("about.whyTitle")}</h3>
          <p>{t("about.whyText")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
