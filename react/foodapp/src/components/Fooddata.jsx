import Fooditem from "./Fooditem";
export default function Fooddata({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <Fooditem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
