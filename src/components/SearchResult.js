import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function SearchResult({ searchResults, addToCart }) {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleShowDialog = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
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
            <Button sx={{ p: 0 }} onClick={() => handleShowDialog(result)}>Läs mer</Button>
            <IconButton onClick={() => handleAddToCart(result)}>
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      ))}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedProduct?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedProduct?.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={() => handleAddToCart(selectedProduct)}>
            <AddShoppingCartIcon />
          </IconButton>
          <Button onClick={handleClose}>Stäng</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SearchResult;
