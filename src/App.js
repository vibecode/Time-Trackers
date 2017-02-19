import React, { Component } from 'react';
import firebase from 'firebase';
import Dashboard from './components/Dashboard';
import firebaseConfig from './firebaseconfig';
import './App.css';
import './semantic-ui-css/components/card.css';
import './semantic-ui-css/components/button.css';
import './semantic-ui-css/components/container.css';
import './semantic-ui-css/components/form.css';
import './semantic-ui-css/components/statistic.css';
import './semantic-ui-css/components/icon.css';
import './semantic-ui-css/components/reset.css';
import './semantic-ui-css/components/site.css';

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
