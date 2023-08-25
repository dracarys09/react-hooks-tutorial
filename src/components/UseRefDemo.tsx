// A very powerful hook that is used whenever you want to
// reference a value that is not used for rendering

import { useRef, useState } from "react";

interface UseRefDemoProps {}

export const UseRefDemo = ({}: UseRefDemoProps) => {
  // NOTE: Unlike state, a ref doesn't trigger a re-render of the component

  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    // count update will trigger a new render and the updated
    // value will only be accessible in the new render
    setCount(count + 1);
    countRef.current++;

    // The below two lines will run as part of the current render
    console.log("State:", count);
    console.log("Ref:", countRef.current);
  };

  // ref values are not used in the return body of the actual component
  // It's not used for something that you are rendering
  // It's a hook that is used for values that are not needed for rendering
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
