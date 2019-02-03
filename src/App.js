import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Navigator from "components/Navigator";
import Home from "components/Home";
import About from "components/About";
import Skills from "components/Skills";
import Contact from "components/Contact";
import Projects from "components/Projects";
import AppInspired from "components/AppInspired";

import "styles/index.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Navigator />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <AppInspired />
      </main>
    );
  }
}

export default App;
