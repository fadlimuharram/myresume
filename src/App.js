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
import SeminarAndEvents from './components/SeminarsAndEvents';
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">


          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/skills" component={Skill}/>
            <Route exact path="/education" component={Education}/>
            <Route exact path="/seminars-and-events" component={SeminarAndEvents}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
