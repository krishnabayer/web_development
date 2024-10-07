import Todoitems from "./Todoitem";

export default function Todolist({ todos }) {
  return todos.map((item, index) => <Todoitems item={item} />);
}
