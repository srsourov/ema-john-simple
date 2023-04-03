import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        if (product.quantity === 0){
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total * 0.7;
    const gradTotal = total + totalShipping + tax;
    // console.log(cart)
    return (
        <div className='cart'>
             <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${gradTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;