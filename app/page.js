"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Deals from "@/components/Deals";
import Info from "@/components/Info";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Checkout from "@/components/Checkout";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // ADD ITEM TO CART
  const addToCart = (item) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...currentCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  };

  // INCREASE QUANTITY
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // DECREASE QUANTITY
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // TOTAL ITEMS IN CART
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // OPEN CHECKOUT
  const openCheckout = () => {
    if (cart.length === 0) return;

    setCartOpen(false);
    setCheckoutOpen(true);
  };

  // CLOSE CHECKOUT
  const closeCheckout = () => {
    setCheckoutOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      {/* MAIN WEBSITE */}
      <main>
        <Hero />

        <Menu
          onAddToCart={addToCart}
        />

        <Deals />

        <Info />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* CART DRAWER */}
      <CartDrawer
        cart={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
        onCheckout={openCheckout}
      />

      {/* CHECKOUT */}
      <Checkout
        cart={cart}
        isOpen={checkoutOpen}
        onClose={closeCheckout}
      />

      {/* WHATSAPP */}
      <WhatsAppButton />
    </>
  );
}