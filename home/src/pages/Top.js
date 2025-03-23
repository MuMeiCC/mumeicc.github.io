import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import '../style/Top.css';

const Top = () => {

  const firstLineId = 'Jiarui (Jerry) Chen';
  const secondLineId = 'MuMeiCC / ChthollistCC';
  
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const [showDescriptions, setShowDescriptions] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirstLine(true);
    }, 200);
  }, []);

  return (
    <div className='Top'>
      <div className={`avatar ${ showAvatar ? 'visible':'hidden'}`} onAnimationEnd={() => {setShowDescriptions(true)}} ></div>
      <h1 className={`id ${ showFirstLine ? 'visible':'hidden'}`} onAnimationEnd={() => setShowSecondLine(true)}>
        { firstLineId }
      </h1>
      <h1 className={`id ${ showSecondLine ? 'visible':'hidden'}`} onAnimationEnd={() => setShowAvatar(true)}>
        { secondLineId }
      </h1>
      <div className={`descriptions ${ showDescriptions ? 'visible':'hidden'}`}>
        <div className='job-title'>Software Engineer / Web Developer / Game Developer</div>
        <p className='desc-items'>Master student in Visual Computing of Simon Fraser University</p>
        <p className='desc-items'>Currently looking for a Co-op job starts in May (Summer Term)</p>
        <p className='desc-items'>Open to any opportunities in Software Development, Front-end Development, Game Development, and related fields</p>
        <p className='desc-items'>For more information, please view the <NavLink to="/about" className='nav-link'>About</NavLink> page</p>
      </div>
    </div>
  )
}

export default Top;