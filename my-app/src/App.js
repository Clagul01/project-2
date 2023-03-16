import React from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import './Navbar.css';
import './ProductList.css';

function App() {
  return (
    <div>
      <Navbar />
      <h1>E-commerce Webpage</h1>
      <ProductList />
    </div>
  );
}

export default App;
