require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Home from '../components/Home/home';
import About from '../components/about/about';
import Resume from '../components/resume/resume';
import Contact from '../components/contact/contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class AppComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/resume" component={Resume}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
