import React, { useState } from "react";
import { Link, Navigate, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import "../../styles/components/RegisterComponent.css";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    register({ username, email, password });
  };

  //redirect if registered and logged in
  if (isAuthenticated) {
    return <Redirect to='/inform' />;
  }

  return (
    <section className='register__container'>
      <h1 className=''>Sign Up</h1>
      <p className=''>Create Your Account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Username'
            name='username'
            className='form-control'
            value={username}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            className='form-control'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            className='form-control'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' className='auth-form-button' value='Register' />
      </form>
      <p className=''>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
