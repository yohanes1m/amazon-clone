import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../Currencyformat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
function ProductCard({ product, flex,renderDesc}) {
  const { image, title, id, rating, price ,description} = product;
  {
    console.log(title);
  }

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_fixed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price  */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
