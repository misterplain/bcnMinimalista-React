import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../styles/3-HomeComponent.css";
import { Loading } from "./13-LoadingComponent";
import { Fade, Stagger } from "react-animation-components";

function RenderHomeCards({ cardList, isLoading, errMess }) {
  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (errMess) {
    return (
      <div className="container">
        <div className="row">{errMess}</div>
      </div>
    );
  }
  return (
    <Stagger in>
      {cardList.map((card) => {
        return (
          <Fade in key={card.id}>
            <div className="">
              <NavLink to={card.link}>
                <Row>
                  <Col className="carousel-inner">
                    <img
                      src={card.src}
                      alt=""
                      className="home__img-fluid"
                    ></img>
                    <div className="carousel-caption background text">
                      <p className="carousel-caption-p">{card.name}</p>
                    </div>
                  </Col>
                </Row>
              </NavLink>
            </div>
          </Fade>
        );
      })}
    </Stagger>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }
  render() {
    return (
      <Container fluid>
        <RenderHomeCards
          cardList={this.props.homeList}
          isLoading={this.props.homeLoading}
          errMess={this.props.homeErrMess}
        />
      </Container>
    );
  }
}

export default Home;
