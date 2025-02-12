import React, { useState } from "react";
import "./Counterapp.css"; 

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Counter Value: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrement</button> 
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CounterApp;
