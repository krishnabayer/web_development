import styles from "./todoitem.module.css";

export default function Todoitems({ item, todos, settodos }) {
  function handledelete(item) {
    settodos(todos.filter((todo) => todo !== item));
    // console.log(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    console.log(name);
    const newtodos = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    settodos(newtodos);
    console.log(todos);
  }

  const complete_style = item.done === true ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span className={complete_style} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handledelete(item)}
            className={styles.deletebutton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
