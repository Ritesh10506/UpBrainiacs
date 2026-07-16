import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="about-hero" id="about-intro">
        <h1>About UpBrainiacs</h1>
        <p>Content yahan baad mein aayega...</p>
      </section>

      <Footer />
    </>
  );
};

export default About;