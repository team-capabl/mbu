import { useState } from "react";

function CounterWithState() {
  const [count, setCount] = useState(0);
  console.log("Re-rendering");

  const someTimeConsumingFunction = async () => {
    setTimeout(() => {
      console.log("Hello")
      setCount(count + 1);
    }, 2000)
  };

  


  return (
    <>
      <button
        onClick={() => {
          someTimeConsumingFunction();
        }}
      >
        Increment
      </button>

      <button onClick={() => console.log("Clicked")}>Click Me!</button>
      <h2>The count is {count}</h2>
    </>
  );
}

export default CounterWithState;
