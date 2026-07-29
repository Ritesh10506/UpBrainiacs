import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TiltCard from "../components/TiltCard";
import "./About.css";

const services = [
  {
    id: "admission",
    title: "Admission Guidance",
    desc: "Complete documentation support including identity proofs, academic records, English-test scores (IELTS/TOEFL/PTE), plagiarism-free SOPs and LORs, express admission processing, interview preparation and scholarship application assistance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3L2 8l10 5 10-5-10-5z" />
        <path d="M6 10v6c0 1.5 2.5 3 6 3s6-1.5 6-3v-6" />
      </svg>
    ),
  },
  {
    id: "financial",
    title: "Financial Assistance & Scholarships",
    desc: "Access to 25+ nationalised, private, cooperative and foreign banks & NBFCs. Unsecured loans up to ₹1.5 Crore and secured loans up to ₹5 Crore at rates starting from 3.5%, with pre & post loan support, instant eligibility checks and fast, discounted processing throughout.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a2.5 2.5 0 000 5H14a2.5 2.5 0 010 5H6" />
      </svg>
    ),
  },
  {
    id: "insurance",
    title: "Insurance Assistance",
    desc: "Customized travel, mandatory and extended medical insurance plans with tie-ups across leading global providers. End-to-end claim assistance, university waiver guidance and fully online accessibility, backed by 1,20,000+ policies issued to date.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" />
      </svg>
    ),
  },
  {
    id: "visa",
    title: "Visa Assistance",
    desc: "Personalised guidance mapped to your destination country's exact requirements. Accurate, on-time application filing with full document compliance, and ongoing support through the entire visa processing window to reduce delays or rejections.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 13h4M7 16h6" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <>
      <title>About us | UpBrainiacs — MBBS Abroad Consultancy</title>
      <meta
        name="description"
        content="Learn about UpBrainiacs — a complete MBBS career-building ecosystem for Indian students. Meet our founder, explore our admission, financial, insurance and visa assistance services."
      />
      <link rel="canonical" href="https://upbrainiacs.com/about" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://upbrainiacs.com/about" />
      <meta property="og:title" content="About Us | UpBrainiacs" />
      <meta
        property="og:description"
        content="A complete MBBS career-building ecosystem for Indian students — from university selection to becoming a practicing doctor."
      />
      <meta property="og:image" content="https://upbrainiacs.com/ub-logo.png" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About UpBrainiacs",
          url: "https://upbrainiacs.com/about",
          description:
            "UpBrainiacs is a complete MBBS career-building ecosystem for Indian students, offering admission guidance, financial assistance, insurance assistance and visa assistance.",
          mainEntity: {
            "@type": "EducationalOrganization",
            name: "UpBrainiacs",
            url: "https://upbrainiacs.com",
            logo: "https://upbrainiacs.com/ub-logo.png",
            founder: {
              "@type": "Person",
              name: "Shikher Kelvin",
              jobTitle: "Founder & Managing Director",
            },
          },
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "Service",
            position: i + 1,
            name: s.title,
            description: s.desc,
            provider: {
              "@type": "EducationalOrganization",
              name: "UpBrainiacs",
            },
          })),
        })}
      </script>

      <Navbar />

      <section className="about-section">
        {/* Intro — starts right below the fixed navbar */}
        <div className="about-intro">
          <span className="about-eyebrow">ABOUT</span>
          <h1 className="about-brandline">
            <span className="brand-up">Up</span>
            <span className="brand-brainiacs">Brainiacs</span>
            <span className="brand-dot">.</span>
          </h1>
          <p className="about-lead">
            Upbrainiacs Global is not just an MBBS admission consultancy — it
            is a complete career-building ecosystem for Indian students who
            dream of becoming doctors. We guide, support, and stand beside
            every student and parent from the very first counselling session
            to the day they begin practicing medicine in India.
          </p>
          <p className="about-lead about-lead-secondary">
            With trusted partnerships across Georgia, Russia, Romania and
            Kazakhstan, we connect students with government-approved medical
            universities evaluated on accreditation, faculty quality,
            hospital tie-ups, safety and NMC/NEXT compliance.
          </p>
          <div className="about-divider" />
        </div>

        {/* Founder */}
        <div className="founder-wrap">
          <TiltCard className="founder-tilt" maxTilt={4}>
            <div className="founder-showcase">
              <div className="founder-photo-side">
                <span className="founder-logo-badge">
                  <img src="/ub-logo.png" alt="UpBrainiacs" />
                </span>

                <div className="founder-accent-block"></div>

                <div className="founder-photo-frame">
                  <img
                    src="/about/founder.png"
                    alt="sandy — Founder & Managing Director, Upbrainiacs Global"
                  />
                </div>
              </div>

              <div className="founder-quote-side">
                <span className="founder-eyebrow">
                  A MESSAGE FROM OUR Founder
                </span>

                <div className="founder-quote-card">
                  <span className="quote-glyph">"</span>
                  <p className="founder-quote-text">
                    Upbrainiacs Global was not born out of ambition alone —
                    it was born out of the belief that every Indian student
                    pursuing MBBS deserves more than just admission guidance.
                    They deserve a partner who stays invested in their
                    journey.
                  </p>
                  <span className="quote-glyph quote-glyph-end">"</span>

                  <div className="founder-principles">
                    <span>"Be Good, Do Good."</span>
                    <span>"Deserve Before You Desire."</span>
                  </div>

                  <div className="founder-signature">
                    <span className="founder-name">— Shikher Kelvin</span>
                    <span className="founder-role">
                      Founder & Managing Director, Upbrainiacs Global Pvt.
                      Ltd.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Services — mouse-follow 3D tilt cards, full descriptions */}
        <div className="about-services">
          <h2 className="about-heading">Our Services</h2>
          <div className="services-tilt-grid">
            {services.map((s, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <div className="tilt-grid-cell" key={s.id}>
                  <TiltCard className="tilt-grid-inner" maxTilt={5}>
                    <span className="tilt-num">{num}</span>
                    <div className="tilt-icon">{s.icon}</div>
                    <h3 className="tilt-title">{s.title}</h3>
                    <p className="tilt-desc">{s.desc}</p>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;