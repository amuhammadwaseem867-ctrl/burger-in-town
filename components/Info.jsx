import "./Info.css";

export default function Info() {
  return (
    <section className="info-section" id="about">
      <div className="info-container">

        {/* About */}
        <div className="info-about">
          <span className="info-kicker">
            WELCOME TO THE TOWN
          </span>

          <h2>
            BIG FLAVOR.
            <br />
            <span>REAL BURGERS.</span>
          </h2>

          <p>
            Burger In Town is all about seriously good
            burgers, loaded fries and food worth coming
            back for. Freshly prepared, generously loaded
            and made to satisfy every craving.
          </p>

          <a href="#menu" className="info-menu-link">
            EXPLORE MENU
            <span>→</span>
          </a>
        </div>

        {/* Location / Hours */}
        <div className="info-details">

          <div className="info-block">
            <span>FIND US</span>

            <h3>
              RAWALPINDI
              <br />
              ISLAMABAD
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
              GET DIRECTIONS →
            </a>
          </div>

          <div className="info-block">
            <span>OPENING HOURS</span>

            <div className="hours-row">
              <p>MON — THU</p>
              <strong>12:00 PM — 12:00 AM</strong>
            </div>

            <div className="hours-row">
              <p>FRI — SUN</p>
              <strong>12:00 PM — 01:00 AM</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}