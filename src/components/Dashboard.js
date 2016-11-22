import React, { Component } from 'react';
export default class extends Component {
  constructor(props) {
      super(props);
      $('.modal').modal();
      this.state = {};
      this.stringData={};
      // this.loginUser
  }
  componentDidMount() {
      $('.modal').modal();
      $('select').material_select();
      $('.collapsible').collapsible({
        accordion : true
      });
  }
  _handleButtonClick(type, label) {
      this.urlParam = type;
      this.label = label;
      console.log('we will set the Category here');
  }
  _handleFormSave() {
      console.log('we will Save the Category here');
      console.log(this.stringData);
      if (!this.stringData.name || !this.stringData.value) {
          $.notify("Please fill the field :)", "error");
          // return;
      } else {
          $.ajax({
                  type: 'POST',
                  url: '/api/' + this.urlParam,
                  data: { name: this.stringData.name, value:this.stringData.value }
              })
              .done(data => {
                  $.notify('data added successfully to ' + this.urlParam, "sucess");
              })
              .fail(jqXhr => {
                  $.notify("Failed to proceed :)", "error");
              });
      }
  }
  _handleShowButtonClick(type, category) {
      this.showType = category;
      $.ajax({
              type: 'GET',
              url: '/api/' + type
          })
          .done(data => {
              this.setState({ tableData: data });
              $.notify(this.type + " " + 'called', "sucess");
          })
          .fail(jqXhr => {
              $.notify("Failed to proceed :)", "error");
          });
  }
  _handleInput(type,event) {
      this.stringData[type] = event.target.value;
  }

  _handleEdit(event) {
      this.stringData = event.target.value;
      // console.log(event.target.value);
  }

  _handleDelete(item) {
      console.log(item);
      console.log(this.showType);
      $.ajax({
              type: 'POST',
              url: '/api/delete' + this.showType,
              data: { name: item.name }
          })
          .done(data => {
              $.notify("Item Deleted Successfully :)", "success");
              this.setState({ tableData: data });
          })
          .fail((jqXhr) => {
              $.notify("Error while Delete item :)", "error");
          });
  }
    render() {
      if (this.props.location.query.type && this.props.location.query.type =='Admin' && this.state.tableData && this.state.tableData.length > 0) {
          var dataNodes = this.state.tableData.map((item, index) => {
              return (<tr key={index}>
                  <td>
                      {item.name}
                  </td>
                  <td>
                      {item.value?item.value:item.type}
                  </td>
                  <td>
                      {/*<a className="waves-effect waves-light btn-floating btn-large green">
                          <i className="large material-icons">mode_edit</i>
                          </a>*/}
                          <a
                              onClick={this._handleDelete.bind(this, item)}
                              className="waves-effect waves-light btn-floating btn-large red">
                              <i className="large material-icons">delete</i>
                          </a>
                      </td>
                  </tr>);
          });
      }
      if(this.props.location.query.type && this.props.location.query.type =='Admin'){

        return (
            <div>
                <div>
                    <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">

                        <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">

                            <div className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
                              <ul className="collapsible" data-collapsible="accordion">
                                  <li>
                                    <div className="collapsible-header" style={{background:'#37474f'}}><i className="material-icons">mode_edit</i>Add New Data</div>
                                    <div className="collapsible-body">

                                        <a
                                            className="waves-effect waves-light btn black"
                                            style={{width:'100%'}}
                                            onClick={this._handleButtonClick.bind(this, 'dhtoperatorAdd' , 'DHT Operator')}
                                            href="#modal3">
                                            Add DHT Operator
                                        </a>
                                    <br />
                                        <a
                                            className="waves-effect waves-light btn black"
                                             style={{width:'100%'}}
                                            onClick={this._handleButtonClick.bind(this, 'mobileoperatorAdd' , 'Mobile Operator')}
                                            href="#modal3">
                                            Add Mobile Operator
                                        </a>
                                        <br />
                                        <a
                                            className="waves-effect waves-light btn black"
                                            style={{width:'100%'}}
                                            onClick={this._handleButtonClick.bind(this, 'mobilecircleAdd', 'Mobile Circle')}
                                            href="#modal3">
                                            Add Mobile Circle
                                        </a>
                                        <br />

                                        <a
                                            className="waves-effect waves-light btn black"
                                            style={{width:'100%'}}
                                            onClick={this._handleButtonClick.bind(this, 'PakagesAdd', 'Offer Pakages')}
                                            href="#modal4">
                                            Add Packages
                                        </a>
                                        <br />

                                    </div>
                                  </li>
                                  <li>
                                    <div className="collapsible-header"  style={{background:'#37474f'}}><i className="material-icons">visibility</i>View Data</div>
                                    <div className="collapsible-body">
                                        <a
                                            className="waves-effect waves-light btn black"
                                            style={{width:'100%'}}
                                            onClick={this._handleShowButtonClick.bind(this, 'getAlldht', 'DHT')} >
                                            Show DHT Operator
                                        </a>
                                        <a
                                            className="waves-effect waves-light btn black"
                                            style={{width:'100%'}}
                                            onClick={this._handleShowButtonClick.bind(this, 'getAllmobile', 'MOP')}>
                                            Show Mobile Operator
                                        </a>
                                        <a
                                            className="waves-effect waves-light btn black"
                                            style={{width:'100%'}}
                                            onClick={this._handleShowButtonClick.bind(this, 'getAllcircles','MC')}>
                                            Show Mobile Circle
                                        </a>
                                        <a
                                            className="waves-effect waves-light btn black"
                                            style={{width:'100%'}}
                                            onClick={this._handleShowButtonClick.bind(this, 'getAllusers','AU')}>
                                            Show All Users
                                        </a>
                                        <a
                                            className="waves-effect waves-light btn black"
                                            style={{width:'100%'}}
                                            onClick={this._handleShowButtonClick.bind(this, 'getAllpakages','PD')}>
                                            Show All Packages
                                        </a>
                                    </div>
                                  </li>
                                </ul>

                            </div>
                        </div>
                        <main className="mdl-layout__content mdl-color--grey-100">
                            <div className="mdl-grid demo-content">
                                <div className="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                                  <table className="bordered striped highlight centered responsive-table">
                                      <thead>
                                          <tr>
                                              <th data-field="name">
                                                  Category Name
                                              </th>
                                              <th data-field="name">
                                                  Category Value
                                              </th>
                                              <th data-field="action">Actions</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {dataNodes}
                                      </tbody>
                                  </table>
                                </div>
                                <div className="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
                                    <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
                                        <div className="mdl-card__title mdl-card--expand mdl-color--teal-300">
                                            <h2 className="mdl-card__title-text">Updates</h2>
                                        </div>
                                        <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                                            Non dolore elit adipisicing ea reprehenderit consectetur culpa.
                                        </div>
                                        <div className="mdl-card__actions mdl-card--border">
                                            <a
                                                href="#"
                                                className="mdl-button mdl-js-button mdl-js-ripple-effect">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                    <div className="demo-separator mdl-cell--1-col" />
                                    <div className="demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">
                                        <div className="mdl-card__supporting-text mdl-color-text--blue-grey-50">
                                            <h3>
                                                View options
                                            </h3>
                                            <ul>
                                                <li>
                                                    <label
                                                        htmlFor="chkbox1"
                                                        className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                        <input
                                                            type="checkbox"
                                                            id="chkbox1"
                                                            className="mdl-checkbox__input" />
                                                        <span className="mdl-checkbox__label">
                                                            Click per object
                                                        </span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label
                                                        htmlFor="chkbox2"
                                                        className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                        <input
                                                            type="checkbox"
                                                            id="chkbox2"
                                                            className="mdl-checkbox__input" />
                                                        <span className="mdl-checkbox__label">
                                                            Views per object
                                                        </span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label
                                                        htmlFor="chkbox3"
                                                        className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                        <input
                                                            type="checkbox"
                                                            id="chkbox3"
                                                            className="mdl-checkbox__input" />
                                                        <span className="mdl-checkbox__label">
                                                            Objects selected
                                                        </span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label
                                                        htmlFor="chkbox4"
                                                        className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                                        <input
                                                            type="checkbox"
                                                            id="chkbox4"
                                                            className="mdl-checkbox__input" />
                                                        <span className="mdl-checkbox__label">
                                                            Objects viewed
                                                        </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mdl-card__actions mdl-card--border">
                                            <a
                                                href="#"
                                                className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50">
                                                Change location
                                            </a>
                                            <div className="mdl-layout-spacer" />
                                            <i className="material-icons">location_on</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>

                </div>
                <div>
                    <div id="modal4" className="modal">
                        <div className="modal-content">
                            <h3>
                                Add Pakage Here
                            </h3>
                            <form role="form" className="form-horizontal">
                                <div className="form-group">
                                    <div className="col-sm-10">
                                        <div className="col-sm-10">
                                            <input
                                                onChange={this._handleInput.bind(this,'name')}
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Enter Pakage Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-10">
                                        <div className="col-sm-10">
                                            <textarea
                                                onChange={this._handleInput.bind(this,'name')}
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Enter Pakage Description" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-10">
                                        <div className="col-sm-10">
                                            <input
                                                onChange={this._handleInput.bind(this,'value')}
                                                name="value"
                                                className="form-control"
                                                placeholder="Enter Pakage Price" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                onClick={this._handleFormSave.bind(this)}
                                className="btn btn-primary btn-sm modal-action modal-close">
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
                    <div id="modal3" className="modal">
                        <div className="modal-content">
                            <h3>
                                Update Data
                            </h3>
                            <form role="form" className="form-horizontal">
                                <div className="form-group">
                                    <div className="col-sm-10">
                                        <div className="col-sm-10">
                                            <input
                                                onChange={this._handleInput.bind(this,'name')}
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Enter Category Name" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-10">
                                        <div className="col-sm-10">
                                            <input
                                                onChange={this._handleInput.bind(this,'value')}
                                                name="value"
                                                className="form-control"
                                                placeholder="Enter Value" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                onClick={this._handleFormSave.bind(this)}
                                className="btn btn-primary btn-sm modal-action modal-close">
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

            </div>
        );    }else{


            return (
                <div className="row">
                    <div className="col s4 m3">
                        <div className="card">
                            <div className="card-content">
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>


                            </div>
                            <div className="card-action">
                                <a href="#">
                                    Select the Plan
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col s4 m3">
                        <div className="card">
                            <div className="card-content">
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>


                            </div>
                            <div className="card-action">
                                <a href="#">
                                    Select the Plan
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col s4 m3">
                        <div className="card">
                            <div className="card-content">
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>


                            </div>
                            <div className="card-action">
                                <a href="#">
                                    Select the Plan
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col s4 m3">
                        <div className="card">
                            <div className="card-content">
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>


                            </div>
                            <div className="card-action">
                                <a href="#">
                                    Select the Plan
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col s4 m3">
                        <div className="card">
                            <div className="card-content">
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>


                            </div>
                            <div className="card-action">
                                <a href="#">
                                    Select the Plan
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col s4 m3">
                        <div className="card">
                            <div className="card-content">
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>
                                <p>
                                    Plan Details goes here
                                </p>


                            </div>
                            <div className="card-action">
                                <a href="#">
                                    Select the Plan
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
    )
                }
        }
    }
