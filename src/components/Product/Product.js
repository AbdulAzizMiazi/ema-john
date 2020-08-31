import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const{name, img, seller, price, stock, key} = props.productDetails;
    // console.log(props.productDetails);
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h3><Link to={"/product/"+key}>{name}</Link></h3>
                <p><small>by: {seller}</small></p>
                <p style={{fontSize:"18px"}}>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                
                {props.showAddToCard && <button className="addToCartBtn" onClick={()=>props.clickHandler(props.productDetails)}>
                    <FontAwesomeIcon icon={faShoppingCart}/>add to cart
                </button>}

            </div>
        </div>
    );
};

export default Product;