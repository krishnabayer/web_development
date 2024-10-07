import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/Conditional_component";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Inlinecomponent from "./components/Inlinecomponent";
import Outlinecomponent from "./components/Outlinecomponent";

function App() {
  return (
    <div className="App">
      {/* <Fruits /> */}
      {/* <ConditionalComponent /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <Todo /> */}
      <Inlinecomponent />
      <Outlinecomponent />
    </div>
  );
}

export default App;