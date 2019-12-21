import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from "reactstrap";
import NavBarCss from "./NavBar.css";
import { Link } from "react-router-dom";
import auth from "../firebase/index";

// const [isOpen, setIsOpen] = useState(false);
// const toggle = () => setIsOpen(!isOpen);

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      currentUser: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        });
      }
    });
  }

  toggle = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };

  logout = e => {
    e.preventDefault();
    auth.signOut().then(response => {
      this.props.history.push("/user");
      this.setState({
        currentUser: null
      });
    });
  };
  render() {
    console.log("user", auth);
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand className="mr-auto">
            {this.state.currentUser ? (
              <Link to="/admin">CPE GAMES 2020</Link>
            ) : (
              <Link to="/user">CPE GAMES 2020</Link>
            )}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {this.state.currentUser ? (
                <React.Fragment>
                  <NavItem>
                    <NavbarText onClick={this.toggle}>Hello</NavbarText>
                  </NavItem>
                  <NavItem>
                    <Link onClick={this.logout}>Logout</Link>
                  </NavItem>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <NavItem>
                    <NavbarText>Hello CPE</NavbarText>
                  </NavItem>
                  <NavItem>
                    <Link to="/login" onClick={this.toggle}>
                      Login as ADMIN
                    </Link>
                  </NavItem>
                </React.Fragment>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
