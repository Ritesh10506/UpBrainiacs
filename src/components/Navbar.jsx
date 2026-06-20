import "./Navbar.css";

const Navbar = () => {
  const scrollToRegister = () => {
    document
      .getElementById("register")
      ?.scrollIntoView({
        behavior: "smooth",
      });
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

      {/* Brand */}
      <div className="brand">
        <span className="brand-up">Up</span>
        <span className="brand-brainiacs">Brainiacs</span>
        <span className="brand-dot">.</span>
      </div>

      {/* Navigation */}
      <ul className="nav-links">

        <li>
          <a href="#" onClick={scrollToTop}>
            Home
          </a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#register">Registration</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

      </ul>

      {/* CTA */}
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