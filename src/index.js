import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import routes from './routes';

render(<Router history={browserHistory}>{routes}</Router>, document.querySelector('.main'));
