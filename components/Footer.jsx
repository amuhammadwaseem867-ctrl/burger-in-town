import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* =================================================
            FOOTER MAIN
        ================================================= */}

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">

            <span className="footer-kicker">
              BURGER IN TOWN
            </span>

            <h2>
              BIG FLAVOR.
              <span>GOOD TIMES.</span>
            </h2>

            <p>
              Fresh burgers, loaded fries and bold flavors
              made for every craving.
            </p>

          </div>


          {/* EXPLORE */}

          <div className="footer-column">

            <span className="footer-label">
              01 / EXPLORE
            </span>

            <a href="#home">
              HOME
            </a>

            <a href="#menu">
              MENU
            </a>

            <a href="#about">
              ABOUT
            </a>

          </div>


          {/* CONNECT */}

          <div className="footer-column">

            <span className="footer-label">
              02 / CONNECT
            </span>

            <a
              href="https://wa.me/923068126737"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHATSAPP
              <span>↗</span>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
              <span>↗</span>
            </a>

          </div>


          {/* LOCATION */}

          <div className="footer-column">

            <span className="footer-label">
              03 / FIND US
            </span>

            <p>
              RAWALPINDI
              <br />
              ISLAMABAD
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

        </div>


        {/* =================================================
            FOOTER BOTTOM
        ================================================= */}

        <div className="footer-bottom">

          <span className="footer-copyright">
            © {currentYear} BURGER IN TOWN. ALL RIGHTS RESERVED.
          </span>


          {/* CENTER CREDIT */}

          <div className="footer-credit">

            <span>
              WEBSITE BY
            </span>

            <a
              href="https://www.wacreativesolution.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              WA CREATIVE SOLUTIONS
              <b>↗</b>
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}