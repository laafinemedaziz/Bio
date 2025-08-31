import { useState } from "react";
import data from "../Components/CertifData.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Certificate() {
  const certificates = data.data.certifications;
  const degrees = data.data.degrees;
  const [activeCard, setActiveCard] = useState(null);

  const renderCard = (item, index) => (
    <SwiperSlide key={item.id}>
      <div
        className={`card-item ${activeCard === index ? "active" : ""}`}
        onClick={() =>
          setActiveCard(activeCard === index ? null : index)
        }
      >
        <div className="card-link">
          <img src={item.path} alt={item.name} className="card-image" />
          <h3>{item.name}</h3>
          <p>{item.provider} - {item.date}</p>
        </div>
      </div>
    </SwiperSlide>
  );

  return (
    <div className="achievements">
      <div className="degrees">
        <h2>Degrees:</h2>
        <div className="card-wrapper">
          <Swiper spaceBetween={50} slidesPerView={2.2}>
            {degrees.map((deg, idx) => renderCard(deg, idx))}
          </Swiper>
        </div>
      </div>
      <div className="certifs">
        <h2>Certifications:</h2>
        <div className="card-wrapper">
          <Swiper spaceBetween={50} slidesPerView={2.2}>
            {certificates.map((cert, idx) => renderCard(cert, idx + degrees.length))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
