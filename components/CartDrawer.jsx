"use client";

import { useEffect } from "react";
import "./CartDrawer.css";

export default function CartDrawer({
  cart = [],
  isOpen,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  /* =====================================================
     LOCK PAGE SCROLL
  ===================================================== */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

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


  return (
    <>
      {/* =================================================
          OVERLAY
      ================================================= */}

      <div
        className={`cart-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />


      {/* =================================================
          DRAWER
      ================================================= */}

      <aside
        className={`cart-drawer ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="cart-header">

          <div className="cart-title">

            <span className="cart-kicker">
              BURGER IN TOWN
            </span>

            <div className="cart-title-row">

              <h2>
                YOUR CART
              </h2>

              {itemCount > 0 && (
                <span className="cart-total-items">
                  {itemCount}
                </span>
              )}

            </div>

          </div>


          <button
            type="button"
            className="cart-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            <span />
            <span />
          </button>

        </header>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="cart-content">

          {cart.length === 0 ? (

            /* =================================================
                EMPTY CART
            ================================================= */

            <div className="cart-empty">

              <div className="empty-icon">
                <span>+</span>
              </div>

              <span className="empty-kicker">
                NOTHING HERE YET
              </span>

              <h3>
                YOUR CART
                <span>IS EMPTY.</span>
              </h3>

              <p>
                Hungry? Pick something delicious from
                our menu and add it here.
              </p>

              <button
                type="button"
                className="browse-menu"
                onClick={onClose}
              >
                <span>
                  BROWSE MENU
                </span>

                <b>
                  ↗
                </b>
              </button>

            </div>

          ) : (

            /* =================================================
                CART ITEMS
            ================================================= */

            <div className="cart-list">

              {cart.map((item, index) => (

                <article
                  className="cart-item"
                  key={item.id}
                >

                  {/* IMAGE */}

                  <div className="cart-item-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  {/* DETAILS */}

                  <div className="cart-item-details">

                    <div className="cart-item-heading">

                      <div>

                        <h3>
                          {item.name}
                        </h3>

                        <span className="cart-item-unit-price">
                          Rs. {item.price.toLocaleString()}
                        </span>

                      </div>


                      <button
                        type="button"
                        className="remove-item"
                        onClick={() =>
                          onRemove(item.id)
                        }
                        aria-label={`Remove ${item.name}`}
                      >
                        ×
                      </button>

                    </div>


                    {/* ITEM FOOTER */}

                    <div className="cart-item-footer">

                      {/* QUANTITY */}

                      <div className="quantity-control">

                        <button
                          type="button"
                          onClick={() =>
                            onDecrease(item.id)
                          }
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            onIncrease(item.id)
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>

                      </div>


                      {/* TOTAL */}

                      <strong className="cart-item-total">
                        Rs.{" "}
                        {(
                          item.price * item.quantity
                        ).toLocaleString()}
                      </strong>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        {cart.length > 0 && (

          <footer className="cart-footer">

            <div className="cart-summary">

              <div className="summary-row">

                <span>
                  ITEMS
                </span>

                <span>
                  {itemCount}
                </span>

              </div>


              <div className="summary-row subtotal-row">

                <span>
                  SUBTOTAL
                </span>

                <strong>
                  Rs. {subtotal.toLocaleString()}
                </strong>

              </div>

            </div>


            <p className="cart-delivery-note">
              Delivery charges may apply based on
              your location.
            </p>


            <button
              type="button"
              className="checkout-button"
              onClick={onCheckout}
            >

              <span>
                CHECKOUT
              </span>

              <b>
                ↗
              </b>

            </button>

          </footer>

        )}

      </aside>
    </>
  );
}