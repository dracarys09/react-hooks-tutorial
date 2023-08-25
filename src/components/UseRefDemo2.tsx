import { useEffect, useRef } from "react";

interface UseRefDemo2Props {}

export const UseRefDemo2 = ({}: UseRefDemo2Props) => {
  // useRef is used to access the HTML DOM elements and
  // call functions on those elements
  const inputRef = useRef<HTMLInputElement | null>(null);

  // hooks always run after components are rendered
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // This is one the special cases where you usually use ref
  // inside the rerturn function
  return (
    <div>
      <input ref={inputRef} type='text' placeholder='Type something...' />
    </div>
  );
};
