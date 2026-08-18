"use client";

import Link from "next/link";
import "./Hero.css";

export default function Hero({ onCartClick }) {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-kicker">
            <span className="hero-kicker-line" />
            BURGERS • FRIES • GOOD TIMES
          </div>

          <h1 className="hero-title">
            <span>BIG</span>
            <span>BURGERS</span>
            <em>BIGGER</em>
            <span>CRAVINGS.</span>
          </h1>

          <p className="hero-description">
            Juicy burgers, loaded fries and serious flavor.
            Freshly made for every craving.
          </p>

          <div className="hero-actions">
            <Link href="#menu" className="hero-primary">
              <span>EXPLORE MENU</span>
              <b>↗</b>
            </Link>

            <button
              type="button"
              className="hero-secondary"
              onClick={onCartClick}
            >
              VIEW CART
            </button>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <strong>01</strong>
              <span>FRESH DAILY</span>
            </div>

            <div className="hero-meta-item">
              <strong>02</strong>
              <span>LOADED FLAVOR</span>
            </div>

            <div className="hero-meta-item">
              <strong>03</strong>
              <span>MADE TO ORDER</span>
            </div>
          </div>

        </div>


        {/* RIGHT VISUAL */}
        <div className="hero-visual">

          <div className="hero-circle hero-circle-one" />
          <div className="hero-circle hero-circle-two" />

          {/* MAIN IMAGE */}
          <div className="hero-main-image">
            <img
              src="/hero-burger.jpg"
              alt="Burger In Town burger"
            />

            <div className="hero-image-overlay" />
          </div>


          {/* SECOND IMAGE */}
          <div className="hero-special-card">

            <div className="hero-special-image">
              <img
                src="/burger-special.jpg"
                alt="Burger In Town special"
              />
            </div>

            <div className="hero-special-info">
              <span>HOUSE</span>
              <strong>SPECIAL</strong>
            </div>

          </div>


          {/* DECORATIVE NUMBER */}
          <div className="hero-number">
            01
          </div>


          {/* SIDE TEXT */}
          <div className="hero-side-text">
            BURGER
            <br />
            IN TOWN
          </div>

        </div>

      </div>


      {/* BOTTOM BAR */}
      <div className="hero-bottom">

        <span>CRAFTED FOR CRAVINGS</span>

        <div className="hero-bottom-line" />

        <span>SCROLL TO EXPLORE ↓</span>

      </div>

    </section>
  );
}