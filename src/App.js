import './assets/App.css';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <Header />
      <SearchResult />
      <ShoppingCart />
    </div>
  );
}

export default App;
