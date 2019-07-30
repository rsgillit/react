import './ProductCategoryRow.css';
import React from 'react';

const ProductCategoryRow = (props) => {


    return (
        <div className="productcategorycow-ranges">
            {props.text}
        </div>
    );

};

export default ProductCategoryRow;