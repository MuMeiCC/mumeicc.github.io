import React, { useState, useEffect } from "react";

import "../style/Skills.css";

const Skills = () => {

  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 200);
  }, []);

  return (
    <div className="page Skills">
      <h1 className={`title ${ showTitle ? 'visible':'hidden'}`} onTransitionEnd={() => setShowContent(true)}>Skills</h1>
      <div className={`content ${ showContent ? 'visible':'hidden'}`}>
        <div className="skill-list">
          <h2>Programming</h2>
          <ul>
            <li><b>C++</b>: Learning since 2017, the first year of my high school, because of a national level programming competition. Familiar with C++ development and algorithms, data structures. </li>
            <li><b>Python</b>: Learning since 2020, the last year of my high school. Familiar with <b>PyTorch</b> and Machine Learning. </li>
            <li><b>JavaScript, HTML & CSS</b>: Learning since 2023 as a junior university student. Have two internship experience related to web development. Familiar with <b>ReactJS</b>. </li>
            <li><b>C#</b>: Learning since 2024 after getting my bachelor degree, using it for game development. Familiar with C# development with <b>Unity</b>. </li>
            <li><b>SQL</b>: Learned in my sophomore and junior year. Had done one related project, and one internship related to database. </li>
          </ul>
        </div>
        <div className="skill-list">
          <h2>Developer Tools</h2>
          <ul>
            <li><b>Git</b>: Having multiple projects using Git and Github for version control. </li>
            <li><b>Visual Studio</b>: Familiar with Visual Studio 2022, mainly for Unity development. </li>
            <li><b>VS Code</b>: Using VS Code since 2020, with C++, Python, JavaScript, etc. </li>
            <li><b>Unity</b>: Working with Unity for about 1 year in 2D game development. </li>
            <li><b>Docker</b>: Have experience of using Docker to containerize parallel C++ programming and ML. Will work with it in the coming Distributed System project. </li>
            <li><b>LaTex</b>: Have experience using LaTex to write report. </li>
          </ul>
        </div>
        <div className="skill-list">
          <h2>Design</h2>
          <ul>
            <li><b>Adobe Photoshop</b>: Using Photoshop for graphic design, including title screens of my videos, and a poster of my club when I was a vice president. </li>
            <li><b>Adobe Premiere</b>: As a video content creator, I use Premiere to edit my videos. </li>
            <li><b>Adobe After Effects</b>: Created visual effects for a showcase video of my club. </li>
          </ul>
        </div>
        <div className="skill-list">
          <h2>Language</h2>
          <ul>
            <li><b>Chinese (Mandarin & Southern Min)</b>: Native speaker. </li>
            <li><b>English</b>: TOEFL: 100, IELTS: 6.5. Fluent in reading, writing, speaking, and listening. </li>
            <li><b>Japanese</b>: JLPT N2 with 127/180 (Language Knowledge 42, Reading 43, Listening 42). Fluent in speaking. </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;