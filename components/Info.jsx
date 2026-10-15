import Image from "next/image";
import "./Info.css";

export default function Info() {
  return (
    <section className="info-section" id="about">

      <div className="info-container">

        <div className="info-intro">

          {/* =================================================
              ABOUT
          ================================================= */}

          <div className="info-about">

            <span className="info-kicker">
              WELCOME TO BURGER IN TOWN
            </span>

            <h2>
              BIG FLAVOR.
              <span>REAL BURGERS.</span>
            </h2>

            <p>
              Burger In Town is all about seriously good
              burgers, loaded fries and food worth coming
              back for. Freshly prepared, generously loaded
              and made to satisfy every craving.
            </p>

            <a
              href="#menu"
              className="info-menu-link"
            >
              <span>EXPLORE MENU</span>
              <b>↗</b>
            </a>

          </div>


          {/* =================================================
              IMAGE
          ================================================= */}

          <div className="info-visual">

            <Image
              src="/hero-burger.jpg"
              alt="Cheeseburger with lettuce and tomato on a wooden table"
              fill
              sizes="(max-width: 900px) 92vw, 600px"
            />

            <div className="info-stamp" aria-hidden="true">

              <svg viewBox="0 0 120 120">
                <defs>
                  <path
                    id="info-stamp-circle"
                    d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                  />
                </defs>

                <text>
                  <textPath href="#info-stamp-circle">
                    BURGER IN TOWN • BIG FLAVOR • GOOD TIMES •
                  </textPath>
                </text>
              </svg>

              <b>★</b>

            </div>

            <span className="info-visual-tag">
              FRESHLY PREPARED • GENEROUSLY LOADED
            </span>

          </div>

        </div>


        {/* =================================================
            DETAILS
        ================================================= */}

        <div className="info-details">

          {/* LOCATION */}

          <div className="info-block">

            <div className="info-block-top">

              <span>
                01 / FIND US
              </span>

              <i>
                ↗
              </i>

            </div>

            <h3>
              RAWALPINDI
              <span>ISLAMABAD</span>
            </h3>

            <p>
              Visit your nearest Burger In Town
              location and grab your favorite meal.
            </p>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="info-action"
            >
              GET DIRECTIONS
              <span>↗</span>
            </a>

          </div>


          {/* OPENING HOURS */}

          <div className="info-block">

            <div className="info-block-top">

              <span>
                02 / OPENING HOURS
              </span>

              <i>
                ◷
              </i>

            </div>

            <div className="hours">

              <div className="hours-row">

                <p>
                  MON — THU
                </p>

                <strong>
                  12:00 PM — 12:00 AM
                </strong>

              </div>

              <div className="hours-row">

                <p>
                  FRI — SUN
                </p>

                <strong>
                  12:00 PM — 01:00 AM
                </strong>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
