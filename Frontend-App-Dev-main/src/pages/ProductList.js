import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon from react-icons
import './ProductList.css';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={`/${product.image}`} name="image" alt={product.name} />
          <h3 name="name">{product.name}</h3>
          <p name="price">${product.price.toFixed(2)}</p>
          <div className="product-actions">
            <Link to={`/product/${product.id}`}>
              <button>Buy Now</button>
            </Link>
            <button onClick={() => onAddToCart(product)}>
            
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
