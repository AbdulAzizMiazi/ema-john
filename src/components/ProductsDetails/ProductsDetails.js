import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';


const ProductsDetails = () => {
    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    
    return (
        <div>
            <h1>{productKey} is here</h1>
            <Product productDetails={product} showAddToCard={false}></Product>
        </div>
    );
};

export default ProductsDetails;