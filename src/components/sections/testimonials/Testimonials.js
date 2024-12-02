import customer1 from "../../layout/assets/Mike.jpg";
import customer2 from "../../layout/assets/Tilly Evans.jpg";
import customer3 from "../../layout/assets/Chase Walker.jpg";
import customer4 from "../../layout/assets/Purity.jpg";
import Testimony from "./Testimony";
import "./Testimonials.css";

function Testimonials() {
  const testimonies = [
    {
      image: customer1,
      name: "Michael Thompson",
      rating: 5,
      text: "Dining at Little Lemon was a game-changer. The pasta was cooked to perfection, and the creamy sauce had just the right balance of flavor. I can’t wait to come back!",
    },
    {
      image: customer2,
      name: "Tilly Evans",
      rating: 5,
      text: "The ambiance at Little Lemon is unmatched, and the desserts are heavenly. The chocolate lava cake was rich, indulgent, and simply melted in my mouth. Highly recommended!",
    },
    {
      image: customer3,
      name: "Chase Walker",
      rating: 4,
      text: "The burger at Little Lemon was a taste revelation. The juicy, perfectly cooked patty paired with fresh toppings and a soft bun made it unforgettable. Hands down, the best I’ve had!",
    },
    {
      image: customer4,
      name: "Purity Daniels",
      rating: 5,
      text: "I loved the variety of dishes at Little Lemon. The grilled salmon was tender, flavorful, and paired beautifully with the side of roasted vegetables. It felt like a home-cooked meal with a gourmet twist!",
    },
  ];

  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonies container">
        {testimonies.map((testimony, index) => (
          <Testimony
            key={index}
            image={testimony.image}
            name={testimony.name}
            rating={testimony.rating}
            text={testimony.text}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
