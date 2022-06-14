import React, { Component, useState, Fragment } from "react";
import { Navbar, NavbarToggler, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";
//redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "../../styles/ui/NavBar.css";

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  // constructor(props) {
  //   super(props);
  //   //binds the function to component, when togglenav is called the this keyword will refer corectly to component
  //   this.toggleNav = this.toggleNav.bind(this);
  //   this.state = {
  //     isNavOpen: false,
  //   };
  // }

  // toggleNav() {
  //   this.setState({
  //     isNavOpen: !this.state.isNavOpen,
  //   });
  // }

  //reintegrate toggle nav functionality
  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <h6>example guest links</h6>
      </li>
    </ul>
  );

  return (
    <Navbar expand='sm' sticky='top' className='navbar-container'>
      <NavbarToggler className='navbar__toggler fa-bars' />

      <Collapse navbar>
        <div className='navbar__nav'>
          <NavLink className='navbar__navitem' to='/inform'>
            inform
          </NavLink>

          <NavLink className='navbar__navitem' to='/connect'>
            connect
          </NavLink>

          <NavLink className='navbar__navitem' to='/reduce'>
            reduce
          </NavLink>

          <NavLink className='navbar__navitem' to='/tech'>
            tech and tools
          </NavLink>
          <NavLink className='navbar__navitem' to='/rescue'>
            rescue
          </NavLink>

          <NavLink className='navbar__navitem' to='/collab'>
            collab
          </NavLink>
          <NavLink className='navbar__navitem' to='/login'>
            Login
          </NavLink>
          <NavLink className='navbar__navitem' to='/register'>
            Register
          </NavLink>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, { logout })(NavBar);
