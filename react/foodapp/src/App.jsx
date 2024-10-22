import { useState } from "react";
import Search from "./components/Search.jsx";
import Fooddata from "./components/Fooddata.jsx";
import Nav from "./components/Nav.jsx";
import "./app.css";
import Container from "./components/Container.jsx";
import Innercontainer from "./components/Innercontainer.jsx";
import Fooddetails from "./components/Fooddetails.jsx";
function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");

  return (
    <div className="App">
      <Nav></Nav>
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <Innercontainer>
          <Fooddata foodData={foodData} setFoodId={setFoodId} />
        </Innercontainer>
        <Innercontainer>
          <Fooddetails foodId={foodId} />
        </Innercontainer>
      </Container>
    </div>
  );
}

export default App;
// # npm create vite@4.1.0
