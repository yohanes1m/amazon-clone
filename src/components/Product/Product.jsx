import React, { useEffect, useState } from "react";
import classes from "./product.module.css";
import axios from "axios";
import ProductCard from "./ProductCard";

function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className={classes.product_container}>
      {product.map((singleProduct, index) => {
        return <ProductCard product={singleProduct} key={index} />;
      })}
    </section>
  );
}

export default Product;
