"use client";

import Image from "next/image";

import {
  menuSections,
  findMenuItem,
  getStartingPrice,
} from "../data/menu";

import "./Specials.css";


/* =========================================================
   SPECIALS CONTENT
========================================================= */

const featured = findMenuItem(1);

const promos = [
  {
    section: "chicken",
    kicker: "CRUNCH TIME",
    position: "52% center",
  },
  {
    section: "fries",
    kicker: "LOAD IT UP",
    position: "88% center",
  },
].map((promo) => {
  const section = menuSections.find(
    (item) => item.id === promo.section
  );

  return {
    ...promo,
    title: section.title,
    banner: section.banner,
    startingPrice: getStartingPrice(section),
  };
});


/* =========================================================
   SPECIALS BANNER
========================================================= */

export default function Specials({ onAddToCart }) {
  return (
    <section className="specials" id="deals">

      <div className="specials-container">

        {/* =================================================
            HEADING
        ================================================= */}

        <header className="specials-heading">

          <span className="specials-eyebrow">
            TODAY&apos;S SPECIALS
          </span>

          <h2>
            FRESH OFF <span>THE GRILL.</span>
          </h2>

        </header>


        <div className="specials-grid">

          {/* =================================================
              MAIN BANNER
          ================================================= */}

          <article className="specials-main">

            <div className="specials-main-media">

              <Image
                src="/burger-special.jpg"
                alt={featured.name}
                fill
                sizes="(max-width: 900px) 92vw, 640px"
              />

            </div>

            <div className="specials-main-glow" />

            <div className="specials-main-content">

              <span className="specials-badge">
                ★ SIGNATURE BURGER
              </span>

              <h3>
                {featured.name.split(" ")[0]}
                <span>
                  {featured.name.split(" ").slice(1).join(" ")}
                </span>
              </h3>

              <p>
                {featured.description}
              </p>

              <div className="specials-main-actions">

                <strong>
                  <small>ONLY</small>
                  Rs. {featured.price.toLocaleString()}
                </strong>

                <button
                  type="button"
                  onClick={() => onAddToCart?.(featured)}
                >
                  ADD TO ORDER
                  <span>+</span>
                </button>

              </div>

              <a
                href="#beef"
                className="specials-main-link"
              >
                SEE ALL BEEF BURGERS
                <b>↗</b>
              </a>

            </div>

          </article>


          {/* =================================================
              SIDE BANNERS
          ================================================= */}

          <div className="specials-side">

            {promos.map((promo) => (

              <a
                href={`#${promo.section}`}
                className="specials-card"
                key={promo.section}
              >

                <Image
                  src={promo.banner}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 92vw, 440px"
                  style={{ objectPosition: promo.position }}
                />

                <div className="specials-card-overlay" />

                <div className="specials-card-content">

                  <span>
                    {promo.kicker}
                  </span>

                  <h3>
                    {promo.title}
                  </h3>

                  <p>
                    FROM RS. {promo.startingPrice.toLocaleString()}
                  </p>

                </div>

                <b className="specials-card-arrow">
                  ↗
                </b>

              </a>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
