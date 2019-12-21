import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import Login from './Login/Login';
import Navbar from './Navbar/NavBar';
import Admin from './admin/admin'
import User from './user/user'


ReactDOM.render(
    // <App />,
    // document.getElementById('root')
    // <BrowserRouter>
    //     <Route path="/" component={App}/>
    //     <Route path="/header" component={Header}/>
    //     <Route path="/body" component={Body}/>
    // </BrowserRouter>,document.getElementById('root')
    <BrowserRouter>
        <Redirect from="/" to="/user"/>
        <Route path="/" component={Navbar}/>
        <Route path="/login" component={Login}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/user" component={User}/>
    </BrowserRouter>,document.getElementById('root')
 );
serviceWorker.unregister();