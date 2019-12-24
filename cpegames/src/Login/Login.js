import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import LoginCSS from "./Login.css";
import firebase from '../firebase'
import {withRouter} from 'react-router';


const UserRef = firebase.firestore.collection("User");
const myStorage = localStorage;

class Login extends Component {
  // componentDidMount() {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({
  //         currentUser: user
  //       })
  //     }
  //   })
  // }

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      currentUser: null,
      message: ""
    };
  }
  onChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state

    firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const UID = UserRef.where('userUID','==',response.user.uid)
        .get().then(doc => {
          doc.forEach(data =>{
            console.log("userName",data.data().UserName)
            myStorage.setItem('admin', data.data().UserName);
            console.log(myStorage.getItem('admin'))
          })
          this.props.history.push('/admin')
        })
        // this.setState({
        //   currentUser: response.user
        // })
      })
      .catch(error => {
        this.setState({
          message: error.message
        })
      })
  }

  // logout = e => {
  //   e.preventDefault()
  //   auth.signOut().then(response => {
  //     this.setState({
  //       currentUser: null
  //     })
  //   })
  // }
  render() {
    // UserRef.get().then(d =>{
    //   d.forEach(e => {
    //     console.log(e.data())
    //   })
    // })

    return (
      <Form onSubmit={this.onSubmit}>
        <h1>HELLO ADMIN</h1>
        <FormGroup row>
          <Label for="email" sm={2}>
            Email
          </Label>
          <Col sm={8}>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="cpegames2020@mail.com"
              bsSize="lg"
              onChange={this.onChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={2}>
            Password
          </Label>
          <Col sm={8}>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              bsSize="lg"
              onChange={this.onChange}
            />
          </Col>
        </FormGroup>
        <Button size="lg" color="success">
          Login
        </Button>
      </Form>
    );
  }
}

export default withRouter(Login);