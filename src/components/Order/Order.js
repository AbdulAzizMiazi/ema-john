import React from 'react';
import {useEffect} from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { useState } from 'react';
import fakeData from '../../fakeData';
import ShowProducts from './ShowProducts';

const Order = () => {

    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const productsInCart = getDatabaseCart();
        const productKeys = Object.keys(productsInCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd=> pd.key === key);
            product.quantity = productsInCart[key];
            return product;
        });
        setCart(cartProducts);
    },[])
    return (
        <div>
            <h1>Cart Items: {cart.length}</h1>
            {
                cart.map(pd =><ShowProducts key={pd.key} currentProduct={pd}></ShowProducts>)
            }
        </div>
    );
};

export default Order;