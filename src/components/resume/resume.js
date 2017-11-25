import React, { Component } from 'react';
import 'styles/resume.css';
import Header from '../header/header';
import Details from '../my-details/details';

class Resume extends Component {

  render() {
    return (
      <div>
        <div className="resume-section">
          <Header />
          <div className="my-resume">
            <div className="resume-heading">
              <div className="my-name">SURAJ KUMAR</div>
              <div className="designation">Frontend Wed Developer / Web Designer</div>
            </div>
            <div className="summary">
              A focused software developer and web designer with around two years experience in a variety of
              development.Specialises in Mailer designs and coding, works daily with AngularJS and a novice Reactjs Developer.
              Understanding client requirements and communicating the progress of
              projects are core values in achieving long lasting business relationships.
            </div>
          </div>
          <div className="my-details">
            <Details />
          </div>
        </div>
      </div>
    );
  }

}

export default Resume;
