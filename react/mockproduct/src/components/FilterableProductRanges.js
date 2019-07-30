import './FilterableProductRanges.css';
import React from 'react';
import SearchBar from './SearchBar';

const FilterableProductRanges = (props) => {


    return (
        <div className="filtered-ranges">
            {props.children}
        </div>
    );

};

export default FilterableProductRanges;