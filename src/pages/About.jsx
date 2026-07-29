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
      <title>About Us | UpBrainiacs — MBBS Abroad Consultancy</title>
      <meta
        name="description"
        content="Learn about UpBrainiacs Global — a student-first international education consultancy offering ethical counselling, transparent processes and complete support for studying MBBS abroad."
      />
      <link rel="canonical" href="https://upbrainiacs.com/about" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://upbrainiacs.com/about" />
      <meta property="og:title" content="About Us | UpBrainiacs" />
      <meta
        property="og:description"
        content="A student-first international education consultancy — trusted guidance from the first counselling call to becoming a practicing doctor."
      />
      <meta property="og:image" content="https://upbrainiacs.com/ub-logo.png" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About UpBrainiacs",
          url: "https://upbrainiacs.com/about",
          description:
            "UpBrainiacs Global Private Limited is a student-first international education consultancy providing ethical counselling, transparent processes and personalised support for MBBS admissions abroad.",
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
            UpBrainiacs Global Private Limited was founded with a strong
            belief in the talent and potential of Indian students to excel
            on the global stage. Built from the ground up with a
            student-first approach, the organisation is dedicated to
            supporting every student from the very beginning of their study
            abroad journey.
          </p>
          <p className="about-lead about-lead-secondary">
            With deep expertise in international education and a commitment
            to staying ahead of the ever-evolving global education
            landscape, UpBrainiacs provides accurate guidance, transparent
            processes, and personalised support at every stage. At the heart
            of our mission is a commitment to ethical counselling, ensuring
            that every student receives honest advice and dedicated
            assistance in achieving their dream of studying abroad.
          </p>
          <p className="about-lead about-lead-secondary">
            Through our hands-on approach and unwavering focus on student
            success, UpBrainiacs has developed a trusted model for
            international education—one that empowers students, transforms
            aspirations into reality, and serves as a springboard for those
            seeking world-class educational opportunities across the globe.
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
                    alt="Shikher Kelvin — Founder & Managing Director, Upbrainiacs Global"
                  />
                </div>
              </div>

              <div className="founder-quote-side">
                <span className="founder-eyebrow">
                  A MESSAGE FROM OUR FOUNDER
                </span>

                <div className="founder-quote-card">
                  <span className="quote-glyph">"</span>
                  <p className="founder-quote-text">
                    UpBrainiacs Global was founded with a strong belief in
                    the talent and potential of Indian students to excel on
                    the global stage — built from the ground up with a
                    student-first approach, dedicated to supporting every
                    student from the very beginning of their journey.
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