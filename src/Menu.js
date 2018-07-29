import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <HashRouter>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link js-scroll-trigger" to="/">home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link js-scroll-trigger" to="/education">Education</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link js-scroll-trigger" to="/seminars-and-events">Seminars and Events</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link js-scroll-trigger" to="/skills">Skills</NavLink>
            </li>

          </ul>
      </HashRouter>

    );
  }
}

export default Menu;
