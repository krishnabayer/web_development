import { useEffect, useState } from "react";

export default function Fooddetails({ foodId }) {
  const [Food, setFood] = useState({});
  const [loading, setloading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a7a9994d5dac49b19b6f05f17ab4ad9c";
  useEffect(() => {
    async function fetchFooddetails() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log("receipe data is here ");
      console.log(data);
      console.log(`${URL}?apiKey=${API_KEY}`);
      setFood(data);
      setloading(false);
      // setfoodData(data.results);
    }
    fetchFooddetails();
  }, [foodId]);

  return (
    <div>
      <div>
        <h1>{Food.title}</h1>
        <img src={Food.image} alt="" />
      </div>
      <div>
        <span>
          {" "}
          <strong>⏱️ {Food.readyInMinutes} minutes </strong>{" "}
        </span>
        <span>
          <strong>Servings : {Food.servings} </strong>
        </span>
        <span>{Food.vegetarian ? "🥦 Vegeterian" : "🍗 Non - vegeterian"}</span>
      </div>
      <div>
        <h2>Instructions : </h2>
        <ol>
          {loading
            ? "Is Loading"
            : Food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))}
        </ol>
      </div>
    </div>
  );
}
