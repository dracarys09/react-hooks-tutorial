// In simplest terms, state is data that changes with time
// Data is any piece of information that can change over time across renders in react

import { useState } from "react";

interface UseStateDemoProps {}

export const UseStateDemo = ({}: UseStateDemoProps) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
