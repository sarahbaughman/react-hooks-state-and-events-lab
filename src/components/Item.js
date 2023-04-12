import React, {useState} from "react";

function Item({ name, category }) {

const [inCart, setInCart] = useState(false)

function addToCart(){
   setInCart(!inCart)
 }

const itemClass = inCart ? "in-cart" : ""

const itemButtonText = inCart ? "Remove From Cart" : "Add To Cart"

const itemButtonColor = inCart ? "remove"  : "add"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className={itemButtonColor}>{itemButtonText}</button>
    </li>
  );
}

export default Item;
