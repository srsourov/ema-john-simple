import "./Product.css"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;
    const handleAddToCart = props.handleAddToCart;
    

    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="products-data">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Rating: {ratings} Star</p>
                
            </div>
            <button onClick={() => handleAddToCart(props.product)} className="atc-button">
                Add to Cart
            <span style={{marginLeft: "10px"}}><FontAwesomeIcon icon={faShoppingCart} /></span>
            </button>
        </div>
    );
};

export default Product; 