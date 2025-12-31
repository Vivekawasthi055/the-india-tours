import { useContext, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useContext(LanguageContext);
  const [sameWhatsapp, setSameWhatsapp] = useState("yes");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("success");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setIsSubmitting(true);

    // 1️⃣ ADMIN EMAIL
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    // 2️⃣ AUTO-REPLY TO USER
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setPopupType("success");
        setPopupMessage(t("contact.success"));
        setShowPopup(true);
        form.reset();
        setSameWhatsapp("yes");
      })
      .catch(() => {
        setPopupType("error");
        setPopupMessage(t("contact.error"));
        setShowPopup(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Disable scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
      // Auto close popup after 5 seconds
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto";
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  return (
    <>
      <div className={`contact ${isSubmitting || showPopup ? "disabled" : ""}`}>
        <h1>{t("contact.title")}</h1>
        <p className="contact-sub">{t("contact.subtitle")}</p>

        {/* CONTACT DETAILS */}
        <div className="contact-details">
          <p>
            📞 <strong>{t("contact.phone")}:</strong>{" "}
            <a href="tel:+919630382854">+91 96303 82854</a>,{" "}
            <a href="tel:+33783236654">+33 783236654</a>,{" "}
            <a href="tel:+918827573086">+91 88275 73086</a>
          </p>

          <p className="insta-link">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email"
              className="insta-icon"
            />
            <strong>{t("contact.emailLabel")}:</strong>
            <a href="mailto:theindiatours055@gmail.com">
              theindiatours055@gmail.com
            </a>
          </p>

          <p className="insta-row">
            <a
              href="https://www.instagram.com/the_indiatours/"
              target="_blank"
              rel="noreferrer"
              className="insta-link"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="insta-icon"
              />
              <strong>Instagram:</strong>
              <strong className="insta-username"> the_indiatours</strong>
            </a>
          </p>
        </div>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/919630382854"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
          {t("contact.whatsappbtn")}
        </a>

        {/* CONTACT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="full_name"
            placeholder={t("contact.fullName")}
            required
            disabled={isSubmitting || showPopup}
          />

          <input
            type="email"
            name="email"
            placeholder={t("contact.email")}
            required
            disabled={isSubmitting || showPopup}
          />

          <input
            type="tel"
            name="phone"
            placeholder={t("contact.phone")}
            required
            disabled={isSubmitting || showPopup}
          />

          {/* WhatsApp same option */}
          <div className="whatsapp-option">
            <label>{t("contact.sameWhatsapp")}</label>
            <br />
            <label>
              <input
                type="radio"
                name="same_whatsapp"
                value="yes"
                checked={sameWhatsapp === "yes"}
                onChange={() => setSameWhatsapp("yes")}
                disabled={isSubmitting || showPopup}
              />{" "}
              {t("contact.sameWhatsappyes")}
            </label>
            &nbsp;&nbsp;
            <label>
              <input
                type="radio"
                name="same_whatsapp"
                value="no"
                checked={sameWhatsapp === "no"}
                onChange={() => setSameWhatsapp("no")}
                disabled={isSubmitting || showPopup}
              />{" "}
              {t("contact.sameWhatsappno")}
            </label>
          </div>

          {sameWhatsapp === "no" && (
            <input
              type="tel"
              name="whatsapp"
              placeholder={t("contact.whatsapp")}
              required
              disabled={isSubmitting || showPopup}
            />
          )}

          <input
            type="text"
            name="country"
            placeholder={t("contact.country")}
            required
            disabled={isSubmitting || showPopup}
          />

          <textarea
            name="message"
            placeholder={t("contact.message")}
            required
            disabled={isSubmitting || showPopup}
          ></textarea>

          <button type="submit" disabled={isSubmitting || showPopup}>
            {isSubmitting ? t("contact.sending") : t("contact.send")}
          </button>
        </form>

        <div>
          <img
            src="/logo.png"
            alt="The India Tours Logo"
            className="logo-contact"
          />
        </div>
      </div>

      {/* POPUP OVERLAY */}
      {showPopup && <div className="popup-overlay"></div>}

      {/* SUCCESS/ERROR POPUP */}
      {showPopup && (
        <div className={`popup ${popupType}`}>
          <span className="popup-close" onClick={handleClosePopup}>
            &times;
          </span>
          <p>{popupMessage}</p>
        </div>
      )}
    </>
  );
};

export default Contact;
