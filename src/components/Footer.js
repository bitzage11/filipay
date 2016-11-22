import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (<footer className="page-footer red">
        <div className="container">
          <div className="row">
            <div className="col m3 s12">
              <h5 className="white-text">Mobile Recharge</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Etisalat</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Du</a></li>
              </ul>
            </div>
            <div className="col m3  s12">
              <h5 className="white-text">POSTPAID</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Etisalat</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Du</a></li>
              </ul>
            </div>
            <div className="col m3 s12">
              <h5 className="white-text">FILLIPAY</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">About Us</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Support</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Sitemap</a></li>
              </ul>
            </div>
            <div className="col m3 s12">
              <h5 className="white-text">Mobile</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Android App</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Windows</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Mobile Site</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">IOS</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2016 Copyright <b>fillipay</b>
        <a className="grey-text text-lighten-4 right" href="#!">            <img style={{width:35,height:35}} src="https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697057-facebook-512.png"></img>
</a>

<a className="grey-text text-lighten-4 right" href="#!">            <img style={{margin:10}} style={{width:30,height:30}} src="http://www.freeiconspng.com/uploads/google-plus-icon--circle-iconset--martz90-20.png"></img>
</a>
<a className="grey-text text-lighten-4 right" href="#!">            <img style={{width:30,height:30}} src="http://www.freeiconspng.com/uploads/twitter-icon--basic-round-social-iconset--s-icons-0.png"></img>
</a>

      </div>
        </div>
      </footer>);
    }
}
