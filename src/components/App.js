import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProfileScreen from './ProfileScreen';
import Footer from './Footer';
import from './index.css';
import store from '../store';

let App = () =>
  <Provider store={store}>
    <Router>
      <div className="App">
        <Route exact path="/profile" component={ProfileScreen} />
        <Footer />
      </div>
    </Router>
  </Provider>;

export default App;
