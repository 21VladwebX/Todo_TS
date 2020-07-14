import React from 'react'
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2 px1">
        <a href="/" className="brand-logo">
            <i className="material-icons">done</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/">Todos</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
