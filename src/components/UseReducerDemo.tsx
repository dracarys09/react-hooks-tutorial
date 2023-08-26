import { useReducer } from "react";

interface UseReducerDemoProps {}

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

function reducer(state: State, action: Action) {
  const { type } = action;
  switch (type) {
    case "increment": {
      //   return { count: state.count + 1, error: state.error };
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum reached" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum reached" : null,
      };
    }
    default:
      return state;
  }
}

// useReducer essentially have a state object with a lot of properties and values
// for your state and then having a reducer function which takes in that state
// object along with an action that you can define in your code and based on the
// action it will do something to the state (make a copy of the state, make changes
// and returns to you the copy of the state)
export const UseReducerDemo = ({}: UseReducerDemoProps) => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  // when the dispatch is fired, it's going to send the action to the reducer function.
  // The reducer function will also get state from the useReducer hook
  return (
    <div>
      <h1>Count: {state.count}</h1>
      {state.error && <div> {state.error} </div>}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};
