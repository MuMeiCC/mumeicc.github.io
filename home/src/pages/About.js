import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";

import '../style/About.css';

const About = () => {

  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  // const [introText, setIntroText] = useState('');

  // useEffect(() => {
  //   const lang = document.documentElement.lang || 'en';
  //   fetch(`./assets/text/self-intro_${lang}.txt`)
  //     .then(response => response.text())
  //     .then(text => setIntroText(text))
  //     .catch(error => console.error('Error loading self-intro text:', error));
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 200);
  }, []);

  return (
    <div className='About'>
      <h1 className={`title ${ showTitle ? 'visible':'hidden'}`} onTransitionEnd={() => setShowContent(true)}>About Me</h1>
      <div className={`content ${ showContent ? 'visible':'hidden'}`}>
        <div className="info-container">
          <div className="img-container">
            <img className="photo" src="./assets/img/photo.jpg" alt="My friends and me" />
            <p className="photo-description">A photo of two of my friends and me, taken at Owakudani, Hakone, Japan</p>
          </div>
          <div className="self-intro">
            <p>I am currently a student of <b>Master of Visual Computing</b> in <b>Simon Fraser University</b>, pursuing image processing and machine learning. </p>
            <p>I am a skillful programmer in web development, software development and game development, expertise in programming languages including <b>C++</b>, <b>Python</b>, <b>JavaScript</b>, and <b>C#</b>. </p>
            <p>I expertise in 3 languages: <b>English</b>, <b>Chinese</b>, <b>Japanese</b>. </p>
            <p>I am interested in game design and development. Now, collaborating with a friend, I'm designing and developing our own indie game using <b>Unity</b> Engine. </p>
            <p>I am a designer who interested in 2D graphic design and have experience in <b>Adobe Photoshop and Premiere</b>. I'm also a content creator in BiliBili, an online video platform in China. </p>
            <p>As a gamer, I mainly interested in Metroidvania, RPG, Strategy and Sandbox games. My favorite games are: Hollow Knight, ENDER LILIES, Minecraft, Oxygen Not Included, etc. </p>
            <p>As a chess player, I play Chess and Shogi. </p>
          </div>
        </div>
        <p className="navi">For more information about my skills and experience, please go to <NavLink to="/skills" className='nav-link'>Skills</NavLink> and <NavLink to="/portfolio" className='nav-link'>Portfolio</NavLink> pages.</p>
      </div>
    </div>
  )
}

export default About;