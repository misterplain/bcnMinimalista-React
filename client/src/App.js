import React, { Component, useEffect } from "react";
//routing
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, NavLink } from "react-router-dom";
//components
import Home from "./components/pages/HomeComponent";
import Inform from "./components/pages/InformComponent";
import Connect from "./components/pages/ConnectComponent";
import Reduce from "./components/pages/ReduceComponent";
import Tech from "./components/pages/TechComponent";
import Rescue from "./components/pages/RescueComponent";
import Collab from "./components/pages/CollabComponent";
import Favorites from './components/pages/FavoritesComponent';
import Jumbo from "./components/ui/Jumbotron";
import NavBar from "./components/ui/NavBar";
import Login from "./components/pages/LoginUser";
import Register from "./components/pages/RegisterUser";
//app wide style
import "./App.css";
import { Button } from "@mui/material";
//redux
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/ui/alert";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  //when the state updates, this will be a constant loop unless we give it a separate parameter, empty parameters
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Jumbo />
        <Alert />
        <Switch>
          <Route exact path='/' default render={() => <Home />} />
          {/* <Route path="/home" default render={() => <Home />} /> */}
          <div>
            <NavBar />
            <Route path='/inform' render={() => <Inform />} />
            <Route path='/connect' render={() => <Connect />} />
            <Route path='/reduce' render={() => <Reduce />} />
            <Route path='/tech' render={() => <Tech />} />
            <Route path='/rescue' render={() => <Rescue />} />
            <Route path='/collab' render={() => <Collab />} />
            <Route path='/favorites' render={() => <Favorites />} />
            <Route path='/login' render={() => <Login />} />
            <Route path='/register' render={() => <Register />} />
          </div>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
