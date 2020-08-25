import React from 'react';
import './cart.css';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;
    console.log(props.cart);
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const newPrice = cart[i].price;
        total = newPrice + total;
    }

    let shipping = 0;
    if(total > 100){
        shipping = 0;
    }
    else if(total > 50){
        shipping = 10.22;
    }
    else if(total > 30){
        shipping = 15.99;
    }
    else if(total > 0){
        shipping = 19.99;
    }
    let beforeTex = total + shipping;
    let tex = total / 10;
    let afterTex = beforeTex + tex;
    return (
        <div className="cart-summary">
            <h3>Order Summary</h3>
            <p className="ordered">Items ordered: {cart.length}</p>
            <p><small>Items: ${total.toFixed(2)}</small></p>
            <p><small>Shipping and Hendling: ${shipping.toFixed(2)}</small></p>
            <p><small>Before Tex : ${beforeTex.toFixed(2)}</small></p>
            <p><small>Estimated Tax : ${tex.toFixed(2)}</small></p>
            <h4 className='orderedTotal'>Order Total: ${afterTex.toFixed(2)}</h4>

        </div>
    );
};

export default Cart;