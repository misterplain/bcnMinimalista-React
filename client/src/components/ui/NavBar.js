import React, { Component, useState, Fragment } from "react";
import { Navbar, NavbarToggler, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";
//redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "../../styles/ui/NavBar.css";

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const authLinks = (
    <NavLink
      onClick={logout}
      className='navbar__navitem auth-button'
      to='/inform'
    >
      Logout
    </NavLink>
  );

  const guestLinks = (
    <NavLink className='navbar__navitem auth-button' to='/login'>
      Login
    </NavLink>
  );

  return (
    <Navbar expand='md' sticky='top' className='navbar-container' style={{display: 'flex'}}>
      <NavbarToggler
        className='navbar__toggler fa fa-bars fa-border-none'
        onClick={toggleNavbar}
      />

      <Collapse isOpen={isOpen} navbar>
        <div className={!isOpen ? 'navbar__nav' : 'navbar__nav-collapse'} style={{flexDirection: isOpen ? 'column' : 'row'}}>
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
