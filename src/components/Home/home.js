import React, { Component } from 'react';
import 'styles/home.css';
import Header from '../header/header';

class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="main">
        <div className="text">
        <div id="main-text">
          <h1>SURAJ KUMAR</h1>
          <p>Frontend Wed Developer / Web Designer</p>
        </div>
        </div>
        </div>
      </div>
    );
  }

}

export default Home;
