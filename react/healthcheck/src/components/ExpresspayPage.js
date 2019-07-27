import React from 'react';
import Config from './Config';
import ExpresspayHB from './Expresspay/ExpresspayHB';
import ExpresspayHBInit from './Expresspay/ExpresspayHBInit';

class ExpresspayPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { status: this.props.page}
    }

    startHBs = () => {
        this.setState({ status: 'HBpage'});
    }

    componentDidUpdate(oldProps){
        console.log("ExpresspayPage:componentDidUpdate");
        if (this.props.page !== oldProps.page){
            this.setState({status : oldProps.page});
        }

        console.log(this.state.status, this.props.page,oldProps.page);
    }


    render() {
        console.log("ExpressPayPage: render()");
        if(this.state.status === 'mainpage') {
            return (
                <div className="ExpresspayPage" style={{ display: this.props.active }} >
                    <ExpresspayHBInit callback={this.startHBs}/>
                </div>
            );
        }

        if(this.state.status === 'HBpage') {
            return (
                <div className="ExpresspayPage" style={{ display: this.props.active }} >
                    <ExpresspayHB />
                </div>
            );
        }
        
    }
};

export default ExpresspayPage;

