import React from 'react';

const ShowProducts = (props) => {
    const {name, quantity} = props.currentProduct;
    const ShowProductsStyle = {
        margin: "10px 20%",
        border: "2px solid lightGrey",
        borderTop: "none",
        padding: "10px 20px" 
    }
    return (
        <div style={ShowProductsStyle}>
            <h4 style={{color:"blue"}}>{name}</h4>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className="addToCartBtn">Remove</button>
        </div>
    );
};

export default ShowProducts;