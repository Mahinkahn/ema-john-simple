import React from 'react';

const Product = (product) => {
    const { name, img, seller, price, ratings } = { product };

    return (
        <div>
            <img src={img} alt=""></img>
        </div>
    );
};

export default Product;