import './ExpresspayHB.css';
import React from 'react';
import axios from 'axios';
import Config from '../Config';
import ExpresspayHBDiv from './ExpresspayHBDiv';

class ExpresspayHB extends React.Component {

    componentWillUnmount() {
        console.log("I was called");
        this.props.callback();
    }
    render() {
    //console.log("ExpresspayHBs render");
    const urlList = this.props.urlList.map((url)=>{
                    return <ExpresspayHBDiv key={url.num} url={url} />
    });

    
    
    // console.log(this.props.urlList,this.props.callback );
     if( this.props.active === 'ExpresspayHB' ) {
        return (
            <div className="div-expresspayhbs" >
                <div class="progress-bar">
                    <div>{this.props.urlList.length}/{Config.listXpayHBs.length}</div>
                    <progress  max={Config.listXpayHBs.length} value= {this.props.urlList.length}></progress>
                </div> 
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>JVM</th>
                            <th>URL</th>
                            <th>Active?</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {urlList}
                    </tbody>
                </table>
            </div>
        
            );
     }
        
     return null;
     
        
    }
}

export default ExpresspayHB;