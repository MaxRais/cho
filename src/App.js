import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Start from './StartComponent';
import Choose from './ChooseComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Chores Reminder!</h1>
        </header>
        <p className="App-intro">
          Remind your roommates to do chores!
        </p>
          <Router>
              <div>
                  <Route path="/" exact={true} render={() => {
                  return (
                      <ul>
                          <li><Link to="/start">Get Started</Link></li>
                          <li><Link to="/choose">Choose a Chore</Link></li>
                      </ul>
                  )}}
                  />
                  <Route path="/start" component={Start} />
                  <Route path="/choose" component={Choose} />
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
