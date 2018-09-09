import React, { Component } from 'react';

import LocalInfo from '../components/LocalInfo';

// import 'whatwg-fetch';

import 'axios';
import Axios from 'axios';

class LocalInfoContainer extends Component {

    constructor(){
        super();
        this.state = {
            googleInfo: {}
        }
    }
    
    componentDidMount(){
        Axios.get('https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBQmB4EGSCfePPlGmYGD-MUaLBsP49sP-Y&address=17660%2076th%20ct%20.%20Hialeah%20FL&electionId=6000')
            .then((response) => {
                console.log('Response from Google Civic Information API: ',response);
                this.setState({
                    googleInfo: response
                });
                console.log('~~~~~~~~~~~~~~~~~~~~~',this.state.googleInfo.data.election.name);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
            {/* <h1>{this.state.googleInfo.data.election.name}</h1> */}
            <LocalInfo
            // electionName={this.state.googleInfo.election.name}
            />
            </div>
        );
    }   
}

export default LocalInfoContainer;