import { useParams } from "react-router-dom";
import countriesData from "../data/countriesData";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UniversityCard from "../components/UniversityCard";
import RegisterForm from "../components/RegisterForm";

import { FaWhatsapp } from "react-icons/fa";

import "./CountryPage.css";

const CountryPage = () => {
  const { country } = useParams();

  const data = countriesData[country];

  if (!data) {
    return (
      <>
        <Navbar />

        <div
          className="country-page"
          style={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Country Not Found</h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="country-page">

        {/* HERO SECTION */}
        <section className="hero-section">
          <img
            src={data.hero?.image}
            alt={data.hero?.heading}
            className="hero-image"
          />

          <div className="hero-overlay">
            <h1>{data.hero?.heading}</h1>
            <p>{data.hero?.description}</p>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="why-section">

          <div className="section-title">
            <span>WHY {data.countryName?.toUpperCase()}</span>
            <h2>{data.pageTitles?.whyTitle}</h2>
          </div>

          <div className="why-grid">
            {data.whyChoose?.map((item, index) => (
              <div className="why-card" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="why-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* UNIVERSITIES */}
        <section className="universities-section">

          <div className="section-title">
            <span>TOP UNIVERSITIES</span>
            <h2>{data.pageTitles?.universityTitle}</h2>
          </div>

          {data.universities?.map((university, index) => (
            <UniversityCard
              key={index}
              university={university}
              number={index + 1}
            />
          ))}

        </section>

        {/* ADMISSION PROCESS */}
        <section className="admission-section">

          <div className="section-title">
            <span>ADMISSION PROCESS</span>
            <h2>Simple Admission Procedure</h2>
          </div>

          <div className="admission-steps">

            <div className="step">
              <span>01</span>
              <p>Application</p>
            </div>

            <div className="step">
              <span>02</span>
              <p>Admission Letter</p>
            </div>

            <div className="step">
              <span>03</span>
              <p>Documentation</p>
            </div>

            <div className="step">
              <span>04</span>
              <p>Visa Process</p>
            </div>

            <div className="step">
              <span>05</span>
              <p>{data.pageTitles?.finalStep}</p>
            </div>

          </div>

        </section>

        {/* STUDENT LIFE */}
        <section className="life-section">

          <div className="section-title">
            <span>STUDENT LIFE</span>
            <h2>{data.pageTitles?.lifeTitle}</h2>
          </div>

          <div className="life-grid">
            {data.studentLife?.map((item, index) => (
              <div className="life-card" key={index}>

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="life-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

              </div>
            ))}
          </div>

        </section>

        {/* FAQ + REGISTRATION */}
        <section className="bottom-section">

          <div className="faq-side">

            <div className="section-title">
              <span>FAQ'S</span>
              <h2>Frequently Asked Questions</h2>
            </div>

            {data.faq?.map((faq, index) => (
              <div className="faq-item" key={index}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}

          </div>

          <div
            className="enquiry-side"
            style={{
              backgroundImage: `url(${data.enquiry?.image})`,
            }}
          >
            <RegisterForm />

            <a
              href="https://wa.me/919236488649"
              target="_blank"
              rel="noopener noreferrer"
              className="country-whatsapp"
            >
              <FaWhatsapp />
              <span>Chat on WhatsApp</span>
            </a>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default CountryPage;