import { useState } from "react";
import Todoitems from "./Todoitem";

export default function Todo() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  function handlesubmit(e) {
    e.preventDefault();
    settodos([todo, ...todos]);
    settodo("");
  }
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />
        <button>add</button>
        {todos.map((item, index) => (
          <Todoitems item={item} />
        ))}
      </form>
    </div>
  );
}
