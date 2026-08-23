"use client";

import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="/videos/burger-animation2.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Hero Content */}
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <span className="hero-label">
            BURGERS • FRIES • GOOD TIMES
          </span>

          <h1>
            BIG FLAVOR.
            <span>NO BORING BITES.</span>
          </h1>

          <p>
            Freshly made burgers, crispy fries and bold flavors
            crafted for people who love a seriously good bite.
          </p>

          <div className="hero-buttons">

            <a
              href="#menu"
              className="hero-button hero-button-primary"
            >
              Explore Menu
              <span>↗</span>
            </a>

            <a
              href="#order"
              className="hero-button hero-button-secondary"
            >
              Order Now
            </a>

          </div>

        </motion.div>
      </div>

    </section>
  );
}