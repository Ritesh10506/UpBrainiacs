import "./Footer.css";


const Footer = () => {


  return (

    <footer className="footer">


      <div className="footer-top">



        {/* BRAND SECTION */}

        <div className="footer-brand brand-box">


          <h2 className="brand-logo">

            <span>Up</span>Brainiacs<b>.</b>

          </h2>



          <p>

            Empowering students to achieve global education dreams
            with expert guidance, university selection and career support.

          </p>




          <div className="social-icons">


            <a
            href="https://www.instagram.com/upbrainiacs_global/"
            target="_blank">

              Instagram

            </a>



            <a
            href="https://www.facebook.com/share/1CjuieCvS7/?mibextid=wwXIfr"
            target="_blank">

              Facebook

            </a>



            <a
            href="https://linkedin.com"
            target="_blank">

              LinkedIn

            </a>



            <a
            href="https://youtube.com/@upbrainiacs?si=-KD9r3wHTTc8ONpJ"
            target="_blank">

              YouTube

            </a>


          </div>



        </div>






        {/* QUICK LINKS */}


        <div className="footer-links">


          <h3>
            Quick Links
          </h3>



          <a href="/">
            Home
          </a>



          <a href="/#about">
            About
          </a>



          <a href="/#services">
            Services
          </a>



          <a href="/#register">
            Registration
          </a>



          <a href="/faq">
            FAQ
          </a>



          <a href="/vision">
            Vision
          </a>


        </div>







        {/* CONTACT */}


        <div className="footer-contact">


          <h3>
            Contact Us
          </h3>



          <a href="mailto:info@upbrainiacs.com">

            info@upbrainiacs.com

          </a>




          <a href="tel:+916394045804">

            +91 6394045804

          </a>




          <p>

            Study Abroad | Medical Education

          </p>


        </div>




      </div>







      {/* WHATSAPP BUTTON */}


      <a

      className="whatsapp-btn"

      href="https://wa.me/9170076070201"

      target="_blank"

      >

      WhatsApp

      </a>







      <div className="footer-bottom">


        © 2026

        <span>
          UpBrainiacs
        </span>

        . All Rights Reserved.


      </div>



    </footer>


  );

};


export default Footer;