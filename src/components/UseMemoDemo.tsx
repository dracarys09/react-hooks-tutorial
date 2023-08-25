import { useMemo, useState } from "react";

interface UseMemoDemoProps {}

// This is a very large array of objects
const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});

export const UseMemoDemo = ({}: UseMemoDemoProps) => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // useMemo is a hook that memoizes a value and returns the same
  // value until any of the dependencies in the dependency array
  // changes
  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      {/* Updating count will result in re-render of the entire component */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
