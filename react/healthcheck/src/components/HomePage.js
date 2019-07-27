import React from 'react';
import Config from './Config';

const HomePage = (props) => {
    console.log(props.active);
    return (
        <div className="HomePage" style={{ display: props.active }}>{Config.HomePage}</div>
        
    );
};

export default HomePage;

