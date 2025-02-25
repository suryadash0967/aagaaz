import { useEffect, useState } from "react";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [firstYearText, setFirstYearText] = useState("1st Years Form");
  const [secondYearText, setSecondYearText] = useState("2nd Years Form");

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update button text when screen width changes
  useEffect(() => {
    if (screenWidth < 490) {
      setFirstYearText("1st Years");
      setSecondYearText("2nd Years");
    } else {
      setFirstYearText("1st Years Form");
      setSecondYearText("2nd Years Form");
    }
  }, [screenWidth]);

  // Toggle dropdown menu
  const toggleMenu = () => {
    const dropdown = document.querySelector(".dropdown-menu");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  };

  // Close dropdown menu
  const closeMenu = (event) => {
    const dropdown = document.querySelector(".dropdown-menu");
    const menuButton = document.querySelector(".hamburger-menu");
    dropdown.classList.remove("show");
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="contents-nav">
          <div className="hamburger-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="navigations">
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#venue">Venue</a>
            <a href="#menu">Menu</a>
            <a href="#drip">Drip</a>
            <a href="#faqs-wrapper">FAQs</a>
          </div>
          <div className="register-button">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFDcIVJhUTenacAz5HA6bqhVZ7_rLRwFmgyzchS9nWbryApg/viewform">
              <button>{firstYearText}</button>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSddFG2P88xhwQXgqtw_jtoOVxE5zWWypvfQgMmdJ1d-squZLA/viewform">
              <button>{secondYearText}</button>
            </a>
          </div>
        </div>
        <div className="dropdown-menu">
          <div>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#events" onClick={closeMenu}>Events</a>
            <a href="#venue" onClick={closeMenu}>Venue</a>
          </div>
          <div>
            <a href="#menu" onClick={closeMenu}>Menu</a>
            <a href="#drip" onClick={closeMenu}>Drip</a>
            <a href="#faqs-wrapper" onClick={closeMenu}>FAQs</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
