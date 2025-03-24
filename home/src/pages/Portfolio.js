import React, { useState, useEffect } from "react";

import "../style/Portfolio.css";

const Portfolio = () => {

  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 200);
  }, []);

  return (
    <div className="page Portfolio">
      <h1 className={`title ${ showTitle ? 'visible':'hidden'}`} onTransitionEnd={() => setShowContent(true)}>Portfolio</h1>
      <div className={`content ${ showContent ? 'visible':'hidden'}`}>
        <div className="content-list">
          <h2>Genesis Code</h2>
          <div className="project-content">
            <img src="./assets/img/GenesisCode.png" className="proj-img" alt="Genesis Code"></img>
            <p className="proj-description">Genesis Code (Working Title) is the game developing by my friend and I. It is a Metroidvania game, which has a theme of code and color. For more information, 
              please go to <a href="https://mumeicc.github.io/game-dev/games">HERE</a>. </p>
          </div>
        </div>
        <div className="content-list">
          <h2>Customized Outfit of Hollow Knight</h2>
          <div className="project-content">
            <img src="./assets/img/ChthollyKnight.png" className="proj-img" alt="Chtholly Knight"></img>
            <p className="proj-description">This is a free skinset for the mod: Customize Knight of Hollow Knight. The skinset is designed based on the character: <b>Chtholly Nota Seniorious</b> in the novel: <i>What do you do at the end of the world? Are you busy? Will you save us?</i> For more information, 
            please view my <a href="https://www.bilibili.com/video/BV1o5411a7Tr/" target="_blank" rel="noopener noreferrer" className="link">VIDEO</a>. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;