import { useState } from "react";
import Search from "./components/Search.jsx";
import Fooddata from "./components/Fooddata.jsx";
function App() {
  const [foodData, setfoodData] = useState([]);

  return (
    <div className="App">
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Fooddata foodData={foodData} />
    </div>
  );
}

export default App;
