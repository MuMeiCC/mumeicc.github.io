import React, { useState } from 'react';
import './style/App.css';

function App() {

  const [IDs, setIDs] = useState('');
  const [results, setResults] = useState('');

  const handleInputChange = (e) => {
    setIDs(e.target.value);
  };

  return (
    <div className="body">
      <h1>叠加态随机数生成器</h1>

      <div className="input">
        <label htmlFor="IDs">把群友ID放这里（以空格分隔）</label>
        <input type="text" id="IDs" value={IDs} onChange={handleInputChange} />
      </div>
      <div className="buttons">
        <button onClick={handleRand}>抽取一个幸运群友</button>
        <button onClick={handleDel}>清除上一个抽奖记录</button>
        <button onClick={handleClear}>清除全部抽奖记录</button>
      </div>
      <hr />

      <div id="results">{results}</div>
    </div>
  );
}

export default App;
