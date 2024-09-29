const name = "Krishna";

function displaymessage() {
  return "wow";
}

function Hello({ name, message }) {
  console.log({ name, message });
  //   const { name, message } = prop;
  return (
    <div>
      {/* <h1>Hello from component, {displaymessage().toUpperCase()}! </h1>{" "} */}
      <h1>
        {message}, {name}!
      </h1>
    </div>
  );
}

export default Hello;
