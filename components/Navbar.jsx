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

    if (onOrderClick) {
      onOrderClick();
    }
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-container">

        {/* =================================================
            LOGO
        ================================================= */}

        <a
          href="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="logo-main">
            BURGER
          </span>

          <span className="logo-sub">
            IN TOWN
          </span>
        </a>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="navbar-links">

          <a
            href="#home"
            onClick={closeMenu}
          >
            HOME
          </a>

          <a
            href="#menu"
            onClick={closeMenu}
          >
            MENU
          </a>

          <a
            href="#deals"
            onClick={closeMenu}
          >
            DEALS
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            ABOUT
          </a>

        </nav>


        {/* =================================================
            DESKTOP ORDER BUTTON
        ================================================= */}

        <button
          type="button"
          className="navbar-order"
          onClick={handleOrderClick}
        >
          <span>
            ORDER NOW
          </span>

          <b>
            ↗
          </b>
        </button>


        {/* =================================================
            MOBILE TOGGLE
        ================================================= */}

        <button
          type="button"
          className={`navbar-toggle ${
            menuOpen ? "active" : ""
          }`}
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

      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        <div className="mobile-menu-inner">

          <span className="mobile-menu-kicker">
            BURGER IN TOWN
          </span>


          <a
            href="#home"
            onClick={closeMenu}
          >
            <span>01</span>
            HOME
            <b>↗</b>
          </a>


          <a
            href="#menu"
            onClick={closeMenu}
          >
            <span>02</span>
            MENU
            <b>↗</b>
          </a>


          <a
            href="#deals"
            onClick={closeMenu}
          >
            <span>03</span>
            DEALS
            <b>↗</b>
          </a>


          <a
            href="#about"
            onClick={closeMenu}
          >
            <span>04</span>
            ABOUT
            <b>↗</b>
          </a>


          {/* MOBILE ORDER */}

          <button
            type="button"
            className="mobile-order"
            onClick={handleOrderClick}
          >
            <span>
              ORDER NOW
            </span>

            <b>
              ↗
            </b>
          </button>

        </div>

      </div>

    </header>
  );
}