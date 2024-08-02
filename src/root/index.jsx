import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Like from "../pages/Like";
import InfoItem from "../components/infoItem";

const Root = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/like" element={<Like />} />
        <Route path="/cards/:id" element={<InfoItem />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Root;
