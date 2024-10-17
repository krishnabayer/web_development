import { useState } from "react";
import Search from "./components/Search.jsx";
import Fooddata from "./components/Fooddata.jsx";
import Nav from "./components/Nav.jsx";
import "./app.css";

function App() {
  const [foodData, setfoodData] = useState([]);

  return (
    <div className="App">
      <Nav></Nav>
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Fooddata foodData={foodData} />
    </div>
  );
}

export default App;
