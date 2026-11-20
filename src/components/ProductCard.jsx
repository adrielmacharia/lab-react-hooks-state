import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <div className={styles.productIcon} aria-hidden="true">
        {product.category === 'Fruits' ? '🍎' : '🥛'}
      </div>
      <div className={styles.details}>
        <span className={styles.category}>{product.category}</span>
        <h3>{product.name}</h3>
        <p className={styles.status}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
      <div className={styles.purchase}>
        <p className={styles.price}>{product.price}</p>
        <button
          className={styles.addButton}
          data-testid={'product-' + product.id}
          onClick={() => onAddToCart?.(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
