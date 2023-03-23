import React from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList/ProductList';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      {/* Rendering Navbar */}
      <Navbar />
      
      {/* Adding heading to the page */}
      <h1>Caffeine Craze</h1>

      {/* Rendering ProductList */}
      <ProductList />
      
      {/* Rendering Footer */}
      <Footer />
    </>
  );
}

export default App;


