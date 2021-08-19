import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <Router>
    <Header />
    <App />,
  </Router>,
  document.getElementById('root')
);
