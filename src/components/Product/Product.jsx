import React, { useEffect, useState } from "react";
import "./product.module.css";
import axios from "axios";
function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res);
    setProduct(res.data)
    }).catch((err)=>{
        console.log(err);
        
    });
  }, []);
  return <></>;
}

export default Product;
