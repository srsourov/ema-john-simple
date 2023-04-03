import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step 1: get ID
        for (const id in storedCart){
            // step 2: get the product using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct){
                // step 3:get the quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step 4: add the added product to the saved cart
                savedCart.push(addedProduct)
            } 
            }
        setCart(savedCart);
    },[products])



    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
               
                {
                    products.map(product => <Product 
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;