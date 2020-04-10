import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
// import About from './pages/About.js';
// import Nav from './components/Nav.js';
import Files from './pages/Files.js';
import ApiTest from './pages/ApiTest.js';

function App() {

  return (
    <Router>
      <div className="App">
        <Route path='/' component={HomePage} exact />
        {/* <Route path='/about' component={About} /> */}
        <Route path='/files' component={Files} />
        <Route path='/api-test' component={ApiTest} />
      </div>
    </Router>
  );
}

export default App;
