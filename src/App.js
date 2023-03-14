import './assets/App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import ShoppingCart from './components/ShoppingCart';
import Modal from './components/Modal';
import products from './products.json';

function App() {
  const [savedProducts, setSavedProducts] = useState(products || []);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [cart, setCart] = useState([]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
  }, [searchResults]);

  // Funktion för att lägga in en produkt i varukorgen.
  const addToCart = (productId) => {

    // Leta i savedProducts efter vilken produkt vi ska lägga till.
    const productToAdd = savedProducts.find((product) => product.id === productId);
    // Hitta positionen på produkt som redan finns i varukorgen.
    const existingProductIndex = cart.findIndex((item) => item.id === productId);
    // Om det redan finns en produkt, uppdatera dess quantity annars lägg till som ny produkt.
    if (existingProductIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = { ...cart[existingProductIndex], quantity: cart[existingProductIndex].quantity + 1 };
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };
  // Visa modalen för produktinformation.
  const handleShowDialog = (productId) => {
    setSelectedProduct(productId);
    setOpen(true);
    addPopularity(productId);
  }
  // Sätter ett betyg efter vilket produktId som ska ändras. Delar betygen och gör ett genomsnitt.
  const setRating = (productId, rating) => {
    console.log(rating);
    const updatedProducts = savedProducts.map((item) => {
      if (item.id === productId) {
        console.log(item.rating);
        const totalRating = item.rating * item.ratingCount;
        const newRatingCount = item.ratingCount + 1;
        const newRating = (totalRating + rating) / newRatingCount;
        return { ...item, rating: newRating.toFixed(1), ratingCount: newRatingCount };
      }
      return item;
    });
    setSavedProducts(updatedProducts);
  }
  // Lägger till popularitet på en produkt.
  const addPopularity = (productId) => {
    const updatedProducts = savedProducts.map((item) => {
      if (item.id === productId) {
        const oldPopularity = item.popularity;
        return { ...item, popularity: oldPopularity + 1 };
      }
      return item;
    });
    setSavedProducts(updatedProducts);
  }

  return (
    <div>
      <Header handleShowDialog={handleShowDialog} searchResults={(value) => setSearchResults(value)} products={savedProducts} />
      <div className="main">
        <SearchResult searchResults={searchResults} addToCart={(product) => addToCart(product)} handleShowDialog={handleShowDialog} />
        {cart.length > 0 && <ShoppingCart cart={cart} setCart={setCart} />}
        <Modal selectedProduct={selectedProduct} open={open} setOpen={setOpen} handleAddToCart={addToCart} setRating={setRating} products={savedProducts} />
      </div>
    </div>
  );
}

export default App;
