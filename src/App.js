import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import Dashboard from './components/Dashboard';
import firebaseConfig from './firebaseconfig';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig());
  }

  render() {
    return (
        <Dashboard />
    );
  }
}

export default App;
