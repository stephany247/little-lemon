function Specials() {
  return (
    <>
      <div className="specials">
        <h3>Specials</h3>
        <button>Online Menu</button>
      </div>
      <section id="specials">
        <div className="card">
          <img src="./icons_assets/greek salad.jpg"></img>
          <div className="text">
            <div className="price">
              <h4>Greek salad</h4>
              <span>$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <button>
              Order a delivery
              <img src="./icons_assets/basket .svg"></img>
            </button>
          </div>
        </div>
        <div className="card">
          <img src="./icons_assets/bruchetta.svg"></img>
          <div className="text">
            <div className="price">
              <h4>Bruchetta</h4>
              <span>$5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <button>
              Order a delivery <img src="./icons_assets/basket .svg"></img>{" "}
            </button>
          </div>
        </div>
        <div className="card">
          <img src="./icons_assets/lemon dessert.jpg"></img>
          <div className="text">
            <div className="price">
              <h4>Lemon Dessert</h4>
              <span>$5.00</span>
            </div>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <button>
              Order a delivery <img src="./icons_assets/basket .svg"></img>{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Specials;
