import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [productsList, setProductsList] = useState([]);

  const getProducts = async () => {
    const response = await fetch(process.env.BASE_URL);
    const data = await response.json();
    setProductsList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <div>Home</div>;
};

export default Home;
