import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Skill from './components/Skill';
import Education from './components/Education';
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">


          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/skills" component={Skill}/>
            <Route exact path="/education" component={Education}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
