import { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import galleryData from "../data/galleryData";
import "../styles/Gallery.css";
import { LanguageContext } from "../context/LanguageContext";

const Gallery = () => {
  const { t } = useContext(LanguageContext);
  const [filter, setFilter] = useState("all");
  const [activeItem, setActiveItem] = useState(null);

  // ✅ UPDATED FILTER LOGIC
  const filteredData =
    filter === "all"
      ? galleryData
      : filter === "video"
      ? galleryData.filter(
          (item) => item.type === "video" || item.type === "youtube"
        )
      : galleryData.filter((item) => item.type === "photo");

  // Lazy loading for local videos
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (el.dataset.src) {
              el.src = el.dataset.src;
              el.removeAttribute("data-src");
            }
            observer.unobserve(el);
          }
        });
      },
      { rootMargin: "200px" }
    );

    videoRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredData]);

  return (
    <div className="gallery">
      <h1>{t("gallery.heading")}</h1>
      <p className="gallery-subtitle">{t("gallery.subtitle")}</p>

      {/* ✅ Filters (YouTube removed) */}
      <div className="gallery-filters">
        {["all", "photo", "video"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={filter === type ? "active" : ""}
          >
            {t(`gallery.filters.${type}`)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredData.map((item, idx) => (
          <div
            key={item.id}
            className="gallery-card"
            onClick={() => setActiveItem(item)}
          >
            {/* Photo */}
            {item.type === "photo" && (
              <img src={item.src} alt={item.title} loading="lazy" />
            )}

            {/* Local Video */}
            {item.type === "video" && (
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                data-src={item.src}
                muted
                controls
                preload="metadata"
              />
            )}

            {/* YouTube Video */}
            {item.type === "youtube" && (
              <div className="youtube-lazy">
                <img
                  src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                  alt={item.title}
                  loading="lazy"
                />
                <button className="youtube-play-btn">▶</button>
              </div>
            )}

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
              <p>{item.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeItem && (
        <div className="lightbox" onClick={() => setActiveItem(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {activeItem.type === "photo" && (
              <img src={activeItem.src} alt={activeItem.title} />
            )}

            {activeItem.type === "video" && (
              <video src={activeItem.src} controls autoPlay />
            )}

            {activeItem.type === "youtube" && (
              <iframe
                src={`https://www.youtube.com/embed/${activeItem.videoId}?autoplay=1`}
                title={activeItem.title}
                frameBorder="0"
                allowFullScreen
              />
            )}

            <h3>{activeItem.title}</h3>
            <p>{activeItem.location}</p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="gallery-cta">
        <h2>{t("gallery.cta.heading")}</h2>
        <p>{t("gallery.cta.text")}</p>
        <div className="cta-buttons">
          <Link to="/tours" className="cta-btn">
            {t("gallery.cta.exploreBtn")}
          </Link>
          <Link to="/contact" className="cta-btn customize">
            {t("gallery.cta.customizeBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
