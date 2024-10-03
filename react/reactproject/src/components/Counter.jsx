import { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);

  function increase() {
    setcount(count + 1);
  }

  function decrease() {
    setcount(count - 1);
  }

  return (
    <div>
      <h1>the count is {count}</h1>
      <button onClick={increase}>Increament</button>
      <button onClick={decrease}>decreament</button>
    </div>
  );
}
