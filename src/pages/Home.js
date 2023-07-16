import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  // console.log(data.data)
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <>
      <Banner />
      <Products products={products} />
    </>
  );
};

export default Home;
