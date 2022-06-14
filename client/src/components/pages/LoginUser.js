import React, { useState} from "react";
import { Link, Redirect } from "react-router-dom";
//redux
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import "../../styles/components/LoginComponent.css";

const Login = ({login, isAuthenticated}) => {

  const [formData, setFormData] = useState({

    email: "",
    password: "",
  });

  const {  email, password } = formData;

  const onChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    login(  email, password );
  };

  //redirect if logged in
  if(isAuthenticated){
    return <Redirect to="/inform" />
  }

  return (
    <section className='login__container'>
      <h1>Login</h1>
      <form  onSubmit={e=>onSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            className='form-control'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'

            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button type='submit' className='auth-form-button'>
          Submit
        </button>
      </form>
      <p className="">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});
export default connect(mapStateToProps, {login})(Login);
