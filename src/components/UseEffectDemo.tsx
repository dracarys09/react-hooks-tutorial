// It's a hook from react that is used to perform side effects
// in our application. Side effects are the things happening
// as a consequence of something else

import { useEffect, useState } from "react";

interface UseEffectProps {}

export const UseEffectDemo = ({}: UseEffectProps) => {
  const [count, setCount] = useState(0);

  // side effect --> we want something to happen as a result of count changing
  // So, we are going to react to count using a side effect using useEffect hook
  useEffect(() => {
    // The code that we want to run
    // This code is guaranteed to run at least once
    console.log("The count is:", count);

    // Optional return function --> usually it is a cleanup function
    // Whenever something in the dependency array changes, the useEffect
    // hook will destroy itself and it will run this cleanup function
    // before doing so and it is going to be re-created with the new value
    return () => {
      console.log("I am being cleaned up!");
    };
  }, [count]); // The dependency array --> use effect is hooked to the 'count'

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
