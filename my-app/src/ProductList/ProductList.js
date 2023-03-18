import React, { useState } from "react";
import "./ProductList.css";

// import more images as needed

const productListData = [
  {
    name: "Product 1",
    price: 9.99,
    imgSrc: "path/to/image1.jpg" // add image source here
  },
  {
    name: "Product 2",
    price: 12.99,
    imgSrc: "path/to/image2.jpg" // add image source here
  },
  {
    name: "Product 1",
    price: 9.99,
    imgSrc: "path/to/image1.jpg" // add image source here
  },
  {
    name: "Product 2",
    price: 12.99,
    imgSrc: "path/to/image2.jpg" // add image source here
  },
  // add more products with their respective image source here
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
            <p className="productName">{product.name}</p>
            <img src={product.imgSrc} alt={product.name} /> {/* add image here */}
            <p className="productPrice">${product.price.toFixed(2)}</p>
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

