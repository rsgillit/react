import './body.css';
import './Main.css';
import React from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ExpresspayPage from './ExpresspayPage';
import ExpresspayHB from './Expresspay/ExpresspayHB';
import Config from './Config';
import Footer from './Footer';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'HOME',
            hbstatus: 'init'
        };

        this.urlStatus = [];
    }

    componentDidUpdate() {
        
    }

    LoadOptions = (event) => { 
        //console.log("App:Loadoptions:" + event );
        if (event.target.innerHTML !== "" && event.target.id !== "home-icon"){
            this.setState({selected: event.target.innerHTML});
        } else {
            this.setState({selected: 'HOME'});
        }
        this.urlStatus = [];
        console.log("App:Loadoptions:" + this.state.selected );
        

    };

    sendTraffic = async (url) => {
        try {
            // const response = await this.axiosObj.get('url');
            const response = await fetch('http://127.0.0.1:8081/' + url);
            //console.log("sendTraffic:" + url + response );
            const result = await response.text();
            //console.log(result);
            return result;
        } catch(Err){
            console.log('Error:' + Err);
            return "";
        }
    }

    startHBs = async () => {
        this.urlStatus = [];
        //this.setState({selected: 'ExpresspayHB'});
        //this.setState({hbstatus: 'In Progress'});
        console.log("startHBs",this.state.selected);
        for (const element of Config.listXpayHBs){
            if (this.state.selected !== 'ExpresspayHB') {
                break;
            }
            const Arr = element.split(',');
            let finalstatus = false
            console.log("starting");
            if(Arr[4] == 'ON'){
                const response = await this.sendTraffic(Arr[1]);
                // console.log(response);
                if(response.status != 200) {
                    finalstatus = 'Fail';
                }
                if(response.includes(Arr[2]) && !response.includes(Arr[3])){
                    finalstatus = 'Pass';
                } else{
                    finalstatus = 'Fail';
                }
                this.urlStatus.push({
                    App : Arr[0],
                    url : Arr[1],
                    summary : Arr[2],
                    status : Arr[3],
                    isOn : Arr[4],
                    num : Arr[5],
                    finalstatus1 : finalstatus
                });
            }
            this.setState({hbstatus: 'In Progress'});
            }
        console.log("endtHBs",this.state.selected);

        this.setState({hbstatus: 'Complete'});
        //this.setState({selected: 'ExpresspayHB'});
    }

    onExpresspayHBUnmount = () => {
        this.urlStatus = [];
        this.setState({hbstatus: 'init'});
        
    }

    resetStatus = () => {
        this.setState({selected : 'ExpresspayHB'}, this.startHBs);
    }
    
    render() {
        console.log("App:render:" + this.state.selected);
       
        return (
            <div>
                <NavBar selected={this.state.selected} option={this.LoadOptions}/>
                <main className="main-page"> 
                  <HomePage active={this.state.selected}/>
                  <ExpresspayPage active={this.state.selected} callback={this.resetStatus} />
                  <ExpresspayHB active={this.state.selected} urlList={this.urlStatus} callback={this.onExpresspayHBUnmount}/>
                </main>
                <Footer />
            </div>
        );
    }
};

export default App;