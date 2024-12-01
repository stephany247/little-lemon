import Hero from "../sections/hero/Hero";
import AboutUs from "../sections/about/AboutUs";
import Specials from "../sections/specials/Specials";
import Testimonials from "../sections/testimonials/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <AboutUs />
    </>
  );
}
export default Home;