import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*2019-04-09*/


import * as serviceWorker from './serviceWorker';
import routes from './router';
ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
