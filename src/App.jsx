import { useState } from "react";
import Navbar from "./Coding/navbar.jsx";
import Hero from "./Coding/hero.jsx";
import Service from "./Coding/service.jsx";
import About from "./Coding/about.jsx";
import Contact from "./Coding/contact.jsx";
import Footer from "./Coding/footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
