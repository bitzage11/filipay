<div>


<nav>
<div className="nav-wrapper">
  <a href="#!" className="brand-logo"><img src='http://i.imgur.com/GU2jBGE.png' style={{width: 200, height: 100}} /></a>
  <ul className="right">
    <li><Link to="/">Mobile</Link></li>
    <li><Link to="/dth">DTH</Link></li>
    <li><a className="waves-effect waves-light btn" href="#modal1">Registration</a></li>
    <li><a className="waves-effect waves-light btn" href="#modal2">Login</a></li>
  </ul>
</div>
</nav>


<div>
<div id="modal1" className="modal">
  <div className="modal-content">
    <h3>Registration</h3>
    <form role="form" className="form-horizontal">
                  <div className="form-group">
                    <div className="col-sm-10">
                        <div className="col-sm-10">
                          <input onChange={this.handleInputChange.bind(this, 'signupName')} type="text" className="form-control" placeholder="Name" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-10">
                      <input onChange={this.handleInputChange.bind(this, 'signupEmail')} type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-10">
                      <input type="number" onChange={this.handleInputChange.bind(this, 'signupMobile')} placeholder="Mobile" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-10">
                      <input type="password" onChange={this.handleInputChange.bind(this, 'signupPassword')} placeholder="Password" />
                    </div>
                  </div>
                </form>
            </div>
            <div className="modal-footer">
            <button type="button" onClick={this.userSignUpHandle.bind(this)} className="btn btn-primary btn-sm">
                                  Save &amp; Continue</button>
                                  <button type="button" className=" modal-action modal-close waves-effect waves-green btn-flat">
                                  Cancel</button>
            </div>
          </div>
        </div>



    <div>
      <div id="modal2" className="modal">
        <div className="modal-content">
          <h3>Registration</h3>
          <form role="form" className="form-horizontal">
                        <div className="form-group">
                    <div className="col-sm-10">
                        <div className="col-sm-10">
                      <input onChange={this.handleInputChange.bind(this, 'signinEmail')} type="email" className="form-control" id="email1" placeholder="Email" />
                    </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-10">
                      <input onChange={this.handleInputChange.bind(this, 'signinPassword')} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                  </div>
                </form>
            </div>
            <div className="modal-footer">
            <div className="col-sm-10">
                <button type="button" onClick={this.userSignInHandle.bind(this)} className=" modal-action modal-close waves-effect waves-green btn btn-primary btn-flat">Login</button>
                <button type="button" className=" modal-action modal-close waves-effect waves-green btn-flat">Cancel</button>
            </div>
            </div>
          </div>
        </div>

</div>
