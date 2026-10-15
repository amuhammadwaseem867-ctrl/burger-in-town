import Image from "next/image";
import "./OrderBanner.css";

/* =========================================================
   ORDER BANNER
   Call-to-action banner above the footer.
========================================================= */

const whatsappUrl = `https://wa.me/923068126737?text=${encodeURIComponent(
  "Hi Burger In Town! I would like to place an order."
)}`;

export default function OrderBanner() {
  return (
    <section className="order-banner" id="order">

      <div className="order-banner-container">

        <div className="order-banner-card">

          <div className="order-banner-media">

            <Image
              src="/images/hero-poster.jpg"
              alt=""
              fill
              sizes="(max-width: 760px) 92vw, 640px"
            />

          </div>

          <div className="order-banner-content">

            <span className="order-banner-kicker">
              HUNGRY ALREADY?
            </span>

            <h2>
              YOUR NEXT BURGER
              <span>IS ONE TAP AWAY.</span>
            </h2>

            <p>
              Message us on WhatsApp or build your order
              from the menu. We&apos;ll take it from there.
            </p>

            <div className="order-banner-actions">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="order-banner-button order-banner-button-primary"
              >
                ORDER ON WHATSAPP
                <b>↗</b>
              </a>

              <a
                href="#menu"
                className="order-banner-button"
              >
                BUILD YOUR ORDER
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
