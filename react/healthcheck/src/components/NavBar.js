import './NavBar.css';
import React from 'react';
import Config from './Config';


class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { active: props.active};
    }

    render() {
        const navList = Config.navList.map((li)=>{
                        return <li  key={li} className="nav-li" onClick={this.props.option}>{li}</li>
        });
        
        return (
            <header >
            <h1>Payments Healthchecks</h1>
            <nav className='nav-main'>
                <div className='nav-div'>
                    <ul className='nav-ul'>
                    <li  key="icon" id ="home-icon" className='nav-li' onClick={this.props.option}><i className="home icon"></i></li>
                        {navList}
                    </ul>
                </div>
            </nav>
            </header>            
        );
    }
    
};

export default NavBar;