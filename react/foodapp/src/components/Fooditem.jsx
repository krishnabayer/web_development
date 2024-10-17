import styles from "./fooditem.module.css";

export default function Fooditem({ food }) {
  return (
    <div className={styles.itemcontainer}>
      <img className={styles.itemimage} src={food.image} alt="" />
      <div className={styles.itemcontent}>
        <p className={styles.itemname}>{food.title}</p>
      </div>
      <div className={styles.buttoncontainer}>
        <button className={styles.itembutton}>View Recipe</button>
      </div>
    </div>
  );
}
