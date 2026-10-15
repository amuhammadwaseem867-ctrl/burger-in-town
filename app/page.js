"use client";

import { useState } from "react";

import LocationLoader from "../components/LocationLoader";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Specials from "../components/Specials";
import Menu from "../components/Menu";
import Info from "../components/Info";
import OrderBanner from "../components/OrderBanner";
import Footer from "../components/Footer";

import CartDrawer from "../components/CartDrawer";
import Checkout from "../components/Checkout";
import WhatsAppButton from "../components/WhatsAppButton";


export default function Home() {

  /* =====================================================
     CART STATE
  ===================================================== */

  const [cart, setCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isCheckoutOpen, setIsCheckoutOpen] =
    useState(false);


  /* =====================================================
     ADD TO CART
  ===================================================== */

  const handleAddToCart = (item) => {

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

    setIsCartOpen(true);
  };


  /* =====================================================
     INCREASE QUANTITY
  ===================================================== */

  const handleIncrease = (id) => {

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


  /* =====================================================
     DECREASE QUANTITY
  ===================================================== */

  const handleDecrease = (id) => {

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


  /* =====================================================
     REMOVE ITEM
  ===================================================== */

  const handleRemove = (id) => {

    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== id
      )
    );

  };


  /* =====================================================
     OPEN CART
  ===================================================== */

  const openCart = () => {
    setIsCartOpen(true);
  };


  /* =====================================================
     CLOSE CART
  ===================================================== */

  const closeCart = () => {
    setIsCartOpen(false);
  };


  /* =====================================================
     CHECKOUT
  ===================================================== */

  const handleCheckout = () => {

    if (cart.length === 0) {
      return;
    }

    setIsCartOpen(false);

    setTimeout(() => {
      setIsCheckoutOpen(true);
    }, 250);

  };


  /* =====================================================
     CLOSE CHECKOUT
  ===================================================== */

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };


  /* =====================================================
     PAGE
  ===================================================== */

  return (

    <LocationLoader>

      {/* =================================================
          MAIN NAVBAR
      ================================================= */}

      <Navbar
        onOrderClick={openCart}
      />


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main>

        {/* HERO */}

        <Hero />


        {/* SCROLLING BANNER */}

        <Ticker />


        {/* TODAY'S SPECIALS BANNERS */}

        <Specials
          onAddToCart={handleAddToCart}
        />


        {/* =================================================
            MENU

            Menu ke andar:

            POPULAR DEALS
            BEEF
            CHICKEN
            FRIES
            SIDES
            DRINKS

            Menu navigation + banners + items
        ================================================= */}

        <Menu
          onAddToCart={handleAddToCart}
        />


        {/* =================================================
            ABOUT / INFO
        ================================================= */}

        <Info />


        {/* =================================================
            ORDER BANNER
        ================================================= */}

        <OrderBanner />


        {/* =================================================
            FOOTER
        ================================================= */}

        <Footer />

      </main>


      {/* =================================================
          CART DRAWER
      ================================================= */}

      <CartDrawer
        cart={cart}
        isOpen={isCartOpen}
        onClose={closeCart}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />


      {/* =================================================
          CHECKOUT
      ================================================= */}

      <Checkout
        cart={cart}
        isOpen={isCheckoutOpen}
        onClose={closeCheckout}
      />


      {/* =================================================
          WHATSAPP
      ================================================= */}

      <WhatsAppButton />

    </LocationLoader>

  );
}