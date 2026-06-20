import "./Stats.css";

const Stats = () => {
  const stats = [
    {
      number: "1000+",
      title: "Students Guided"
    },
    {
      number: "60+",
      title: "Partner Universities"
    },
    {
      number: "4+",
      title: "Countries"
    },
    {
      number: "95%",
      title: "Success Rate"
    }
  ];

  return (
    <section className="stats-section">

      <div className="stats-container">

        {stats.map((item, index) => (
          <div
            className="stat-card"
            key={index}
          >
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Stats;