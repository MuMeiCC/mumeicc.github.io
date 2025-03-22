import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style/App.css';
import Menu from './components/Menu.js';
import Top from './pages/Top.js';

const App = () => {

  return (
    <Router>
      <div className='App'>
        <Menu />
        <Routes>
          <Route path="/" element={<Top />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
