import './SearchBar.css';
import React from 'react';

const SearchBar = () => {


    return (
        <div className="search-bar">
            <form>
                <input type="textbox" placeholder="Search..."></input>
                <div>
                <label><input type="checkbox" ></input>Only show products in stock</label>
                </div>
                
            </form>
        </div>
    );

};

export default SearchBar;