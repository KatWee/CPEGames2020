import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,
    Route,
    Link} from 'react-router-dom'
import Header from './Header.js'
import Body from './Body.js'


ReactDOM.render(
    // <App />,
    // document.getElementById('root')
    <BrowserRouter>
        <Route path="/" component={App}/>
        <Route path="/header" component={Header}/>
        <Route path="/body" component={Body}/>
    </BrowserRouter>,document.getElementById('root')
 );
serviceWorker.unregister();
