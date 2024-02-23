import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Loader from "./components/Loader";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeout);
    }, 5000);
  }, []);

  return (
    <main className="relative">
      <Header />
      <Home />
      <Portfolio />
      <Testimonials />
      <Footer />
      {loading && <Loader />}
    </main>
  );
}

export default App;
