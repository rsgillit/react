import './Main.css';
import React from 'react';
import HomePage from './HomePage';
import ExpresspayPage from './ExpresspayPage';
import Config from './Config';


class Main extends React.Component  {
    constructor(props) {
        super(props);

        this.state = { activePage: this.props.selected};
    }

    
    render() {
        console.log("main:render()" + this.props.selected );
        return (
            <main className="main-page"> 
                  <HomePage active= { `${this.props.selected}` === 'HOME' ? '' : 'none' } />
                  <ExpresspayPage active= { `${this.props.selected}` === 'Expresspay' ? '' : 'none' } page='mainpage' />
            </main>
        );
    }
    
};

export default Main;