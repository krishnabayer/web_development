import styles from "./footer.module.css";

export default function Footer({ completedtodos, totaldos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>completedtodos : {completedtodos}</span>
      <span className={styles.item}>totaldos : {totaldos}</span>
    </div>
  );
}
