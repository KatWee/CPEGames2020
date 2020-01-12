import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./Login/Login";
import Navbar from "./Navbar/NavBar";
import Admin from "./user/admin";
import User from "./user/user";
import Guard from "./Guard";

ReactDOM.render(
  // <App />,
  // document.getElementById('root')
  // <BrowserRouter>
  //     <Route path="/" component={App}/>
  //     <Route path="/header" component={Header}/>
  //     <Route path="/body" component={Body}/>
  // </BrowserRouter>,document.getElementById('root')
  <BrowserRouter>
    {/* <Redirect push to="/user" /> */}
    <Route path="/" component={Navbar} />
    <Route path="/login" component={Login} />
    <Route path="/user" component={User} />
    <Route path="/admin" component={() => <Guard>{Admin}</Guard>} />
    <Route path="/admin" component={Admin} />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
