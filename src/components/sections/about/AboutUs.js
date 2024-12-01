import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about container">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          At Little Lemon, we pride ourselves on providing a dining experience
          that’s both flavorful and unforgettable. Our menu features a wide
          variety of dishes, from perfectly cooked burgers to fresh salads,
          satisfying every taste and preference. We are committed to using the
          highest quality, locally sourced ingredients to ensure that every bite
          is full of flavor and made with care.
        </p>
        <p>
          In addition to our delicious meals, Little Lemon offers a range of
          services to enhance your experience. Whether you're dining in or
          picking up your meal, we guarantee fresh food served with a smile. We
          also offer catering for events, bringing our signature dishes to your
          special occasion. If you're in the mood for a cozy night in, take
          advantage of our convenient delivery service. Our inviting atmosphere,
          coupled with friendly service, makes Little Lemon the perfect spot for
          a casual meal or a gathering with friends and family. Come in, relax,
          and enjoy great food, excellent service, and a warm ambiance.
        </p>
      </div>
      <div className="image-container">
        <img
          src="./icons_assets/restaurant.jpg"
          className="image1"
          alt='restaurant'
        ></img>
        <img
          src="./icons_assets/restaurant chef B.jpg"
          className="image2"
          alt='chef'
        ></img>
      </div>
    </section>
  );
}

export default AboutUs;
