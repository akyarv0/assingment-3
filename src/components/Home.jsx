import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Products from "./Products";
import Footer from "./Footer";

const Home = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const res = await fetch(
      "https://661248a395fdb62f24ee586e.mockapi.io/products"
    );
    const data = await res.json();
    setProductList(data);
    // console.log(productList);
    console.log(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <Products productList={productList} />
      <Footer />
    </div>
  );
};

export default Home;
