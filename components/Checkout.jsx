"use client";

import { useState } from "react";
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.phone || !form.address) {
      return;
    }

    const orderItems = cart
      .map(
        (item) =>
          `${item.name} x${item.quantity} - Rs. ${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const message = `*BURGER IN TOWN - NEW ORDER*

Customer: ${form.name}
Phone: ${form.phone}
Address: ${form.address}

ORDER:
${orderItems}

Subtotal: Rs. ${subtotal.toLocaleString()}

Notes:
${form.notes || "None"}`;

    const whatsappNumber = "923068126737";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="checkout-overlay" onClick={onClose}></div>

      <section className="checkout-panel">
        <div className="checkout-header">
          <div>
            <span>BURGER IN TOWN</span>
            <h2>CHECKOUT</h2>
          </div>

          <button
            className="checkout-close"
            onClick={onClose}
            aria-label="Close checkout"
          >
            ×
          </button>
        </div>

        <div className="checkout-content">
          <form onSubmit={handleSubmit}>
            <div className="checkout-section">
              <span className="checkout-label">
                CUSTOMER DETAILS
              </span>

              <div className="checkout-fields">
                <div className="checkout-field">
                  <label htmlFor="name">FULL NAME</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="phone">PHONE NUMBER</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="03XX XXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

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
                    required
                  />
                </div>

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
            </div>

            <div className="checkout-section">
              <span className="checkout-label">
                ORDER SUMMARY
              </span>

              <div className="checkout-items">
                {cart.map((item) => (
                  <div
                    className="checkout-item"
                    key={item.id}
                  >
                    <div>
                      <strong>{item.name}</strong>
                      <span>
                        {item.quantity} × Rs.{" "}
                        {item.price.toLocaleString()}
                      </span>
                    </div>

                    <strong>
                      Rs.{" "}
                      {(
                        item.price * item.quantity
                      ).toLocaleString()}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="checkout-total">
                <span>TOTAL</span>

                <strong>
                  Rs. {subtotal.toLocaleString()}
                </strong>
              </div>
            </div>

            <button
              type="submit"
              className="place-order-button"
            >
              PLACE ORDER ON WHATSAPP
              <span>→</span>
            </button>

            <p className="checkout-note">
              Your order will be sent directly to Burger In
              Town through WhatsApp.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}