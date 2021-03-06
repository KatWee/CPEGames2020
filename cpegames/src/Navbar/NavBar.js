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
import {auth} from "../firebase";

// const [isOpen, setIsOpen] = useState(false);
// const toggle = () => setIsOpen(!isOpen);
// const myStorage = localStorage;
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
          currentUser: user.email
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
      // myStorage.clear();
      this.props.history.push("/");
      this.setState({
        currentUser: null
      });
    });
  };
  render() {
    //console.log("user", auth);
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand className="mr-auto">
            {this.state.currentUser ? (
              <Link to="/admin" className="NavLink">ADMIN CPE GAMES 2020</Link>
            ) : (
              <Link to="/" className="NavLink">CPE GAMES 2020</Link>
            )}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {this.state.currentUser ? (
                <React.Fragment>
                  <NavItem>
              <NavbarText onClick={this.toggle}>Hello {this.state.currentUser}</NavbarText>
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
