import { useState } from "react";
import Search from "./components/Search.jsx";

function App() {
  const [foodData, setfoodData] = useState([]);

  return (
    <div className="App">
      <Search foodData={foodData} setfoodData={setfoodData} />
      {foodData.map((food) => (
        <li>{food.title}</li>
      ))}
    </div>
  );
}

export default App;
