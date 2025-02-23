import { useEffect } from "react";

const Navbar = () => {
  // Define toggleMenu outside useEffect so it's accessible in JSX
  const toggleMenu = () => {
    const dropdown = document.querySelector(".dropdown-menu");
    dropdown.classList.toggle("show");
  };

  const closeMenu = (event) => {
    const dropdown = document.querySelector(".dropdown-menu");
    const menuButton = document.querySelector(".hamburger-menu");
    if (!dropdown.contains(event.target) && !menuButton.contains(event.target)) {
      dropdown.classList.remove("show");
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <div className="contents-nav">
            <div className="hamburger-menu" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="navigations">
              <a href="#process-wrapper">About</a>
              <a href="#process-wrapper">Venue</a>
              <a href="#timeline-wrapper">Timeline</a>
              <a href="#perks-wrapper">Events</a>
              <a href="#faqs-wrapper">FAQs</a>
            </div>
          </div>
          <div className="dropdown-menu">
            <a href="#process-wrapper" onClick={closeMenu}>Process</a>
            <a href="#timeline-wrapper" onClick={closeMenu}>Timeline</a>
            <a href="#perks-wrapper" onClick={closeMenu}>Perks</a>
            <a href="#domains-wrapper" onClick={closeMenu}>Explore Domains</a>
            <a href="#faqs-wrapper" onClick={closeMenu}>FAQs</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
