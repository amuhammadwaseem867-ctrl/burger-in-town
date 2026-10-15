"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import FoodImage from "./FoodImage";
import {
  menuSections,
  popularDeals,
  getStartingPrice,
} from "../data/menu";

import "./Menu.css";


/* =========================================================
   NAV TARGETS
========================================================= */

const navSections = [
  { id: "popular", navName: "DEALS" },
  ...menuSections,
];


/* =========================================================
   MENU COMPONENT
========================================================= */

export default function Menu({ onAddToCart }) {

  const navRef = useRef(null);

  const [activeId, setActiveId] = useState("popular");


  /* =====================================================
     SCROLL SPY
     Highlights the section crossing the middle of
     the screen.
  ===================================================== */

  useEffect(() => {

    const targets = navSections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();

  }, []);


  /* =====================================================
     KEEP ACTIVE TAB VISIBLE (MOBILE)
  ===================================================== */

  useEffect(() => {

    const nav = navRef.current;

    const link = nav?.querySelector(
      `[data-section="${activeId}"]`
    );

    if (!nav || !link) {
      return;
    }

    nav.scrollTo({
      left:
        link.offsetLeft -
        (nav.clientWidth - link.offsetWidth) / 2,
      behavior: "smooth",
    });

  }, [activeId]);


  return (
    <section className="menu-section" id="menu">

      <div className="menu-container">

        {/* =================================================
            MENU HEADER
        ================================================= */}

        <header className="menu-heading">

          <div>
            <span className="menu-eyebrow">
              01 / THE MENU
            </span>

            <h2>
              PICK YOUR <span>CRAVING.</span>
            </h2>
          </div>

          <p>
            Fresh burgers, loaded fries,
            crispy sides and refreshing drinks.
          </p>

        </header>


        {/* =================================================
            MENU NAVBAR
        ================================================= */}

        <nav
          className="menu-nav"
          ref={navRef}
          aria-label="Menu categories"
        >

          {navSections.map((section) => (
            <a
              href={`#${section.id}`}
              key={section.id}
              data-section={section.id}
              className={
                activeId === section.id ? "active" : undefined
              }
              aria-current={
                activeId === section.id ? "true" : undefined
              }
            >
              {section.navName}
            </a>
          ))}

        </nav>


        {/* =================================================
            POPULAR DEALS
        ================================================= */}

        <section
          className="popular-deals"
          id="popular"
        >

          <div className="section-heading">

            <div>

              <span>
                00 / FEATURED
              </span>

              <h3>
                POPULAR <strong>DEALS.</strong>
              </h3>

            </div>

            <p>
              THE ONES EVERYONE
              <br />
              COMES BACK FOR.
            </p>

          </div>


          <div className="popular-marquee">

            <div className="popular-track">

              {[...popularDeals, ...popularDeals].map(
                (item, index) => {

                  const isCopy = index >= popularDeals.length;

                  return (
                    <article
                      className="popular-card"
                      key={`${item.id}-${index}`}
                      aria-hidden={isCopy || undefined}
                    >

                      <div className="popular-card-image">

                        <FoodImage
                          src={item.image}
                          fallback={item.fallback}
                          alt={item.name}
                          loading="lazy"
                        />

                        <span>
                          POPULAR
                        </span>

                      </div>


                      <div className="popular-card-content">

                        <div>

                          <small>
                            {item.category}
                          </small>

                          <h4>
                            {item.name}
                          </h4>

                          <strong>
                            Rs. {item.price.toLocaleString()}
                          </strong>

                        </div>

                        <button
                          type="button"
                          tabIndex={isCopy ? -1 : undefined}
                          aria-label={`Add ${item.name} to cart`}
                          onClick={() =>
                            onAddToCart?.(item)
                          }
                        >
                          +
                        </button>

                      </div>

                    </article>
                  );
                }
              )}

            </div>

          </div>

        </section>


        {/* =================================================
            CATEGORY SECTIONS
        ================================================= */}

        <div className="menu-sections">

          {menuSections.map((section) => (

            <section
              className="menu-category-section"
              id={section.id}
              key={section.id}
            >

              {/* CATEGORY TITLE (MOBILE) */}

              <div className="category-heading">

                <span>
                  {section.number}
                </span>

                <h3>
                  {section.title}
                </h3>

                <small>
                  {section.items.length} ITEMS
                </small>

              </div>


              {/* =================================================
                  CATEGORY BANNER
              ================================================= */}

              <div className="category-banner">

                <Image
                  src={section.banner}
                  alt={`${section.title} banner`}
                  fill
                  sizes="(max-width: 1300px) 92vw, 1200px"
                />

                <div className="category-banner-overlay" />

                <div className="category-banner-text">

                  <span>
                    {section.number} / {section.navName}
                  </span>

                  <h3>
                    {section.title}
                  </h3>

                  <p>
                    {section.items.length} ITEMS
                    <i />
                    FROM RS. {getStartingPrice(section).toLocaleString()}
                  </p>

                </div>

              </div>


              {/* =================================================
                  MENU ITEMS
              ================================================= */}

              <div className="menu-grid">

                {section.items.map((item) => (

                  <article
                    className="menu-card"
                    key={item.id}
                  >

                    <div className="menu-card-image">

                      <FoodImage
                        src={item.image}
                        fallback={item.fallback}
                        alt={item.name}
                        loading="lazy"
                      />

                      <span className="menu-card-category">
                        {section.navName}
                      </span>

                    </div>


                    <div className="menu-card-content">

                      <h4>
                        {item.name}
                      </h4>

                      <p>
                        {item.description}
                      </p>


                      <div className="menu-card-bottom">

                        <strong>
                          Rs. {item.price.toLocaleString()}
                        </strong>

                        <button
                          type="button"
                          aria-label={`Add ${item.name} to cart`}
                          onClick={() =>
                            onAddToCart?.(item)
                          }
                        >
                          ADD <span>+</span>
                        </button>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            </section>

          ))}

        </div>

      </div>

    </section>
  );
}
