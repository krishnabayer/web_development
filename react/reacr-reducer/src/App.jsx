import { useReducer } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + state.incrementBy };
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - state.incrementBy };
    }
    if (action.type == "incrementBy") {
      return { ...state, incrementBy: action.payload };
    }
  }

  return (
    <div>
      <h1>use reducer {state.count}</h1>
      <input
        type="text"
        value={state.incrementBy}
        onChange={(e) =>
          dispatch({ type: "incrementBy", payload: Number(e.target.value) })
        }
      />
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
}
