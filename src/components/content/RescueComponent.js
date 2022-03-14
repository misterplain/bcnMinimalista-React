import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/RescueComponent.css";

const Rescue = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col> <p className="page-title">adopt, don't shop</p>
          </Col>
        </Row>
        <Row>
        <div className="card-container-rescue">
            <div className="card-rescue">
                <a href={'https://ajuntament.barcelona.cat/benestaranimal/'} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg"/>
                <div className="card__head">CAA Compañía de Barcelona</div></a>
          </div>
          <div className="card-rescue">
            <a href={'http://www.gatsdegracia.cat/'} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg"/>
            <div className="card__head">Gats De Gràcia</div></a>
          </div>
          <div className="card-rescue">
            <a href={'https://www.eljardinetdelsgats.org/es/'} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG"/>
            <div className="card__head">El Jardinet dels Gats</div></a>
          </div>
          <div className="card-rescue">
            <a href={'https://www.altarriba.org/'} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg"/>
            <div className="card__head">Amigos de Los Animales</div></a>
          </div>
          <div className="card-rescue">
            <a href={'https://www.catshopbyadira.com/'} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg"/>
            <div className="card__head">Sede ADiRA BCN</div></a>
          </div>
          
        </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Rescue;