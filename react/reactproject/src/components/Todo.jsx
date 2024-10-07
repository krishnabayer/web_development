import { useState } from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";

export default function Todo() {
  const [todos, settodos] = useState([]);

  return (
    <div>
      <Todoform todos={todos} settodos={settodos} />
      <Todolist todos={todos} settodos={settodos} />
    </div>
  );
}
