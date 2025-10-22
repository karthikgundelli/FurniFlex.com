import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './style.css'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useContext(CartContext)

  if (cart.length === 0)
    return <h3 className="empty-cart">Your cart is empty 🛒</h3>

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <div className="quantity">
              <button onClick={() => updateQuantity(item.id, 'dec')}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 'inc')}>+</button>
            </div>
            <button className="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Total: ₹{totalPrice}</h3>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart
