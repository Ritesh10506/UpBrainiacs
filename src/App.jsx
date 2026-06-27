import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import ScrollToTop from "./components/ScrollToTop";   // NEW — add this import

function App() {
  return (
    <>
      <ScrollToTop />   {/* NEW — add this line */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mbbs-in/:country" element={<CountryPage />} />
      </Routes>
    </>
  );
}

export default App;