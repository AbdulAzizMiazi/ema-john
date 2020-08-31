import React, { useState } from 'react';
import'./shope.css';
import fackData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shope = () => {
    const productsFirst10 = fackData.slice(0, 10);
    const [cart, setCart] = useState([]);
    
    const clickHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const productCount = newCart.filter(pd => pd.key === product.key);
        const count = productCount.length;
        addToDatabaseCart(product.key, count);
    } 
    return (
        <div className="shope-Container">
            <div className="product-container">
                <ul>
                    {
                        productsFirst10.map(productInfo => <Product key={productInfo.key} productDetails={productInfo} clickHandler={clickHandler} showAddToCard={true}></Product>)
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