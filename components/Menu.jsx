"use client";

import { useState } from "react";
import "./Menu.css";

const categories = ["BEEF", "CHICKEN", "FRIES", "SIDES", "DRINKS"];

const menuItems = [
  {
    id: 1,
    category: "BEEF",
    name: "Town Special",
    description: "Double smashed beef patty, cheese & signature sauce.",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 2,
    category: "BEEF",
    name: "Smash Town Double",
    description: "Two smashed patties with melted cheese and house sauce.",
    price: 998,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 3,
    category: "BEEF",
    name: "Smash Town Triple",
    description: "Three juicy smashed patties stacked with cheese.",
    price: 1249,
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 4,
    category: "BEEF",
    name: "Smoke Town",
    description: "Smoky beef patty, cheese and signature BBQ sauce.",
    price: 811,
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 5,
    category: "CHICKEN",
    name: "Hangry",
    description: "Crispy chicken fillet with cheese and special sauce.",
    price: 812,
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 6,
    category: "CHICKEN",
    name: "Blazin Hot",
    description: "Crispy chicken with a fiery hot signature sauce.",
    price: 850,
    image: "/chicken.jpg",
  },
  {
    id: 7,
    category: "FRIES",
    name: "Plain Fries",
    description: "Golden crispy fries with a light seasoning.",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 8,
    category: "FRIES",
    name: "Animal Fries",
    description: "Loaded fries with cheese and signature toppings.",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 9,
    category: "SIDES",
    name: "Chicken Bites",
    description: "Crispy bite-sized chicken pieces.",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 10,
    category: "DRINKS",
    name: "Cold Drink",
    description: "Chilled soft drink.",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=90",
  },
];

export default function Menu({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("BEEF");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="menu-section" id="menu">
      <div className="menu-container">

        {/* HEADER */}
        <div className="menu-heading">
          <div className="menu-heading-left">
            <span className="menu-eyebrow">
              01 / THE MENU
            </span>

            <h2>
              PICK YOUR
              <span> CRAVING.</span>
            </h2>
          </div>

          <div className="menu-heading-right">
            <span className="menu-heading-number">
              10+
            </span>

            <p>
              Fresh burgers, loaded fries and everything
              you need to make the craving worth it.
            </p>
          </div>
        </div>

        {/* CATEGORY NAV */}
        <div className="menu-categories-wrapper">
          <div className="menu-categories">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "menu-category active"
                    : "menu-category"
                }
                onClick={() => setActiveCategory(category)}
              >
                <span className="category-number">
                  0{index + 1}
                </span>

                <span>{category}</span>

                <span className="category-arrow">
                  ↗
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* MENU GRID */}
        <div className="menu-grid">
          {filteredItems.map((item, index) => (
            <article
              className="menu-card"
              key={item.id}
            >

              {/* IMAGE */}
              <div className="menu-card-image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

                <div className="menu-image-overlay" />

                <span className="menu-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="menu-card-category">
                  {item.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="menu-card-content">

                <div className="menu-card-top">
                  <h3>{item.name}</h3>

                  <p>{item.description}</p>
                </div>

                <div className="menu-card-bottom">

                  <div className="menu-price-wrap">
                    <span className="price-label">
                      PRICE
                    </span>

                    <span className="menu-price">
                      Rs. {item.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="add-button"
                    onClick={() => onAddToCart?.(item)}
                  >
                    <span>ADD</span>
                    <b>+</b>
                  </button>

                </div>
              </div>

            </article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="menu-footer">
          <span>
            FRESHLY MADE • SERVED HOT • MADE FOR YOU
          </span>

          <span>
            {filteredItems.length} ITEMS
          </span>
        </div>

      </div>
    </section>
  );
}