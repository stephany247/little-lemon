import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./Specials.css";

const specialsData = [
  {
    id: 1,
    image: "./icons_assets/greek salad.jpg",
    title: "Greek Salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 2,
    image: "./icons_assets/bruchetta.svg",
    title: "Bruschetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    image: "./icons_assets/lemon dessert.jpg",
    title: "Lemon Dessert",
    price: "5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Specials = () => {
  return (
    <section id="specials" className="container">
      <div className="specials">
        <h1>Specials</h1>
        <Link to="/order" className="button-primary">Online Menu</Link>
      </div>
      <div className="cards">
        {specialsData.map((special) => (
          <Card
            key={special.id}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Specials;
