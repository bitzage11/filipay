import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
    constructor(props) {
        super(props);
        $('select').material_select();
        this.state = {}
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title black-text">
                                    DTH Free Charge
                                </span>
                                <form>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <select className = "browser-default">
                                                <option value="" disabled defaultValue>
                                                    Choose your option
                                                </option>
                                                <option value="1">
                                                    Option 1
                                                </option>
                                                <option value="2">
                                                    Option 2
                                                </option>
                                                <option value="3">
                                                    Option 3
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                placeholder="Enter Your Smart Card Number"
                                                id="cardno"
                                                
                                                className="validate" />
                                            <label htmlFor="mobileno" className="active">Enter Your Smart Card Number: </label>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className="card-action">
                                <input
                                    type="submit"
                                    className="btn"
                                    defaultValue="Proceed" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="col s12 m8"
                        style={{marginTop:50}}>
                        <div className="card">
                            <img
                                className="responsive-img materialboxed"
                                src="http://bubleid.in/images/pic2.jpg">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
