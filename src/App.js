//import logo from "./logo.svg";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Work from "./components/work";
import NavBar from "./components/navBar";
import Skills from "./components/skills";
import Award from "./components/award";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="row">
            <div class="col-2 left main-wrapper">
              <NavBar />
            </div>
            <div class="col-10 right main-wrapper">
              <Switch>
                <Route
                  path="tianao-meng.github.io/about"
                  component={About}
                ></Route>
                <Route
                  path="tianao-meng.github.io/education"
                  component={Education}
                ></Route>
                <Route
                  path="tianao-meng.github.io/experience"
                  component={Experience}
                ></Route>
                <Route
                  path="tianao-meng.github.io/work"
                  component={Work}
                ></Route>
                <Route
                  path="tianao-meng.github.io/skills"
                  component={Skills}
                ></Route>
                <Route
                  path="tianao-meng.github.io/award"
                  component={Award}
                ></Route>
                <Redirect from="tianao-meng.github.io/" exact to="/about" />
                <Redirect to="tianao-meng.github.io/not-found" />
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
