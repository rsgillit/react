import './ProductRow.css';
import React from 'react';

const ProductRow = (props) => {


    return (
        <div className="ProductRow-ranges">
            {props.name} ${props.amount}
        </div>
    );

};

export default ProductRow;