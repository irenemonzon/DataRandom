import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './components/auth/Auth';

// import Listuser from './components/Listusers';

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/">
          <Auth />
        </Route>
      </div>
    </Router>
  );
}

export default App;
