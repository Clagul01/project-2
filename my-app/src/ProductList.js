import React, { useState } from "react";

const productListData = [
  {
    name: "Product 1",
    price: 9.99,
  },
  {
    name: "Product 2",
    price: 12.99,
  },
  {
    name: "Product 3",
    price: 15.99,
  },
  {
    name: "Product 4",
    price: 18.99,
  },
  {
    name: "Product 5",
    price: 21.99,
  },
  {
    name: "Product 6",
    price: 24.99,
  },
];

function ProductList() {
  const [basket, setBasket] = useState([]);

  function handleAddToBasket(product) {
    setBasket((prev) => [...prev, product]);
  }

  return (
    <div>
      <ul>
        {productListData.map((product, index) => (
          <li key={index}>
            <p>{product.name}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToBasket(product)}>Add to basket</button>
          </li>
        ))}
      </ul>
      <h2>Basket:</h2>
      <ul>
        {basket.map((product, index) => (
          <li key={index}>
            <p>{product.name}</p>
            <p>${product.price.toFixed(2)}</p>
          </li>
        ))}
        {basket.length === 0 && <p>Your basket is empty.</p>}
      </ul>
    </div>
  );
}

export default ProductList;
