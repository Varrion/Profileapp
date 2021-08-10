import logo from './logo.svg';
import './App.css';
import SingleCard from './components/SingleCard';
import React, { Component } from "react";
import FirstCard from './components/FirstCard';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Switch>
        <FirstCard  />
        </Switch>
      
      </Router>

    </div>
  );
}

export default App;
