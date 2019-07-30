import React from 'react';

const ExpresspayHBDiv = (props) => {

    if(props.url.finalstatus1 === 'Fail'){
        return (
                    <tr className="table failure">
                    <td>{props.url.num}</td>
                    <td>{props.url.App}</td>
                    <td>{props.url.url}</td>
                    <td>{props.url.isOn}</td>
                    <td>{props.url.finalstatus1}</td>
            </tr>
        );
    }
   return (
        <tr >
                <td>{props.url.num}</td>
                <td>{props.url.App}</td>
                <td>{props.url.url}</td>
                <td>{props.url.isOn}</td>
                <td>{props.url.finalstatus1}</td>
        </tr>
        );
    }
     
export default ExpresspayHBDiv;