import React from 'react';
import FilterableProductRanges from './components/FilterableProductRanges';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ProductCategoryRow from './components/ProductCategoryRow';
import ProductRow from './components/ProductRow';

class App extends React.Component {
    state : {};


    render() {
        return (
            <FilterableProductRanges>
                <SearchBar />   
                <ProductTable> 
                    <ProductCategoryRow text="Sporting Goods" />
                    <ProductRow name="Football" amount="49.99"/>
                    <ProductRow name="Football1" amount="49.99"/>
                    <ProductRow name="Football2" amount="49.99"/>
                    <ProductRow name="Football3" amount="49.99"/>
                    <ProductCategoryRow text="Electronics" />
                    <ProductRow name="Football" amount="49.99"/>
                    <ProductRow name="Football1" amount="49.99"/>
                    <ProductRow name="Football2" amount="49.99"/>
                    <ProductRow name="Football3" amount="49.99"/>
                </ProductTable>       
            </FilterableProductRanges>
        );
    }
}


export default App;