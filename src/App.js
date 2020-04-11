import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import HomePage from './pages/HomePage.js';
import Files from './pages/Files.js';
import ApiTest from './pages/ApiTest.js';

function App() {

  return (
    <div className="App">
      <Router>
        <HomePage path='/' />
        <Files path='/files' />
        <ApiTest path='/api-test' />
      </Router>
    </div>
  );
}

export default App;
