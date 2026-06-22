import { georgiaData } from "../data/countriesData";

import UniversityCard from "../components/UniversityCard";

import "./CountryPage.css";

const CountryPage = () => {

  const data = georgiaData;

  return (

    <div className="country-page">

      {/* HERO SECTION */}

      <section className="hero-section">

        <img
          src={data.hero.image}
          alt="Georgia Hero"
          className="hero-image"
        />

        <div className="hero-overlay">

          <h1>
            {data.hero.heading}
          </h1>

          <p>
            {data.hero.description}
          </p>

        </div>

      </section>



      {/* WHY CHOOSE GEORGIA */}

      <section className="why-section">

        <h2>
          Why Choose Georgia?
        </h2>

        <div className="why-grid">

          {data.whyChoose.map((item, index) => (

            <div
              key={index}
              className="why-card"
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <h3>
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </section>



      {/* UNIVERSITIES */}

      <section className="universities-section">

        <h2>
          Top Medical Universities In Georgia
        </h2>

        {data.universities.map((university, index) => (

          <UniversityCard
            key={index}
            university={university}
          />

        ))}

      </section>



      {/* ADMISSION PROCESS */}

      <section className="admission-section">

        <h2>
          Admission Process
        </h2>

        <img
          src={data.admissionProcess.image}
          alt="Admission Process"
        />

        <div className="admission-steps">

          <div>1. Submit Application</div>

          <div>2. Receive Admission Letter</div>

          <div>3. Documentation</div>

          <div>4. Visa Processing</div>

          <div>5. Fly To Georgia</div>

        </div>

      </section>



      {/* STUDENT LIFE */}

      <section className="life-section">

        <h2>
          Student Life In Georgia
        </h2>

        <div className="life-grid">

          {data.studentLife.map((item, index) => (

            <div
              key={index}
              className="life-card"
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <h3>
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </section>



      {/* FAQ + ENQUIRY */}

      <section className="bottom-section">

        <div className="faq-side">

          <h2>
            Frequently Asked Questions
          </h2>

          {data.faq.map((faq, index) => (

            <div
              key={index}
              className="faq-item"
            >

              <h3>
                {faq.question}
              </h3>

              <p>
                {faq.answer}
              </p>

            </div>

          ))}

        </div>



        <div className="enquiry-side">

          <img
            src={data.enquiry.image}
            alt="Enquiry"
          />

          <h2>
            Talk To Our Experts
          </h2>

          <p>
            Still confused to choose the right medical
            university?

            Book your FREE counselling session and our
            experts will contact you shortly.
          </p>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="text"
            placeholder="Mobile Number"
          />

          <button>
            Book Free Counselling
          </button>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            Contact On WhatsApp
          </a>

        </div>

      </section>

    </div>

  );

};

export default CountryPage;