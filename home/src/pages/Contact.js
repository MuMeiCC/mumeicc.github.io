import React, { useState, useEffect } from "react";

import "../style/Contact.css";

const Contact = () => {

  const contactInfo = [
    { name: "Email", content: "jiarui_chen@sfu.ca", link: "mailto:jiarui_chen@sfu.ca" },
    { name: "Website", content: "mumeicc.github.io/home", link: "https://mumeicc.github.io/home" },
    { name: "Github", content: "MuMeiCC", link: "https://github.com/MuMeiCC" },
  ]

  const socialMedia = [
    { name: "LinkedIn", content: "https://www.linkedin.com/in/jerrychen1003/", link: "https://www.linkedin.com/in/jerrychen1003/" },
    { name: "Bilibili", content: "https://space.bilibili.com/73437607", link: "https://space.bilibili.com/73437607" },
  ]

  const additionalInfo = [
    { name: "Location", value: "Burnaby, British Columbia, Canada" },
    { name: "Availability", value: "Open to any opportunities in Software Development, Front-end Development, Game Development, and related fields" },
  ];
	
  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 200);
  }, []);

  return (
    <div className="page Contact">
      <h1 className={`title ${ showTitle ? 'visible':'hidden'}`} onTransitionEnd={() => setShowContent(true)}>Contact</h1>
      <div className={`content ${ showContent ? 'visible':'hidden'}`}>
        <div className="content-list">
          <h2>Contact Information</h2>
          <ul>
            {contactInfo.map((item, index) => (
              <li key={index}>
                <strong>{item.name}:</strong>{" "}
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="link">
                  {item.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="content-list">
          <h2>Social Media</h2>
          <ul>
            {socialMedia.map((item, index) => (
              <li key={index}>
                <strong>{item.name}:</strong>{" "}
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="link">
                  {item.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="content-list">
          <h2>Additional Information</h2>
          <ul>
            {additionalInfo.map((item, index) => (
              <li key={index}>
                <strong>{item.name}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
		