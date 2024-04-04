import { useState } from "react";

// the useState is a react hook that allows functional components to manage state. It provide a way to delclare state variable and update them with in functional component.

const App = () => {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    let updatedNumber = number + 1;
    setNumber(updatedNumber);
  };
  const decrementNumber = () => {
    if (number > 0) {
      let updatedNumber = number - 1;
      setNumber(updatedNumber);
    }
  };
  const resetNumber = () => {
    let updatedNumber = 0;
    setNumber(updatedNumber);
  };

  return (
    <div className="counter_container">
      <h1>Counter App Two</h1>
      <p>{number}</p>
      <div className="buttons">
        <button onClick={incrementNumber}>Increment</button>
        <button onClick={decrementNumber}>Decrement</button>
        <button onClick={resetNumber}>Reset</button>
      </div>
    </div>
  );
};

export default App;

// jsx-> it stands for javascript XML. It allows us to write html in react(or inside js file).
// inline css -> in html -> <div style="background-color: "red">, in react->style={{ backgroundColor: "red" }}
// class is replaced by className
