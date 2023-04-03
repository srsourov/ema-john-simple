import "./Product.css"
import React from 'react';

const Product = (props) => {
    console.log(props)
    const {img, name, seller, ratings, price} = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="products-data">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Rating: {ratings} Star</p>
                
            </div>
            <button className="atc-button">Add to Cart</button>
        </div>
    );
};

export default Product;