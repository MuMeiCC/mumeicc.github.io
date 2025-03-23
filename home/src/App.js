import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style/App.css';
import Menu from './components/Menu.js';
import Top from './pages/Top.js';
import About from './pages/About.js';
import Skills from './pages/Skills.js';

const App = () => {

  const pages = [
    { path: '/', name: 'Top', element: <Top /> },
    { path: '/about', name: 'About', element: <About /> },
    { path: '/skills', name: 'Skills', element: <Skills /> }
  ]

  return (
    <Router>
      <div className='App'>
        <Menu />
        <Routes>
          {pages.map(page => (
            <Route path={page.path} element={page.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
