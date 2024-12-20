import { useState } from "react";

const Counter = () => {
  let [incVal, setIncVal] = useState(0);
  //   let [decVal, setDecVal] = useState(0);

  const increment = () => {
    if (incVal < 20) {
      setIncVal(incVal + 1);
    } else {
      incVal = 20;
    }
  };
  const decrement = () => {
    if (incVal > 0) {
      setIncVal(incVal - 1);
    } else {
      incVal = 0;
    }
  };

  return (
    <>
      <button onClick={increment}>Add value</button>

      <button onClick={decrement}>Remove value</button>
      {/* <button onMouseOver={increment}>Add value</button>

      <button onMouseOver={decrement}>Remove value</button> */}

      <span>
        <p>{incVal}</p>
      </span>
    </>
  );
};

export default Counter;
