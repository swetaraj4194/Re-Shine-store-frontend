import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";


import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage"
import Login from "./pages/Login";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Details from "./pages/Details";
import SellerDetail from "./pages/SellerDetail";
import SellerForm from "./pages/Form";
import MyProduct from "./pages/MyProduct";
import MyProfile from "./pages/Profile";
import About from "./pages/About";
import Help from "./pages/Help";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import BidWithProduct from "./pages/BidWithProduct";


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />

      <MessageBox />

      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/product" element={<Products />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="/:id" element={<Details />} />
        <Route path="buy/:id" element={<SellerDetail />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />

        <Route path="/NewItem" element={<SellerForm />} />
        <Route path="/myProducts" element={<MyProduct />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/productBid/:id" element={<BidWithProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
