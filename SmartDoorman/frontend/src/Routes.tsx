import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/qr-code" component={App} />
    </Router>
  )
}

export default Routes