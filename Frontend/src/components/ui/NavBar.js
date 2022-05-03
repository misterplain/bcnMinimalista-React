import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/ui/NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    //binds the function to component, when togglenav is called the this keyword will refer corectly to component
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <Navbar expand="sm" sticky="top" className="navbar-container">
        <NavbarToggler
          onClick={this.toggleNav}
          className="navbar__toggler fa-bars"
        />

        <Collapse isOpen={this.state.isNavOpen} navbar>
          <div className="navbar__nav">
            <NavLink className="navbar__navitem" to="/inform">
              inform
            </NavLink>

            <NavLink className="navbar__navitem" to="/connect">
              connect
            </NavLink>

            <NavLink className="navbar__navitem" to="/reduce">
              reduce
            </NavLink>

            <NavLink className="navbar__navitem" to="/tech">
              tech and tools
            </NavLink>
            <NavLink className="navbar__navitem" to="/rescue">
              rescue
            </NavLink>

            <NavLink className="navbar__navitemv" to="/collab">
              collab
            </NavLink>
          </div>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
