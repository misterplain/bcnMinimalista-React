import React from "react";
import { HOME } from "../../shared/home";
import { Loading } from "../ui/Loading";
import { Fade, Stagger } from "react-animation-components";
import { NavLink } from "react-router-dom";
import "../../styles/components/HomeComponent.css";

const home = HOME

const Home = (props) => {
  if (props.homeLoading) {
    return (
      <div className="container-isLoading">
        <Loading />
      </div>
    );
  }
  if (props.homeErrMess) {
    return <div className="container=errMess">{props.errMess}</div>;
  }
  return (
    <div className="container-home">
      <Stagger in>
        {home.map((card) => {
          return (
            <Fade in key={card.id}>
              <NavLink to={card.link}>
                <div className="home__card-row"    style={{ backgroundImage: `url(${card.src})` }}>
                  <div className="home__card-body">
                    <p className="home__card-text"> {card.name}</p>
                    {/* <img src={card.src} alt="" className="home__card-img" /> */}
                  </div>
                </div>
              </NavLink>
            </Fade>
          );
        })}
      </Stagger>
    </div>
  );
};

export default Home;
