import React, { Component } from "react";
import Home from "./components/content/HomeComponent";
import Inform from "./components/content/InformComponent";
import Connect from "./components/content/ConnectComponent";
import Reduce from "./components/content/ReduceComponent";
import Tech from "./components/content/TechComponent";
import Rescue from "./components/content/RescueComponent";
import Collab from "./components/content/CollabComponent";
import Jumbo from "./components/ui/Jumbotron";
import NavBar from "./components/ui/NavBar";
import { Switch, Route } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/ui/alert";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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

              <Route path='/rescue' component={Rescue} />
              <Route path='/collab' render={() => <Collab />} />
            </div>
          </Switch>
        </Provider>
      </div>
    );
  }
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default Main;
