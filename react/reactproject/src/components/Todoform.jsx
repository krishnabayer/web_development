import { useState } from "react";
import styles from "./todoform.module.css";

export default function Todoform({ todos, settodos }) {
  const [todo, settodo] = useState({ name: "", done: false });
  function handlesubmit(e) {
    e.preventDefault();
    settodos([todo, ...todos]);
    settodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} action="" onSubmit={handlesubmit}>
      <div className={styles.inputcontainer}>
        <input
          className={styles.moderninput}
          type="text"
          value={todo.name}
          onChange={(e) => settodo({ name: e.target.value, done: false })}
          placeholder="Enter your todo..."
        />
        <button className={styles.modernbutton}>Add</button>
      </div>
    </form>
  );
}
