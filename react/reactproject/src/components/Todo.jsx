import { useState } from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";
import Footer from "./Footer";

export default function Todo() {
  const [todos, settodos] = useState([]);
  const completedtodos = todos.filter((todo) => todo.done).length;
  const totaldos = todos.length;

  return (
    <div>
      <Todoform todos={todos} settodos={settodos} />
      <Todolist todos={todos} settodos={settodos} />
      <Footer completedtodos={completedtodos} totaldos={totaldos} />
    </div>
  );
}
