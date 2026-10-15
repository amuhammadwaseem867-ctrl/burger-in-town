import "./Ticker.css";

/* =========================================================
   TICKER BANNER
   Scrolling orange strip between the hero and specials.
========================================================= */

const words = [
  "SMASHED BEEF BURGERS",
  "CRISPY CHICKEN",
  "LOADED FRIES",
  "SIDES & BITES",
  "THICK SHAKES",
  "RAWALPINDI / ISLAMABAD",
];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">

      <div className="ticker-track">

        {[...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`}>
            {word}
            <b>✦</b>
          </span>
        ))}

      </div>

    </div>
  );
}
