"use client";

import { motion } from "framer-motion";
import { menuSections } from "../data/menu";
import "./Hero.css";

const itemCount = menuSections.reduce(
  (total, section) => total + section.items.length,
  0
);

const stats = [
  { value: itemCount, label: "Menu items" },
  { value: "12 PM", label: "Open every day" },
  { value: "RWP · ISB", label: "Two cities" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Video (poster shows while loading) */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
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
              href="#deals"
              className="hero-button hero-button-secondary"
            >
              Today&apos;s Specials
            </a>

          </div>

          <ul className="hero-stats">
            {stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>

        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#deals"
        className="hero-scroll"
        aria-label="Scroll to specials"
      >
        <span />
      </a>

    </section>
  );
}
