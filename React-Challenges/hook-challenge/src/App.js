import logo from './logo.svg';
import './App.css';

import { useState } from "react";

const App = ({ value }) => {

  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <div className='App'>
      <h1>Counter</h1>
      <span>{counter}</span>
      <button onClick={() => handleAdd()}>+1</button>
      
      <button onClick={() => handleSubstract()}>-1</button>
      
      <button onClick={() => handleReset()}>RESET</button>
      </div>
    </>

  );
};

export default App;

