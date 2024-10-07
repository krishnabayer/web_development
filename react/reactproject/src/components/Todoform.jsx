import { useState } from "react";
import styles from "./todoform.module.css";

export default function Todoform({ todos, settodos }) {
  const [todo, settodo] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
    settodos([todo, ...todos]);
    settodo("");
  }
  return (
    <form className={styles.todoform} action="" onSubmit={handlesubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}
