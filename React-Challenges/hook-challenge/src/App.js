import logo from './logo.svg';
import './App.css';

import  useCounter  from "./hooks/useCounter";

const App = () => {
  const value = 7
  const {handleAdd, handleReset, handleSubstract, counter} = useCounter(value)
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

