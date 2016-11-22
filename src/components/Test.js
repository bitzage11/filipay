import React, { Component } from 'react';
export default class extends Component {
    render() {
        return (
            <div>
              <div>
                      <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300" rel="stylesheet" type="text/css" />
                      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
                      <div className="container">
                        <div id="Checkout" className="inline">
                          <h1>Pay Invoice</h1>
                          <div className="card-row">
                            <span className="visa" />
                            <span className="mastercard" />
                            <span className="amex" />
                            <span className="discover" />
                          </div>
                          <form>
                            <div className="form-group">
                              <label htmlFor="PaymentAmount">Payment amount</label>
                              <div className="amount-placeholder">
                                <span>$</span>
                                <span>500.00</span>
                              </div>
                            </div>
                            <div className="form-group">
                              <label or="NameOnCard">Name on card</label>
                              <input id="NameOnCard" className="form-control" type="text" maxLength={255} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="CreditCardNumber">Card number</label>
                              <input id="CreditCardNumber" className="null card-image form-control" type="text" />
                            </div>
                            <div className="expiry-date-group form-group">
                              <label htmlFor="ExpiryDate">Expiry date</label>
                              <input id="ExpiryDate" className="form-control" type="text" placeholder="MM / YY" maxLength={7} />
                            </div>
                            <div className="security-code-group form-group">
                              <label htmlFor="SecurityCode">Security code</label>
                              <div className="input-container">
                                <input id="SecurityCode" className="form-control" type="text" />
                                <i id="cvc" className="fa fa-question-circle" />
                              </div>
                              <div className="cvc-preview-container two-card hide">
                                <div className="amex-cvc-preview" />
                                <div className="visa-mc-dis-cvc-preview" />
                              </div>
                            </div>
                            <div className="zip-code-group form-group">
                              <label htmlFor="ZIPCode">ZIP/Postal code</label>
                              <div className="input-container">
                                <input id="ZIPCode" className="form-control" type="text" maxLength={10} />
                                <a tabIndex={0} role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i className="fa fa-question-circle" /></a>
                              </div>
                            </div>
                            <button id="PayButton" className="btn red btn-block btn-success submit-button" type="submit">
                              <span className="submit-button-lock" />
                              <span className="align-middle">Pay $500.00</span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>

                </div>)
        }
    }
