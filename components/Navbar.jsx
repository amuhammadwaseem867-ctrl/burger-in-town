"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar({ cartCount = 0, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleCartClick = () => {
    closeMenu();
    onCartClick?.();
  };

  return (
    <header className="navbar">
      <div className="navbar-shell">

        {/* LEFT NAV */}
        <nav className="nav-group nav-left">
          <Link href="#menu" onClick={closeMenu}>
            MENU
          </Link>

          <Link href="#deals" onClick={closeMenu}>
            DEALS
          </Link>
        </nav>

        {/* CENTER BRAND */}
        <Link href="/" className="navbar-brand">
          <span className="brand-top">BURGER</span>
          <span className="brand-main">IN TOWN</span>
        </Link>

        {/* RIGHT NAV */}
        <nav className="nav-group nav-right">
          <Link href="#locations" onClick={closeMenu}>
            LOCATIONS
          </Link>

          <button
            type="button"
            className="cart-button"
            onClick={handleCartClick}
            aria-label="Open cart"
          >
            <span>CART</span>

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </button>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          className={`mobile-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`mobile-nav ${
          menuOpen ? "open" : ""
        }`}
      >
        <Link href="#menu" onClick={closeMenu}>
          MENU
        </Link>

        <Link href="#deals" onClick={closeMenu}>
          DEALS
        </Link>

        <Link href="#locations" onClick={closeMenu}>
          LOCATIONS
        </Link>

        <button
          type="button"
          onClick={handleCartClick}
        >
          <span>CART</span>

          {cartCount > 0 && (
            <span className="mobile-count">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}