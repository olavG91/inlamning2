import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function SearchResult({ searchResults, addToCart, handleShowDialog }) {
  // Lägger till en produkt till varukorgen.
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="searchResults">
      {searchResults.map((result) => (
        <div className="searchResult">
          <div className="searchRow">
            <h3>{result.title}</h3>
            <span>{result.price} kr</span>
          </div>
          <div className="searchRow">
            <Button sx={{ p: 0 }} onClick={() => handleShowDialog(result.id)}>Läs mer</Button>
            <IconButton onClick={() => handleAddToCart(result.id)}>
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
