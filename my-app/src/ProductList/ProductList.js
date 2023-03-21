import React, { useState } from "react";
import espressoImg from './images/espresso.jpg';
import machiattoImg from './images/machiatto.jpg';
import latteImg from './images/latte.jpg';
import cappucinoImg from './images/cappucino.jpg';
import "./ProductList.css";

const productListData = [
  {
    name: "espresso",
    price: 2.99,
    image: espressoImg
  },
  {
    name: "machiatto",
    price: 2.99,
    image: machiattoImg
  },
  {
    name: "latte",
    price: 1.99,
    image: latteImg
  },
  {
    name: "cappucino",
    price: 2.99,
    image: cappucinoImg
  },
];



function ProductList() {
  const [basket, setBasket] = useState([]);

  function handleAddToBasket(product) {
    setBasket((prev) => [...prev, product]);
  }

  const calculateTotal = () => {
    return basket.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <div className="product-list-container">
      <div className="product-list">
        {productListData.map((product, index) => (
          <div className="product-card" key={index}>
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <p className="product-name">{product.name}</p>
            <p className="product-price">£{product.price.toFixed(2)}</p>
            <button className="add-to-basket" onClick={() => handleAddToBasket(product)}>Add to basket</button>
          </div>
        </div>
        
        ))}
      </div>
      <div className="basket-container">
        <h2>Basket:</h2>
        <ul className="basket">
          {basket.map((product, index) => (
            <li key={index}>
              <p>{product.name}</p>
              <p>£{product.price.toFixed(2)}</p>
            </li>
          ))}
          {basket.length === 0 && <p>Your basket is empty.</p>}
          {basket.length > 0 && (
            <>
              <li>
                <p>Total:</p>
                <p>£{calculateTotal()}</p>
              </li>
              <button>Checkout</button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
