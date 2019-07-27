import React from 'react';
import axios from 'axios';
import Config from '../Config';

class ExpresspayHBInit extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <article>
            <section>
                <div className="div-expresspayhbs" onClick= {this.props.callback}>
                Heartbeats
                </div>
            </section>
        </article>
        
    );
    }
}

export default ExpresspayHBInit;