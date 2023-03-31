import React, { useState } from 'react';
import * as math from 'mathjs';
import './Calculator.css';

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleNumberClick = (number) => {
    setInput((prevInput) => prevInput + number);
  };

  const handleOperatorClick = (operator) => {
    if (input !== '') {
      setInput((prevInput) => prevInput + operator);
    }
  };

  const handleClearClick = () => {
    setResult(0);
    setInput('');
  };

  const handleEqualsClick = () => {
    try {
      const mathResult = math.evaluate(input);
      setResult(mathResult);
      setInput('');
    } catch (error) {
      setResult('Error');
      setInput('');
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <p>Result: {result}</p>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <br />
      <button onClick={() => handleNumberClick('1')}>1</button>
      <button onClick={() => handleNumberClick('2')}>2</button>
      <button onClick={() => handleNumberClick('3')}>3</button>
      <button onClick={() => handleOperatorClick('+')}>+</button>
      <br />
      <button onClick={() => handleNumberClick('4')}>4</button>
      <button onClick={() => handleNumberClick('5')}>5</button>
      <button onClick={() => handleNumberClick('6')}>6</button>
      <button onClick={() => handleOperatorClick('-')}>-</button>
      <br />
      <button onClick={() => handleNumberClick('7')}>7</button>
      <button onClick={() => handleNumberClick('8')}>8</button>
      <button onClick={() => handleNumberClick('9')}>9</button>
      <button onClick={() => handleOperatorClick('*')}>*</button>
      <br />
      <button onClick={() => handleClearClick()}>C</button>
      <button onClick={() => handleNumberClick('0')}>0</button>
      <button onClick={() => handleEqualsClick()}>=</button>
      <button onClick={() => handleOperatorClick('/')}>/</button>
    </div>
  );
}

export default Calculator;
