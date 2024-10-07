import { useState } from "react";
export default function Todoform({ todos, settodos }) {
  const [todo, settodo] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
    settodos([todo, ...todos]);
    settodo("");
  }
  return (
    <form action="" onSubmit={handlesubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}
