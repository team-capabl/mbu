// import { useState } from "react"

function Counter() {
  // const [count, setCount] = useState(0);
  let count = 0;
  console.log('Re-rendering Without State')
  return (
    <>
      <button
        onClick={() => {
          count = count + 1;
          console.log(count);
        }}
      >
        Increment
      </button>
      <h2>The count is {count}</h2>
    </>
  );
}

export default Counter;
