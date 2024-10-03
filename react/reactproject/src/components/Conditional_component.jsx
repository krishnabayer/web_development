import Condition1 from "./Condition1";
import Condition2 from "./condition2";

export default function ConditionalComponent() {
  const display = true;
  // if (display === true) {
  //   return <Condition1 />;
  // } else {
  //   return <Condition2 />;
  // }

  let message;
  display ? (message = <h1>hi1</h1>) : (message = <h1>hi2</h1>);
  return message;
}
