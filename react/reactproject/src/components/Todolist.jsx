import Todoitems from "./Todoitem";
import styles from "./todolist.module.css";

export default function Todolist({ todos, settodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item, index) => (
        <Todoitems
          key={item.name}
          item={item}
          todos={todos}
          settodos={settodos}
        />
      ))}
    </div>
  );
}
