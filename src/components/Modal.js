import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from './Rating';

function Modal({ selectedProduct, open, setOpen, handleAddToCart, setRating, products }) {

    const [product, setProduct] = useState(null);
    // Letar efter vilken produkt som det gäller från productId.
    useEffect(() => {
        const foundProduct = products.find((product) => product.id === selectedProduct);
        setProduct(foundProduct);
    }, [selectedProduct, products])

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>{product?.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <div className="productDisplay">
                        <div>
                            <img src={product?.image} alt={product?.title} />
                        </div>
                        <div>
                            <div>
                                <span>Beskrivning: {product?.description}</span>
                            </div>
                            <div>
                                <span>Pris: {product?.price} kr</span>
                            </div>
                            <div>
                                <span>Rating: <Rating rating={product?.rating} productId={selectedProduct} setRating={setRating} products={products} /></span>
                            </div>
                        </div>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <IconButton onClick={() => handleAddToCart(selectedProduct)}>
                    <AddShoppingCartIcon />
                </IconButton>
                <Button onClick={() => setOpen(false)}>Stäng</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Modal;
