import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <span className="footer-kicker">
            BURGER IN TOWN
          </span>

          <h2>
            SEE YOU
            <br />
            <span>IN TOWN.</span>
          </h2>

          <p>
            Big burgers. Bold flavors.
            <br />
            Made for serious cravings.
          </p>

        </div>


        {/* EXPLORE */}
        <div className="footer-column">

          <span className="footer-label">
            EXPLORE
          </span>

          <a href="#menu">
            MENU
            <span>↗</span>
          </a>

          <a href="#deals">
            DEALS
            <span>↗</span>
          </a>

          <a href="#about">
            ABOUT
            <span>↗</span>
          </a>

        </div>


        {/* CONTACT */}
        <div className="footer-column">

          <span className="footer-label">
            CONTACT
          </span>

          <a href="tel:+923000000000">
            +92 300 0000000
          </a>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            FIND US
            <span>↗</span>
          </a>

        </div>


        {/* SOCIAL */}
        <div className="footer-column">

          <span className="footer-label">
            FOLLOW
          </span>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
            <span>↗</span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            FACEBOOK
            <span>↗</span>
          </a>

        </div>

      </div>


      {/* LARGE BRAND LINE */}
      <div className="footer-marquee">
        <span>BURGER IN TOWN</span>
      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} BURGER IN TOWN
        </span>

        <span>
          ALL RIGHTS RESERVED
        </span>

        <span>
          MADE FOR BURGER LOVERS
        </span>

      </div>

    </footer>
  );
}