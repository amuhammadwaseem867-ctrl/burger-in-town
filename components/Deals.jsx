import "./Deals.css";

const deals = [
  {
    number: "01",
    title: "TOWN DOUBLE",
    description: "Double smashed beef burger with crispy fries.",
    price: "1,099",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "02",
    title: "CHICKEN COMBO",
    description: "Crispy chicken burger, fries & chilled drink.",
    price: "999",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "03",
    title: "TOWN FAMILY",
    description: "Two burgers, loaded fries & two chilled drinks.",
    price: "1,999",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=90",
  },
];

export default function Deals() {
  return (
    <section className="deals-section" id="deals">
      <div className="deals-container">

        {/* HEADER */}
        <div className="deals-heading">

          <div className="deals-heading-left">
            <span className="deals-eyebrow">
              02 / SPECIAL OFFERS
            </span>

            <h2>
              TOWN
              <span> DEALS.</span>
            </h2>
          </div>

          <div className="deals-heading-right">
            <span className="deals-heading-number">
              SAVE MORE
            </span>

            <p>
              Big cravings deserve better deals.
              Grab a combo and make it a proper meal.
            </p>
          </div>

        </div>


        {/* DEALS */}
        <div className="deals-grid">

          {deals.map((deal) => (
            <article
              className="deal-card"
              key={deal.number}
            >

              {/* IMAGE */}
              <div className="deal-image">

                <img
                  src={deal.image}
                  alt={deal.title}
                  loading="lazy"
                />

                <div className="deal-image-overlay" />

                <span className="deal-number">
                  {deal.number}
                </span>

                <span className="deal-badge">
                  TOWN DEAL
                </span>

              </div>


              {/* CONTENT */}
              <div className="deal-content">

                <span className="deal-small-label">
                  LIMITED COMBO
                </span>

                <h3>
                  {deal.title}
                </h3>

                <p>
                  {deal.description}
                </p>

              </div>


              {/* BOTTOM */}
              <div className="deal-bottom">

                <div className="deal-price-wrap">

                  <span>
                    STARTING FROM
                  </span>

                  <strong>
                    Rs. {deal.price}
                  </strong>

                </div>

                <a
                  href="#menu"
                  className="deal-order"
                >
                  <span>ORDER</span>

                  <b>
                    ↗
                  </b>
                </a>

              </div>

            </article>
          ))}

        </div>


        {/* FOOTER */}
        <div className="deals-footer">

          <span>
            FRESH DEALS • BIGGER CRAVINGS • BETTER VALUE
          </span>

          <a href="#menu">
            VIEW FULL MENU ↗
          </a>

        </div>

      </div>
    </section>
  );
}