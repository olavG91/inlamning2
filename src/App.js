import './assets/App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
  }, [searchResults]);

  const addToCart = (product) => {
    // Kolla om produkten redan finns i varukorgen
    const existingProductIndex = cart.findIndex((item) => item.title === product.title);

    if (existingProductIndex >= 0) {
      // Produkten finns redan i varukorgen - öka antalet
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = { ...cart[existingProductIndex], quantity: cart[existingProductIndex].quantity + 1 };
      setCart(updatedCart);
    } else {
      // Lägg till den nya produkten i varukorgen
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Header selectProduct={(value) => setSelectedProduct(value)} searchResults={(value) => setSearchResults(value)} />
      <div className="main">
        <SearchResult searchResults={searchResults} addToCart={(product) => addToCart(product)} />
        <ShoppingCart cart={cart} />
      </div>
    </div>
  );
}

export default App;
