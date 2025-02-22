import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {

  return (
    <>
      <div class="navbar-wrapper">
        <div class="navbar-container">
          <div class="contents-nav">
            <div class="hamburger-menu" onclick="toggleMenu()">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="navigations">
              <a href="#process-wrapper">About</a>
              <a href="#process-wrapper">Venue</a>
              <a href="#timeline-wrapper">Timeline</a>
              <a href="#perks-wrapper">Events</a>
              <a href="#faqs-wrapper">FAQs</a>
            </div>
          </div>
          <div class="dropdown-menu">
            <a href="#process-wrapper" onclick="closeMenu()">Process</a>
            <a href="#timeline-wrapper" onclick="closeMenu()">Timeline</a>
            <a href="#perks-wrapper" onclick="closeMenu()">Perks</a>
            <a href="#domains-wrapper" onclick="closeMenu()">Explore Domains</a>
            <a href="#faqs-wrapper" onclick="closeMenu()">FAQs</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
