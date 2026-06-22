import "./UniversityCard.css";

const UniversityCard = ({ university }) => {
return ( <div className="university-card">


  <div className="university-image">
    <img
      src={university.image}
      alt={university.name}
    />
  </div>

  <div className="university-content">

    <h2>{university.name}</h2>

    <p>{university.description}</p>

    <div className="university-details">

      <div className="detail-item">
        <strong>Established</strong>
        <span>{university.established}</span>
      </div>

      <div className="detail-item">
        <strong>Type</strong>
        <span>{university.type}</span>
      </div>

      <div className="detail-item">
        <strong>Location</strong>
        <span>{university.location}</span>
      </div>

      <div className="detail-item">
        <strong>Duration</strong>
        <span>{university.duration}</span>
      </div>

      <div className="detail-item">
        <strong>Medium</strong>
        <span>{university.medium}</span>
      </div>

      <div className="detail-item">
        <strong>Recognition</strong>
        <span>{university.recognition}</span>
      </div>

    </div>

  </div>

  <div className="university-sidebar">

    <div className="info-box">
      <span>MBBS Seats</span>
      <h3>{university.seats}</h3>
    </div>

    <div className="info-box">
      <span>Tuition Fee</span>
      <h3>{university.fee}</h3>
    </div>



  </div>

</div>


);
};

export default UniversityCard;
