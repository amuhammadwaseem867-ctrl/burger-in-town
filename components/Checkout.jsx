"use client";

import { useEffect, useState } from "react";
import "./Checkout.css";

export default function Checkout({
  cart = [],
  isOpen,
  onClose,
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  /* =====================================================
     LOCK PAGE SCROLL
  ===================================================== */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);


  /* =====================================================
     FORM CHANGE
  ===================================================== */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };


  /* =====================================================
     WHATSAPP ORDER
  ===================================================== */

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.address.trim()
    ) {
      return;
    }

    if (!cart.length) {
      return;
    }

    const orderItems = cart
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} — Rs. ${(
            item.price * item.quantity
          ).toLocaleString()}`
      )
      .join("\n");

    const message = `*BURGER IN TOWN — NEW ORDER*

*CUSTOMER DETAILS*
Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}

*ORDER*
${orderItems}

*TOTAL: Rs. ${subtotal.toLocaleString()}*

*NOTES*
${form.notes.trim() || "None"}

Thank you!`;

    const whatsappNumber = "923068126737";

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
  };


  /* =====================================================
     CLOSED
  ===================================================== */

  if (!isOpen) {
    return null;
  }


  return (
    <>
      {/* =================================================
          OVERLAY
      ================================================= */}

      <div
        className="checkout-overlay"
        onClick={onClose}
        aria-hidden="true"
      />


      {/* =================================================
          PANEL
      ================================================= */}

      <section
        className="checkout-panel"
        aria-label="Checkout"
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="checkout-header">

          <div className="checkout-heading">

            <span className="checkout-kicker">
              BURGER IN TOWN
            </span>

            <div className="checkout-title-row">

              <h2>
                CHECKOUT
              </h2>

              <span className="checkout-step">
                01
              </span>

            </div>

          </div>


          <button
            type="button"
            className="checkout-close"
            onClick={onClose}
            aria-label="Close checkout"
          >
            <span />
            <span />
          </button>

        </header>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="checkout-content">

          <form onSubmit={handleSubmit}>

            {/* =================================================
                CUSTOMER DETAILS
            ================================================= */}

            <section className="checkout-section">

              <div className="checkout-section-heading">

                <span className="checkout-label">
                  01 / CUSTOMER DETAILS
                </span>

                <span className="checkout-section-line" />

              </div>


              <div className="checkout-fields">

                {/* NAME */}

                <div className="checkout-field">

                  <label htmlFor="name">
                    FULL NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />

                </div>


                {/* PHONE */}

                <div className="checkout-field">

                  <label htmlFor="phone">
                    PHONE NUMBER
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="03XX XXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />

                </div>


                {/* ADDRESS */}

                <div className="checkout-field full">

                  <label htmlFor="address">
                    DELIVERY ADDRESS
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    placeholder="House, street, area..."
                    value={form.address}
                    onChange={handleChange}
                    autoComplete="street-address"
                    required
                  />

                </div>


                {/* NOTES */}

                <div className="checkout-field full">

                  <label htmlFor="notes">
                    ORDER NOTES
                  </label>

                  <textarea
                    id="notes"
                    name="notes"
                    rows="2"
                    placeholder="Extra sauce, no onions, etc."
                    value={form.notes}
                    onChange={handleChange}
                  />

                </div>

              </div>

            </section>


            {/* =================================================
                ORDER SUMMARY
            ================================================= */}

            <section className="checkout-section">

              <div className="checkout-section-heading">

                <span className="checkout-label">
                  02 / ORDER SUMMARY
                </span>

                <span className="checkout-section-line" />

              </div>


              <div className="checkout-items">

                {cart.map((item, index) => (

                  <div
                    className="checkout-item"
                    key={item.id}
                  >

                    <div className="checkout-item-left">

                      <span className="checkout-item-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>

                        <strong>
                          {item.name}
                        </strong>

                        <span>
                          {item.quantity} × Rs.{" "}
                          {item.price.toLocaleString()}
                        </span>

                      </div>

                    </div>


                    <strong className="checkout-item-total">
                      Rs.{" "}
                      {(
                        item.price * item.quantity
                      ).toLocaleString()}
                    </strong>

                  </div>

                ))}

              </div>


              {/* TOTAL */}

              <div className="checkout-total">

                <span>
                  TOTAL
                </span>

                <strong>
                  Rs. {subtotal.toLocaleString()}
                </strong>

              </div>

            </section>


            {/* =================================================
                PLACE ORDER
            ================================================= */}

            <button
              type="submit"
              className="place-order-button"
            >

              <span>
                PLACE ORDER ON WHATSAPP
              </span>

              <b>
                ↗
              </b>

            </button>


            <p className="checkout-note">
              Your order will be sent directly to
              Burger In Town through WhatsApp.
            </p>

          </form>

        </div>

      </section>
    </>
  );
}