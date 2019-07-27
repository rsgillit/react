import React from 'react';

const ExpresspayHBDiv = (props) => {
    
    // const list = props.urlList.map((url) => {
    //     return (
    //         <div key={url.num} >
    //             <span>{url.num}</span>
    //             <span>{url.App}</span>
    //             <span>{url.url}</span>
    //             <span>{url.isOn}</span>
    //             <span>{url.finalstatus}</span>
    //         </div>
            
    //     );
    // });
    
    return (
            <div className="div-expresspayhbdiv"> 
                <span>{props.url.num}</span>
                <span>{props.url.App}</span>
                <span>{props.url.url}</span>
                <span>{props.url.isOn}</span>
                <span>{props.url.finalstatus}</span>
            </div>
        );
    }
     
export default ExpresspayHBDiv;