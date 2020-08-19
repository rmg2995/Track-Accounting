import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Services from "./components/Services";
import Resources from "./components/Resources";
import clientPortal from "./components/clientPortal";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Track Accounting LLC</h1>
        <div>
          <p>Phone</p>
          <h3>786-282-7941</h3>
        </div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/services" render={() => <Services />} />
          <Route exact path="/resources" render={() => <Resources />} />
          <Route exact path="/client-portal" render={() => <clientPortal />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </Switch>
      </div>
    );
  }
}

export default App;
