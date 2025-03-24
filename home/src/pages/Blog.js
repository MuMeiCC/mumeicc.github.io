import React, { useState, useEffect } from "react";

import "../style/Blog.css";

const Blog = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 200);
  }, []);

  return (
    <div className="page Blog">
      <h1 className={`title ${showTitle ? "visible" : "hidden"}`} onTransitionEnd={() => setShowContent(true)}>Blog</h1>
      <div className={`content ${showContent ? "visible" : "hidden"}`}>
        <div className="content-list">
          <h2>2025</h2>
          <ul>
            <li className="blog"><b>2025/03/22</b>: Today I got my N2 certificate! I am so happy that I passed the exam. It is uncredible that I didn't study much for it and get a 127/180 score. </li>
          </ul>
        </div>
        <div className="content-list">
          <h2>2024</h2>
          <ul>
            <li className="blog"><b>2024/08/19</b>: Arrived at Vancouver. It was very sad to say Goodbye with my friends in university. But the new place is exciting for me. </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Blog;