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
                <Route path="/about" component={About}></Route>
                <Route path="/education" component={Education}></Route>
                <Route path="/experience" component={Experience}></Route>
                <Route path="/work" component={Work}></Route>
                <Route path="/skills" component={Skills}></Route>
                <Route path="/award" component={Award}></Route>
                <Redirect from="/" exact to="/about" />
                {/* <Redirect to="/not-found" /> */}
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
