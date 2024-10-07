import Todoitems from "./Todoitem";
import styles from "./todolist.module.css";

export default function Todolist({ todos, settodos }) {
  const sortedtodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedtodos.map((item, index) => (
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
