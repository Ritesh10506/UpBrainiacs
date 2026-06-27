import "./UniversityCard.css";

const UniversityCard = ({ university }) => {
  return (
    <div className="university-card">

      <div className="university-image">
        <img
          src={university?.image}
          alt={university?.name || "University"}
          loading="lazy"
        />
      </div>

      <div className="university-content">

        <h2>{university?.name || "University Name"}</h2>

        <p>
          {university?.description || "University information coming soon."}
        </p>

        <div className="university-details">

          <div className="detail-item">
            <strong>Established</strong>
            <span>{university?.established || "N/A"}</span>
          </div>

          <div className="detail-item">
            <strong>Type</strong>
            <span>{university?.type || "N/A"}</span>
          </div>

          <div className="detail-item">
            <strong>Location</strong>
            <span>{university?.location || "N/A"}</span>
          </div>

          <div className="detail-item">
            <strong>Duration</strong>
            <span>{university?.duration || "N/A"}</span>
          </div>

          <div className="detail-item">
            <strong>Medium</strong>
            <span>{university?.medium || "N/A"}</span>
          </div>

          <div className="detail-item">
            <strong>Recognition</strong>
            <span>{university?.recognition || "N/A"}</span>
          </div>

        </div>

      </div>

      <div className="university-sidebar">

        <div className="info-box">
          <span>MBBS Seats</span>
          <h3>{university?.seats || "N/A"}</h3>
        </div>

        <div className="info-box">
          <span>Tuition Fee</span>
          <h3>{university?.fee || "N/A"}</h3>
        </div>

      </div>

    </div>
  );
};

export default UniversityCard;