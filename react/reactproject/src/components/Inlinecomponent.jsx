import "../css/style.css";
import styles from "./inlinecomponent.module.css";

export default function Inlinecomponent() {
  const h1_style = { color: "blue", fontSize: "33px" };
  return (
    <div>
      <h1 style={h1_style}>Inline component</h1>
      <h1 className="header">external css component</h1>
      <h2 className={styles.header}>use module</h2>
    </div>
  );
}
