import LandingPage from "./Components/Common/LandingPage";

import BuyerHeader from "./Components/SellerAndBuyer/BuyerHeader";
import SellerHeader from "./Components/SellerAndBuyer/SellerHeader";
import Faq from "./Components/FAQ/Faq";

import AboutDisplay from "./Components/AboutUs/AboutDisplay";

import ContactUs from "./Components/ContactUs/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutDisplay />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/buyers" element={<BuyerHeader />} />
          <Route path="/seller" element={<SellerHeader />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
