import React, { useState, useEffect } from "react";
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
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    // Calculate the height of the footer
    const footerHeight = document.getElementById("footer").offsetHeight;

    // Set the container height to be the window height minus the footer height
    setContainerHeight(window.innerHeight - footerHeight);
  }, []);

  function handleAddToBasket(product) {
    setBasket((prev) => [...prev, product]);
  }

  const calculateTotal = () => {
    return basket.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <>
      <div className="product-list-container" style={{ height: containerHeight }}>
        <div className="product-list">
          {productListData.map((product, index) => (
            <div className="product-card rounded-lg overflow-hidden shadow-lg mb-6" key={index}>
              <img src={product.image} alt={product.name} className="w-full" />
              <div className="p-4">
                <p className="font-bold text-xl mb-2">{product.name}</p>
                <p className="text-gray-700 text-base font-medium mb-4">£{product.price.toFixed(2)}</p>
                <button
                   className="add-to-basket-button block w-full"
                 onClick={() => handleAddToBasket(product)}>
                 Add to basket
                </button>

              </div>
            </div>
          ))}
        </div>
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style={{ marginTop: "1rem" }}>Checkout</button>
            </>
          )}
        </ul>
      </div>
      <footer />
    </>
  );
}

export default ProductList;
