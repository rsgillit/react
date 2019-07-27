import React from 'react';
import axios from 'axios';
import Config from '../Config';
import ExpresspayHBDiv from './ExpresspayHBDiv';

class ExpresspayHB extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hbstatus: this.props.status };
        this.urlStatus = [];
    }

    sendTraffic = async (url) => {
        try {
            // const response = await this.axiosObj.get('url');
            const response = await fetch('http://127.0.0.1:8081/' + url);
            //console.log("sendTraffic:" + url + response );
            const result = await response.text();
            // console.log(result);
            return result;
        } catch(Err){
            console.log('Error:' + Err);
            throw Error(Err);
        }
    }

    startHBs = async () => {
        this.urlStatus = [];
        for (const element of Config.listXpayHBs){
            const Arr = element.split(',');
            let finalstatus = false
            console.log("starting");
            if(Arr[4] == 'ON'){
                const response = await this.sendTraffic(Arr[1]);
                // console.log(response);
                if(response.includes(Arr[2]) && !response.includes(Arr[3])){
                    finalstatus = true;
                } else{
                    finalstatus = false;
                }
                this.urlStatus.push({
                    App : Arr[0],
                    url : Arr[1],
                    summary : Arr[2],
                    status : Arr[3],
                    isOn : Arr[4],
                    num : Arr[5],
                    finalstatus : finalstatus
                });
            }
            //this.setState({hbstatus: 'In Progress'});
        }
        this.setState({hbstatus: 'Complete'});
    }

    componentDidMount() {
        this.startHBs();
        console.log("componentDidMount");

    }
  render() {
    console.log("ExpresspayHBs render");
    const urlList = this.urlStatus.map((url)=>{
                    return <ExpresspayHBDiv key={url.num} url={url} />
    });
    
    return (
    <div className="div-expresspayhbs" >
            {urlList}
    </div>

    );
        
    }
}

export default ExpresspayHB;