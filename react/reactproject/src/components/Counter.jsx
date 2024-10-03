import { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);
  const [increamentby, incrementfunc] = useState(1);

  function increase() {
    let in_ = count + increamentby;
    setcount(in_);
  }

  function decrease() {
    let de_ = count - increamentby;
    setcount(de_);
  }

  function increament() {
    incrementfunc(increamentby + 1);
  }

  function decreament() {
    incrementfunc(increamentby - 1);
  }

  return (
    <div>
      <h1>the count is {count}</h1>
      <button onClick={increase}>Increament</button>
      <button onClick={decrease}>decreament</button>

      <h1>We are increasing the increament by {increamentby}</h1>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>decreament</button>
    </div>
  );
}
