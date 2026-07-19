import { Link } from "react-router-dom";
import "./PartnerUniversities.css";

// Add / remove universities here. Each `logo` path points into
// the public/universities/ folder — see PartnerUniversities.css
// notes for exactly where to save the image files.
//
// `countrySlug` must match the key used in your countriesData.js
// (the same slug Navbar.jsx uses for /mbbs-in/:country links).
// Adjust these if your actual slugs are different.
const universities = [
  // Georgia
  { name: "Tbilisi State Medical University", country: "Georgia", countrySlug: "georgia", logo: "/universities/tbilisi.png" },
  { name: "David Tvildiani Medical University", country: "Georgia", countrySlug: "georgia", logo: "/universities/tvildiani.png" },
  { name: "University of Georgia", country: "Georgia", countrySlug: "georgia", logo: "/universities/georgia.png" },

  // Kazakhstan
  { name: "Asfendiyarov Kazakh National Medical University", country: "Kazakhstan", countrySlug: "kazakhstan", logo: "/universities/asfendiyarov.png" },
  { name: "Astana Medical University", country: "Kazakhstan", countrySlug: "kazakhstan", logo: "/universities/astana.png" },
  { name: "Semey Medical University", country: "Kazakhstan", countrySlug: "kazakhstan", logo: "/universities/semey.png" },

  // Poland
  { name: "Medical University of Warsaw", country: "Poland", countrySlug: "poland", logo: "/universities/warsaw.png" },
  { name: "Jagiellonian University Medical College", country: "Poland", countrySlug: "poland", logo: "/universities/jagiellonian.png" },
  { name: "Medical University of Lodz", country: "Poland", countrySlug: "poland", logo: "/universities/lodz.png" },

  // Kyrgyzstan
  { name: "International School of Medicine", country: "Kyrgyzstan", countrySlug: "kyrgyzstan", logo: "/universities/ism.png" },
  { name: "Kyrgyz State Medical Academy", country: "Kyrgyzstan", countrySlug: "kyrgyzstan", logo: "/universities/ksma.png" },
  { name: "Osh State University Medical Faculty", country: "Kyrgyzstan", countrySlug: "kyrgyzstan", logo: "/universities/osh.png" },

  // Romania
  { name: "Carol Davila University of Medicine and Pharmacy", country: "Romania", countrySlug: "romania", logo: "/universities/carol-davila.png" },
  { name: "Iuliu Hatieganu University of Medicine and Pharmacy", country: "Romania", countrySlug: "romania", logo: "/universities/iuliu-hatieganu.png" },
  { name: "Grigore T. Popa University of Medicine and Pharmacy", country: "Romania", countrySlug: "romania", logo: "/universities/grigore-popa.png" },

  // Nepal
  { name: "B.P. Koirala Institute of Health Sciences", country: "Nepal", countrySlug: "nepal", logo: "/universities/bpkoirala.png" },
  { name: "Kathmandu Medical College", country: "Nepal", countrySlug: "nepal", logo: "/universities/kathmandu.png" },
  { name: "Institute of Medicine, Tribhuvan University", country: "Nepal", countrySlug: "nepal", logo: "/universities/iom.png" },
];

const PartnerUniversities = () => {
  // Duplicate the list once so the marquee can loop seamlessly at -50%
  const track = [...universities, ...universities];

  return (
    <section className="pu-section" id="universities">
      <div className="pu-header">
        <span className="pu-tag">— OUR PARTNER UNIVERSITIES —</span>
        <h2 className="pu-title">
          Top <span>Medical</span> Universities
        </h2>
        <p className="pu-subtext">
          We collaborate with internationally recognized medical universities
          across Europe & Asia to shape your future.
        </p>
      </div>

      <div className="pu-marquee">
        <div className="pu-track">
          {track.map((uni, i) => (
            <Link
              to={`/mbbs-in/${uni.countrySlug}`}
              className="pu-card"
              key={`${uni.name}-${i}`}
            >
              <div className="pu-logo">
                <img src={uni.logo} alt={uni.name} />
              </div>
              <h3>{uni.name}</h3>
              <span className="pu-country">{uni.country}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversities;
