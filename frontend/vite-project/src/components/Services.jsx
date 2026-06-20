import "./Services.css";

const Services = () => {

  const services = [
    {
      title: "Admission Guidance",
      desc: "Expert counselling for selecting the right university."
    },
    {
      title: "Documentation",
      desc: "Complete support with applications and paperwork."
    },
    {
      title: "Visa Assistance",
      desc: "End-to-end visa processing and interview preparation."
    },
    {
      title: "University Selection",
      desc: "Find universities matching your goals and budget."
    },
    {
      title: "Accommodation",
      desc: "Assistance in finding safe student housing."
    },
    {
      title: "Travel Support",
      desc: "Pre-departure guidance and travel arrangements."
    }
  ];

  return (
    <section
      id="services"
      className="services-section"
    >

      <div className="section-header">

        <span>OUR SERVICES</span>

        <h2>
          Everything You Need To Study Abroad
        </h2>

      </div>

      <div className="services-grid">

        {services.map((service,index)=>(
          <div
            className="service-card"
            key={index}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Services;