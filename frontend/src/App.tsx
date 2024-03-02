import React from "react";
import HomepageVOnePage from "pages/HomepageVOne";
import ProductListPage from "pages/ProductList";
import CartPage from "pages/Cart";
import CheckoutPage from "pages/Checkout";
import CategorieswithSidebar from "pages/CategorieswithSidebar";
import { Route, Routes } from "react-router-dom";
import ProductDetailsPage from "pages/ProductDetails";
import axios from "axios";
import RegistrationPage from "pages/Registration";
import SigninPage from "pages/Signin";
import NewArrivals from "pages/NewArrivals";
import Features from "pages/Features/Index";
import { UserContextProvider } from "contexts/UserContext";

axios.defaults.baseURL="http://localhost:5000/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route>
          <Route path="/" element={<HomepageVOnePage />} />
          <Route path="/collections" element={<ProductListPage />} />
          <Route path="/productdetails" element={<ProductDetailsPage />} />
          <Route path="/productlist" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/categories" element={<CategorieswithSidebar />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/features" element={<Features />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
