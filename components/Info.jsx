import "./Info.css";

export default function Info() {
  return (
    <section className="info-section" id="about">

      <div className="info-container">

        {/* =================================================
            ABOUT
        ================================================= */}

        <div className="info-about">

          <span className="info-kicker">
            WELCOME TO THE TOWN
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
            <span>
              EXPLORE MENU
            </span>

            <b>
              ↗
            </b>
          </a>

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
            >
              GET DIRECTIONS
              <span>↗</span>
            </a>

          </div>


          {/* HOURS */}

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