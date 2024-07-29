// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          {['7', '8', '9', '/'].map((value) => (
            <button key={value} onClick={() => handleClick(value)}>{value}</button>
          ))}
          {['4', '5', '6', '*'].map((value) => (
            <button key={value} onClick={() => handleClick(value)}>{value}</button>
          ))}
          {['1', '2', '3', '-'].map((value) => (
            <button key={value} onClick={() => handleClick(value)}>{value}</button>
          ))}
          {['0', '.', '=', '+'].map((value) => (
            <button key={value} onClick={() => handleClick(value)}>{value}</button>
          ))}
          <button className="clear" onClick={() => handleClick('C')}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
