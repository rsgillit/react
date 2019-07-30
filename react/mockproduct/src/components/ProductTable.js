import './ProductTable.css';
import React from 'react';

const ProductTable = (props) => {


    return (
        <div className="product-ranges">
            {props.children}
        </div>
    );

};

export default ProductTable;