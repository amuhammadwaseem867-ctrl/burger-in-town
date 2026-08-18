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

  // Lock page scroll while drawer is open
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

  // Close with Escape key
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
      {/* Overlay */}
      <div
        className={`cart-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`cart-drawer ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <header className="cart-header">
          <div className="cart-title">
            <span className="cart-kicker">
              BURGER IN TOWN
            </span>

            <div className="cart-title-row">
              <h2>YOUR CART</h2>

              {itemCount > 0 && (
                <span className="cart-total-items">
                  {itemCount}
                </span>
              )}
            </div>
          </div>

          <button
            className="cart-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            <span></span>
            <span></span>
          </button>
        </header>

        {/* Content */}
        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="empty-icon">
                <span>+</span>
              </div>

              <h3>Your cart is empty</h3>

              <p>
                Hungry? Pick something delicious from
                our menu and add it here.
              </p>

              <button
                className="browse-menu"
                onClick={onClose}
              >
                BROWSE MENU
                <span>→</span>
              </button>
            </div>
          ) : (
            <div className="cart-list">
              {cart.map((item) => (
                <article
                  className="cart-item"
                  key={item.id}
                >
                  {/* Product Image */}
                  <div className="cart-item-image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="cart-item-details">
                    <div className="cart-item-heading">
                      <div>
                        <h3>{item.name}</h3>

                        <span className="cart-item-unit-price">
                          Rs.{" "}
                          {item.price.toLocaleString()}
                        </span>
                      </div>

                      <button
                        className="remove-item"
                        onClick={() =>
                          onRemove(item.id)
                        }
                        aria-label={`Remove ${item.name}`}
                      >
                        ×
                      </button>
                    </div>

                    <div className="cart-item-footer">
                      {/* Quantity */}
                      <div className="quantity-control">
                        <button
                          onClick={() =>
                            onDecrease(item.id)
                          }
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            onIncrease(item.id)
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Item Total */}
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

        {/* Footer */}
        {cart.length > 0 && (
          <footer className="cart-footer">
            <div className="cart-summary">
              <div className="summary-row">
                <span>ITEMS</span>
                <span>{itemCount}</span>
              </div>

              <div className="summary-row subtotal-row">
                <span>SUBTOTAL</span>

                <strong>
                  Rs. {subtotal.toLocaleString()}
                </strong>
              </div>
            </div>

            <p className="cart-delivery-note">
              Delivery charges may apply based on your
              location.
            </p>

            <button
              className="checkout-button"
              onClick={onCheckout}
            >
              <span>CHECKOUT</span>
              <span className="checkout-arrow">→</span>
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}