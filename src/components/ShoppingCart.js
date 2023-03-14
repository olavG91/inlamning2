import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function ShoppingCart({ cart, setCart }) {

  const [total, setTotal] = useState(0);
  // Tar bort en produkt från varukorgen.
  const handleRemove = (removeIndex) => {
    const updatedCart = cart.filter((item, index) => index !== removeIndex);
    setCart(updatedCart);
  }

  return (
    <div className="shoppingCart">
      <h3>Shopping Cart</h3>
      <div>
        {cart.map((item, index) => {
          return <div className="cartItem">
            <div>
              <img src={item.image} alt=""></img>
            </div>
            <div class="productItem">
              <div className="productHeader">
                <h3>{item.title}</h3>
                <DeleteIcon className="cartItemDeleteIcon" onClick={() => handleRemove(index)} />
              </div>
              <div className="productDetails">
                <div className="productSpecification">
                  <div>Antal: {item.quantity}</div>
                  <span><strong>Total: </strong>{item.quantity * item.price}</span>
                </div>
                <div>
                  <span>{item.price} kr</span>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
      <div class="cartTotal">
        <h3>Total: {cart.reduce((start, item) => start + item.price * item.quantity, 0)}</h3>
      </div>
    </div>
  );
}

export default ShoppingCart;