import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import About from "./pages/About";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mbbs-in/:country" element={<CountryPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;