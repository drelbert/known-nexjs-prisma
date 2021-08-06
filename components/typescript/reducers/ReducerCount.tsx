import React, { useReducer } from "react";

type CounterAction = {
  type: "INCREMENT" | "DECREMENT" | "SET";
  payload?: number;
};

type CounterState = {
  value: number;
};

const reducer = function reduce(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "SET":
      return { value: action.payload || 0 };
    default:
      return state;
  }
};

const Counter = function counter() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const reset = () => dispatch({ type: "SET", payload: 0 });
  const set = (n: number) => dispatch({ type: "SET", payload: n });

  return (
    <main>
      <h2>Days Since Last Launch</h2>
      <p className="count">0</p>
      <section>
        <button onClick={increment}>Add</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Subtract</button>
      </section>
    </main>
  );
};

const ReducerCounter = function () {
  <Counter />;
};

export default ReducerCounter;
