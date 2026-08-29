"use client";

import "./Menu.css";

/* =========================================================
   POPULAR DEALS
========================================================= */

const popularDeals = [
  {
    id: 101,
    name: "Town Special",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 102,
    name: "Smash Town Double",
    price: 998,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 103,
    name: "Hangry",
    price: 812,
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 104,
    name: "Animal Fries",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 105,
    name: "Smoke Town",
    price: 811,
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 106,
    name: "Blazin Hot",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=90",
  },
];


/* =========================================================
   MENU DATA
========================================================= */

const menuSections = [
  {
    id: "beef",
    number: "01",
    navName: "BEEF",
    title: "BEEF BURGERS",
    banner: "/menu/beef.png",

    items: [
      {
        id: 1,
        name: "Town Special",
        description:
          "Double smashed beef patty, cheese & signature sauce.",
        price: 899,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 2,
        name: "Smash Town Double",
        description:
          "Two smashed patties with melted cheese and house sauce.",
        price: 998,
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 3,
        name: "Smash Town Triple",
        description:
          "Three juicy smashed patties stacked with cheese.",
        price: 1249,
        image:
          "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 4,
        name: "Smoke Town",
        description:
          "Smoky beef patty, cheese and signature BBQ sauce.",
        price: 811,
        image:
          "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 5,
        name: "Classic Beef",
        description:
          "Classic beef patty with fresh lettuce and house sauce.",
        price: 749,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 6,
        name: "Cheese Melt",
        description:
          "Juicy beef patty topped with melted cheese.",
        price: 799,
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 7,
        name: "BBQ Beef",
        description:
          "Smashed beef, crispy onions and smoky BBQ sauce.",
        price: 849,
        image:
          "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 8,
        name: "Double Cheese",
        description:
          "Double beef patties with double melted cheese.",
        price: 949,
        image:
          "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 9,
        name: "Spicy Beef",
        description:
          "Beef patty with spicy sauce and jalapeños.",
        price: 849,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 10,
        name: "Town Ultimate",
        description:
          "Our ultimate beef burger packed with bold flavors.",
        price: 1099,
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },

  {
    id: "chicken",
    number: "02",
    navName: "CHICKEN",
    title: "CHICKEN BURGERS",
    banner: "/menu/chicken.png",

    items: [
      {
        id: 11,
        name: "Hangry",
        description:
          "Crispy chicken fillet with cheese and special sauce.",
        price: 812,
        image:
          "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 12,
        name: "Blazin Hot",
        description:
          "Crispy chicken with fiery hot signature sauce.",
        price: 850,
        image:
          "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 13,
        name: "Crispy Town",
        description:
          "Golden crispy chicken with creamy house sauce.",
        price: 799,
        image:
          "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 14,
        name: "Chicken Cheese",
        description:
          "Crispy chicken fillet topped with melted cheese.",
        price: 849,
        image:
          "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 15,
        name: "Spicy Chicken",
        description:
          "Crispy chicken with spicy sauce and jalapeños.",
        price: 849,
        image:
          "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 16,
        name: "BBQ Chicken",
        description:
          "Crispy chicken with smoky BBQ glaze.",
        price: 849,
        image:
          "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 17,
        name: "Chicken Double",
        description:
          "Double crispy chicken with cheese and house sauce.",
        price: 999,
        image:
          "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 18,
        name: "Hot Crunch",
        description:
          "Extra crispy chicken with our hot signature sauce.",
        price: 899,
        image:
          "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 19,
        name: "Creamy Chicken",
        description:
          "Crispy chicken with rich creamy signature sauce.",
        price: 849,
        image:
          "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 20,
        name: "Chicken Ultimate",
        description:
          "The ultimate crispy chicken burger experience.",
        price: 999,
        image:
          "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },

  {
    id: "fries",
    number: "03",
    navName: "FRIES",
    title: "LOADED FRIES",
    banner: "/menu/fries.png",

    items: [
      {
        id: 21,
        name: "Plain Fries",
        description:
          "Golden crispy fries with light seasoning.",
        price: 350,
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 22,
        name: "Animal Fries",
        description:
          "Loaded fries with cheese and signature toppings.",
        price: 850,
        image:
          "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 23,
        name: "Cheese Fries",
        description:
          "Crispy fries covered with melted cheese.",
        price: 550,
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 24,
        name: "Loaded Fries",
        description:
          "Fries loaded with sauces, cheese and toppings.",
        price: 699,
        image:
          "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 25,
        name: "BBQ Fries",
        description:
          "Crispy fries with smoky BBQ sauce.",
        price: 599,
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 26,
        name: "Spicy Fries",
        description:
          "Golden fries with spicy seasoning.",
        price: 499,
        image:
          "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 27,
        name: "Chicken Fries",
        description:
          "Loaded fries topped with crispy chicken.",
        price: 749,
        image:
          "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 28,
        name: "Town Fries",
        description:
          "Our signature fries with special Town sauce.",
        price: 599,
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 29,
        name: "Cheesy Bites Fries",
        description:
          "Crispy fries with cheese bites and sauce.",
        price: 799,
        image:
          "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 30,
        name: "Ultimate Fries",
        description:
          "The ultimate loaded fries packed with flavor.",
        price: 899,
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },

  {
    id: "sides",
    number: "04",
    navName: "SIDES",
    title: "SIDES & BITES",
    banner: "/menu/side.png",

    items: [
      {
        id: 31,
        name: "Chicken Bites",
        description:
          "Crispy bite-sized chicken pieces.",
        price: 599,
        image:
          "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 32,
        name: "Chicken Nuggets",
        description:
          "Golden crispy chicken nuggets.",
        price: 499,
        image:
          "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 33,
        name: "Onion Rings",
        description:
          "Crispy golden onion rings.",
        price: 450,
        image:
          "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 34,
        name: "Mozzarella Sticks",
        description:
          "Crispy mozzarella sticks with dipping sauce.",
        price: 650,
        image:
          "https://images.unsplash.com/photo-1548340748-7d2d0b7f0d2f?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 35,
        name: "Chicken Strips",
        description:
          "Tender crispy chicken strips.",
        price: 699,
        image:
          "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 36,
        name: "Cheese Bites",
        description:
          "Crispy cheesy bites with special dip.",
        price: 599,
        image:
          "https://images.unsplash.com/photo-1548340748-7d2d0b7f0d2f?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 37,
        name: "Garlic Bread",
        description:
          "Fresh garlic bread with herbs.",
        price: 399,
        image:
          "https://images.unsplash.com/photo-1573140401552-3fab0b24427f?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 38,
        name: "Cheesy Bread",
        description:
          "Garlic bread loaded with melted cheese.",
        price: 499,
        image:
          "https://images.unsplash.com/photo-1573140401552-3fab0b24427f?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 39,
        name: "Jalapeño Bites",
        description:
          "Crispy spicy jalapeño and cheese bites.",
        price: 599,
        image:
          "https://images.unsplash.com/photo-1548340748-7d2d0b7f0d2f?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 40,
        name: "Town Box",
        description:
          "A mixed box of our favorite crispy sides.",
        price: 899,
        image:
          "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },

  {
    id: "drinks",
    number: "05",
    navName: "DRINKS",
    title: "DRINKS & SHAKES",
    banner: "/menu/drinks.png",

    items: [
      {
        id: 41,
        name: "Coca Cola",
        description:
          "Ice-cold classic Coca Cola.",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 42,
        name: "Pepsi",
        description:
          "Chilled Pepsi served ice cold.",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 43,
        name: "7UP",
        description:
          "Refreshing lemon-lime soft drink.",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 44,
        name: "Mirinda",
        description:
          "Cold and refreshing orange drink.",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 45,
        name: "Mineral Water",
        description:
          "Chilled bottled mineral water.",
        price: 100,
        image:
          "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 46,
        name: "Lemonade",
        description:
          "Freshly prepared chilled lemonade.",
        price: 250,
        image:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 47,
        name: "Mint Margarita",
        description:
          "Fresh mint blended with chilled lemon.",
        price: 350,
        image:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 48,
        name: "Mango Shake",
        description:
          "Creamy chilled mango shake.",
        price: 399,
        image:
          "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 49,
        name: "Chocolate Shake",
        description:
          "Rich creamy chocolate shake.",
        price: 399,
        image:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=90",
      },
      {
        id: 50,
        name: "Strawberry Shake",
        description:
          "Smooth and creamy strawberry shake.",
        price: 399,
        image:
          "https://images.unsplash.com/photo-1553787499-6f913386027a?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },
];


/* =========================================================
   MENU COMPONENT
========================================================= */

export default function Menu({ onAddToCart }) {
  return (
    <section className="menu-section" id="menu">

      <div className="menu-container">

        {/* =================================================
            MENU HEADER
        ================================================= */}

        <header className="menu-heading">

          <div>
            <span className="menu-eyebrow">
              01 / THE MENU
            </span>

            <h2>
              PICK YOUR <span>CRAVING.</span>
            </h2>
          </div>

          <p>
            Fresh burgers, loaded fries,
            crispy sides and refreshing drinks.
          </p>

        </header>


        {/* =================================================
            MENU NAVBAR
        ================================================= */}

        <nav className="menu-nav">

          <a
            href="#popular"
            className="active"
          >
            DEALS
          </a>

          {menuSections.map((section) => (
            <a
              href={`#${section.id}`}
              key={section.id}
            >
              {section.navName}
            </a>
          ))}

        </nav>


        {/* =================================================
            POPULAR DEALS
        ================================================= */}

        <section
          className="popular-deals"
          id="popular"
        >

          <div className="section-heading">

            <div>

              <span>
                00 / FEATURED
              </span>

              <h3>
                POPULAR <strong>DEALS.</strong>
              </h3>

            </div>

            <p>
              THE ONES EVERYONE
              <br />
              COMES BACK FOR.
            </p>

          </div>


          <div className="popular-marquee">

            <div className="popular-track">

              {[...popularDeals, ...popularDeals].map(
                (item, index) => (

                  <article
                    className="popular-card"
                    key={`${item.id}-${index}`}
                  >

                    <div className="popular-card-image">

                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                      />

                      <span>
                        POPULAR
                      </span>

                    </div>


                    <div className="popular-card-content">

                      <div>

                        <h4>
                          {item.name}
                        </h4>

                        <strong>
                          Rs. {item.price.toLocaleString()}
                        </strong>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          onAddToCart?.(item)
                        }
                      >
                        +
                      </button>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        {/* =================================================
            CATEGORY SECTIONS
        ================================================= */}

        <div className="menu-sections">

          {menuSections.map((section) => (

            <section
              className="menu-category-section"
              id={section.id}
              key={section.id}
            >

              {/* CATEGORY TITLE */}

              <div className="category-heading">

                <span>
                  {section.number}
                </span>

                <h3>
                  {section.title}
                </h3>

              </div>


              {/* =================================================
                  CATEGORY BANNER
              ================================================= */}

              <div className="category-banner">

                <img
                  src={section.banner}
                  alt={`${section.title} banner`}
                  loading="lazy"
                />

                <div className="category-banner-overlay" />

                <div className="category-banner-text">

                  <span>
                    {section.number}
                  </span>

                  <h4>
                    {section.title}
                  </h4>

                </div>

              </div>


              {/* =================================================
                  MENU ITEMS
              ================================================= */}

              <div className="menu-grid">

                {section.items.map((item) => (

                  <article
                    className="menu-card"
                    key={item.id}
                  >

                    <div className="menu-card-image">

                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                      />

                    </div>


                    <div className="menu-card-content">

                      <span className="menu-card-category">
                        {section.navName}
                      </span>

                      <h4>
                        {item.name}
                      </h4>

                      <p>
                        {item.description}
                      </p>


                      <div className="menu-card-bottom">

                        <strong>
                          Rs. {item.price.toLocaleString()}
                        </strong>

                        <button
                          type="button"
                          onClick={() =>
                            onAddToCart?.(item)
                          }
                        >
                          ADD +
                        </button>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            </section>

          ))}

        </div>

      </div>

    </section>
  );
}