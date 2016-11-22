import React, { Component } from 'react';
import { Link } from 'react-router';
import Select from 'react-select';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    componentDidMount() {
  $('.slider').slider();
  $('.modal').modal();
        $.ajax({
                type: 'GET',
                url: '/api/getAllmobile'
            })
            .done(data => {
                console.log(data);
                this.setState({ mobileData: data });
            })
            .fail(jqXhr => {
                $.notify("Failed to proceed :)", "error");
            });
        $.ajax({
                type: 'GET',
                url: '/api/getAllcircles'
            })
            .done(data => {
                console.log(data);
                if (data && data.length > 0) {
                    var mobileNodes = data.map((item, index) => {
                        return (<option key={index} value={item.name}>{item.name}</option>);
                    });
                    this.forceUpdate();


                }
                this.setState({ mobileCircle: data });
            })
            .fail(jqXhr => {
                $.notify("Failed to proceed :)", "error");
            });
    }
    _onChangeNumber(event){
        // console.log(event.target.value);
        // console.log(event.target.value.length)
        if(event.target.value.length === 4){
            this.setState({ opSel: event.target.value});
        }else if (event.target.value.length > 4){
            let val = event.target.value.split("");
            val.length = 4;
            let code = val.join("");
            this.setState({ opSel: code});

        }
    }

    render() {
        if (this.state.mobileData && this.state.mobileData.length > 0) {
            var mobileNodes = this.state.mobileData.map((item, index) => {

                return (<option key={index} value={item.value} selected={ item.value == this.state.opSel ? 'selected':''}>{item.name}</option>);
                // return ({label:item.name , value: item.value});
            });
            // console.log(mobileNodes);
            $('select').material_select();
        }
        if (this.state.mobileCircle && this.state.mobileCircle.length > 0) {
            var circleNodes = this.state.mobileCircle.map((item, index) => {
                return (<option key={index} value={item.value}>{item.name}</option>);
            });
            $('select').material_select();

        }
        return (<div className="container">
        <div className="row">
          <div className="col s12 m5">
            <div className="card">
              <div className="card-content">
                <span className="card-title black-text">Recharge Your Mobile</span>
                <form>
                  <div className="row">
                    <div className="input-field col s12">
                    <i className="material-icons prefix">stay_current_portrait</i>
                      <input placeholder="Enter Your Mobile" id="mobileno" onChange={this._onChangeNumber.bind(this)} className="validate" />
                      <label htmlFor="mobileno" className="active">Mobile No: </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                    <i className="material-icons prefix">polymer</i>
                      <input placeholder="Enter Price " id="price" onChange={this._onChangeNumber.bind(this)} className="validate" />
                      <label htmlFor="price" className="active">Recharge Price: </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                          <input name="networktype" type="radio" id="prepaid" />
                          <label htmlFor="prepaid">Prepaid</label>
                          <input name="networktype" type="radio" id="postpaid" />
                          <label htmlFor="postpaid">Postpaid</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                        <select>
                          <option value="" disabled>Choose option</option>
                          {mobileNodes}
                        </select>
                    </div>
                    <div className="input-field col s6">
                        <select>
                          <option value="" disabled>Choose option</option>
                         {circleNodes}
                        </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-action">
                <a href="#modalProceed" className="btn red waves-effect waves-light">Pakages</a>

                <Link to="/checkout"
                  className="red modal-action waves-effect btn">Proceed</Link>
              </div>
            </div>
          </div>
              <div className="col m7 s12">
                  <div className="card">



      <div className="slider">
        <ul className="slides">
          <li><img src="http://i.imgur.com/AXGGgth.png"  /></li>
          <li><img src="http://i.imgur.com/scI7Yg4.png"  /></li>
          <li><img src="http://i.imgur.com/lWG1WNp.png"  /></li>
        </ul>
      </div>
                </div>
              </div>
        </div>


                  <div>
                    <div id="modalProceed" className="modal">
                      <div className="modal-content">
                        <h4 style={{'fontFamily': 'Libre Franklin'}}>Pakages Details</h4>
                        <div className="card horizontal">

                            <table className="bordered striped highlight centered responsive-table">
                                    <thead>
                                      <tr>
                                          <th data-field="id">Pakage Name</th>
                                          <th data-field="desc">Pakage Description</th>
                                          <th data-field="price">Pakage Price</th>
                                          <th data-field="select">Select Pakage</th>
                                      </tr>
                                    </thead>

                                    <tbody>
                                      <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                          <td>$0.87</td>
                                        <td><button className="btn red">Select Pakage</button></td>
                                      </tr>
                                      <tr>
                                        <td>Alan</td>
                                        <td>Jellybean</td>
                                          <td>$3.76</td>
                                        <td><button className="btn red">Select Pakage</button></td>
                                      </tr>
                                      <tr>
                                        <td>Jonathan</td>
                                        <td>Lollipop</td>
                                          <td>$7.00</td>
                                        <td><button className="btn red">Select Pakage</button></td>
                                      </tr>
                                    </tbody>
                                  </table>

                    </div>
                    </div>
                      <div className="modal-footer">
                        <div>
                          <button className="btn red modal-close">Close</button>
                        </div>
                      </div>
                    </div>
                    <div className="card-panel hoverable">     <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-image">
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
</div>
                  </div>


                </div>);
    }
}
