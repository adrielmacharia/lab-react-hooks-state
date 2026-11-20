import React from 'react'

const Cart = ({ items = [] }) => {
  return (
    <aside className="cart" aria-labelledby="cart-heading">
      <div className="cart__heading">
        <div>
          <p className="app__eyebrow">Ready when you are</p>
          <h2 id="cart-heading">Shopping Cart</h2>
        </div>
        <span className="cart__count" aria-label={`${items.length} items`}>
          {items.length}
        </span>
      </div>
      {items.length > 0 ? (
        <ul className="cart__items">
          {items.map((item, index) => (
            <li key={`${item.id}-${index}`}>{item.name} is in your cart.</li>
          ))}
        </ul>
      ) : (
        <p className="cart__empty">Your cart is empty. Add a product to get started.</p>
      )}
      <p className="cart__total">
        Cart Total: {items.length} {items.length === 1 ? 'item' : 'items'}
      </p>
    </aside>
  )
}

export default Cart
