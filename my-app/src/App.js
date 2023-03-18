import React from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList/ProductList';

function App() {
  return (
    <div>
      {/* Rendering Navbar */}
      <Navbar />
      
      {/* Adding heading to the page */}
      <h1>E-commerce Webpage</h1>

      {/* Rendering ProductList */}
      <ProductList />
    </div>
  );
}

export default App;

