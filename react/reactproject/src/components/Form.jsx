import { useState } from "react";

export default function Form() {
  const [name, setname] = useState({ firstname: "", lastname: "" });

  return (
    <form>
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setname({ ...name, firstname: e.target.value })}
      />
      <br />
      <br />

      <input
        type="text"
        value={name.lastname}
        onChange={(e) => setname({ ...name, lastname: e.target.value })}
      />

      <h3>
        your name is : {name.firstname} {name.lastname}
      </h3>

      <button onClick={(e) => e.preventDefault()}>add</button>
    </form>
  );
}
