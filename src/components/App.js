import React, { Component } from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    userType(user){
        console.log(user);
    }
    render() {
        return (
            <div className="main body-container">
                <Topbar userFunc={this.userType.bind(this)} />
                <div className="main-content">
                {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
