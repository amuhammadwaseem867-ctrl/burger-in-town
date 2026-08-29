"use client";

import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar({ onOrderClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleOrderClick = () => {
    closeMenu();
    onOrderClick?.();
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="navbar-container">

        {/* =================================================
            LOGO
        ================================================= */}

        <a
          href="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span>BURGER</span>
          <small>IN TOWN</small>
        </a>


        {/* =================================================
            DESKTOP NAV
        ================================================= */}

        <nav className="navbar-links">

          <a href="#home" onClick={closeMenu}>
            HOME
          </a>

          <a href="#menu" onClick={closeMenu}>
            MENU
          </a>

          <a href="#popular" onClick={closeMenu}>
            POPULAR
          </a>

          <a href="#about" onClick={closeMenu}>
            ABOUT
          </a>

        </nav>


        {/* =================================================
            ORDER BUTTON
        ================================================= */}

        <button
          type="button"
          className="navbar-order"
          onClick={handleOrderClick}
        >
          <span>ORDER NOW</span>
          <b>↗</b>
        </button>


        {/* =================================================
            MOBILE TOGGLE
        ================================================= */}

        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

      </div>


      {/* =================================================
          MOBILE MENU
      ================================================= */}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <div className="mobile-menu-inner">

          <div className="mobile-menu-header">
            <span>THE TOWN</span>
            <small>MENU</small>
          </div>


          <nav className="mobile-links">

            <a href="#home" onClick={closeMenu}>
              <span>01</span>
              HOME
              <b>↗</b>
            </a>

            <a href="#menu" onClick={closeMenu}>
              <span>02</span>
              MENU
              <b>↗</b>
            </a>

            <a href="#popular" onClick={closeMenu}>
              <span>03</span>
              POPULAR
              <b>↗</b>
            </a>

            <a href="#about" onClick={closeMenu}>
              <span>04</span>
              ABOUT
              <b>↗</b>
            </a>

          </nav>


          <button
            type="button"
            className="mobile-order"
            onClick={handleOrderClick}
          >
            <span>ORDER NOW</span>
            <b>↗</b>
          </button>


          <div className="mobile-menu-footer">
            <span>BURGERS • FRIES • GOOD TIMES</span>
            <span>RAWALPINDI / ISLAMABAD</span>
          </div>

        </div>

      </div>

    </header>
  );
}