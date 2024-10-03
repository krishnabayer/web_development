function handleclick() {
  return console.log("button clicked");
}

export default function Message() {
  return <button onClick={handleclick}>click me</button>;
}
