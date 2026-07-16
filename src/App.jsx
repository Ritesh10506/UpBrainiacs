import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
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
      </Routes>
    </>
  );
}

export default App;