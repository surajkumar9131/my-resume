import React, { Component } from 'react';
import 'styles/header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <div className="header">
        <div className="logo">
          <Link to="/">suraj kumar</Link>
        </div>
        <div className="nav-item">
          <div>
            <Link to="/about">About me</Link>
          </div>
          <div>
            <Link to="/resume">Resume</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
