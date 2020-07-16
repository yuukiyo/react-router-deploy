import React from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link><span className="span-margin">/</span>
        <Link to="/about">About</Link>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
      </Router>
    </div>
  );
}

export default App;
