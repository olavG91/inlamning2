import { useState } from 'react';

function ShoppingCart({ cart }) {

  return (
    <div className="shoppingCart">
      <h3>Shopping Cart</h3>
      <div>
        {cart.map((item) => {
          return <div className="cartItem">
            <div>
              <img src={item.image} alt=""></img>
            </div>
            <div>
              <h3>{item.title}</h3>
              <div className="productDetails">
                <span>Antal: {item.quantity}</span>
                <span>Total: {item.quantity * item.price}</span>
                <span>{item.price} kr</span>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default ShoppingCart;