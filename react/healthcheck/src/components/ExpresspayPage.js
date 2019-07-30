import './Main.css';
import React from 'react';
import Config from './Config';

class ExpresspayPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { status: this.props.page}
    }

    render() {
        
        if( this.props.active === 'Expresspay') {
            return (
                <div style={{ display: this.props.active }} class="expresspay">
                    <article >
                    <section>
                        <div className="div-expresspayHeartbeats" onClick= {this.props.callback}>
                            Heartbeats
                        </div>
                    </section>
                </article>
                </div>
                
            );
        }

        return null;
    }
};

export default ExpresspayPage;

