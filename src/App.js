import './assets/App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log(searchResults);
  },[searchResults]);

  return (
    <div>
      <Header selectProduct={() => setSelectedProduct} searchResults={() => setSearchResults} />
      <SearchResult searchResults={searchResults} />
      <ShoppingCart />
    </div>
  );
}

export default App;
