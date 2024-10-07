import styles from "./todoitem.module.css";

export default function Todoitems({ item, todos, settodos }) {
  function handledelete(item) {
    settodos(todos.filter((todo) => todo !== item));
    // console.log(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        {item.name}
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
