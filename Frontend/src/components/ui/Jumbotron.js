import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../../styles/ui/Jumbotron.css";

class Jumbo extends Component {
  constructor(props) {
    super(props);
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
      <Jumbotron fluid className="jumbotron-container">
        <NavLink to="/home">
          <div className="jumbotron__content">
            <div className="jumbotron__text">
              <h1>barcelona minimalista</h1>
            </div>
          </div>
        </NavLink>
      </Jumbotron>
    );
  }
}

export default Jumbo;
