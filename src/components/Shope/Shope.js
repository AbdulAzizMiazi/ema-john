import React, { useState } from 'react';
import'./shope.css';
import fackData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shope = () => {
    const productsFirst10 = fackData.slice(0, 10);
    const [cart, setCart] = useState([]);
    const clickHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    } 
    return (
        <div className="shope-Container">
            <div className="product-container">
                <ul>
                    {
                        productsFirst10.map(productInfo => <Product productDetails={productInfo} clickHandler={clickHandler}></Product>)
                    }
                </ul>
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shope;