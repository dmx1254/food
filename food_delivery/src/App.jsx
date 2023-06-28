import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SideDrawer from "./components/SideDrawer";
import BackDrop from "./components/backDrop";
import AddCartDrop from "./components/AddCartDrop";
import AddToCartDrawer from "./components/AddToCartDrawer";
import Shop from "./pages/Shop";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import CheckoutPage from "./pages/CheckoutPage";
import { useLocation } from "react-router-dom";
import TermsAndConditions from "./pages/TermsAndConditions";
import Faqs from "./pages/Faqs";
import Policy from "./pages/Policy";

function App() {
  const location = useLocation();
  const [sideToggle, setSideToggle] = useState(false);
  const [productToggle, setProductToggle] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});

  const getProduct = (item) => {
    setSingleProduct(item);
  };

  return (
    <div>
      <div>
        <Navbar click={() => setSideToggle(!sideToggle)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
        <AddToCartDrawer
          productToggle={productToggle}
          addCartClick={() => setProductToggle(!productToggle)}
          singleProduct={singleProduct}
        />
        <AddCartDrop
          productToggle={productToggle}
          addCartClick={() => setProductToggle(!productToggle)}
        />
        {location.pathname === "/shop" ||
          location.pathname === "/checkout" ||
          location.pathname === "/contact" ||
          location.pathname === "/about" ||
          location.pathname === "/termsandconditions" ||
          location.pathname === "/faqs" ||
          location.pathname === "/policy" || <Hero />}
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addCartClick={() => setProductToggle(!productToggle)}
                productToggle={productToggle}
                setProductToggle={setProductToggle}
                getProduct={getProduct}
              />
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
