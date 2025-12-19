// import { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { LanguageContext } from "../context/LanguageContext";
// import tours from "../data/tours";

// const TourDetail = () => {
//   const { id } = useParams();
//   const { t } = useContext(LanguageContext);

//   const tour = tours.find((tour) => tour.id === id);

//   if (!tour) {
//     return <h2 style={{ padding: "120px" }}>Tour Not Found</h2>;
//   }

//   return (
//     <div className="tour-detail-page">
//       {/* 1️⃣ MAIN HEADING */}
//       <h1 className="main-heading">{t("itinerary.title")}</h1>

//       {/* 2️⃣ TOUR NAME */}
//       <h2 className="tour-name">{t(tour.titleKey)}</h2>

//       {/* 3️⃣ IMAGE GALLERY */}
//       <div className="tour-gallery">
//         {tour.gallery?.map((img, index) => (
//           <img key={index} src={img} alt="tour" />
//         ))}
//       </div>

//       {/* 4️⃣ ITINERARY (AS IT IS) */}
//       <div className="timeline">
//         {tour.itinerary.map((dayKey, index) => (
//           <div key={index} className="day-card">
//             <h3>
//               {t("itinerary.day")} {index + 1}
//             </h3>
//             <p>{t(dayKey)}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TourDetail;

const TourDetail = () => {
  return <div>TourDetail</div>;
};

export default TourDetail;
