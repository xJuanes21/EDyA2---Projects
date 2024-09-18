import { useState } from "react";

const useCounter = (value) => {

    
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

  let res = {
    counter: counter,
    handleAdd: handleAdd,
    handleReset: handleReset,
    handleSubstract: handleSubstract
  }
  return res;

}

export default useCounter;