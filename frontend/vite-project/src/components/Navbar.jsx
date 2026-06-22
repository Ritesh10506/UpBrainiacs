import "./Navbar.css";

const Navbar = () => {

  const scrollToRegister = (e) => {
    e?.preventDefault();

    const registerSection =
      document.getElementById("register");

    if (registerSection) {
      registerSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="brand">
        <span className="brand-up">Up</span>
        <span className="brand-brainiacs">
          Brainiacs
        </span>
        <span className="brand-dot">.</span>
      </div>

      {/* Navigation */}
      <ul className="nav-links">

        <li>
          <a
            href="#"
            onClick={scrollToTop}
          >
            Home
          </a>
        </li>

        <li>
          <a href="#about">
            About
          </a>
        </li>

        <li>
          <a
            href="#register"
            onClick={scrollToRegister}
          >
            Registration
          </a>
        </li>

      </ul>

      {/* Apply Button */}
      <button
        className="start-btn"
        onClick={scrollToRegister}
      >
        Apply Now
      </button>

    </nav>
  );
};

export default Navbar;