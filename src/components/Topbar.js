import React, { Component } from 'react';
import { Link } from 'react-router';

class Topbar extends Component {
  constructor(props) {
      super(props);
  }
  componentDidMount(){
    $(".button-collapse").sideNav();
  }
    handleInputChange(parm1, event) {
        this[parm1] = event.target.value;
    }
    userSignUpHandle() {
        if (!this.signupName || !this.signupPassword || !this.signupMobile || !this.signupEmail) {
            $.notify("Please fill all the fields please :)", "error");
        } else {
            // $.notify("mongodb is not working now :)", "error");
            $.ajax({
                    type: 'POST',
                    url: '/api/signup',
                    data: { name: this.signupName, pass: this.signupPassword, email: this.signupEmail, num: this.signupMobile }
                })
                .done(data => {
                    $.notify("A new user is created with mongodb :)", "sucess");
                })
                .fail(jqXhr => {
                    $.notify("Please Provide the correct data to signup :)", "error");
                });
        }
    }
    userSignInHandle() {
        if (!this.signinEmail || !this.signinPassword) {
            $.notify("Please fill all the fields please :)", "error");
        } else {
            // $.notify("mongodb is not working now :)", "error");
            $.ajax({
                    type: 'POST',
                    url: '/api/login',
                    data: { email: this.signinEmail, pass: this.signinPassword }
                })
                .done(data => {
                    console.log(this);
                    this.params = data;
                    this._reactInternalInstance._context.router.push({
                      pathname:'/dashboard',
                      query:{
                        type: data.type,
                        name:data.username
                      }
                    });
                    $.notify("I am login with mongodb :)", "sucess");
                })
                .fail(jqXhr => {
                    $.notify("Please Provide the correct username && password :)", "error");
                });
        }
    }

    render() {
      return (
        <div>
          <nav className="navbar-material">
            <div className="nav-wrapper red">
              <a href="#!" className="brand-logo">
                <img style={{marginBottom:5}} src="http://i.imgur.com/SePPKuH.png" />
              </a>
              <a
                href="#"
                data-activates="mobile-demo"
                className="button-collapse">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down" style={{lineHeight: 'inherit'}}>
                <li className="z-depth-2">
                  <Link to="/" style={{'fontFamily': 'Libre Franklin'}}><i className="material-icons prefix">stay_current_portrait</i></Link>
                </li>
                <li className="z-depth-2">
                  <Link to="/dth"><i className="material-icons prefix">settings_input_antenna</i></Link>
                </li>
                <li>
                  <a
                    className="waves-effect waves-light z-depth-2"
                    href="#modal1" style={{'fontFamily': 'Libre Franklin'}}>Registration</a>
                </li>
                <li>
                  <a
                    className="waves-effect waves-light z-depth-2"
                    href="#modal2" style={{'fontFamily': 'Libre Franklin'}}>Login</a>
                </li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li className="z-depth-2">
                  <Link to="/">Mobile</Link>
                </li>
                <li className="z-depth-2">
                  <Link to="/dth">DTH</Link>
                </li>
                <li>
                  <a
                    className="waves-effect weave-red waves-light z-depth-2"
                    href="#modal1">Registration</a>
                </li>
                <li>
                  <a
                    className="waves-effect  weave-red waves-light z-depth-2"
                    href="#modal2">Login</a>
                </li>
              </ul>
            </div>
          </nav>


          <div>
            <div id="modal1" className="modal">
              <div style={{marginLeft:10,marginRight:10}}>
                <h5 style={{'fontFamily': 'Libre Franklin'}}>Registration</h5>
                <div className="card horizontal">
                  <div className="row">
                  <div className="col s12 m6">
                <form role="form" className="card-content">
                  <div className="form-group">
                    <div className="">
                      <div className="">
                        <input
                          onChange={this.handleInputChange.bind(this, 'signupName')}
                          type="text"
                          className="form-control"
                          placeholder="Name" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="">
                      <input
                        onChange={this.handleInputChange.bind(this, 'signupEmail')}
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="">
                      <input

                        onChange={this.handleInputChange.bind(this, 'signupMobile')}
                        placeholder="Mobile" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="">
                      <input
                        type="password"
                        onChange={this.handleInputChange.bind(this, 'signupPassword')}
                        placeholder="Password" />
                    </div>
                  </div>
                </form>
                  </div>
              <div className="col s12 m6">
                <img className="responsive-img"  src="http://i.imgur.com/4QhWfpe.png"></img>

                </div>
              </div>
              </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  onClick={this.userSignUpHandle.bind(this)}
                  className="red btn btn-primary btn-sm">
                  Save &amp; Continue
                </button>
                <button
                  type="button"
                  className=" modal-action modal-close waves-effect waves-green btn-flat">
                  Cancel
                </button>
              </div>
            </div>
          </div>

















          <div>
            <div id="modal2" className="modal">
              <div className="modal-content">
                <h4 style={{'fontFamily': 'Libre Franklin'}}>Login</h4>
                <div className="card horizontal">
                  <div className="row">
                  <div className="col s12 m6">
              <form role="form" className="card-content">
                  <div className="form-group">
                    <div className="col-sm-10">
                      <div className="col-sm-10">
                        <input
                          onChange={this.handleInputChange.bind(this, 'signinEmail')}
                          type="email"
                          className="form-control"
                          id="email1"
                          placeholder="Email" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-10">
                      <input
                        onChange={this.handleInputChange.bind(this, 'signinPassword')}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password" />
                    </div>
                  </div>
                </form>
              </div>
            <div className="col s12 m6">
              <img className="responsive-img"  src="http://i.imgur.com/4QhWfpe.png"></img>

          </div>
            </div>
            </div>
            </div>
              <div className="modal-footer">
                <div className="col-sm-10">
                  <button
                    type="button"
                    onClick={this.userSignInHandle.bind(this)}
                    className="red modal-action modal-close waves-effect waves-green btn btn-primary btn-flat">Login</button>
                  <button
                    type="button"
                    className=" modal-action modal-close waves-effect waves-green btn-flat">Cancel</button>
                </div>
              </div>
            </div>
          </div>

        </div>
    );
    }
}

export default Topbar;
