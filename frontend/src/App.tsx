import React from "react";
import HomepageVOnePage from "pages/HomepageVOne";
import ProductListPage from "pages/ProductList";
import CartPage from "pages/Cart";
import CheckoutPage from "pages/Checkout";
import CategorieswithSidebar from "pages/CategorieswithSidebar";
import { Route, Routes } from "react-router-dom";
import ProductDetailsPage from "pages/ProductDetails";
import NewArrivals from "pages/NewArrivals";
import Features from "pages/Features/Index";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomepageVOnePage />} />
        <Route path="/collections" element={<ProductListPage />} />
        <Route path="/productdetails" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/categories" element={<CategorieswithSidebar />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/features" element={<Features />} />
      </Route>
    </Routes>
  );
}

export default App;
