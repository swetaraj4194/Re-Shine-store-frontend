import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import Hero from "./components/Hero"
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Products from "./pages/Products";


import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <MessageBox />
      
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Products />} />
        {/* <Route path="/myspace" element={<MySpace />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/spaces/:id" element={<Details />} />
        <Route path="myspace/spaces/:id/stories" element={<Form />} /> */}
      </Routes>
    </div>
  );
}

export default App;
