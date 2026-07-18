import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand Box */}
        <div className="footer-brand">
          <div className="brand-box">
            <h2 className="brand-logo">
              <span className="logo-up">Up</span>
              <span className="logo-brainiacs">Brainiacs</span>
              <span className="logo-dot">.</span>
            </h2>
            <p>
              Empowering students to achieve global education dreams with expert guidance,
              university selection and career support.
            </p>

            {/* Social Icons */}
            <div className="social-icons">
              <a
                href="https://www.instagram.com/upbrainiacs_global/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1CjuieCvS7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://youtube.com/@upbrainiacs?si=-KD9r3wHTTc8ONpJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/register">Registration</a>
          <a href="/faq">FAQ</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            9th Floor, Tower D, Unitech CyberPark,<br />
            Sector 39, Gurgaon Sector 45,<br />
            Haryana, India, 122003
          </p>
          <p>
            📞 <a href="tel:+916394045804">+91 6394045804</a>
          </p>
          <p>
            ✉️ <a href="mailto:info@upbrainiacs.com">info@upbrainiacs.com</a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>Study Abroad | Medical Education</p>
        <p>© 2026 <span>UpBrainiacs</span>. All Rights Reserved.</p>
      </div>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/916394045804" className="whatsapp-btn">
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </footer>
  );
};

export default Footer;
