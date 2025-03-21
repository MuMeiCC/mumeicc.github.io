import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style/App.css';
import Menu from './components/Menu.js';

const App = () => {

  return (
    <Router>
      <div className='App'>
        <Menu />
      </div>
    </Router>
  );
}

export default App;
