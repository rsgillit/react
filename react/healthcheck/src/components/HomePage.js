import React from 'react';
import Config from './Config';

const HomePage = (props) => {
    //console.log("HomePage",props.active);
    if( props.active === 'HOME') {
        return (
            <div className="HomePage" style={{ display: props.active }}>{Config.HomePage}</div>
            
        );
    }

    return null;
    
};

export default HomePage;

