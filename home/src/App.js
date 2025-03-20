import React, {useState} from 'react';
import './assets/style/App.css';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">

      <div className={`menu-button ${isMenuOpen ? 'open':''}`} onClick={toggleMenu}>
        <div className="menu-bar bar1"></div>
        <div className="menu-bar bar2"></div>
        <div className="menu-frame"></div>
      </div>

      <div className={`menu ${isMenuOpen ? 'open':''}`}>
        <ul className="menu-list">
          <li className="menu-item active">Top</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Portfolio</li>
          <li className="menu-item">Skills</li>
          <li className="menu-item">Blog</li>
          <li className="menu-item">Contact</li>
        </ul>
      </div>

    </div>
  );
}

export default App;
