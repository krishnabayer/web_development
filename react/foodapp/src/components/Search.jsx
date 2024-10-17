import { useState, useEffect } from "react";
import styles from "./search.module.css";

export default function Search({ foodData, setfoodData }) {
  const [query, setquery] = useState("pizza");

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "a7a9994d5dac49b19b6f05f17ab4ad9c";

  useEffect(() => {
    async function fetchFood() {
      //   console.log("use effect triggered");
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setfoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchcontainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
    </div>
  );
}
