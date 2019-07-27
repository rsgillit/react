import './body.css';
import React from 'react';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'HOME'
        };
    }

    LoadOptions = (event) => { 
        console.log("App:Loadoptions:" + event );
        if (event.target.innerHTML !== "" && event.target.id !== "home-icon"){
            this.setState({selected: event.target.innerHTML});
        } else {
            this.setState({selected: 'HOME'});
        }

        console.log("App:Loadoptions:" + event.target.innerHTML );
        

    };



    render() {
        console.log("App:" + this.state.selected);
        return (
            <div>
                <NavBar selected={this.state.selected} option={this.LoadOptions}/>
                <Main selected={this.state.selected}/>
                <Footer />
            </div>
        );
    }
};

export default App;